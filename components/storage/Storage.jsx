import { useState } from "react";
import { View, Text, Alert } from "react-native";
import * as SQLite from 'expo-sqlite';
import * as DB from '../../constants/database';
import CustomButton from "../common/CustomButton/CustomButton";
import { SIZES } from "../../constants";
import * as DocumentPicker from 'expo-document-picker';
import { parse } from 'papaparse';
import { validateKey, validateSongStyle } from "../../utils/validations";

import styles from "./Storage.style";

export default function Storage() {
  const [db, setDb] = useState(SQLite.openDatabase(DB.DATABASE_NAME));
  const [transactionCount, setTransactionCount] = useState(0);

  const handleImportSongs = async () => {
    const { type, uri } = await DocumentPicker.getDocumentAsync();

    if (type === 'success') {
      const response = await fetch(uri);
      const csvString = await response.text();
      const parsedData = parse(csvString, { header: true }).data;

      // TODO: fix this. It's not returning. It's hard to tell the error to the user.
      db.transaction(
        (tx) => {
          for (let i = 0; i < parsedData.length; i++) {
            const { ID, TITLE, ARTIST, KEY, BPM, STYLE, OBSERVATION } = parsedData[i];

            if (!ID || !TITLE || !ARTIST || !KEY || !BPM || !STYLE) {
              console.log('Missing data in songs.csv');
              break;
            }

            if (!validateKey(KEY)) {
              console.log('Invalid key in songs.csv');
              break;
            }

            if (!validateSongStyle(STYLE)) {
              console.log('Invalid song style in songs.csv');
              break;
            }

            tx.executeSql(DB.insertSongWithId, [ID, TITLE, ARTIST, KEY, BPM, STYLE, OBSERVATION]);
          }
        },
        (error) => {
          alert(`Failed to insert songs.\n\n${error.message}`);
        },
        () => {
          setTransactionCount(transactionCount + 1);
          alert('Songs inserted successfully.');
        },
      );
    }
  };

  const handleImportTransitions = async () => {
    const { type, uri } = await DocumentPicker.getDocumentAsync();

    if (type === 'success') {
      const response = await fetch(uri);
      const csvString = await response.text();
      const parsedData = parse(csvString, { header: true }).data;

      db.transaction(
        (tx) => {
          parsedData.forEach((transition) => {
            const { ID, SONGFROM, SONGTO, OUTRO, INTRO, OBSERVATION } = transition;

            if (!ID || !SONGFROM || !SONGTO || !OUTRO || !INTRO) {
              console.log('Missing data in transitions.csv');
              return;
            }

            tx.executeSql(DB.insertTransitionWithId, [ID, SONGFROM, SONGTO, OUTRO, INTRO, OBSERVATION]);
          });
        },
        (error) => {
          alert(`Failed to insert transitions.\n\n${error.message}`);
        },
        () => {
          setTransactionCount(transactionCount + 1)
          alert('Transitions inserted successfully');
        },
      );
    }
  };

  const handleExportStorage = async () => {
    await Sharing.shareAsync(FileSystem.documentDirectory + `SQLite/${DB.DATABASE_NAME}`);
  };

  const clearStorage = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(DB.deleteTransitionsQuery);
        tx.executeSql(DB.deleteSongsQuery);
      },
      (error) => {
        alert('Failed to clear storage');
      },
      () => {
        setTransactionCount(transactionCount + 1)
        alert('Storage cleared successfully');
      },
    );
  };

  const showConfirmationDialog = async () => {
    Alert.alert('Clear storage', 'Are you sure you want to clear your whole storage?', [
      { text: 'No', onPress: () => null, style: 'cancel' },
      { text: 'Yes', onPress: () => clearStorage()},
    ]);
  };

  return (
    <View style={{ paddingHorizontal: SIZES.small }}>
      <Text style={styles.title}>Importing</Text>
      <Text>Use it to import songs and transitions from CSV files.</Text>
      <Text>You need to first upload the songs.csv. If it is uploaded successfully, you will be able to upload the transitions.csv file too.</Text>
      <CustomButton label="Import songs" handlePress={handleImportSongs} />
      <CustomButton label="Import transitions" handlePress={handleImportTransitions} />
      
      <View style={styles.infoBox}>
        <Text style={styles.title}>Exporting</Text>
        <Text>Export the SQLite database so you can check visualise it with an external tool.</Text>
        <CustomButton label="Export storage" handlePress={handleExportStorage} />
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.title}>Clearing</Text>
        <Text>Deletes all content from the database, all songs and all transitions.</Text>
        <CustomButton label="Clear storage" handlePress={showConfirmationDialog} />
      </View>
    </View>
  );
}

import { useState } from "react";
import { View, Text, Alert } from "react-native";
import * as SQLite from 'expo-sqlite';
import * as DB from '../../database/database';
import CustomButton from "../common/CustomButton/CustomButton";
import { SIZES } from "../../constants";

export default function Storage() {
  const [db, setDb] = useState(SQLite.openDatabase(DB.DATABASE_NAME));
  const [transactionCount, setTransactionCount] = useState(0);

  const handleImportStorage = async () => {
    alert('Not implemented yet :(');
  };

  const handleExportStorage = async () => {
    DB.exportDb();
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
      <CustomButton label="Import storage" handlePress={handleImportStorage} />
      <CustomButton label="Export storage" handlePress={handleExportStorage} />
      <CustomButton label="Clear storage" handlePress={showConfirmationDialog} />
    </View>
  );
}

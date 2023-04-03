import { View, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import * as SQLite from 'expo-sqlite';
import CustomButton from "../common/CustomButton/CustomButton";
import { COLORS, SIZES } from "../../constants";
import * as DB from "../../database/database";
import SongSearch from "./SongSearch";

import styles from "./NewTransition.style";
/*
  transition: {
    songFrom: string;
    songTo: string;
    exitInfo: string;
    entryInfo: string;
    observation?: string;
*/

const initialTransitionState = { songFrom: '', songTo: '', outro: '', intro: '', observation: '' };

export default function NewTransition() {
  const router = useRouter();

  const [db, setDb] = useState(SQLite.openDatabase(DB.DATABASE_NAME));
  const [newTransition, setNewTransition] = useState(initialTransitionState);
  const [transactionCount, setTransactionCount] = useState(0);

  const handleFieldChange = (fieldName) => (text) => {
    setNewTransition({ ...newTransition, [fieldName]: text });
  }

  const handleSelectSongFrom = (songId) => {
    setNewTransition({ ...newTransition, songFrom: songId });
  }

  const handleSelectSongTo = (songId) => {
    setNewTransition({ ...newTransition, songTo: songId });
  }

  const handleSuccessInsertion = () => {
    alert('Transition inserted successfully');
    setNewTransition(initialTransitionState);
    router.push('/index');
  }

  const handleFailedInsertion = (tx, error) => {
    console.log('Failed insertion transition', error);
  }

  const handleSubmit = async () => {
    if (!newTransition.songFrom || !newTransition.songTo || !newTransition.outro || !newTransition.intro) {
      alert('Please fill all fields');
      return;
    }

    db.transaction(
      (tx) => {
        tx.executeSql(
          DB.insertNewTransitionQuery,
          [newTransition.songFrom, newTransition.songTo, newTransition.outro, newTransition.intro, newTransition.observation],
          handleSuccessInsertion,
          handleFailedInsertion,
        );
      },
      null,
      () => setTransactionCount(transactionCount + 1),
    );
  };

  return (
    <View style={{ flex: 1, paddingLeft: SIZES.small, paddingRight: SIZES.small }}>
      <View style={[styles.formRowTwoFields, { zIndex: 10 }]}>
        <SongSearch
          placeholder="Search for a song to mix out"
          onSelectSong={handleSelectSongFrom}
        />
        <TextInput
          style={styles.infoInput}
          placeholderTextColor={COLORS.gray}
          value={newTransition.outro}
          onChangeText={handleFieldChange('outro')}
          placeholder="Outro"
        />
      </View>

      <View style={[styles.formRowTwoFields, { zIndex: 8 }]}>
        <SongSearch
          placeholder="Search for a song to mix in"
          onSelectSong={handleSelectSongTo}
        />
        <TextInput
          style={styles.infoInput}
          placeholderTextColor={COLORS.gray}
          value={newTransition.intro}
          onChangeText={handleFieldChange('intro')}
          placeholder="Intro"
        />
      </View>

      <View style={[styles.formRow, { zIndex: 1 }]}>
        <TextInput
          style={styles.formInput}
          placeholderTextColor={COLORS.gray}
          value={newTransition.observation}
          onChangeText={handleFieldChange('observation')}
          placeholder="Observation (optional)"
        />
      </View>

      <CustomButton label="Create song" handlePress={handleSubmit} />
    </View>
  );
}
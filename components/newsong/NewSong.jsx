import { View, Text, TextInput } from "react-native";
import { COLORS, icons, SIZES, SONG_STYLES_DROPDOWN } from "../../constants";
import { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import * as SQLite from 'expo-sqlite';
import styles from "./NewSong.style";
import CustomButton from "../common/CustomButton/CustomButton";
import * as DB from "../../constants/database";
import { useRouter } from "expo-router";
import { validateKey } from "../../utils/validations";

const initialSongState = { title: '', artist: '', key: '', bpm: '', observation: '' };

export default function NewTransition() {
  const router = useRouter();
  const [newSong, setNewSong] = useState(initialSongState);
  const [items, setItems] = useState(SONG_STYLES_DROPDOWN);
  const [style, setStyle] = useState(null);
  const [open, setOpen] = useState(false);
  const [db, setDb] = useState(SQLite.openDatabase(DB.DATABASE_NAME));
  const [transactionCount, setTransactionCount] = useState(0);

  const handleSuccessInsertion = () => {
    alert('Song inserted successfully');
    setNewSong(initialSongState);
    setStyle(null);
    router.push('/mysongs');
  }

  const handleFailedInsertion = () => {
    console.log('Failed insertion');
  }

  const handleSubmit = async () => {
    if (!newSong.title || !newSong.artist || !newSong.key || !newSong.bpm || !style) {
      alert('Please fill all fields');
      return;
    }

    if (!validateKey(newSong.key)) {
      alert('Invalid key');
      return;
    }

    const song = { ...newSong, style };
    db.transaction(
      (tx) => {
        tx.executeSql(
          DB.insertNewSongQuery,
          [song.title, song.artist, song.key, song.bpm, song.style, song.observation],
          handleSuccessInsertion,
          handleFailedInsertion,
        );
      },
      null,
      () => setTransactionCount(transactionCount + 1),
    );
  };

  const handleFieldChange = (fieldName) => (text) => {
    setNewSong({ ...newSong, [fieldName]: text });
  }

  return (
    <View style={{ paddingLeft: SIZES.small, paddingRight: SIZES.small }}>
      <View style={styles.formRow}>
        <TextInput
          style={styles.formInput}
          value={newSong.title}
          placeholderTextColor={COLORS.gray}
          onChangeText={handleFieldChange('title')}
          placeholder="Title"
        />
      </View>
      <View style={styles.formRow}>
        <TextInput
          style={styles.formInput}
          value={newSong.artist}
          placeholderTextColor={COLORS.gray}
          onChangeText={handleFieldChange('artist')}
          placeholder="Artist"
        />
      </View>
      <View style={styles.formRowTwoFields}>
        <TextInput
          style={styles.halfFormInput}
          placeholderTextColor={COLORS.gray}
          value={newSong.key}
          autoCapitalize="characters"
          onChangeText={handleFieldChange('key')}
          placeholder="Key"
        />
        <TextInput
          style={styles.halfFormInput}
          placeholderTextColor={COLORS.gray}
          value={newSong.bpm}
          onChangeText={handleFieldChange('bpm')}
          placeholder="BPM"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formRow}>
        <TextInput
          style={styles.formInput}
          placeholderTextColor={COLORS.gray}
          value={newSong.observation}
          onChangeText={handleFieldChange('observation')}
          placeholder="Observation (optional)"
        />
      </View>
      <View style={styles.formRow}>
        <DropDownPicker
          style={styles.dropdown}
          placeholder="Select a song style"
          placeholderStyle={{
            color: COLORS.gray,
          }}
          open={open}
          value={style}
          items={items}
          setItems={setItems}
          setValue={setStyle}
          setOpen={setOpen}
          listMode="MODAL"
        />
      </View>
      <CustomButton label="Create song" handlePress={handleSubmit} />
    </View>
  );
}
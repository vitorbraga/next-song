import { View, Text, TextInput } from "react-native";
import { COLORS, icons, SIZES, SONG_STYLES_DROPDOWN } from "../../constants";
import { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';

import styles from "./NewSong.style";
import SubmitButton from "../common/SubmitButton/SubmitButton";
// import * as DB from "../../database/database";

export default function NewTransition() {
  const [newSong, setNewSong] = useState({ title: '', artist: '', key: '', bpm: '', observation: '' });
  const [items, setItems] = useState(SONG_STYLES_DROPDOWN);
  const [style, setStyle] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    if (!newSong.title || !newSong.artist || !newSong.key || !newSong.bpm || !style) {
      alert('Please fill all fields');
      return;
    }

    console.log('Vai inserir no banco de dados');

    const song = { ...newSong, style };
    // await DB.insertNewSong(song);

    console.log('inseriu teoricamente');
  };

  const handleFieldChange = (fieldName) => (text) => {
    setNewSong({ ...newSong, [fieldName]: text });
  }

  return (
    <View style={{ paddingLeft: SIZES.small, paddingRight: SIZES.small, backgroundColor: 'yellow' }}>
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
      <SubmitButton label="Create song" handlePress={handleSubmit} />
    </View>
  );
}
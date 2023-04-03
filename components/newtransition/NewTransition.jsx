import { View, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import SubmitButton from "../common/SubmitButton/SubmitButton";
import { COLORS, SIZES } from "../../constants";

import styles from "./NewTransition.style";
/*
  transition: {
    songFrom: string;
    songTo: string;
    exitInfo: string;
    entryInfo: string;
    observation?: string;
*/

export default function NewSong() {
  const [newTransition, setNewTransition] = useState({ songFrom: '', songTo: '', exitInfo: '', entryInfo: '', observation: '' });

  const handleFieldChange = (fieldName) => (text) => {
    setNewTransition({ ...newTransition, [fieldName]: text });
  }

  const handleSubmit = async () => {
    if (!newTransition.songFrom || !newTransition.songTo || !newTransition.exitInfo || !newTransition.entryInfo) {
      alert('Please fill all fields');
      return;
    }

    console.log('Vai inserir no banco de dados', newTransition);

    // await DB.insertNewSong(song);

    console.log('inseriu teoricamente');
  };

  return (
    <View style={{ paddingLeft: SIZES.small, paddingRight: SIZES.small, backgroundColor: 'yellow' }}>
      <View style={styles.formRowTwoFields}>
        <TextInput
          style={styles.songFormInput}
          placeholderTextColor={COLORS.gray}
          value={newTransition.songFrom}
          onChangeText={handleFieldChange('songFrom')}
          placeholder="Song From"
        />
        <TextInput
          style={styles.infoFormInput}
          placeholderTextColor={COLORS.gray}
          value={newTransition.exitInfo}
          onChangeText={handleFieldChange('exitInfo')}
          placeholder="EI"
        />
      </View>

      <View style={styles.formRowTwoFields}>
        <TextInput
          style={styles.songFormInput}
          placeholderTextColor={COLORS.gray}
          value={newTransition.songTo}
          onChangeText={handleFieldChange('songTo')}
          placeholder="Song To"
        />
        <TextInput
          style={styles.infoFormInput}
          placeholderTextColor={COLORS.gray}
          value={newTransition.entryInfo}
          onChangeText={handleFieldChange('entryInfo')}
          placeholder="EI"
        />
      </View>

      <View style={styles.formRow}>
        <TextInput
          style={styles.formInput}
          placeholderTextColor={COLORS.gray}
          value={newTransition.observation}
          onChangeText={handleFieldChange('observation')}
          placeholder="Observation (optional)"
        />
      </View>

      <SubmitButton label="Create song" handlePress={handleSubmit} />
    </View>
  );
}
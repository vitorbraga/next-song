import { View, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import CustomButton from "../common/CustomButton/CustomButton";
import { COLORS, SIZES } from "../../constants";

import styles from "./NewTransition.style";
import SongSearch from "./SongSearch";
/*
  transition: {
    songFrom: string;
    songTo: string;
    exitInfo: string;
    entryInfo: string;
    observation?: string;
*/

export default function NewTransition() {
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
    <View style={{ flex: 1, paddingLeft: SIZES.small, paddingRight: SIZES.small }}>
      <View style={styles.formRowTwoFields}>
        <SongSearch placeholder="Search for a song to mix out" zIndex={11} />
        <TextInput
          style={styles.infoFormInput}
          placeholderTextColor={COLORS.gray}
          value={newTransition.exitInfo}
          onChangeText={handleFieldChange('exitInfo')}
          placeholder="EI"
        />
      </View>

      <View style={styles.formRowTwoFields}>
        <SongSearch placeholder="Search for a song to mix in" zIndex={10} />
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

      <CustomButton label="Create song" handlePress={handleSubmit} />
    </View>
  );
}
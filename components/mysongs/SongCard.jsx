import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import Key from "../common/Key/Key";
import SongStyle from "../common/SongStyle/SongStyle";
import Bpm from "../common/Bpm/Bpm";

import styles from "./SongCard.style";

export default function SongCard({ song }) {
  const { observation } = song;
  const [showObservation, setShowObservation] = useState(false);

  return (
    <TouchableOpacity onPress={()=> setShowObservation(!showObservation)} activeOpacity={0.5}>
      <View style={[styles.songCard, observation && styles.cardObservation ]}>
        <View style={styles.topBox}>
          <Text style={styles.title} numberOfLines={1}>
            {song.title}
          </Text>
          <View style={styles.metricsWrapper}>
            <Bpm bpm={song.bpm} />
            <Key songKey={song.key} />
          </View>
        </View>
        <View style={styles.bottomBox}>
          <Text style={styles.artist} numberOfLines={1}>
            {song.artist}
          </Text>
          <SongStyle songStyle={song.style} />
        </View>
        {showObservation && observation && (
          <View style={styles.observationContainer}>
            <Text style={styles.observation}>{observation}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

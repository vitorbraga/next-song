import { View, Text } from "react-native";

import Key from "../common/Key/Key";
import SongStyle from "../common/SongStyle/SongStyle";
import Bpm from "../common/Bpm/Bpm";

import styles from "./SongCard.style";

export default function SongCard({ song }) {
  return (
    <View style={styles.songCard}>
      <View style={styles.topBox}>
        <Text style={styles.title} numberOfLines={1}>{song.title}</Text>
        <View style={styles.metricsWrapper}>
          <Bpm bpm={song.bpm} />
          <Key songKey={song.key} />
        </View>
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.artist} numberOfLines={1}>{song.artist}</Text>
        <SongStyle songStyle={song.style} />
      </View>
    </View>
  );
}
import { View, Text } from "react-native";
import { SongStyle, Key } from "../transitions/TransitionCard";

import styles from "./SongCard.style";

export default function SongCard({ song }) {
  return (
    <View style={styles.songCard}>
      <View style={styles.leftBox}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
      <View style={styles.rightBox}>
        <View style={styles.rightTopBox}>
          <Text style={styles.bpm}>{song.bpm}</Text>
          <Key songKey={song.key} />
        </View>
        <View style={styles.rightBottomBox}>
          <SongStyle songStyle={song.style} />
        </View>
      </View>
    </View>
  );
}
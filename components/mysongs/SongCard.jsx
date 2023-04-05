import { View, Text } from "react-native";

import Key from "../common/Key/Key";
import SongStyle from "../common/SongStyle/SongStyle";
import Bpm from "../common/Bpm/Bpm";

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
          <Bpm bpm={song.bpm} />
          <Key songKey={song.key} />
        </View>
        <View style={styles.rightBottomBox}>
          <SongStyle songStyle={song.style} />
        </View>
      </View>
    </View>
  );
}
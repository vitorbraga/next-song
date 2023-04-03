import { View, Text } from "react-native";

import styles from "./SongCard.style";

export default function SongCard({ song }) {
  return (
    <View style={styles.songCard}>
      <View style={styles.leftBox}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
      <View style={styles.rightBox}>
        <View>
          <View style={styles.metricsBox}>
            <Text style={styles.bpm}>{song.bpm}</Text>
            <Text style={styles.key}>{song.key}</Text>
          </View>
          <Text style={styles.songStyle}>{song.style}</Text>
        </View>
      </View>
    </View>
  );
}
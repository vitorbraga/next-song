import { View, Text } from "react-native";

import Key from "../common/Key/Key";
import SongStyle from "../common/SongStyle/SongStyle";
import Bpm from "../common/Bpm/Bpm";

import styles from "./TransitionCard.style";

export default function TransitionCard({ transition }) {
  return (
    <View style={styles.transitionCard}>
      <View style={styles.outroSongContainer}>
        <View style={styles.topBox}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title} numberOfLines={1}>{transition.songFrom_title}</Text>
            <Text style={styles.mixInfo}>({transition.outro})</Text>
          </View>
          <View style={styles.metricsWrapper}>
            <Bpm bpm={transition.songFrom_bpm} />
            <Key songKey={transition.songFrom_key} />
          </View>
        </View>
        <View style={styles.bottomBox}>
          <Text style={styles.artist} numberOfLines={1}>{transition.songFrom_artist}</Text>
          <SongStyle songStyle={transition.songFrom_style} />
        </View>
      </View>

      <View style={styles.introSongContainer}>
        <View style={styles.topBox}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title} numberOfLines={1}>{transition.songTo_title}</Text>
            <Text style={styles.mixInfo}>({transition.intro})</Text>
          </View>
          <View style={styles.metricsWrapper}>
            <Bpm bpm={transition.songFrom_bpm} />
            <Key songKey={transition.songFrom_key} />
          </View>
        </View>
        <View style={styles.bottomBox}>
          <Text style={styles.artist} numberOfLines={1}>{transition.songFrom_artist}</Text>
          <SongStyle songStyle={transition.songFrom_style} />
        </View>
      </View>
    </View>
  );
}
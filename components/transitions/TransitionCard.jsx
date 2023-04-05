import { View, Text } from "react-native";

import Key from "../common/Key/Key";
import SongStyle from "../common/SongStyle/SongStyle";
import Bpm from "../common/Bpm/Bpm";

import styles from "./TransitionCard.style";

export default function TransitionCard({ transition }) {
  return (
    <View style={styles.transitionCard}>
      <View style={styles.topBox}>
        <View style={styles.leftBox}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{transition.songFrom_title}</Text>
            <Text style={styles.mixInfo}>({transition.outro})</Text>
          </View>
          <Text style={styles.artist}>{transition.songFrom_artist}</Text>
        </View>
        <View style={styles.rightBox}>
          <View style={styles.rightTopBox}>
            <Bpm bpm={transition.songFrom_bpm} />
            <Key songKey={transition.songFrom_key} />
          </View>
          <View style={styles.rightBottomBox}>
            <SongStyle songStyle={transition.songFrom_style} />
          </View>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <View style={styles.leftBox}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{transition.songTo_title}</Text>
            <Text style={styles.mixInfo}>({transition.intro})</Text>
          </View>
          <Text style={styles.artist}>{transition.songTo_artist}</Text>
        </View>
        <View style={styles.rightBox}>
          <View style={styles.rightTopBox}>
            <Bpm bpm={transition.songTo_bpm} />
            <Key songKey={transition.songTo_key} />
          </View>
          <View style={styles.rightBottomBox}>
            <SongStyle songStyle={transition.songTo_style} />
          </View>
        </View>
      </View>
    </View>
  );
}
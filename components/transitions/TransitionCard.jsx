import { View, Text } from "react-native";
import { KEY_COLOR_MAP, SONG_STYLES_COLOR_MAP } from "../../constants/songs";

import styles from "./TransitionCard.style";

// TODO: Move this to a separate file
export function SongStyle({ songStyle }) {
  const { backgroundColor, color } = SONG_STYLES_COLOR_MAP[songStyle];
  return (
    <Text
      style={[styles.songStyle, { backgroundColor, color }]}
      numberOfLines={1}
    >
      {songStyle}
    </Text>
  );
}

// TODO: Move this to a separate file
export function Key({ songKey }) {
  const { backgroundColor, color } = KEY_COLOR_MAP[songKey];
  return (
    <Text style={[styles.key, { backgroundColor, color }]}>{songKey}</Text>
  );
}

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
            <Text style={styles.bpm}>{transition.songFrom_bpm}</Text>
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
            <Text style={styles.bpm}>{transition.songTo_bpm}</Text>
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
import { View, Text } from "react-native";

import styles from "./TransitionCard.style";

// {
//   "intro": "S3",
//   "outro": "S1",
//   "songFrom_artist": "Artists 1",
//   "songFrom_bpm": 123,
//   "songFrom_key": "12A",
//   "songFrom_observation": "",
//   "songFrom_style": "Techno",
//   "songFrom_title": "Teste 1",
//   "songTo_artist": "Artists 2",
//   "songTo_bpm": 123,
//   "songTo_key": "10A",
//   "songTo_observation": "",
//   "songTo_style": "Techno",
//   "songTo_title": "Teste 3",
//   "transition_id": 1,
//   "transition_observation": ""
// }

export default function TransitionCard({ transition }) {
  return (
    <View style={styles.transitionCard}>
      <View style={styles.topBox}>
        <View style={styles.leftBox}>
          <Text style={styles.artist}>{transition.songFrom_artist}</Text>
          <Text style={styles.title}>{transition.songFrom_title} ({transition.outro})</Text>
        </View>
        <View style={styles.rightBox}>
          <View style={styles.rightTopBox}>
            <Text style={styles.bpm}>{transition.songFrom_bpm}</Text>
            <Text style={styles.key}>{transition.songFrom_key}</Text>
          </View>
          <View style={styles.rightBottomBox}>
            <Text style={styles.style}>{transition.songFrom_style}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <View style={styles.leftBox}>
          <Text style={styles.artist}>{transition.songTo_artist}</Text>
          <Text style={styles.title}>{transition.songTo_title} ({transition.intro})</Text>
        </View>
        <View style={styles.rightBox}>
          <View style={styles.rightTopBox}>
            <Text style={styles.bpm}>{transition.songTo_bpm}</Text>
            <Text style={styles.key}>{transition.songTo_key}</Text>
          </View>
          <View style={styles.rightBottomBox}>
            <Text style={styles.style}>{transition.songTo_style}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
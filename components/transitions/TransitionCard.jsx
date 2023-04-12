import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import Key from "../common/Key/Key";
import SongStyle from "../common/SongStyle/SongStyle";
import Bpm from "../common/Bpm/Bpm";

import styles from "./TransitionCard.style";

export default function TransitionCard({ transition }) {
  const { transition_observation: observation } = transition;
  const [showObservation, setShowObservation] = useState(false);

  return (
    <TouchableOpacity onPress={()=> setShowObservation(!showObservation)} activeOpacity={0.5}>
      <View style={[styles.transitionCard, observation && styles.cardObservation ]}>
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
              <Bpm bpm={transition.songTo_bpm} />
              <Key songKey={transition.songTo_key} />
            </View>
          </View>
          <View style={styles.bottomBox}>
            <Text style={styles.artist} numberOfLines={1}>{transition.songTo_artist}</Text>
            <SongStyle songStyle={transition.songTo_style} />
          </View>
        </View>

        {showObservation && observation && (
          <View style={styles.observationContainer}>
            <Text style={styles.observation}>{transition.transition_observation}</Text>
          </View>
        )}
      </View>

    </TouchableOpacity>
  );
}
import { Text } from "react-native";

import styles from "./Bpm.style";

export default function Bpm({ bpm }) {
  return (
    <Text style={styles.bpm}>{bpm}</Text>
  );
}

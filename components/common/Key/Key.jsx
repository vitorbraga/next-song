import { Text } from "react-native";
import { KEY_COLOR_MAP } from "../../../constants/songs";

import styles from "./Key.style";

export default function Key({ songKey }) {
  const { backgroundColor, color } = KEY_COLOR_MAP[songKey] || KEY_COLOR_MAP.Default;

  return (
    <Text style={[styles.key, { backgroundColor, color }]}>{songKey}</Text>
  );
}

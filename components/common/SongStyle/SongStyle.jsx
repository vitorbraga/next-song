import { Text } from "react-native";
import { SONG_STYLES_COLOR_MAP } from "../../../constants/songs";

import styles from "./SongStyle.style";

export default function SongStyle({ songStyle }) {
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

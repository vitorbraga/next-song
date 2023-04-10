import { POSSIBLE_KEYS, POSSIBLE_SONG_STYLES } from "../constants/songs";

export function validateKey(key) {
  return POSSIBLE_KEYS.includes(key);
}

export function validateSongStyle(songStyle) {
  return POSSIBLE_SONG_STYLES.includes(songStyle);
}
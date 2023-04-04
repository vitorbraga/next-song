import { POSSIBLE_KEYS } from "../constants/songs";

export function validateKey(key) {
  return POSSIBLE_KEYS.includes(key);
}
import { Image, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants";

import styles from "./SubmitButton.style";

const SubmitButton = ({ label, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
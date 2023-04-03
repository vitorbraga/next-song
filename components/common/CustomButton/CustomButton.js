import { Image, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants";

import styles from "./CustomButton.style";

const CustomButton = ({ label, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
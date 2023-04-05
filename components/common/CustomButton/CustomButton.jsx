import { Image, Text, TouchableOpacity } from "react-native";

import styles from "./CustomButton.style";

const CustomButton = ({ label, handlePress, variant }) => {
  return (
    <TouchableOpacity style={[styles.btnContainer, styles[variant]]} onPress={handlePress}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
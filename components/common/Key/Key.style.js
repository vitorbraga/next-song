import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  key: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    height: SIZES.large,
    paddingHorizontal: SIZES.xxxSmall,
    overflow: "hidden",
    borderRadius: SIZES.xxxSmall,
    borderColor: COLORS.gray,
  }
});

export default styles;

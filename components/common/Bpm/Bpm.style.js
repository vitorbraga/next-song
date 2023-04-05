import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  bpm: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: '#333',
    marginRight: SIZES.xSmall,
    paddingHorizontal: SIZES.xxxSmall,
    height: SIZES.large,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.gray1,
    borderRadius: SIZES.xxxSmall,
    overflow: "hidden",
  },
});

export default styles;

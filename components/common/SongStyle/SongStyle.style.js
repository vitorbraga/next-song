import { StyleSheet } from "react-native";

import { FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  songStyle: {
    fontFamily: FONT.medium,
    alignSelf: "flex-end",
    paddingHorizontal: SIZES.xxxSmall,
    borderRadius: SIZES.xxxSmall,
    overflow: "hidden",
  }
});

export default styles;

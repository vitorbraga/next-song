import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.large,
  },
  btnText: {
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
  tertiary: {
    backgroundColor: COLORS.tertiary,
  },
});

export default styles;

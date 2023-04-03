import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  formRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  formRowTwoFields: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: SIZES.large,
  },
  formInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.xxSmall,
    borderWidth : 1,
  },
  songFormInput: {
    fontFamily: FONT.regular,
    width: "76%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    borderWidth : 1,
    borderRadius: SIZES.xxSmall,
  },
  infoInput: {
    fontFamily: FONT.regular,
    width: "20%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    borderWidth : 1,
    borderRadius: SIZES.xxSmall,
  },
  dropdown: {
    backgroundColor: COLORS.lightWhite,
  },
});

export default styles;

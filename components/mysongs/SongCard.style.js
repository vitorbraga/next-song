import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  songCard: {
    width: "100%",
    height: 80,
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: SIZES.xxSmall,
    marginBottom: SIZES.small,
    borderWidth : 1,
  },
  leftBox: {
    width: "65%",
    // borderWidth : 1,
    flexDirection: "column",
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  artist: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  rightBox: {
    width: "30%",
    // borderWidth : 1,
    flexDirection: "column",
  },
  metricsBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  bpm: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  key: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  songStyle: {
    fontFamily: FONT.medium,
    alignSelf: "flex-end",
  }
});

export default styles;

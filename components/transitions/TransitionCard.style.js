import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  transitionCard: {
    width: "100%",
    height: 120,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    flexDirection: "column",
    alignItems: "center",
    // paddingHorizontal: SIZES.xxSmall,
    marginBottom: SIZES.small,
    borderWidth : 1,
    borderColor : COLORS.gray
  },
  topBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "50%",
  },
  bottomBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "50%",
    borderTopWidth: 1,
    borderTopColor: COLORS.gray,
  },
  leftBox: {
    width: "68%",
    // borderWidth : 1,
    flexDirection: "column",
  },
  rightBox: {
    width: "30%",
    // borderWidth : 1,
    flexDirection: "column",
  },
  rightTopBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  rightBottomBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
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
  metricsBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  bpm: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  key: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  info: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  songStyle: {
    fontFamily: FONT.medium,
    alignSelf: "flex-end",
  }
});

export default styles;

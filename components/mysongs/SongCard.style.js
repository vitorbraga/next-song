import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  songCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 80,
    borderColor: COLORS.gray1,
    borderWidth : 1,
    paddingHorizontal: SIZES.xxSmall,
    marginBottom: SIZES.small,
    borderRadius: SIZES.xSmall,
  },
  leftBox: {
    width: "68%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  rightBox: {
    width: "30%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  rightTopBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
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
  mixInfo: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginLeft: SIZES.xxxSmall,
  },
  artist: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.gray0,
  },
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

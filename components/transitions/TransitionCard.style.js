import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  transitionCard: {
    width: "100%",
    height: 140,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: SIZES.xxSmall,
    marginBottom: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.gray1
  },
  topBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "50%",
    paddingVertical: SIZES.xxxSmall,
  },
  bottomBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "50%",
    borderTopWidth: 1,
    borderTopColor: COLORS.gray1,
    paddingVertical: SIZES.xxxSmall,
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
  titleWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
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
  key: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    height: SIZES.large,
    paddingHorizontal: SIZES.xxxSmall,
    overflow: "hidden",
    borderRadius: SIZES.xxxSmall,
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
    paddingHorizontal: SIZES.xxxSmall,
    borderRadius: SIZES.xxxSmall,
    overflow: "hidden",
  }
});

export default styles;

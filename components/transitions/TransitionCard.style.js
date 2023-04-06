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
  outroSongContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    height: "50%",
    paddingVertical: SIZES.xxxSmall,
  },
  topBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  metricsWrapper: {
    flexDirection: "row",
  },
  introSongContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    height: "50%",
    borderTopWidth: 1,
    borderTopColor: COLORS.gray1,
    paddingVertical: SIZES.xxxSmall,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "65%",
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
    overflow: 'hidden',
    maxWidth: '60%',
  },
  info: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    borderWidth: 1,
    borderColor: COLORS.gray,
  }
});

export default styles;

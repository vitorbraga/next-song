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
  },
  topBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "50%",
  },
  bottomBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "50%",
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

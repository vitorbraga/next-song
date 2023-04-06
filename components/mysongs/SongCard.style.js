import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  songCard: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    height: 70,
    borderColor: COLORS.gray1,
    borderWidth : 1,
    paddingHorizontal: SIZES.xxSmall,
    paddingVertical: SIZES.xxSmall,
    marginBottom: SIZES.small,
    borderRadius: SIZES.xSmall,
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
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    maxWidth: "65%",
  },
  artist: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.gray0,
    maxWidth: '60%',
  },
});

export default styles;

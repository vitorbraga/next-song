import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  transitionCard: {
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: SIZES.xxSmall,
    marginBottom: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.gray1,
  },
  cardObservation: {
    borderColor: '#436499',
  },
  outroSongContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    minHeight: 60,
    paddingVertical: SIZES.xxSmall,
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
    minHeight: 60,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray1,
    paddingVertical: SIZES.xxSmall,
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
  },
  observationContainer: {
    flexDirection: "column",
    width: "100%",
    minHeight: 30,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray1,
    paddingVertical: SIZES.xxSmall,
    paddingHorizontal: SIZES.xxSmall,
  },
  observation: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray0,
    fontStyle: "italic",
  },
});

export default styles;

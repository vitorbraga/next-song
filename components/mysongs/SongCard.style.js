import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  songCard: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    borderColor: COLORS.gray1,
    borderWidth : 1,
    paddingHorizontal: SIZES.xxSmall,
    paddingVertical: SIZES.xxSmall,
    marginBottom: SIZES.small,
    borderRadius: SIZES.xSmall,
  },
  cardObservation: {
    borderColor: '#436499',
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
  observationContainer: {
    flexDirection: "column",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: COLORS.gray1,
    paddingVertical: SIZES.xxxSmall,
    paddingTop: SIZES.xxSmall,
    paddingHorizontal: SIZES.xxxSmall,
    marginTop: SIZES.xSmall,
  },
  observation: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray0,
    fontStyle: "italic",
  },
});

export default styles;

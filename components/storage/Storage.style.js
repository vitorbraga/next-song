import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  viewContainer: {
    width: "76%",
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    marginBottom: SIZES.xxxSmall,
    marginTop: SIZES.xxSmall,
  },
  infoBox: {
    width: "100%",
    borderColor: COLORS.gray1,
    borderTopWidth: 1,
    marginTop: SIZES.large,
  },
  suggestionListContainer: {
    backgroundColor: COLORS.lightWhite,
  },
  suggestionListText: {
    padding: 10,
    color: "#8f3c96",
  },
});

export default styles;

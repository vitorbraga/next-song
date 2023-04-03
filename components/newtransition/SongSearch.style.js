import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  viewContainer: {
    width: "76%",
  },
  container: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    borderWidth : 1,
    borderRadius: SIZES.xxSmall,
    backgroundColor: COLORS.lightWhite,
  },
  inputContainer: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.xxSmall,
  },
  suggestionListContainer: {
    backgroundColor: COLORS.lightWhite,
  },
  suggestionListText: {
    padding: 10,
    color: '#8f3c96',
  }
});

export default styles;

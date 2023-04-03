import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  viewContainer: {
    width: "76%",
  },
  formRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  formRowTwoFields: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: SIZES.large,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  formInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.xxSmall,
    borderWidth : 1,
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

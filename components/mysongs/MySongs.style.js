import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  statusBox: {
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.medium,
  },
  messageText: {
    fontSize: SIZES.medium,
    color: COLORS.tertiary,
  },
  errorText: {
    fontSize: SIZES.medium,
    color: COLORS.errorRed,
  },
  songsContainer: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.small,
  },
  numberSongs: {
    fontSize: SIZES.medium,
    marginBottom: SIZES.small,
    color: COLORS.gray0,
  }
});

export default styles;

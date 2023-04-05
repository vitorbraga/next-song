import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
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
});

export default styles;

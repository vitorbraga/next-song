import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    height: 50,
    width: '100%',
    borderRadius: SIZES.xxxSmall,
    marginTop: SIZES.large,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
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
  numberTransitions: {
    fontSize: SIZES.small,
    marginBottom: SIZES.small,
    marginLeft: SIZES.xxxSmall,
    color: COLORS.gray0,
  }
});

export default styles;

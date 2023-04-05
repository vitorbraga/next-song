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
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.xxSmall,
    borderWidth : 1,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
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
});

export default styles;

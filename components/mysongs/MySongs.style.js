import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
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
  songsContainer: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.small,
  },
  numberSongs: {
    fontSize: SIZES.small,
    marginBottom: SIZES.small,
    marginLeft: SIZES.xxxSmall,
    color: COLORS.gray0,
  }
});

export default styles;

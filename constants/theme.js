const COLORS = {
  primary: "#344955",
  secondary: "#f9aa33",
  tertiary: "#4a6572",

  gray0: "#666666",
  gray1: "#BBBBBB",
  gray: "#83829A",
  lightGray: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",

  errorRed: "#ed4337",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xxxSmall: 4,
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };

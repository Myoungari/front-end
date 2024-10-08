const deviceSizes = {
  mobile: 450,
  tablet: 1024,
};

export const Theme = {
  colors: {
    WHITE: "#FFFFFF",
    BLACK: "#232323",
    Neutral600: "#545454",
    Neutral500: "#6B7280",
    Neutral400: "#76777E",
    Neutral300: "#A8A8A8",
    Neutral200: "#C1C1C1",
    Neutral100: "#E7E7E7",
    Neutral50: "#F5F5F5",
    Primary300: "#006BCE",
    Primary200: "#027CEC",
    Primary100: "#B3DBF8",
    Primary50: "#F7FBFF",
    Sub500: "#00BD40",
    Sub400: "#36E347",
    Sub300: "#56E965",
    Sub200: "#9FFBA8",
    Sub100: "#D4FFDC",
    Sub50: "#EAFFEE",
    SubR400: "#FF453A",
    SubR300: "#FFB4B0",
    SubR200: "#FFCCC9",
    SubR100: "#FFE4E3",
    SubR50: "#FFF4F3",
  },
  device: {
    mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
    tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
  },
};

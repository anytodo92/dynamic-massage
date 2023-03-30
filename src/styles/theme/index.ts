import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  maxWidth: 1340     ,
  fonts: {
    open_sans: "Open Sans",
    poppins: "Poppins",
  },
  colors: {
    spinnerBase: "#0000ff",

    black: "#000000",
    black_primary: "#5c5c5c",

    gray_primary: "#0000007f",
    red_primary: "#ee4141",
    green_primary: "#3cc74a",

    blue_primary: "#2686bc",
    blue_secondary: "#1677A8",
    blue_third: "#2F8BB9",
    
    white: "#ffffff",
    white_primary: "#ffffff9f",
    
  },
  breakpoints: {
    mobile: "320px",
    mobile_sm: "375px",
    mobile_md: "420px",
    tablet: "480px",
    tablet_sm: "570px",
    tablet_md: "660px",
    laptop: "768px",
    desktop: "1024px",
    desktop_lg: "1280px",
    desktop_ml: "1440px",
    desktop_xl: "1920px",
  },
  zIndexes: {
    headerBar: 100,
    text: 20,
    main_layout: 80,
    footer_layout: 70,
    hover_mask: 10,
    full_menu: 90,
  },
  margins: {
    primary: 25,
    secondary: 15,
  },
};

export default theme;

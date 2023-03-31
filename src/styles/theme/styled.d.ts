import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    maxWidth: number;
    fonts: {
      poppins: string;
      open_sans: string;
    };

    colors: {
      spinnerBase: string;
      
      black: string;
      black_primary: string;
      
      white: string;
      white_primary: string;
      
      gray_primary: string;
      gray_secondary: string;
      gray_third: string;

      green_primary: string;

      blue_primary: string;
      blue_secondary: string;
      blue_third: string;
      
      red_primary: string;
    };

    breakpoints: {
      mobile: string;
      mobile_sm: string;
      mobile_md: string;
      tablet: string;
      tablet_md: string;
      tablet_sm: string;
      laptop: string;
      desktop: string;
      desktop_lg: string;
      desktop_ml: string;
      desktop_xl: string;
    };

    zIndexes: {
      headerBar: number;
      text: number;
      hover_mask: number;
      full_menu: number;
      main_layout: number;
      footer_layout: number;
    };

    margins: {
      primary: number;
      secondary: number;
    };
  }
}
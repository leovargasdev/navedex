import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      black: string;
      gray: string;
      onyx: string;
      red: string;
    };

    fonts: {
      regular: string;
      semiBold: string;
    };
  }
}

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      bluePantone: string;
      mango: string;
      stroke: string;
      
      background: string;
      header: string;

      text: string;
      text2: string;
    }
  }
}

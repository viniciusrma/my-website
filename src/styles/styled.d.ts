import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      bluePantone: string;
      mango: string;
      stroke: string;
      header: string;      
      background: string;
      text: string;
      text2: string;
    }
  }
}
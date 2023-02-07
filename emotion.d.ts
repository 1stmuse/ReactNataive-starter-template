import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      green: string;
      border: string;
      white: string;
      background: string;
    };
  }
}

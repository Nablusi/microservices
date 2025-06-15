
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary:string;
      text: string;
      hoverText: string;
      background: string;
    };
  }
}

export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff4081',
    background: '#F3EEE6',
    text: '#333',
    hoverText: "#F9632A"
  },
  //   fonts: {
  //     main: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  //   },
  //   spacing: (factor: number) => `${factor * 8}px`,
};
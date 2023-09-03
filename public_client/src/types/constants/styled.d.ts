import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: { // 반응형 기기 변환점
      small: string;
      medium: string;
      large: string;
    };
    color: {
      text: string;
      background: string;
      main: string;
      sub: string;
      point: string;
    };
  }
}
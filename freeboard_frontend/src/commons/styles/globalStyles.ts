import { css } from "@emotion/react";
import "antd/dist/antd.css";

export const globalStyles = css`
  body {
    margin: 0;
    box-sizing: border-box;
    background-color: white;
  }

  @font-face {
    font-family: "myFont";
    src: url("/fonts/scifibit.ttf");
  }
`;

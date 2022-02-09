import { css } from "styled-components";
import BREAKPOINTS, { breakpointSizes } from "./breakpoints";

const base = 16;

export const rem = (px) => `${px / base}rem`;

const { xsmall } = breakpointSizes;

export const fluidSize = (min, max) => {
  const scale = max - min;
  return `calc(${rem(min)} + ${scale} * ((100vw - ${xsmall}px) / 640))`;
};

// Responsive font size (vw) to support heading text mask
// animation - ensures text isn't clipped on small screens
const xsmallScreens = css`
  font-size: 8vw;
  line-height: 9.5vw;
`;

export const styles = {
  h1: css`
    ${xsmallScreens}

    font-size: ${fluidSize(80, 100)};
    line-height: ${fluidSize(80, 100)};

    ${BREAKPOINTS.min.small`
      font-size: ${rem(90)};
      line-height: ${rem(100)};
    `}

    ${BREAKPOINTS.min.medium`
      font-size: ${rem(100)};
      line-height: ${rem(100)};
    `}

    ${BREAKPOINTS.min.large`
      font-size: ${rem(120)};
      line-height: ${rem(115)};
    `}
  `,
  h2: css`
    ${xsmallScreens}

    ${BREAKPOINTS.min.xxsmall`
      font-size: ${rem(33)};
      line-height: ${rem(37)};
    `}

    ${BREAKPOINTS.min.xsmall`
      font-size: ${fluidSize(33, 40)};
      line-height: ${fluidSize(37, 50)};
    `}

    ${BREAKPOINTS.min.large`
      font-size: ${rem(40)};
      line-height: ${rem(50)};
    `}
  `,
  h3: css`
    font-size: 7vw;
    line-height: 8vw;

    ${BREAKPOINTS.min.xxsmall`
      font-size: ${rem(29)};
      line-height: ${rem(35)};
    `}
  `,
  h4: css`
    font-size: ${rem(38)};
    line-height: ${rem(38)};
  `,
  h5: css`
    font-size: ${rem(16)};
    line-height: ${rem(26)};
    letter-spacing: 0.5px;
  `,
  h6: css`
    font-size: ${rem(18)};
    line-height: ${rem(20)};
    margin-bottom: 10px;
  `,
  p: css`
    font-size: ${rem(17)};
    line-height: ${rem(25)};
  `,
  xsmall: css`
    font-size: ${rem(12)};
    line-height: ${rem(18)};
  `,
  small: css`
    font-size: ${rem(14)};
    line-height: ${rem(20)};
  `,
  medium: css`
    font-size: ${rem(33)};
    line-height: ${rem(60)};
  `,
  large: css`
    font-size: ${rem(44)};
    line-height: ${rem(50)};
  `,
  button: css`
    font-size: ${rem(13)};
    line-height: ${rem(14)};
    letter-spacing: ${rem(1.18)};
    text-transform: uppercase;

    ${BREAKPOINTS.min.xsmall`
      font-size: ${rem(11)};
      line-height: ${rem(12)};
      letter-spacing: ${rem(1)};
    `}
  `,
  buttonLarge: css`
    font-size: ${rem(18)};
    line-height: ${rem(20)};
    letter-spacing: ${rem(0)};
  `,
};

export default styles;

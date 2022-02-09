import { css } from 'styled-components';

export const breakpointSizes = {
  xxsmall: 414,
  xsmall: 640,
  small: 768,
  xmedium: 896,
  medium: 1024,
  large: 1280,
  xlarge: 1600,

  // Custom
  ipad: 1024,
  ipadPro: 1366,
  laptopSmall: 1260,
};

const breakpoints = { min: {}, max: {} };

const query = (size, direction = 'max') => (content, ...args) => css`
  @media screen and (${direction}-width: ${size}px) {
    ${css(content, ...args)}
  }
`;

Object.keys(breakpointSizes).forEach(key => {
  // default (max)
  breakpoints[key] = query(breakpointSizes[key]);
  breakpoints.min[key] = query(breakpointSizes[key], 'min');
  breakpoints.max[key] = query(breakpointSizes[key], 'max');
});

breakpoints.custom = query;

// USAGE EXAMPLE
// breakpoints.small`-css here-`
// breakpoints.min.small`-css here-`
// breakpoints.max.large`-css here-`
// breakpoints.custom(1000, 'max')`-css here-`
export default breakpoints;

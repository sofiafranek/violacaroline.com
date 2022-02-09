/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { linear } from '../utils/easings';

const animateSlant = keyframes`
  0% {
    transform: translateY(150px) rotate(6deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
`;

const animateUp = keyframes`
  0% {
    transform: translateY(150px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MaskWord = styled.span`
  display: inline-block;
  clip-path: inset(0px 0px -10px 0px);
`;

const Mask = styled.span`
  display: block;
  clip-path: inset(0px -100px -10px 0px);
  padding: 0 20px;
`;

const Line = styled.span`
  display: inline-block;
  width: calc(100%);
  opacity: 0;
  white-space: pre;
  ${(props) =>
    props.show &&
    css`
      animation: ${props.animation} 1s cubic-bezier(0.02, 0.51, 0, 1);
      animation-fill-mode: both;
    `};
`;

export const AnimateWords = ({ text, show }) => {
  // split words
  const words = text.split(' ');
  return words.map((word, i) => (
    <MaskWord key={i} show={show}>
      <Line show={show} animation={animateUp}>
        {word}{' '}
      </Line>
    </MaskWord>
  ));
};

const AnimateText = ({
  no,
  total,
  children,
  show,
  delay = 0,
  duration = 1400,
  ...props
}) => {
  return (
    <Mask show={show} {...props}>
      <Line
        animation={animateSlant}
        style={{ animationDelay: `${delay + duration * linear(no / total)}ms` }}
        show={show}
      >
        {children}
      </Line>
    </Mask>
  );
};

export default AnimateText;

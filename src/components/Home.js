import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BREAKPOINTS from "../styles/breakpoints";

import AnimateText from "../components/AnimateText";

import envelope from "../assets/envelope.png";

const Container = styled.section`
  height: 100vh;
  color: #ffffff;
  background: #006884;
  text-align: center;
`;

const Header = styled.section`
  top: 35%;
  position: absolute;
  left: 0;
  right: 0;

  h1 {
    font-family: "Titan One", cursive !important;
  }

  h6 {
    letter-spacing: 2px;
  }

  img {
    width: 30px;
  }
`;

const Links = styled.p`
  padding-top: 30px;
`;

const DesktopAnimateText = styled(AnimateText)`
  display: none;

  ${BREAKPOINTS.min.medium`
    display: block;
  `}
`;

const MobileAnimateText = styled(AnimateText)`
  display: block;

  ${BREAKPOINTS.min.medium`
    display: none;
  `}
`;

const Introduction = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  useEffect(() => {
    const first = setTimeout(() => setShowFirst(true), 1500);
    const second = setTimeout(() => setShowSecond(true), 2000);
    const third = setTimeout(() => setShowThird(true), 2500);
    const fourth = setTimeout(() => setShowFourth(true), 3000);

    return () => {
      clearTimeout(first);
      clearTimeout(second);
      clearTimeout(third);
      clearTimeout(fourth);
    };
  }, []);

  return (
    <Container>
      <Header>
        <AnimateText show={showFirst}>
          <h6>VIOLA CAROLINE</h6>
        </AnimateText>
        <DesktopAnimateText show={showSecond}>
          <h1>Website Coming Soon</h1>
        </DesktopAnimateText>
        <MobileAnimateText show={showSecond}>
          <h1>Website</h1>
        </MobileAnimateText>
        <MobileAnimateText show={showThird}>
          <h1>Coming</h1>
        </MobileAnimateText>
        <MobileAnimateText show={showFourth}>
          <h1>Soon</h1>
        </MobileAnimateText>
        <Links>
          <a href="mailto:andreaviolacaroline@gmail.com">
            <img src={envelope} alt="" />
          </a>
        </Links>
      </Header>
    </Container>
  );
};

export default Introduction;

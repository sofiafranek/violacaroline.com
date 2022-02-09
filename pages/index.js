import React from "react";
import styled from "styled-components";

import PageWrapper from "../src/components/PageWrapper";

import Home from "../src/components/Home";

import { fadeIn } from "../src/styles/animations";

const FadeIn = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.5s linear 1s forwards;
`;

const Content = styled.div`
  overflow: hidden;
`;

const Homepage = () => {
  return (
    <FadeIn>
      <PageWrapper>
        <Content>
          <Home />
        </Content>
      </PageWrapper>
    </FadeIn>
  );
};

export default Homepage;

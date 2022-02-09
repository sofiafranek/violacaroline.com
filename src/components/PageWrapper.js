import React from "react";
import styled from "styled-components";

const Main = styled.main`
  min-height: auto;
  position: relative;
`;

const PageWrapper = ({ bgColor, children }) => {
  return <Main bgColor={bgColor}>{children}</Main>;
};

export default PageWrapper;

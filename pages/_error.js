import React from "react";
import styled from "styled-components";

import Link from "next/link";

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  background: white;
`;

const Title = styled.h1`
  margin-bottom: 40px;
`;

const Subtitle = styled.p`
  margin: 0 auto;
  max-width: 400px;
`;

const Error = () => {
  return (
    <Container>
      <div>
        <Title>Ooops... Error 404</Title>
        <Subtitle>
          We are sorry, but the page you are looking for does not exist. Please
          check the entered address and try again or{" "}
          <Link
            href="/"
            style={{ textDecoration: "underline", display: "block" }}
          >
            <a>go back to the homepage.</a>
          </Link>
        </Subtitle>
      </div>
    </Container>
  );
};

export default Error;

import React from "react";
import styled from "styled-components";
import Container from "./Component";

const Title = styled.h1`
  text-align: center;
`;

function Home() {
  return <Container><Title>Home</Title></Container>;
}

export default Home;

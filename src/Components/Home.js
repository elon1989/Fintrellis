import React from "react";
import styled from "styled-components";
import Container from "./Component";

const Title = styled.h1`
  text-align: center;
`;

function Home() {
  return <Container><Title>Home</Title>
  <section>
      <h2>About Our Blog</h2>
      <br></br>
      <p>This blog is a place where we share our thoughts, ideas, and experiences. We hope you find our posts informative and inspiring. Happy reading!</p>
    </section>
  </Container>;
}

export default Home;

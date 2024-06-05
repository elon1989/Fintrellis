import React from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
    width: 100%;
    padding-top: 1rem;
`;
const InnerContainer = styled.div`
    width: 80%;
    height: 90%;
    background-color: #3C5B6F;
    margin: 0 auto;
    display: flex;
    overflow: auto;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
    padding:1rem;
`;

function Container({children}) {
  return <StyledContainer><InnerContainer>{children}</InnerContainer></StyledContainer>;
}

export default Container;

// #3C5B6F, #153448, rgb(223, 208, 184)

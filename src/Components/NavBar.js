import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavWrapper>
      <NavItems>
        <li>
          <NavItem to="/">home</NavItem>
        </li>
        <li>
          <NavItem to="/blog">blog</NavItem>
        </li>
        <li>
          <NavItem to="/createBlog">new blog</NavItem>
        </li>
      </NavItems>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: #3C5B6F;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const NavItems = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  align-items: center;
`;

export const NavItem = styled(Link)`
text-decoration: none;
color:rgb(223, 208, 184);
font-size: 1.2rem;
font-weight: 700;
text-transform: uppercase;
border: 1px solid black;
background-color: #153448;
padding: 10px 20px;
border-radius: 5px;
transition: 0.3s;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
&:hover {
  background-color: rgb(223, 208, 184);
  color: #153448;
}`;

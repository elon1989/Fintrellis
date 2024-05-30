import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavWrapper>
      <NavItems>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
      </NavItems>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: #153448;
`;

const NavItems = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  align-items: center;
`;

const NavItem = styled.li``;

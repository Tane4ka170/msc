import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #422065;
  color: white;
  padding: 1rem;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-right: 1rem;
    position: relative;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
`;

export const Footer = styled.footer`
  background-color: #422065;
  color: white;
  text-align: center;
  padding: 1rem;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const DropdownMenu = styled.ul`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  color: #000;
  padding: 0.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  list-style: none;
  margin: 0;
  li {
    margin: 0;
  }
`;

export const DropdownLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

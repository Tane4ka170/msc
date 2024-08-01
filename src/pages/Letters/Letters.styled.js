import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Heading = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #9ce3f9;
  border-radius: 4px;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #87c8d8;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

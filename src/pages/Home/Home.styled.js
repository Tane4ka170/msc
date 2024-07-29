import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  margin-top: 40px;
  padding: 40px;
  background-color: #f0f8ff;
  border-radius: 16px;
  color: #333333;
  text-align: center;
`;

export const Section = styled(Box)`
  margin-top: 30px;
  padding: 20px;
  background-color: #ffffff;
  border: 2px solid #9ce3f9;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333333;
  font-weight: 600;
  &:hover {
    color: #000000;
  }
`;

export const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
    color: #ffffff;
    background-color: #9ce3f9;
    font-weight: bold;
    &:hover {
      background-color: #7ab8d6;
    }
  }
`;

export const Title = styled(Typography)`
  font-family: "Arial", sans-serif;
  font-weight: 700;
  color: #333333;
  margin-bottom: 20px;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StyledListItem = styled.li`
  margin: 10px 0;
`;

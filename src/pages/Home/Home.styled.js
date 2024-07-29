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

export const CardList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  list-style-type: none;
`;

export const Card = styled.li`
  width: 200px;
  background-color: #e0f7fa;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #333333;
  margin-bottom: 10px;
`;

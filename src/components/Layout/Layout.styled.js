// Layout.styled.js
import { AppBar, Button, IconButton } from "@mui/material";
import styled from "styled-components";

const sharedStyles = {
  backgroundColor: "#333 !important", // Уніфікований колір фону
  color: "white !important", // Уніфікований колір тексту
};

export const Main = styled("main")(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  backgroundColor: "#f5f5f5",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

export const Footer = styled("footer")(({ theme }) => ({
  ...sharedStyles,
  textAlign: "center",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

export const CustomAppBar = styled(AppBar)({
  ...sharedStyles,
  boxShadow: "none",
});

export const CustomButton = styled(Button)({
  color: "white !important",
  textTransform: "none !important",
  backgroundColor: "transparent !important",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1) !important",
  },
});

export const CustomIconButton = styled(IconButton)({
  color: "white !important",
});

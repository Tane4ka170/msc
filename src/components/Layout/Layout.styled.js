import { AppBar, Button, IconButton } from "@mui/material";
import styled from "styled-components";

export const Main = styled("main")(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  backgroundColor: "#f5f5f5",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

export const Footer = styled("footer")(({ theme }) => ({
  backgroundColor: "#333",
  color: "white",
  textAlign: "center",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

export const CustomAppBar = styled(AppBar)({
  backgroundColor: "#333",
});

export const CustomButton = styled(Button)({
  color: "white",
  textTransform: "none",
});

export const CustomIconButton = styled(IconButton)({
  color: "white",
});

import { AppBar, Button, IconButton } from "@mui/material";
import styled from "styled-components";

const sharedStyles = {
  backgroundColor: "#9ce3f9 !important",
  color: "#003366 !important",
};

export const Main = styled("main")(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  backgroundColor: "#f5f5f5",
  color: "#333333",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

export const Footer = styled("footer")(({ theme }) => ({
  ...sharedStyles,
  textAlign: "center",
  padding: theme.spacing(2),
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

export const CustomAppBar = styled(AppBar)({
  ...sharedStyles,
  boxShadow: "none",
});

export const CustomButton = styled(Button)({
  color: "#FFFFFF !important",
  textTransform: "none !important",
  backgroundColor: "transparent !important",
  "&:hover": {
    backgroundColor: "#A0D7A4 !important",
  },
});

export const CustomIconButton = styled(IconButton)({
  color: "#FFFFFF !important",
});

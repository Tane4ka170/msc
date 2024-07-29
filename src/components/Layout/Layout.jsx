// Layout.js
import { Outlet } from "react-router-dom";
import {
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  CustomAppBar,
  CustomButton,
  CustomIconButton,
  Footer,
  Main,
} from "./Layout.styled";

function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <CustomAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Music Archive
          </Typography>
          {isMobile || isTablet ? (
            <>
              <CustomIconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </CustomIconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <List>
                  <ListItem
                    button
                    component={Link}
                    to="/"
                    onClick={toggleDrawer}
                  >
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/songs/numbers"
                    onClick={toggleDrawer}
                  >
                    <ListItemText primary="Numbers (0-9)" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/songs/latin"
                    onClick={toggleDrawer}
                  >
                    <ListItemText primary="Latin Letters (A-Z)" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/songs/cyrillic"
                    onClick={toggleDrawer}
                  >
                    <ListItemText primary="Cyrillic Letters (А-Я)" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <CustomButton component={Link} to="/">
                Home
              </CustomButton>
              <CustomButton component={Link} to="/songs/numbers">
                Numbers (0-9)
              </CustomButton>
              <CustomButton component={Link} to="/songs/latin">
                Latin Letters (A-Z)
              </CustomButton>
              <CustomButton component={Link} to="/songs/cyrillic">
                Cyrillic Letters (А-Я)
              </CustomButton>
            </>
          )}
        </Toolbar>
      </CustomAppBar>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <p>&copy; 2024 Music Archive</p>
      </Footer>
    </div>
  );
}

export default Layout;

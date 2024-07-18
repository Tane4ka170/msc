import { Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { styled } from "@mui/system";

const numbers = Array.from({ length: 10 }, (_, i) => i.toString());
const latinLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
); // A-Z
const cyrillicLetters = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];

const Main = styled("main")(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

const Footer = styled("footer")(({ theme }) => ({
  backgroundColor: "#422065",
  color: "white",
  textAlign: "center",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

function Layout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  const handleMouseEnter = (event, type) => {
    if (!isMobile && !isTablet) {
      setAnchorEl(event.currentTarget);
      setMenuType(type);
    }
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setMenuType(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderMenuItems = (items, type) => {
    return items.map((item) => (
      <MenuItem
        key={item}
        component={Link}
        to={`/songs/${type}/${item}`}
        onClick={handleMouseLeave}
      >
        {item}
      </MenuItem>
    ));
  };

  const renderDrawerItems = (label, items, type) => (
    <>
      <ListItem button onClick={toggleDrawer}>
        <ListItemText primary={label} />
      </ListItem>
      {items.map((item) => (
        <ListItem
          button
          key={item}
          component={Link}
          to={`/songs/${type}/${item}`}
          onClick={toggleDrawer}
        >
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </>
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Music Archive
          </Typography>
          {isMobile || isTablet ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
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
                  {renderDrawerItems("Numbers (0-9)", numbers, "numbers")}
                  {renderDrawerItems(
                    "Latin Letters (A-Z)",
                    latinLetters,
                    "latin"
                  )}
                  {renderDrawerItems(
                    "Cyrillic Letters (А-Я)",
                    cyrillicLetters,
                    "cyrillic"
                  )}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <div
                onMouseEnter={(event) => handleMouseEnter(event, "numbers")}
                onMouseLeave={handleMouseLeave}
              >
                <Button color="inherit">Numbers (0-9)</Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && menuType === "numbers"}
                  onClose={handleMouseLeave}
                >
                  {renderMenuItems(numbers, "numbers")}
                </Menu>
              </div>
              <div
                onMouseEnter={(event) => handleMouseEnter(event, "latin")}
                onMouseLeave={handleMouseLeave}
              >
                <Button color="inherit">Latin Letters (A-Z)</Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && menuType === "latin")}
                  onClose={handleMouseLeave}
                >
                  {renderMenuItems(latinLetters, "latin")}
                </Menu>
              </div>
              <div
                onMouseEnter={(event) => handleMouseEnter(event, "cyrillic")}
                onMouseLeave={handleMouseLeave}
              >
                <Button color="inherit">Cyrillic Letters (А-Я)</Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && menuType === "cyrillic")}
                  onClose={handleMouseLeave}
                >
                  {renderMenuItems(cyrillicLetters, "cyrillic")}
                </Menu>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
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

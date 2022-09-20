//MUI icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
//MUI components
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer
} from "@mui/material";
//react hooks
import { useState } from "react";
//source
import { navLinks } from "src/source/navLinks";
import { NavLink } from "react-router-dom";

export default function DrawerComponent() {
  const [open, setOpen] = useState(false);
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <IconButton>
        <CloseIcon onClose={() => setOpen(false)} />
      </IconButton>
      <List>
        {navLinks.map(({ title, path }) => (
          <ListItem key={title}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink to={path}>
                <ListItemText primary={title} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <IconButton sx={{ color: "white" }}>
        <MenuIcon onClick={() => setOpen(!open)} />
      </IconButton>
    </SwipeableDrawer>
  );
}

{
  /* <Drawer open={true} onClose={() => setOpen(false)}>
      <List>
        {navLinks.map(({ title, path }) => (
          <ListItem key={title}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink to={path}>
                <ListItemText primary={title} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <IconButton onClick={() => setOpen(!open)} sx={{ color: "white" }}>
        <MenuIcon />
      </IconButton>
    </Drawer> */
}

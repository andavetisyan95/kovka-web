import React from "react";

//react hooks
import { useState, memo, useEffect } from "react";

//react router
import { useNavigate } from "react-router-dom";

//MUI components
import { Grid, Typography, Hidden, Box } from "@mui/material";

//source
import { navLinks } from "src/source/navLinks";

//icons from Mui
import MenuIcon from "@mui/icons-material/Menu";

//components
import { DrawerComponent, SearchBox } from ".";

export default memo(function NavBar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <Box
      sx={{
        bgcolor: scroll ? "rgba(0,0,0,0.7)" : "transparent",
        boxShadow: 0,
        position: scroll ? "fixed" : "block",
        top: 0,
        width: "100%",
        zIndex: 1
      }}
    >
      <Grid
        container
        gap={{ xs: 2.5, lg: 13, xl: 22 }}
        justifyContent={{ lg: "center", xs: "space-between" }}
        alignItems="center"
        sx={{
          py: 3,
          px: { xs: 3, sm: 6, md: 10, lg: 0 }
        }}
      >
        <Hidden lgDown>
          <Grid item onClick={() => navigate("/")} className="clickable">
            <img src={"/images/logo.svg"} alt="logo" width={100} height={100} />{" "}
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid item>
            <MenuIcon
              sx={{
                color: "white",
                fontSize: "2rem"
              }}
              onClick={() => setIsOpen(true)}
              className="clickable"
            />
          </Grid>
        </Hidden>
        <Hidden lgDown>
          <Grid item>
            <Grid
              container
              sx={{
                gap: { lg: 9 }
              }}
              alignItems="center"
              justifyContent="center"
            >
              {navLinks.map(({ title, path }) => (
                <Grid
                  item
                  onClick={() => {
                    navigate(path);
                  }}
                  key={title}
                  sx={{ cursor: "pointer" }}
                  className={window.location.pathname === path ? "active" : "nav_bar_items"}
                >
                  <Typography
                    sx={{
                      fontFamily: "Mulish",
                      fontStyle: "normal",
                      fontWeight: 300,
                      fontSize: { lg: 16 },
                      lineHeight: "25px"
                    }}
                  >
                    {title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Hidden>
        <Grid item position="relative">
          <SearchBox />
        </Grid>
      </Grid>
      <DrawerComponent showDrawer={isOpen} close={() => setIsOpen(prev => !prev)} />
    </Box>
  );
});

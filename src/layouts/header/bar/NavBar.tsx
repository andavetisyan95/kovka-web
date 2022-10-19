//react
import React from 'react';

//axios
import axios from "axios";

//react hooks
import { useState, memo, useEffect, useCallback } from "react";

//react router
import { useNavigate } from "react-router-dom";

//MUI components
import { Grid, IconButton, Typography, TextField, Hidden, Box, Stack } from "@mui/material";

//source
import { navLinks } from "../../../source/navLinks";
import { DrawerComponent } from ".";

//icons from Mui
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

//types
import { Product } from '../../../types/CommonTypes';


export default memo(function NavBar() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<Product[]>([]);
  const [scroll, setScroll] = useState(false);

  const getItems = useCallback(() => {
    if (title.length >= 1 && title !== undefined) {
      setTimeout(async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVICE_HOST}?title_like=${title}`
        );
        setItems(data ?? []);
      }, 800);
    }
  }, [title]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search_results?query=${title}`);
      setTitle("");
    }
  };

 

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
          px: { xs: 3, sm: 6, lg: 0 }
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
          <Stack>
            <Box>
              <TextField
                onChange={e => setTitle(e.target.value)}
                onKeyPress={handleEnter}
                value={title}
                placeholder="Поиск"
                focused={false}
                InputProps={{
                  sx: {
                    "& input": {
                      color: "white",
                      padding: 0,
                      ml: "15px"
                    },

                    border: "1px solid #FFFFFF",
                    borderBottom: title ? "none" : "1px solid white",
                    borderRadius: title ? "5px 5px 0 0 " : "5px",
                    bgcolor: title.length >= 1 ? "rgba(0,0,0,0.7)" : "transparent",
                    display: "flex",
                    flexDirection: "row",
                    width: { xs: 230, sm: 220 }
                  },
                  endAdornment: (
                    <IconButton sx={{ color: "white" }}>
                      <SearchIcon />
                    </IconButton>
                  )
                }}
              />
            </Box>
            <Box sx={{ width: "100%", position: "absolute", top: "40px" }}>
              {title.length >= 1 && (
                <Box
                  sx={{
                    border: "1px  solid white",
                    borderTop: "unset",
                    borderRadius: "0 0 5px 5px",
                    maxHeight: "200px",
                    wordBreak: "break-all",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    p: 2,
                    overflow: "auto",
                    backgroundColor: "rgba(0,0,0,0.7)"
                  }}
                >
                  {items?.some(el => el.title?.includes(title)) ? (
                    items.map(({ title, item }) => (
                      <Typography
                        key={`${title}_${item}`}
                        className="clickable"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "400",
                          lineHeight: 1.5,
                          textAlign: "start",

                          "&:hover": {
                            color: "primary.main"
                          }
                        }}
                        onClick={() => {
                          navigate(`/catalog_item/${item}`);
                          setTitle("");
                        }}
                      >
                        {title}
                      </Typography>
                    ))
                  ) : (
                    <Typography>No result</Typography>
                  )}
                </Box>
              )}
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <DrawerComponent showDrawer={isOpen} close={()=>setIsOpen(prev=> !prev)} />
    </Box>
  );
});

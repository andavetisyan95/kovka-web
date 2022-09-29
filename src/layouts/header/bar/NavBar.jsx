//MUI components
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Hidden,
  Slide
} from "@mui/material";

//react router
import { useNavigate } from "react-router-dom";
//icons from Mui
import SearchIcon from "@mui/icons-material/Search";
//source
import { navLinks } from "src/source/navLinks";

//react hooks
import { useState } from "react";
//MUI icons
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerComponent } from ".";

export default function NavBar() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [handleOpen, setHandleOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [scroll, setScroll] = useState(false);
  const [handleAddTransition, setHandleAddTransition] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 2) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const addTransition = () => {
    if (window.scrollY >= 1) {
      setHandleAddTransition(true);
    } else {
      setHandleAddTransition(false);
    }
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      if (title === "" || !items.includes(title)) {
        navigate(`/search_results?query=${title}`);
        setTitle("");
      } else {
        e.preventDefault();
        setTitle(e.target.value);
      }
    }
  };

  const handleClose = () => {
    setHandleOpen(false);
  };
  // useEffect(() => {
  //   if (title.length >= 1 && title !== undefined) {
  //     const handle = setTimeout(() => {
  //       fetch("http://localhost:8000/services ")
  //         .then(res => res.json())
  //         .then(results => {
  //           setItems(results);
  //         });
  //     }, 500);
  //     return () => {
  //       clearTimeout(handle);
  //     };
  //   }
  // }, [title]);

  window.addEventListener("scroll", changeBackground);
  window.addEventListener("scroll", addTransition);
  return (
    <AppBar
      sx={{
        bgcolor: scroll ? "rgba(0,0,0,0.7)" : "transparent",
        boxShadow: "0",
        position: scroll ? "fixed" : "absolute",
        top: scroll ? 0 : { xl: 80, xs: 0 }
      }}
    >
      <Toolbar>
        <Grid
          container
          sx={{
            py: 1.875,
            gap: { xs: 2.5, lg: 15, xl: 22 }
          }}
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column", lg: "row" }}
        >
          <Grid item onClick={() => navigate("/")} className="clickable">
            <img src={"/images/logo.svg"} alt="logo" />{" "}
          </Grid>

          <Grid item>
            <Grid
              container
              sx={{ columnGap: { xl: 22, lg: 15, md: 70, xs: 10, sm: 35 } }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sx={{ display: { xs: "block", lg: "none" } }}>
                <MenuIcon
                  sx={{
                    color: "white",
                    fontSize: "2rem"
                  }}
                  onClick={() => setHandleOpen(true)}
                  className="clickable"
                />
              </Grid>
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

              <Grid item>
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
                      borderRadius: "5px",
                      bgcolor: "transparent",
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <DrawerComponent open={handleOpen} close={handleClose} />
    </AppBar>
  );
}

//MUI components
import {
  Grid,
  AppBar,
  Toolbar,
  //useMediaQuery,
  IconButton,
  FormControl,
  Typography,
  TextField
} from "@mui/material";

//react router
import { useNavigate } from "react-router-dom";
//icons from Mui
import SearchIcon from "@mui/icons-material/Search";
//source
import { navLinks } from "src/source/navLinks";

//react hooks
import { useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();

  // const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const [title, setTitle] = useState("");

  const [items, setItems] = useState([]);
  const [scroll, setScroll] = useState(false);
  const [transition, setTransition] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 2) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      if (title === "" || !items.includes(title)) {
        navigate(`/search_results?query=${title}`);
      } else {
        e.preventDefault();
        setTitle(e.target.value);
      }
    }
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
  return (
    <AppBar
      sx={{
        bgcolor: scroll ? "rgba(0,0,0,0.7)" : "transparent",
        boxShadow: "0",
        position: scroll ? "fixed" : "absolute",
        top: scroll ? 0 : { xl: "80px", xs: 0 }
      }}
    >
      <Toolbar>
        <Grid
          container
          sx={{
            gap: { xl: "180px", lg: "55px" },
            pt: "15px"
          }}
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column", lg: "row" }}
        >
          <Grid item onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
            <img src={"/images/logo.svg"} alt="logo" />{" "}
          </Grid>
          <Grid item>
            <Grid
              container
              sx={{
                gap: { lg: "60px" },
                display: { xs: "none", lg: "flex" }
              }}
              alignItems="center"
              justifyContent="center"
            >
              {navLinks.map(({ title, path }) => (
                <Grid
                  item
                  onClick={() => navigate(path)}
                  key={title}
                  sx={{ cursor: "pointer" }}
                  className="nav_bar_items"
                >
                  <Typography
                    sx={{
                      fontFamily: "Mulish",
                      fontStyle: "normal",
                      fontWeight: 300,
                      fontSize: { xl: "20px", lg: "16px" },
                      lineHeight: "25px"
                    }}
                  >
                    {title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <FormControl
              sx={{
                border: "1px solid #FFFFFF",
                borderRadius: "5px",
                bgcolor: "transparent",
                display: "flex",
                flexDirection: "row",
                width: {
                  xs: "220px"
                }
              }}
            >
              <TextField
                onChange={e => setTitle(e.target.value)}
                onKeyPress={handleEnter}
                value={title}
                placeholder="Поиск"
                InputProps={{
                  sx: {
                    "& input": {
                      color: "white",
                      padding: 0,
                      ml: "15px"
                    }
                  },
                  endAdornment: (
                    <IconButton sx={{ color: "white" }}>
                      <SearchIcon />
                    </IconButton>
                  )
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

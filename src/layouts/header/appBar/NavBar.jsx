//MUI components
import {
  ListItemText,
  Grid,
  InputBase,
  AppBar,
  useTheme,
  Toolbar,
  useMediaQuery,
  Container,
  IconButton,
  FormControl
} from "@mui/material";
import { makeStyles } from "@mui/styles";
//react router
import { NavLink } from "react-router-dom";
//icons from Mui
import SearchIcon from "@mui/icons-material/Search";
//source
import { navLinks } from "src/source/navLinks";
//components
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles(theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex"
    }
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <AppBar position="fixed" sx={{ bgcolor: "black" }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Grid container columnSpacing={20} justifyContent="center" alignItems="center">
            <Grid item xs={2}>
              <NavLink to={"/"}>
                <img src={"/images/logo.svg"} alt="logo" />{" "}
              </NavLink>
            </Grid>
            <Grid item xs={7} className={classes.sectionDesktop}>
              <Grid
                container
                columnSpacing={10}
                sx={{ height: "100%" }}
                alignItems="center"
                justifyContent="center"
              >
                {navLinks.map(({ title, path }) => (
                  <Grid item key={title}>
                    <NavLink to={path}>
                      <ListItemText
                        primary={title}
                        sx={{
                          fontFamily: "Mulish",
                          fontStyle: "normal",
                          fontWeight: 300,
                          fontSize: "20px",
                          lineHeight: "25px",
                          color: "white"
                        }}
                      />
                    </NavLink>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={3}>
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
                <InputBase placeholder="Search" sx={{ color: "white", pl: "5px" }} />
                <IconButton type="button" sx={{ color: "white" }}>
                  <SearchIcon />
                </IconButton>
              </FormControl>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

{
  /* <Box
  sx={{
    border: "1px solid #FFFFFF",
    borderRadius: "5px",
    position: "relative",
    bgcolor: "transparent",
    mt: "15px"
  }}
>
  <SearchIcon
    sx={{
      width: "24px",
      height: "24px",
      position: "absolute",
      right: 0,
      color: "white",
      p: 0.5
    }}
  />
  <InputBase
    placeholder="Search"
    sx={{
      fontFamily: "Mulish",
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "20px",
      color: "white",
      left: "16px"
    }}
  />
</Box>; */
}

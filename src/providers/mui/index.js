import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFDB7F",
      light: "#FFF",
      dark: "#000"
    },
    secondary: {
      main: "#D7AF48",
      light: "rgba(0, 0, 0, 0.7)"
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#FFF",
          fontFamily: "Mulish",
          fontStyle: "normal",
          fontWeight: 400
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFDB7F",
          "&:hover": { backgroundColor: "#D7AF48" },
          fontFamily: "Mulish",
          fontWeight: 500,
          fontStyle: "normal",
          textAlign: "center"
        }
      }
    }
  }
});

import { Box } from "@mui/material";
import CallSection from "./CallSection";
// import CallSection from "./CallSection";
import NavBar from "./NavBar";

export default function NavMenu() {
  return (
    <Box>
      <NavBar />
    </Box>
  );
}

{
  /* <Box
sx={{
  position: "relative"
  // width: {
  //   xs: "0",
  //   sm: "21%",
  //   md: "54%",
  //   lg: "75%",
  //   xl: "100%"
  // }
}}
>
<Box
  sx={{
    display: "flex",
    bgcolor: "black"
  }}
>
  <CallSection />
</Box>
<Box bgcolor="secondary.light">
  <NavBar />
</Box>
</Box> */
}

{
  /* <Grid container direction="column">
      <Grid item order="0">
        <CallSection />
      </Grid>
      <Grid item order="1">
        <NavBar />
      </Grid>
    </Grid> */
}

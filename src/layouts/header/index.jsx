//Mui components
import { Box, Grid } from "@mui/material";
//Components
import { CallSection } from "./bar";
import { NavBar } from "./bar";

export default function Header() {
  return (
    <Box>
      <Grid container sx={{ direction: "column" }}>
        <Grid item>
          <CallSection />
        </Grid>
        <Grid item>
          <NavBar />
        </Grid>
      </Grid>
    </Box>
  );
}

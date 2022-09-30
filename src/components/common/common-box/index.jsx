//Mui components
import { Grid, Typography } from "@mui/material";

export default function CommonBox({ title, children }) {
  return (
    <Grid
      container
      sx={{ gap: { sm: 8, xs: 5 }, pt: { xs: 10, sm: 15, lg: 20 } }}
      direction="column"
    >
      <Grid item>
        <Typography
          sx={{
            fontSize: { sm: 40, xs: 30 },
            color: "primary.main",
            fontFamily: "Play",
            lineHeight: { lg: "69px", sm: "70px", xs: "42px" }
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
}

// sx={{
//   py: { lg: 17.5, sm: 15, xs: 10 },
//   px: { xl: 3.75, lg: 18.75, sm: 8.75, xs: 3 }
// }}

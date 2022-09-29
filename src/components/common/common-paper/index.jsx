//Mui components
import { Grid, Paper, Typography } from "@mui/material";

export default function CommonPaper({ title, children }) {
  return (
    <Paper sx={{ bgcolor: "rgba(0,0,0,0.7)" }}>
      <Grid
        container
        direction="column"
        sx={{
          py: { sm: 10, xs: 5 },
          pl: { sm: 5, lg: 10, xs: 3 },
          gap: { sm: 7.5, xs: 5 }
        }}
      >
        <Grid item>
          <Typography
            sx={{
              color: "primary.main",
              fontFamily: "Play",
              fontStyle: "normal",
              fontSize: { sm: 40, xs: 30, xl: 50 },
              lineHeight: { lg: "69px", sm: "70px", xs: "42px" },
              fontWeight: 400
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </Paper>
  );
}

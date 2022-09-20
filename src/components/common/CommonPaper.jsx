//Mui components
import { Grid, Paper, Typography } from "@mui/material";

export default function CommonPaper({ title, children }) {
  return (
    <Paper sx={{ bgcolor: "rgba(0,0,0,0.7)" }}>
      <Grid
        container
        direction="column"
        sx={{
          py: { sm: "80px", xs: "40px" },
          pl: { sm: "40px", lg: "80px", xs: "20px" },
          gap: { sm: "60px", xs: "40px" }
        }}
      >
        <Grid item>
          <Typography
            variant="h4"
            container="h1"
            sx={{
              color: "primary.main",
              fontFamily: "Play",
              fontStyle: "normal",
              fontSize: { sm: "40px", xs: "30px" },
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

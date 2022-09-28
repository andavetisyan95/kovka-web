//Mui components
import { Box, Grid, Typography } from "@mui/material";

export default function CatalogCommon({ children, title }) {
  return (
    <Box
      sx={{
        pt: { xl: 35, lg: 25, xs: 25 },
        pb: { xs: 10 },
        px: { xl: 28.5, lg: 21.25, sm: 8.75, xs: 3 }
      }}
    >
      <Grid container sx={{ gap: { xs: 5, sm: 10 } }}>
        <Grid item>
          <Typography
            variant="h1"
            sx={{
              color: "primary.main",
              fontFamily: "Play",
              fontStyle: "normal",
              fontSize: { sm: 50, xs: 30 },
              lineHeight: { lg: "69px", sm: "70px", xs: "42px" },
              fontWeight: 400
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </Box>
  );
}

//Mui components
import { Box, Grid, Typography } from "@mui/material";

export default function CatalogCommon({ children }) {
  return (
    <Box
      sx={{
        pt: { xl: "280px", lg: "200px", xs: "200px" },
        pb: { xs: "80px" },
        px: { xl: "228px", lg: "170px", sm: "70px", xs: "24px" }
      }}
    >
      <Grid container sx={{ gap: { xs: "40px", sm: "80px" } }}>
        <Grid item>
          <Typography
            variant="h1"
            sx={{
              color: "primary.main",
              fontFamily: "Play",
              fontStyle: "normal",
              fontSize: { sm: "50px", xs: "30px" },
              lineHeight: { lg: "69px", sm: "70px", xs: "42px" },
              fontWeight: 400
            }}
          >
            КАТАЛОГ
          </Typography>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </Box>
  );
}

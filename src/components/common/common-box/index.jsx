//Mui components
import { Box, Container, Grid, Typography } from "@mui/material";

export default function CommonBox({ title, children }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Container
        sx={{
          py: { lg: "160px", sm: "120px", xs: "80px" }
        }}
      >
        <Grid container sx={{ gap: { sm: "80px", xs: "40px" } }} direction="column">
          <Grid item>
            <Typography
              sx={{
                fontSize: { sm: "40px", xs: "30px" },
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
      </Container>
    </Box>
  );
}

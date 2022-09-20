//Mui components
import { Box, Typography, Grid } from "@mui/material";
//react router
import { useLocation } from "react-router";

export default function SearchResults() {
  const location = useLocation();
  const result = location.search.split("?")[1].split("=")[1];
  return (
    <main>
      <Box>
        <Grid
          container
          direction="column"
          spacing={10}
          sx={{ py: { xs: "200px", sm: "220px" }, px: { xs: "96px", sm: "220px" } }}
        >
          <Grid item>
            <Typography
              variant="h1"
              sx={{
                color: "primary.main",
                fontSize: { sm: "50px", xs: "30px" },
                lineHeigh: { xs: "42px", sm: "70px" }
              }}
            >
              РЕЗУЛЬТАТ ПОИСКА
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: "30px", lineHeight: "38px" }}>
              По запросу {result} ничего не найдено.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}

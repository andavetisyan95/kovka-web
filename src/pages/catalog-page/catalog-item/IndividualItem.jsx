//MUi components
import { Grid, Box, Typography } from "@mui/material";
//react components
import { CatalogCommon } from "..";

export default function IndividualItem({ item }) {
  return (
    <CatalogCommon title="КАТАЛОГ">
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          <Box position="relative" sx={{ height: { lg: 400, sm: 320, xs: 240 } }}>
            <img
              style={{ objectFit: "cover" }}
              width="100%"
              height="100%"
              src={item?.image || "/images/placeholder.jpg"}
              alt={item?.image}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container sx={{ gap: { lg: 10, xs: 5 } }}>
            <Grid item>
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: { lg: 40, sm: 30, xs: 24 },
                  lineHeight: { lg: "50px", sm: "38px", xs: "30px" }
                }}
              >
                {item?.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 20, lg: 24 },
                  lineHeight: { xs: "20px", sm: "25px", lg: "30px" }
                }}
              >
                {item?.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CatalogCommon>
  );
}

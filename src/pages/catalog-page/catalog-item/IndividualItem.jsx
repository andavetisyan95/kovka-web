//axios
import axios from "axios";
//MUi components
import { Grid, Box, Typography } from "@mui/material";
//react components
import { CatalogCommon } from "..";

export default function IndividualItem({ item }) {
  return (
    <CatalogCommon>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          <Box position="relative" sx={{ height: { lg: "400px", sm: "320px", xs: "240px" } }}>
            <img
              style={{ objectFit: "cover" }}
              width="100%"
              height="100%"
              src={item?.image}
              alt={item?.image}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container sx={{ gap: { lg: "80px", xs: "40px" } }}>
            <Grid item>
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: { lg: "40px", sm: "30px", xs: "24px" },
                  lineHeight: { lg: "50px", sm: "38px", xs: "30px" }
                }}
              >
                {item?.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "20px", lg: "24px" },
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

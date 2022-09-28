//react
import axios from "axios";
//Mui components
import { Box, Grid, Typography } from "@mui/material";
//react hooks
import { useEffect, useState } from "react";
import { BoxBackground } from "src/components/common";

export default function Prices() {
  const [prices, setPrices] = useState(null);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVICE_HOST)
      .then(res => setPrices(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <BoxBackground img="/images/pricePage.svg">
      <Box sx={{ pt: { xl: 30, xs: 22.5 }, px: { lg: 25, sm: 12, xs: 2.875 } }}>
        <Box
          sx={{
            py: { sm: 10, xs: 5 },
            pl: { lg: 10, xs: 5 },
            gap: { xs: 5 },
            bgcolor: "rgba(0,0,0,0.7)"
          }}
          display="flex"
          flexDirection="column"
        >
          <Grid container direction="row">
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h1"
                component="h4"
                sx={{
                  color: "primary.main",
                  fontFamily: "Play",
                  fontStyle: "normal",
                  fontSize: { sm: 50, xs: 30 },
                  lineHeight: { lg: "46px", sm: "70px", xs: "42px" },
                  fontWeight: 400
                }}
              >
                ВИД ИЗДЕЛИЙ
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h1"
                component="h4"
                sx={{
                  color: "primary.main",
                  fontFamily: "Play",
                  fontStyle: "normal",
                  fontSize: { sm: 50, xs: 30 },
                  lineHeight: { lg: "46px", sm: "70px", xs: "none" },
                  fontWeight: 400,
                  display: { sm: "block", xs: "none" }
                }}
              >
                ЦЕНА
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {prices?.map(({ title, price, id }) => (
              <Grid item xs={12} key={id}>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontSize: { lg: 24, xs: 20 },
                        color: { xs: "primary.main", sm: "primary.light" },
                        lineHeight: { lg: "30px", xs: "25px" }
                      }}
                    >
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontSize: { lg: 24, xs: 20 },
                        lineHeight: { lg: "30px", xs: "25px" }
                      }}
                    >
                      {price}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </BoxBackground>
  );
}

//react
import React from "react";

//react hooks
import { useEffect, useState, useCallback } from "react";

//react
import axios from "axios";

//Mui components
import { Box, Grid, Paper, Typography } from "@mui/material";

//react components
import { BoxBackground } from "../components/common";

//function for title generation
import { TabTitle } from "src/utils/GeneralFunctions";

type PricesParams = {
  id: number;
  title: string;
  price: string;
};

export default function Prices() {
  TabTitle("Цены");

  const [prices, setPrices] = useState<PricesParams[]>([]);

  const getPrices = useCallback(async () => {
    const { data } = await axios.get(process.env.REACT_APP_SERVICE_HOST as string);
    setPrices(data ?? []);
  }, []);

  useEffect(() => {
    getPrices();
  }, [getPrices]);

  return (
    <>
      <BoxBackground imgName="/images/pricePage.jpg" />
      <Box
        sx={{
          pt: { xl: 8, sm: 5, xs: 10 },
          pb: { lg: 45, xs: 80 }
        }}
      >
        <Box
          sx={{
            position: "relative",
            px: { lg: 25, sm: 6, md: 8, xs: 2.875 }
          }}
          display="flex"
          flexDirection="column"
        >
          <Paper
            sx={{
              backgroundColor: "rgba(0,0,0,0.7)",
              borderRadius: "4px",
              px: { xs: 3, sm: 5, md: 12, lg: 10 },
              py: { xs: 5, sm: 10, md: 12, lg: 8 }
            }}
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
            <Grid container spacing={1.8} mt={5}>
              {prices?.map(({ title, price, id }) => (
                <Grid item xs={12} key={id}>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        sx={{
                          fontSize: { lg: 24, xs: 20, xl: 22 },
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
                          fontSize: { lg: 24, xs: 20, xl: 22 },
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
          </Paper>
        </Box>
      </Box>
    </>
  );
}

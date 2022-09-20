//Mui components
import { Box, Container, Grid, Typography } from "@mui/material";
//react hooks
import { useEffect, useState } from "react";

export default function Prices() {
  const [prices, setPrices] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/services")
      .then(res => res.json())
      .then(result => setPrices(result));
  }, []);

  return (
    <Box
      sx={{
        background: "url(/images/pricePage.svg)",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Box sx={{ py: { xs: "180px" }, px: { lg: "200px", sm: "96px", xs: "23px" } }}>
        <Box
          sx={{
            py: { sm: "80px", xs: "40px" },
            pl: { lg: "80px", xs: "40px" },
            gap: { xs: "40px" },
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
                  fontSize: { sm: "50px", xs: "30px" },
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
                  fontSize: { sm: "50px", xs: "30px" },
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
            {prices?.map(({ title, price }) => (
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontSize: { lg: "24px", xs: "20px" },
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
                        fontSize: { lg: "24px", xs: "20px" },
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
    </Box>
  );
}

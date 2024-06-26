import React, { FC, ReactElement } from "react";

//react hooks
import { useNavigate } from "react-router-dom";

// MUI components
import { Box, Grid, Link, Stack } from "@mui/material";

// components
import { FooterTypography } from "src/components/common";

// MUI icons
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// constants
import {
  COMPANY_MAIN_PHONE_NUMBER,
  COMPANY_PHONE_NUMBER,
  COMPANY_EMAIL,
  COMPANY_LOCATION
} from "../../constants";

export const Footer: FC = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "1B1B1B",
        width: { lg: "100%" }
      }}
    >
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        columnGap={{ md: 25, lg: 40, xl: 60 }}
        rowGap={{ xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item py={{ md: 15, lg: 20 }} pt={{ xs: 10.375, sm: 15 }}>
          <Stack spacing={{ lg: 5.625, xs: 4 }}>
            <Box>
              <Grid
                container
                spacing={{ md: 3.125, xs: 2 }}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <PhoneIcon
                    sx={{
                      fontSize: "1.5rem",
                      color: "primary.main"
                    }}
                  />
                </Grid>
                <Grid item>
                  <Link sx={{ textDecoration: "none" }} href={`tel:${COMPANY_MAIN_PHONE_NUMBER}`}>
                    <FooterTypography title={COMPANY_MAIN_PHONE_NUMBER} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link sx={{ textDecoration: "none" }} href={`tel:${COMPANY_PHONE_NUMBER}`}>
                    <FooterTypography title={COMPANY_PHONE_NUMBER} />
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container spacing={{ xs: 2, md: 3.125 }}>
                <Grid item>
                  <MailIcon sx={{ fontSize: "1.5rem" }} color="primary" />
                </Grid>
                <Grid item>
                  <Link sx={{ textDecoration: "none" }} href={`mailto:${COMPANY_EMAIL}`}>
                    <FooterTypography title={COMPANY_EMAIL} />
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container spacing={{ xs: 2, md: 3.125 }}>
                <Grid item>
                  <LocationOnIcon sx={{ fontSize: "1.5rem" }} color="primary" />
                </Grid>
                <Grid item>
                  <Link
                    sx={{ textDecoration: "none" }}
                    href={"https://yandex.ru/maps/?ll=36.901489%2C55.641605&z=18"}
                  >
                    <FooterTypography title={COMPANY_LOCATION} />
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          pt={{ md: 15 }}
          pb={{ xs: 10.375, md: 15 }}
          sx={{
            cursor: "pointer",
            alignSelf: "center"
          }}
        >
          <img src="/images/footer.svg" alt="logo" width={280} height={200} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

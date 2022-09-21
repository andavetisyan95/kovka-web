//MUI components
import { Box, Grid, Link } from "@mui/material";
//components
import { FooterTypography } from "src/components/common";
//MUI icons
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
//react dom
import { NavLink } from "react-router-dom";
//constants
import {
  COMPANY_MAIN_PHONE_NUMBER,
  COMPANY_PHONE_NUMBER,
  COMPANY_EMAIL,
  COMPANY_LOCATION
} from "src/constants";
import { useEffect } from "react";

export default function Footer() {
  //makes scroll up to the top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box
      sx={{
        bgcolor: "1B1B1B",
        width: { lg: "100%" }
      }}
    >
      <Grid
        container
        sx={{
          direction: { xs: "column", md: "row" },
          gap: { xl: "530px", lg: "200px", md: "130px" },
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Grid
          item
          sx={{
            py: { xs: "83px", md: "120px" }
          }}
        >
          <Grid container direction="column" sx={{ gap: { lg: "45px", xs: "20px" } }}>
            <Grid item>
              <Grid
                container
                sx={{ direction: { md: "row", xs: "row" }, gap: { md: "25px", xs: "16px" } }}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <PhoneIcon sx={{ width: "20px", height: "20px", color: "primary.main" }} />
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
            </Grid>
            <Grid item>
              <Grid
                container
                sx={{ direction: { md: "row", xs: "row" }, gap: { md: "25px", xs: "16px" } }}
              >
                <Grid item>
                  <MailIcon sx={{ width: "22.5px", height: "18.75px" }} color="primary" />
                </Grid>
                <Grid item>
                  <Link sx={{ textDecoration: "none" }} href={`mailto:${COMPANY_EMAIL}`}>
                    <FooterTypography title={COMPANY_EMAIL} />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                sx={{ direction: { md: "row", xs: "row" }, gap: { md: "25px", xs: "16px" } }}
              >
                <Grid item>
                  <LocationOnIcon sx={{ width: "18px", height: "18px" }} color="primary" />
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
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            pt: { md: "120px" },
            pb: { xs: "83px", md: "120px" }
          }}
        >
          <NavLink to={"/"}>
            <img src="/images/footer.svg" alt="logo" />
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
}

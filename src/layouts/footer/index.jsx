//MUI components
import { Box, Grid, Link } from "@mui/material";
//components
import { FooterTypography } from "src/components/common";
//MUI icons
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
//react dom
import { useNavigate } from "react-router-dom";
//constants
import {
  COMPANY_MAIN_PHONE_NUMBER,
  COMPANY_PHONE_NUMBER,
  COMPANY_EMAIL,
  COMPANY_LOCATION
} from "src/constants";
import { useEffect } from "react";

export default function Footer() {
  const navigate = useNavigate();
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
          gap: { xl: 66.25, lg: 25, md: 22.5 },
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Grid
          item
          sx={{
            py: { xs: 10.375, md: 15 }
          }}
        >
          <Grid container direction="column" sx={{ gap: { lg: 5.625, xs: 2.5 } }}>
            <Grid item>
              <Grid
                container
                sx={{ direction: { md: "row", xs: "row" }, gap: { md: 3.125, xs: 2 } }}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <PhoneIcon sx={{ width: 20, height: 20, color: "primary.main" }} />
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
                sx={{ direction: { md: "row", xs: "row" }, gap: { md: 3.125, xs: 2 } }}
              >
                <Grid item>
                  <MailIcon sx={{ width: 22.5, height: 18.75 }} color="primary" />
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
                sx={{ direction: { md: "row", xs: "row" }, gap: { md: 3.125, xs: 2 } }}
              >
                <Grid item>
                  <LocationOnIcon sx={{ width: 18, height: 18 }} color="primary" />
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
          onClick={() => navigate("/")}
          item
          sx={{
            pt: { md: 15 },
            pb: { xs: 10.375, md: 15 },
            cursor: "pointer"
          }}
        >
          <img src="/images/footer.svg" alt="logo" />
        </Grid>
      </Grid>
    </Box>
  );
}

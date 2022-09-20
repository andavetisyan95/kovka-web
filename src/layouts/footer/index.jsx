//MUI components
import { Box, Container, Grid, Typography, Link } from "@mui/material";
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

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "black",
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
                    <Typography
                      sx={{
                        fontSize: { lg: "20px", xs: "16px" },
                        fontWeight: 500,
                        lineHeight: { lg: "25px", xs: "20px" },
                        textAlign: "center"
                      }}
                    >
                      {COMPANY_MAIN_PHONE_NUMBER}
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link sx={{ textDecoration: "none" }} href={`tel:${COMPANY_PHONE_NUMBER}`}>
                    <Typography
                      sx={{
                        fontSize: { lg: "20px", xs: "16px" },
                        fontWeight: 500,
                        lineHeight: { lg: "25px", xs: "20px" },
                        textAlign: "center"
                      }}
                    >
                      {COMPANY_PHONE_NUMBER}
                    </Typography>
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
                    <Typography
                      sx={{
                        fontSize: { lg: "20px", xs: "16px" },
                        fontWeight: 500,
                        lineHeight: { lg: "25px", xs: "20px" },
                        textAlign: "center"
                      }}
                    >
                      {COMPANY_EMAIL}
                    </Typography>
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
                    <Typography
                      sx={{
                        fontSize: { lg: "20px", xs: "16px" },
                        fontWeight: 500,
                        lineHeight: { lg: "25px", xs: "20px" },
                        textAlign: "center"
                      }}
                    >
                      {COMPANY_LOCATION}
                    </Typography>
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

import React from "react";

//Mui components
import { Container, Grid, Typography, Box } from "@mui/material";

//common container
import { BoxBackground, CommonPaper } from "../components/common";

//constants
import {
  COMPANY_EMAIL,
  COMPANY_LOCATION,
  COMPANY_MAIN_PHONE_NUMBER,
  COMPANY_PHONE_NUMBER
} from "../constants";

// icons
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contacts() {
  return (
    <Box>
      <BoxBackground imgName="/images/contacts.jpg" />
      <Container
        sx={{
          pt: { xl: 8, sm: 5, xs: 10 }
        }}
      >
        <CommonPaper title="КОНТАКТНАЯ ИНФОРМАЦИЯ КОМПАНИИ">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={{ xs: 5, lg: 22.5 }}
          >
            <Grid item>
              <Grid container direction="column" gap={5.125}>
                <Grid item>
                  <Grid container direction="row" gap={3}>
                    <Grid item>
                      <PhoneIcon
                        sx={{
                          width: "1em",
                          height: "1em",
                          color: "primary.main",
                          fontSize: { xs: 22, sm: 26, lg: 30 }
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography
                            sx={{
                              fontSize: { xs: 20, sm: 22, xl: 30 },
                              lineHeight: { xs: "27px", sm: "29px", xl: "38px" }
                            }}
                          >
                            {COMPANY_MAIN_PHONE_NUMBER}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{
                              fontSize: { xs: 20, sm: 22, xl: 30 },
                              lineHeight: { xs: "27px", sm: "29px", xl: "38px" }
                            }}
                          >
                            {COMPANY_PHONE_NUMBER}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row" gap={3}>
                    <Grid item>
                      <MailIcon
                        sx={{
                          width: "1em",
                          height: "1em",
                          color: "primary.main",
                          fontSize: { xs: 22, sm: 26, lg: 30 }
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{
                          fontSize: { xs: 20, sm: 22, xl: 30 },
                          lineHeight: { xs: "27px", sm: "29px", xl: "38px" }
                        }}
                      >
                        {COMPANY_EMAIL}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container gap={3} sx={{ direction: "row", flexFlow: "nowrap" }}>
                    <Grid item>
                      <LocationOnIcon
                        sx={{
                          color: "primary.main",
                          fontSize: { xs: 22, sm: 26, lg: 30 }
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{
                          fontSize: { xs: 20, sm: 22, xl: 30 },
                          lineHeight: { xs: "27px", sm: "29px", xl: "38px" }
                        }}
                      >
                        {COMPANY_LOCATION}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" gap={{ xs: 3.75, xl: 0 }}>
                <Grid item>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontFamily: "Mulish",
                      fontStyle: "normal",
                      fontSize: { lg: 20, md: 16, xs: 14 },
                      lineHeight: { lg: "25px", sm: "70px", xs: "42px" },
                      fontWeight: 500,
                      textAlign: "center"
                    }}
                  >
                    ОБРАЩАЙТЕСЬ ДАЖЕ ЗА СОВЕТОМ. МЫ ВАМ ПОМОЖЕМ.
                  </Typography>
                </Grid>
                <Grid item sx={{ alignSelf: "center" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.8461968677025!2d37.14000591612654!3d55.691661704173015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b55a501439297b%3A0x905ba792be5e4606!2s7%2C%20Soloslovo%2C%20Moskovskaya%20oblast'%2C%20Russia%2C%20143081!5e0!3m2!1sen!2s!4v1653732164000!5m2!1sen!2s"
                    loading="lazy"
                    style={{ border: "0px", width: "100%", height: "100%" }}
                    title="map"
                  ></iframe>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CommonPaper>
      </Container>
    </Box>
  );
}

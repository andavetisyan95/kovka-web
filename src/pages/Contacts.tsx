import React from "react";

//Mui components
import { Container, Grid, Typography, Box, Stack } from "@mui/material";

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

//function for title generation
import { TabTitle } from "src/utils/GeneralFunctions";

export default function Contacts() {
  TabTitle("Контакты");
  return (
    <Box>
      <BoxBackground imgName="/images/contacts.jpg" />
      <Container
        sx={{
          pt: { xl: 8, sm: 5, xs: 10 }
        }}
      >
        <CommonPaper title="КОНТАКТНАЯ ИНФОРМАЦИЯ КОМПАНИИ">
          <Stack justifyContent="center" alignItems="center" spacing={{ xs: 5, lg: 22.5 }}>
            <Box>
              <Stack spacing={5.125}>
                <Box>
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
                      <Stack>
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
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
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
                </Box>
                <Box>
                  <Grid container spacing={3} sx={{ direction: "row", flexFlow: "nowrap" }}>
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
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack spacing={{ xs: 3.75, xl: 0 }}>
                <Box>
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
                </Box>
                <Box sx={{ alignSelf: "center" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.8461968677025!2d37.14000591612654!3d55.691661704173015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b55a501439297b%3A0x905ba792be5e4606!2s7%2C%20Soloslovo%2C%20Moskovskaya%20oblast'%2C%20Russia%2C%20143081!5e0!3m2!1sen!2s!4v1653732164000!5m2!1sen!2s"
                    loading="lazy"
                    style={{ border: "0px", width: "100%", height: "100%" }}
                    title="map"
                  ></iframe>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </CommonPaper>
      </Container>
    </Box>
  );
}

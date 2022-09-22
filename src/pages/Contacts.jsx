//Mui components
import { Container, Grid, Typography } from "@mui/material";
//common container
import { BoxBackground, CommonPaper } from "../components/common";
//constants
import {
  COMPANY_MAIN_PHONE_NUMBER,
  COMPANY_PHONE_NUMBER,
  COMPANY_EMAIL,
  COMPANY_LOCATION
} from "src/constants";
//MUI icons
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contacts() {
  return (
    <BoxBackground img="/images/contacts.svg">
      <CommonPaper title="КОНТАКТНАЯ ИНФОРМАЦИЯ КОМПАНИИ">
        <Grid
          container
          direction="column"
          sx={{
            gap: { xs: "40px", lg: "180px" },
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Grid item>
            <Grid container direction="column" sx={{ gap: "41px" }}>
              <Grid item>
                <Grid container direction="row" gap="24px">
                  <Grid item>
                    <PhoneIcon
                      sx={{
                        width: "1em",
                        height: "1em",
                        color: "primary.main",
                        fontSize: { xs: "22px", sm: "26px", lg: "30px" }
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          sx={{
                            fontSize: { xs: "20px", sm: "22px", xl: "30px" },
                            lineHeight: { xs: "27px", sm: "29px", xl: "38px" }
                          }}
                        >
                          {COMPANY_MAIN_PHONE_NUMBER}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          sx={{
                            fontSize: { xs: "20px", sm: "22px", xl: "30px" },
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
                <Grid container direction="row" gap="24px">
                  <Grid item>
                    <MailIcon
                      sx={{
                        width: "1em",
                        height: "1em",
                        color: "primary.main",
                        fontSize: { xs: "22px", sm: "26px", lg: "30px" }
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: { xs: "20px", sm: "22px", xl: "30px" },
                        lineHeight: { xs: "27px", sm: "29px", xl: "38px" }
                      }}
                    >
                      {COMPANY_EMAIL}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="row" gap="24px">
                  <Grid item>
                    <LocationOnIcon
                      sx={{
                        width: "1em",
                        height: "1em",
                        color: "primary.main",
                        fontSize: { xs: "22px", sm: "26px", lg: "30px" }
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: { xs: "20px", sm: "22px", xl: "30px" },
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
            <Grid container direction="column" sx={{ gap: { xs: "30px", xl: 0 } }}>
              <Grid item>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontSize: { lg: "20px", md: "16px", xs: "14px" },
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
    </BoxBackground>
  );
}

//Mui components
import { Box, Container, Grid, Typography } from "@mui/material";
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
      <Container
        sx={{
          pt: { lg: "215px", sm: "200px", xs: "260px" }
        }}
      >
        <CommonPaper title="КОНТАКТНАЯ ИНФОРМАЦИЯ КОМПАНИИ">
          <Grid container direction="column" sx={{ gap: { sm: "80px", xs: "40px" } }}>
            <Grid item pl="80px">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid container direction="row">
                  <Grid item>
                    <PhoneIcon sx={{ width: "1em", height: "1em", color: "primary.main" }} />
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography>{COMPANY_MAIN_PHONE_NUMBER}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{COMPANY_PHONE_NUMBER}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </CommonPaper>
      </Container>
    </BoxBackground>
  );
}

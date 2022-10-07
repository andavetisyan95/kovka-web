//react hooks
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

//MUI components
import { Box, Grid, Slide, Hidden } from "@mui/material";

//constants
import { COMPANY_EMAIL, COMPANY_MAIN_PHONE_NUMBER, COMPANY_PHONE_NUMBER } from "src/constants";

//MUi icons
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { CallSectionBox } from "src/components/common";

export default function CallSection() {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);

  const handleChangeVisibility = () => {
    if (window.scrollY >= 0.5) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeVisibility);
    return () => window.removeEventListener("scroll", handleChangeVisibility);
  }, []);

  return (
    <Slide in={!hidden} direcction="down" timeout={500}>
      <Box
        className="flex_center"
        sx={{
          bgcolor: "transparent",
          display: { xl: hidden ? "none" : "block" },
          boxShadow: "0"
        }}
      >
        <Hidden lgUp>
          <Box onClick={() => navigate("/")} className="clickable flex-center">
            <img src={"/images/logo.svg"} alt="logo" width={100} height={100} />
          </Box>
        </Hidden>
        <Hidden xlDown>
          <Grid container className="grid_center" pt={5} columnSpacing={10} pb={1.3}>
            <Grid item>
              <Box className="flex_center" gap={2.5}>
                <Box>
                  <PhoneIcon sx={{ width: 25, height: 25, color: "primary.main" }} />
                </Box>
                <CallSectionBox
                  dir={`tel:${COMPANY_MAIN_PHONE_NUMBER}`}
                  text={COMPANY_MAIN_PHONE_NUMBER}
                />
              </Box>
            </Grid>
            <Grid item>
              <CallSectionBox dir={`tel:${COMPANY_PHONE_NUMBER}`} text={COMPANY_PHONE_NUMBER} />
            </Grid>
            <Grid item>
              <Box className="flex_center" gap="20px">
                <Box>
                  <MailIcon sx={{ width: 25, height: 25 }} color="primary" mt={4.5} mb={1.6} />
                </Box>
                <CallSectionBox dir={`mailto:${COMPANY_EMAIL}`} text={COMPANY_EMAIL} />
              </Box>
            </Grid>
          </Grid>
        </Hidden>
      </Box>
    </Slide>
  );
}

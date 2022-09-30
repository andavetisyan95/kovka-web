//MUI components
import { Box, Grid, Link, Typography, Toolbar, Slide, Hidden } from "@mui/material";
//MUi icons
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
//constants
import { COMPANY_EMAIL, COMPANY_MAIN_PHONE_NUMBER, COMPANY_PHONE_NUMBER } from "src/constants";
//react hooks
import { useNavigate } from "react-router";
import { useState } from "react";

export default function CallSection() {
  const navigate = useNavigate();
  const [hiden, setHiden] = useState(false);

  const handleChangeVisibility = () => {
    if (window.scrollY >= 1) {
      setHiden(true);
    } else {
      setHiden(false);
    }
  };
  window.addEventListener("scroll", handleChangeVisibility);

  return (
    <Slide in={!hiden} direcction="down">
      <Box
        className="flex_center"
        sx={{
          bgcolor: "transparent",
          display: { xl: hiden ? "none" : "block" },
          boxShadow: "0"
        }}
      >
        <Hidden lgUp>
          <Box onClick={() => navigate("/")} className="clickable flex-center">
            <img src={"/images/logo.svg"} alt="logo" width={100} height={100} />
          </Box>
        </Hidden>
        <Hidden xlDown>
          <Toolbar>
            <Grid container className="grid_center" pt={5} columnSpacing={10} pb={1.3}>
              <Grid item>
                <Box className="flex_center" gap={2.5}>
                  <Box>
                    <PhoneIcon sx={{ width: 25, height: 25, color: "primary.main" }} />
                  </Box>
                  <Box>
                    <Link sx={{ textDecoration: "none" }} href={`tel:${COMPANY_MAIN_PHONE_NUMBER}`}>
                      <Typography sx={{ fontSize: 24, fontWeight: 500, lineHeight: "30px" }}>
                        {COMPANY_MAIN_PHONE_NUMBER}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item>
                <Box>
                  <Link sx={{ textDecoration: "none" }} href={`tel:${COMPANY_PHONE_NUMBER}`}>
                    <Typography
                      sx={{
                        fontSize: 24,
                        fontWeight: 500,
                        lineHeight: "30px",
                        textAlign: "center"
                      }}
                    >
                      {COMPANY_PHONE_NUMBER}
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item>
                <Box className="flex_center" gap="20px">
                  <Box>
                    <MailIcon sx={{ width: 25, height: 25 }} color="primary" mt={4.5} mb={1.6} />
                  </Box>
                  <Box>
                    <Link sx={{ textDecoration: "none" }} href={`mailto:${COMPANY_EMAIL}`}>
                      <Typography sx={{ fontSize: 24, fontWeight: 500, lineHeight: "30px" }}>
                        {COMPANY_EMAIL}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Hidden>
      </Box>
    </Slide>
  );
}

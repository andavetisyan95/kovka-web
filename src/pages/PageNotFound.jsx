//Mui components
import { Container, Box, Grid, Typography, Button } from "@mui/material";
//react router
import { useNavigate } from "react-router";
//common component
import { BoxBackground } from "../components/common";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <BoxBackground img="/images/noResult.svg">
      <Container>
        <Box sx={{ pt: { lg: "160px", sm: "120px", xs: "80px" } }}>
          <Grid
            container
            sx={{
              bgcolor: "rgba(0,0,0,0.7)",
              gap: { sm: "80", xs: "40px" },
              pt: { xs: "80px" },
              pb: { xs: "80px" }
            }}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography
                sx={{
                  fontSize: { xs: "140px", sm: "250px" },
                  fontFamily: "Play",
                  color: "primary.main"
                }}
              >
                404
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: "40px", lineHeight: "50px" }}>
                Страница не найдена
              </Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={() => navigate("/")}
                sx={{
                  color: "black",
                  fontSize: { xs: "16px", sm: "18px" },
                  textTransform: "none",
                  fontWeight: "700",
                  lineHeight: { xs: "20px", sm: "25px" },
                  width: { xs: "304px", sm: "320px" },
                  height: { xs: "60px", sm: "80px" },
                  "&:hover": {
                    background: "transparent",
                    color: "primary.main",
                    border: "1px solid #FFDB7F"
                  }
                }}
              >
                Вернуться на главную
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </BoxBackground>
  );
}

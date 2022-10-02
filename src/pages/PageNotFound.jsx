//Mui components
import { Container, Box, Grid, Typography, Button } from "@mui/material";
//react router
import { useNavigate } from "react-router";
//common component
import { BoxBackground } from "../components/common";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <BoxBackground img="/images/noResult.svg" />
      <Container>
        <Box sx={{ pt: { lg: 20, sm: 15, xs: 10 } }}>
          <Grid
            container
            sx={{
              bgcolor: "rgba(0,0,0,0.7)",
              gap: { sm: 10, xs: 5 },
              pt: { xs: 10 },
              pb: { xs: 10 }
            }}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography
                sx={{
                  fontSize: { xs: 140, sm: 250 },
                  fontFamily: "Play",
                  color: "primary.main"
                }}
              >
                404
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 40, lineHeight: "50px" }}>Страница не найдена</Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={() => navigate("/")}
                sx={{
                  color: "black",
                  fontSize: { xs: 16, sm: 18 },
                  textTransform: "none",
                  fontWeight: "700",
                  lineHeight: { xs: "20px", sm: "25px" },
                  width: { xs: 304, sm: 320 },
                  height: { xs: 60, sm: 80 },
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
    </>
  );
}

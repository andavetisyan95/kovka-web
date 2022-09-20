//Mui components
import { Box, Container, Grid, Typography, Button } from "@mui/material";
//react router
import { useNavigate } from "react-router";
//common component
import { CommonBox } from "../components/common";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: "url(/images/noResult.svg)",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Container>
        <CommonBox>
          <Grid
            container
            sx={{
              bgcolor: "rgba(0,0,0,0.7)",
              gap: { sm: "80px", xs: "40px" },
              py: { lg: "80px" }
            }}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <img src="/images/404.svg" alt="404" />
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: "30px", lineHeight: "50px" }}>
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
                  lineHeight: { xs: "20px", sm: "25px" },
                  width: { xs: "304px", sm: "320px" },
                  height: { xs: "60px", sm: "80px" }
                }}
              >
                Вернуться на главную
              </Button>
            </Grid>
          </Grid>
        </CommonBox>
      </Container>
    </Box>
  );
}

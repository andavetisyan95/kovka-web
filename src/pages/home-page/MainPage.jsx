//MUI components
import { Box, Container, Typography, Grid, Button } from "@mui/material";
//react hooks
import { useNavigate } from "react-router";
// import { makeStyles } from "@mui/styles";
//react components
import CommonPaper from "src/components/common/CommonPaper";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: "url(/images/mainBack.svg)",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {" "}
      <Container
        sx={{
          pt: { lg: "215px", sm: "200px", xs: "260px" }
        }}
      >
        <CommonPaper title="ПРОИЗВОДИТЕЛЬ КОВАННЫХ ИЗДЕЛИЙ">
          <Grid container direction="column" sx={{ gap: { sm: "80px", xs: "40px" } }}>
            <Grid item>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: { xs: "16px", sm: "30px", lg: "40px" }
                }}
              >
                Один из ведущих производителей кованых изделий в Московской области
              </Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={() => navigate("/catalog")}
                sx={{
                  color: "black",
                  fontSize: { xs: "16px", sm: "18px" },
                  textTransform: "capitalize",
                  lineHeight: { xs: "20px", sm: "25px" },
                  width: { xs: "304px", sm: "320px" },
                  height: { xs: "60px", sm: "80px" }
                }}
              >
                Каталог
              </Button>
            </Grid>
          </Grid>
        </CommonPaper>
      </Container>
    </Box>
  );
}

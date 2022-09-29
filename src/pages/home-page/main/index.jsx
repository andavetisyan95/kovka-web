//MUI components
import { Container, Typography, Grid, Button } from "@mui/material";
//react hooks
import { useNavigate } from "react-router";
//react components
import { BoxBackground, CommonPaper } from "src/components/common/";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <BoxBackground img="/images/mainBack.svg">
      {" "}
      <Container sx={{ pt: { xl: 30, xs: 22.5 } }}>
        <CommonPaper title="ПРОИЗВОДИТЕЛЬ КОВАННЫХ ИЗДЕЛИЙ">
          <Grid container direction="column" sx={{ gap: { sm: 10, xs: 5 } }}>
            <Grid item sx={{ pr: 5 }}>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: { xs: 16, sm: 30, lg: 40 }
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
                  fontSize: { xs: 16, sm: 18 },
                  textTransform: "capitalize",
                  lineHeight: { xs: "20px", sm: "25px" },
                  width: { xs: 280, sm: 320 },
                  height: { xs: 60, sm: 80 }
                }}
              >
                Каталог
              </Button>
            </Grid>
          </Grid>
        </CommonPaper>
      </Container>
    </BoxBackground>
  );
}

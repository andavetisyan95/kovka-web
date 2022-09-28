//Mui components
import { Container, Grid, Typography } from "@mui/material";
//react components
import { BoxBackground, CommonPaper } from "src/components/common";

export default function Advanteg({ advanteges }) {
  return (
    <BoxBackground img="/images/mainBack2.svg">
      <Container sx={{ py: { lg: 10, xs: 5 } }}>
        <CommonPaper title="ПОЧЕМУ ВЫБИРАЮТ НАС?">
          <Grid container direction="column" sx={{ gap: { sm: 10, xs: 5 } }}>
            {advanteges?.map(({ title, subtitle, id }) => (
              <Grid item key={id}>
                <Grid container direction="column" sx={{ gap: { xs: 2, sm: 3 } }}>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: { lg: 40, sm: 30, xs: 24 },
                        lineHeight: { lg: "50px", sm: "30px", xs: "30px" }
                      }}
                    >
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: { lg: 20, xs: 16 },
                        lineHeight: { lg: "28px", xs: "22px" }
                      }}
                    >
                      {subtitle}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </CommonPaper>
      </Container>
    </BoxBackground>
  );
}

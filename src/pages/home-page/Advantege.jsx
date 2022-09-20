//Mui components
import { Box, Container, Grid, Typography } from "@mui/material";
//react components
import { CommonPaper } from "src/components/common";

export default function Advantege({ advanteges }) {
  return (
    <Box
      sx={{
        background: "url(/images/mainBack2.svg)",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Container sx={{ py: { lg: "80px", xs: "40px" } }}>
        <CommonPaper title="ПОЧЕМУ ВЫБИРАЮТ НАС?">
          <Grid container direction="column" sx={{ gap: { sm: "80px", xs: "40px" } }}>
            {advanteges?.map(({ title, subtitle, id }) => (
              <Grid item key={id}>
                <Grid container direction="column" sx={{ gap: { xs: "16px", sm: "24px" } }}>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: { lg: "40px", sm: "30px", xs: "24px" },
                        lineHeight: { lg: "50px", sm: "30px", xs: "30px" }
                      }}
                    >
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: { lg: "20px", xs: "16px" },
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
    </Box>
  );
}

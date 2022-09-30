//Mui components
import { Grid, Typography } from "@mui/material";
//react components
import { CommonPaper } from "src/components/common";

export default function Advanteg({ advanteges }) {
  return (
    <Grid container sx={{ pt: { xs: 10, sm: 15, lg: 20 } }}>
      <Grid
        item
        sx={{
          background: "url(/images/mainBack2.svg)",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 10 }
        }}
      >
        <Grid
          container
          width="100%"
          sx={{
            justifyContent: "center",
            posititon: "relative",
            px: { xs: 3, sm: 12 }
          }}
        >
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
        </Grid>
      </Grid>
    </Grid>
  );
}

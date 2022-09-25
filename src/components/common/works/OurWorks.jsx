//Mui components
import { Grid, Hidden, Typography } from "@mui/material";
//react router
import { NavLink } from "react-router-dom";
//react components
import { BoxForWorks, CommonBox } from "src/components/common";

export default function OurWorks() {
  return (
    <CommonBox title="НАШИ РАБОТЫ">
      <Grid container spacing={8} direction="column">
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4.5} lg={3}>
              <BoxForWorks imgName="reshotka.svg" />
            </Grid>
            <Grid item xs={6} sm={7.5} lg={5}>
              <BoxForWorks imgName="stul.svg" />
            </Grid>
            <Hidden lgDown>
              <Grid item lg={4}>
                <BoxForWorks imgName="gates.svg" />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={8} lg={6}>
              <BoxForWorks imgName="gates.svg" />
            </Grid>
            <Hidden smDown>
              <Grid item sm={4} lg={3}>
                <BoxForWorks imgName="reshotka.svg" />
              </Grid>
            </Hidden>
            <Hidden lgDwon>
              <Grid item lg={3}>
                <BoxForWorks imgName="stul.svg" />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid item>
          <NavLink to={"/catalog"}>
            <Typography
              className="watch-more"
              sx={{ fontSize: { sx: "16px", sm: "20px" }, lineHeight: { sm: "25px", xs: "20px" } }}
            >
              Посмотреть больше
            </Typography>
          </NavLink>
        </Grid>
      </Grid>
    </CommonBox>
  );
}

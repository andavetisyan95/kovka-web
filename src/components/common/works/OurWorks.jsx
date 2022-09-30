//Mui components
import { Grid, Hidden, Typography } from "@mui/material";
//react router
import { NavLink } from "react-router-dom";
//react components
import { BoxForWorks, CommonBox } from "src/components/common";

export default function OurWorks() {
  const imageList = [
    "/images/reshotka.svg",
    "/images/stul.svg",
    "/images/gates.svg",
    "/images/perila.svg",
    "/images/vrata.svg",
    "/images/kovannie-perila.svg"
  ];
  return (
    <CommonBox title="НАШИ РАБОТЫ">
      <Grid container spacing={8} direction="column">
        <Grid item xs={12}>
          <Grid
            container
            spacing={{
              xs: 1,
              sm: 2,
              lg: 3
            }}
          >
            <Grid item xs={6} sm={4.5} lg={3}>
              <BoxForWorks imgName="/images/reshotka.svg" imageList={imageList} />
            </Grid>
            <Grid item xs={6} sm={7.5} lg={5}>
              <BoxForWorks imgName="/images/stul.svg" imageList={imageList} />
            </Grid>
            <Hidden lgDown>
              <Grid item lg={4}>
                <BoxForWorks imgName="/images/gates.svg" imageList={imageList} />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={8} lg={6}>
              <BoxForWorks imgName="/images/perila.svg" imageList={imageList} />
            </Grid>
            <Hidden smDown>
              <Grid item sm={4} lg={3}>
                <BoxForWorks imgName="/images/vrata.svg" imageList={imageList} />
              </Grid>
            </Hidden>
            <Hidden only={["xs", "sm", "md"]}>
              <Grid item lg={3}>
                <BoxForWorks imgName="/images/kovannie-perila.svg" imageList={imageList} />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid item>
          <NavLink to={"/catalog"}>
            <Typography
              className="watch-more"
              sx={{ fontSize: { sx: 16, sm: 20 }, lineHeight: { sm: "25px", xs: "20px" } }}
            >
              Посмотреть больше
            </Typography>
          </NavLink>
        </Grid>
      </Grid>
    </CommonBox>
  );
}

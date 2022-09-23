//Mui components
import { Grid, Typography } from "@mui/material";
//react router
import { NavLink } from "react-router-dom";
//react components
import { BoxForWorks, CommonBox } from "src/components/common";
//react hooks
import { useState } from "react";

export default function OurWorks() {
  const [hover, setHover] = useState(false);
  const showIcon = id => {
    setHover(id);
  };
  return (
    <CommonBox title="НАШИ РАБОТЫ">
      <Grid container spacing={8} direction="column">
        <Grid item>
          <Grid container sx={{ gap: "20px" }}>
            <Grid item sx={{ cursor: "pointer" }} xs={6} sm={4.5} lg={3}>
              <BoxForWorks imgName="reshotka.svg" />
            </Grid>
            <Grid item sx={{ cursor: "pointer" }} xs={6} sm={7.5} lg={5}>
              <BoxForWorks imgName="stul.svg" />
            </Grid>
            <Grid item sx={{ cursor: "pointer", display: { xs: "none", lg: "block" } }} lg={4}>
              <BoxForWorks imgName="gates.svg" />
            </Grid>
            <Grid item sx={{ cursor: "pointer" }} xs={12} sm={8} lg={6}>
              <BoxForWorks imgName="gates.svg" />
            </Grid>
          </Grid>
          <Grid item sx={{ cursor: "pointer", display: { xs: "none", sm: "block" } }} sm={4} lg={3}>
            <BoxForWorks imgName="reshotka.svg" />
          </Grid>
          <Grid item sx={{ cursor: "pointer", display: { xs: "none", lg: "block" } }} lg={3}>
            <BoxForWorks imgName="stul.svg" />
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

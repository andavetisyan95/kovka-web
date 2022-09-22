//Mui components
import { Grid, Typography, ImageList, ImageListItem } from "@mui/material";
//react router
import { NavLink } from "react-router-dom";
//react components
import { CommonBox } from "src/components/common";

export default function OurWorks({ works }) {
  return (
    <CommonBox title="НАШИ РАБОТЫ">
      <Grid container spacing={8}>
        <Grid item>
          <Grid container spacing={3}>
            {works?.slice(0, 6).map(({ image, id, subtitle }) => (
              <Grid item sx={{ cursor: "pointer" }} key={id}>
                <img src={image} alt={subtitle} />
              </Grid>
            ))}
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

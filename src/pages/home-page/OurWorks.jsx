//Mui components
import { Grid, Typography, ImageList, ImageListItem } from "@mui/material";
//react router
import { NavLink } from "react-router-dom";
//react components
import { CommonBox } from "src/components/common";

export default function OurWorks({ works }) {
  return (
    <CommonBox title="НАШИ РАБОТЫ">
      <Grid
        container
        sx={{
          pb: { lg: "160px", sm: "120px", xs: "80px" }
        }}
      >
        <Grid item>
          <ImageList cols={3}>
            {works?.slice(0, 6).map(({ image, id, subtitle }) => (
              <ImageListItem sx={{ cursor: "pointer" }} key={id}>
                <img src={image} alt={subtitle} />
              </ImageListItem>
            ))}
          </ImageList>
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

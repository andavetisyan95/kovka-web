//Mui components
import { Box, Button, Grid } from "@mui/material";
//Mui icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//react hooks
import { memo, useState } from "react";

export default memo(function ImgModal({ currentImg, imageList }) {
  const [current, setCurrent] = useState(imageList.indexOf(currentImg));

  if (!Array.isArray(imageList) || imageList.length <= 0) {
    return null;
  }

  const nextImg = () => {
    setCurrent(current === imageList.length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? imageList.length - 1 : current - 1);
  };

  return (
    <Grid
      container
      sx={{
        direction: { xs: "column", md: "row" },
        outline: "none",
        border: "none"
      }}
      rowSpacing={6}
      columnSpacing={3}
      justifyContent="center "
      alignItems="center"
    >
      <Grid item sx={{ order: { xs: "1", md: "0" } }}>
        <Button
          sx={{
            width: 70,
            height: 70,
            borderRadius: "0px"
          }}
          onClick={prevImg}
        >
          <ArrowBackIosIcon
            sx={{
              color: "black",
              pl: "5px"
            }}
          />
        </Button>
      </Grid>
      <Grid item md={7} xs={12} order={{ xs: "0", md: "1" }}>
        <Box position="relative" sx={{ overflow: "hidden" }}>
          {imageList.map(
            (el, i) =>
              i === current && (
                <img
                  width="100%"
                  height={500}
                  style={{ objectFit: "cover", borderRadius: "0px" }}
                  src={el}
                  alt={el}
                />
              )
          )}
        </Box>
      </Grid>
      <Grid item sx={{ order: { xs: "2", md: "3" } }}>
        <Button sx={{ width: 70, height: 70, borderRadius: "0px" }} onClick={nextImg}>
          <ArrowForwardIosIcon sx={{ color: "black" }} />
        </Button>
      </Grid>
    </Grid>
  );
});

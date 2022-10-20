import React from "react";

//react hooks
import { useState } from "react";

//Mui components
import { Box, Button, Grid } from "@mui/material";

//react-slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Mui icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type ImgModalProps = {
  currentImg: string;
  imageList: string[];
};

type Settings = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
};

export default function ImgModal({ currentImg, imageList }: ImgModalProps) {
  const [current, setCurrent] = useState<number>(imageList.indexOf(currentImg));

  if (!Array.isArray(imageList) || imageList.length <= 0) {
    return null;
  }

  const nextImg = () => {
    setCurrent(current === imageList.length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? imageList.length - 1 : current - 1);
  };

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "70%", lg: "60%" },
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <Grid container sx={{ width: "100%", flexWrap: "wrap", position: "relative" }}>
        <Button
          sx={{
            width: { xs: 54, sm: 70 },
            left: { xs: `calc(50% - 70px)`, sm: `calc(50% - 80px)`, md: "-120px" },
            top: { md: "50%" },
            bottom: { xs: "-70px", sm: "-110px", md: "unset" },
            height: { xs: 54, sm: 70 },
            borderRadius: "0px",
            position: "absolute",
            transform: { md: "translate(0%, -50%)" }
          }}
          onClick={prevImg}
        >
          <ArrowBackIosIcon
            sx={{
              color: "black",
              pl: "4px"
            }}
          />
        </Button>
        <Slider {...settings}>
          {imageList.map(
            (el, i) =>
              i === current && (
                <img
                  width="100%"
                  height={500}
                  style={{ objectFit: "cover", borderRadius: "0px" }}
                  src={el}
                  alt={el}
                  key={i}
                />
              )
          )}
        </Slider>
        <Button
          sx={{
            width: { xs: 54, sm: 70 },
            height: { xs: 54, sm: 70 },
            borderRadius: "0px",
            position: "absolute",
            top: { md: "50%" },
            bottom: { xs: "-70px", sm: "-110px", md: "unset" },
            transform: { md: "translate(0%,-50%)" },
            right: { xs: `calc(50% - 70px)`, sm: `calc(50% - 80px)`, md: "-120px" }
          }}
          onClick={nextImg}
        >
          <ArrowForwardIosIcon sx={{ color: "black" }} />
        </Button>
      </Grid>
    </Box>
  );
}

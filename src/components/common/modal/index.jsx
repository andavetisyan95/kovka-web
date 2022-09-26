//Mui components
import { Box, Button, Fade, Grid, Modal } from "@mui/material";
//Mui icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//react hooks
import { memo, useState } from "react";

export default memo(function ImgModal({ setOpen, close, currentImg, imageList }) {
  const [current, setCurrent] = useState(imageList.indexOf(currentImg));

  const nextImg = () => {
    setCurrent(current === imageList.length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? imageList.length - 1 : current - 1);
    console.log(current);
  };
  if (!Array.isArray(imageList) || imageList.length <= 0) {
    return null;
  }
  return (
    <Modal
      sx={{
        width: "100%",
        height: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      open={setOpen}
      onClose={close}
    >
      <Grid
        container
        sx={{ direction: { xs: "column", md: "row" } }}
        rowSpacing={6}
        columnSpacing={3}
        justifyContent="center "
        alignItems="center"
      >
        <Grid item sx={{ order: { xs: "1", md: "0" } }}>
          <Button
            sx={{
              width: "70px",
              height: "70px",
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
          <Fade in={setOpen} timeout={300}>
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
          </Fade>
        </Grid>
        <Grid item sx={{ order: { xs: "2", md: "3" } }}>
          <Button sx={{ width: "70px", height: "70px", borderRadius: "0px" }} onClick={nextImg}>
            <ArrowForwardIosIcon sx={{ color: "black" }} />
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
});
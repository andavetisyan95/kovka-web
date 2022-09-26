//Mui components
import { Box, Button, Modal } from "@mui/material";
//Mui icons
import ZoomInIcon from "@mui/icons-material/ZoomIn";
//react hooks
import { memo, useState } from "react";
//React components
import { ImgModal } from "..";

export default memo(function BoxForWorks({ imgName, imageList }) {
  const [hover, setHover] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  const handleClose = () => {
    setModalIsOpen(false);
  };
  return (
    <Box
      onMouseEnter={() => setHover(imgName)}
      onMouseLeave={() => setHover(false)}
      position="relative"
      sx={{ overflow: "hidden", cursor: "pointer" }}
    >
      <img
        src={imgName}
        alt={imgName}
        width="100%"
        height={250}
        style={{ objectFit: "cover", borderRadius: 5 }}
        onClick={() => openModal()}
      />
      {hover === imgName && (
        <Button
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0, 0, 0, 0.7)",
            width: 40,
            height: 40,
            "&:hover": { background: "rgba(0, 0, 0, 0.7)" }
          }}
        >
          <ZoomInIcon sx={{ color: "white", width: 20, height: 20 }} />
        </Button>
      )}
      {modalIsOpen && (
        <ImgModal
          setOpen={modalIsOpen}
          close={handleClose}
          currentImg={imgName}
          imageList={imageList}
        />
      )}
    </Box>
  );
});

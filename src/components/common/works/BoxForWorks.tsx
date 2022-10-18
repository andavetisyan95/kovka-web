//react
import React from "react";
import { useState } from "react";

//Mui components
import { Box, Button, Fade, Modal } from "@mui/material";

//Mui icons
import ZoomInIcon from "@mui/icons-material/ZoomIn";


//React components
import ImgModal from "../modal";

type WorksProps = {
  imgName: string
  imageList: string[]
}

export default function BoxForWorks({ imgName, imageList }:WorksProps){
  const [hover, setHover] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
    setHover(false);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      position="relative"
      sx={{ overflow: "hidden", backgroundSize: "cover" }}
      className="clickable"
    >
      <img
        src={imgName}
        alt={imgName}
        width="100%"
        height={250}
        style={{ objectFit: "cover", borderRadius: 5 }}
        onClick={handleModalOpen}
      />

      <Fade in={hover} timeout={600}>
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
          onClick={handleModalOpen}
        >
          <ZoomInIcon sx={{ color: "white", width: 20, height: 20 }} />
        </Button>
      </Fade>

      <Modal open={modalIsOpen} onClose={handleModalClose} sx={{ inset: "0px" }}>
        <Box>
          <ImgModal currentImg={imgName} imageList={imageList} />
        </Box>
      </Modal>
    </Box>
  );
}

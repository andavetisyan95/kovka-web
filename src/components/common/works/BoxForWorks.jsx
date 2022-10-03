//Mui components
import { Box, Button, Fade, Modal } from "@mui/material";
//Mui icons
import ZoomInIcon from "@mui/icons-material/ZoomIn";
//react hooks
import { useState } from "react";
//React components
import { ImgModal } from "..";

export default function BoxForWorks({ imgName, imageList }) {
  const [hover, setHover] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        onClick={() => {
          setModalIsOpen(true);
          setHover(false);
        }}
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
        >
          <ZoomInIcon sx={{ color: "white", width: 20, height: 20 }} />
        </Button>
      </Fade>

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
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <ImgModal currentImg={imgName} imageList={imageList} />
      </Modal>
    </Box>
  );
}

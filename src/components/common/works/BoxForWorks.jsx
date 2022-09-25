//Mui components
import { Box, Button, Modal } from "@mui/material";
//Mui icons
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { useState } from "react";

export default function BoxForWorks({ imgName }) {
  const [hover, setHover] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(null);
  function openModal(imageName) {
    setModalIsOpen(true);
  }
  return (
    <Box
      onMouseEnter={() => setHover(imgName)}
      onMouseLeave={() => setHover(false)}
      position="relative"
      sx={{ overflow: "hidden", cursor: "pointer" }}
    >
      <img
        src={`/images/${imgName}`}
        alt={imgName}
        width="100%"
        height={250}
        style={{ objectFit: "cover", borderRadius: 5 }}
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
          onClick={() => openModal(imgName)}
        >
          <ZoomInIcon sx={{ color: "white", width: 20, height: 20 }} />
        </Button>
      )}
    </Box>
  );
}

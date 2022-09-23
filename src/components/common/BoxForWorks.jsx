//Mui components
import { Box, Button, IconButton } from "@mui/material";
//Mui icons
import ZoomInIcon from "@mui/icons-material/ZoomIn";

export default function BoxForWorks({ imgName }) {
  return (
    <Box position="relative">
      <img src={`/images/${imgName}`} alt={imgName} />
      <Button
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 0, 0, 0.7)",
          borderRadius: "5px",
          width: "40px",
          height: "40px",
          "&:hover": { background: "rgba(0, 0, 0, 0.7)" }
        }}
      >
        <IconButton>
          <ZoomInIcon sx={{ color: "white", width: "20px", height: "20px" }} />
        </IconButton>
      </Button>
    </Box>
  );
}

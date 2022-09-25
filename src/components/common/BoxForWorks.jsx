//Mui components
import { Box, Button, IconButton } from "@mui/material";
//Mui icons
import ZoomInIcon from "@mui/icons-material/ZoomIn";

export default function BoxForWorks({ imgName }) {
  return (
    <Box position="relative" sx={{ overflow: "hidden" }}>
      <img
        src={`/images/${imgName}`}
        alt={imgName}
        width="100%"
        height={250}
        style={{ objectFit: "cover", borderRadius: 5 }}
      />
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
    </Box>
  );
}

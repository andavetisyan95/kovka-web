//Mui components
import { Grid, Typography, Box, Button, IconButton } from "@mui/material";
//react router
import { NavLink } from "react-router-dom";
//react components
import { CommonBox } from "src/components/common";
//Mui icons
import ZoomInIcon from "@mui/icons-material/ZoomIn";
//react hooks
import { useState } from "react";

export default function OurWorks({ works }) {
  const [hover, setHover] = useState(false);
  const showIcon = id => {
    setHover(id);
  };
  return (
    <CommonBox title="НАШИ РАБОТЫ">
      <Grid container spacing={8}>
        <Grid item>
          <Grid container spacing={3}>
            {works?.slice(0, 6).map(({ image, id, subtitle }) => (
              <Grid
                item
                sx={{ cursor: "pointer" }}
                key={id}
                onMouseEnter={() => showIcon(id)}
                onMouseLeave={() => setHover(false)}
              >
                <Box position="relative">
                  <img src={image} alt={subtitle} />
                  {hover === id ? (
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
                  ) : (
                    ""
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
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

//MUI icons
import CloseIcon from "@mui/icons-material/Close";
//MUI components
import { Grid, IconButton, Drawer, Typography } from "@mui/material";
//react hooks
import { useState } from "react";
//source
import { navLinks } from "src/source/navLinks";
//react dom
import { useNavigate } from "react-router-dom";

export default function DrawerComponent({ open, close }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);
  return (
    <Drawer
      anchor="left"
      open={open}
      sx={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      PaperProps={{
        sx: {
          backgroundColor: "primary.dark",
          width: { xs: "100vw", sm: "auto" },
          pl: { xs: "20px", sm: "96px" },
          pr: { sm: "152px" },
          pt: "152px"
        }
      }}
    >
      <Grid
        container
        direction="column"
        sx={{ justifyContent: "center", alignItems: "center" }}
        spacing={10}
      >
        <Grid item sx={{ alignSelf: { xs: "start", sm: "center" } }}>
          <IconButton onClick={close}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Grid>
        <Grid item>
          <Grid container direction="column" sx={{ gap: { xs: "70px" } }}>
            {navLinks.map(({ title, path }) => (
              <Grid
                key={title}
                item
                onClick={() => {
                  navigate(path);
                  setActive(title);
                }}
                sx={{ cursor: "pointer" }}
                className={active === title ? "active" : "nav_bar_items"}
              >
                <Typography
                  sx={{
                    fontSize: { sm: "20px", xs: "16px" },
                    lineHeight: { sm: "25px", xs: "20px" }
                  }}
                >
                  {title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
}

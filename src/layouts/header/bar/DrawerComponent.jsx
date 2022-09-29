//MUI icons
import CloseIcon from "@mui/icons-material/Close";
//MUI components
import { Grid, IconButton, Drawer, Typography } from "@mui/material";

//source
import { navLinks } from "src/source/navLinks";
//react dom
import { useNavigate } from "react-router-dom";

export default function DrawerComponent({ open, close }) {
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={close}
      sx={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      PaperProps={{
        sx: {
          backgroundColor: "primary.dark",
          width: { xs: "100vw", sm: "auto" },
          pl: { xs: 2.5, sm: 12 },
          pr: { sm: 19 },
          pt: { xs: 16, sm: 19 }
        }
      }}
      ModalProps={{ keepMounted: true }}
    >
      <Grid
        container
        direction="column"
        sx={{ justifyContent: "center", alignItems: "center" }}
        spacing={7}
      >
        <Grid item sx={{ alignSelf: { xs: "start", sm: "center" } }}>
          <IconButton onClick={close}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Grid>
        <Grid item>
          <Grid container direction="column" sx={{ gap: { xs: 8.75 } }}>
            {navLinks.map(({ title, path }) => (
              <Grid
                key={title}
                item
                onClick={close}
                sx={{ cursor: "pointer" }}
                className={window.location.pathname === path ? "active" : "nav_bar_items"}
              >
                <Typography
                  sx={{
                    fontSize: { sm: 20, xs: 16 },
                    lineHeight: { sm: "25px", xs: "20px" }
                  }}
                  onClick={() => navigate(path)}
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

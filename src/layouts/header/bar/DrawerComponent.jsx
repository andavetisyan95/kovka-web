//react router
import { useNavigate } from "react-router";

//MUI components
import { Box, IconButton, Drawer, Typography, Stack } from "@mui/material";

//MUI icons
import CloseIcon from "@mui/icons-material/Close";

//source
import { navLinks } from "src/source/navLinks";

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
    >
      <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} spacing={7}>
        <Box sx={{ alignSelf: { xs: "start", sm: "center" } }}>
          <IconButton onClick={close}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <Box>
          <Stack sx={{ gap: { xs: 8.5 } }}>
            {navLinks.map(({ title, path }) => (
              <Box
                key={title}
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
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Drawer>
  );
}

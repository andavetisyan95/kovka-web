//react
import React from "react";

//react router
import { useNavigate } from "react-router";

//Mui components
import { Container, Box, Typography, Button, Stack } from "@mui/material";

//common component
import { BoxBackground } from "../components/common";

//function for title generation
import { TabTitle } from "src/utils/GeneralFunctions";

export default function PageNotFound() {
  const navigate = useNavigate();

  TabTitle("Not Found");

  return (
    <>
      <BoxBackground imgName="/images/noResult.jpg" />
      <Container>
        <Box sx={{ pt: { lg: 20, sm: 15, xs: 10 } }}>
          <Stack
            sx={{
              bgcolor: "rgba(0,0,0,0.7)",
              pt: { xs: 10 },
              pb: { xs: 10 }
            }}
            spacing={{ sm: 10, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 140, sm: 250 },
                  fontFamily: "Play",
                  color: "primary.main"
                }}
              >
                404
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 40, lineHeight: "50px" }}>Страница не найдена</Typography>
            </Box>
            <Box>
              <Button
                onClick={() => navigate("/")}
                sx={{
                  color: "black",
                  fontSize: { xs: 16, sm: 18 },
                  textTransform: "none",
                  fontWeight: "700",
                  lineHeight: { xs: "20px", sm: "25px" },
                  width: { xs: 304, sm: 320 },
                  height: { xs: 60, sm: 80 },
                  "&:hover": {
                    background: "transparent",
                    color: "primary.main",
                    border: "1px solid #FFDB7F"
                  }
                }}
              >
                Вернуться на главную
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

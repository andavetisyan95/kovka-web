import React from "react";

import { useNavigate } from "react-router";

//MUI components
import { Typography, Button, Stack, Box } from "@mui/material";

//react components
import { CommonPaper } from "src/components/common";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: { lg: 7, sm: 5, xs: 10 }, mb: { lg: 12, sm: 3, xs: 25 } }}>
      <CommonPaper title="ПРОИЗВОДИТЕЛЬ КОВАННЫХ ИЗДЕЛИЙ">
        <Stack spacing={{ sm: 6, xs: 5 }}>
          <Box sx={{ pr: 5 }}>
            <Typography
              sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: { xs: 16, sm: 30, lg: 40 }
              }}
            >
              Один из ведущих производителей кованых изделий в Московской области
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={() => navigate("/catalog")}
              sx={{
                color: "black",
                fontSize: { xs: 16, sm: 18 },
                textTransform: "capitalize",
                lineHeight: { xs: "20px", sm: "25px" },
                width: { xs: 280, sm: 330 },
                height: { xs: 60, sm: 65 }
              }}
            >
              Каталог
            </Button>
          </Box>
        </Stack>
      </CommonPaper>
    </Box>
  );
}

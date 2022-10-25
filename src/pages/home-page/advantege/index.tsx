import React from "react";

//Mui components
import { Box, Stack, Typography } from "@mui/material";

//react components
import { CommonPaper } from "../../../components/common";

//type
import { DataInsertion } from "../../../types/common-types";

export default function Advanteg({ advanteges }: DataInsertion) {
  return (
    <Box sx={{ pt: { xs: 10, sm: 15, lg: 20 } }}>
      <Box
        sx={{
          background: "url(/images/mainBack2.jpg)",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 10 }
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            posititon: "relative",
            px: { xs: 3, sm: 12 }
          }}
        >
          <CommonPaper title="ПОЧЕМУ ВЫБИРАЮТ НАС?">
            <Stack sx={{ gap: { sm: 10, xs: 5 } }}>
              {advanteges?.map(({ title, subtitle, id }) => (
                <Box key={id}>
                  <Stack sx={{ gap: { xs: 2, sm: 3 } }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { lg: 40, sm: 30, xs: 24 },
                          lineHeight: { lg: "50px", sm: "30px", xs: "30px" }
                        }}
                      >
                        {title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { lg: 20, xs: 16 },
                          lineHeight: { lg: "28px", xs: "22px" }
                        }}
                      >
                        {subtitle}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </CommonPaper>
        </Box>
      </Box>
    </Box>
  );
}

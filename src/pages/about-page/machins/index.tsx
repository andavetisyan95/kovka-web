import React from "react";

//MUi components
import { Box, Container, Typography } from "@mui/material";

//Components
import { CommonPaper } from "src/components/common";

export default function Machins() {
  return (
    <Box
      sx={{
        background: "url(/images/Machins.jpg)",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Container sx={{ py: { xs: 10 } }}>
        <CommonPaper title="ОБОРУДОВАНИЕ">
          <Box sx={{ pr: { sm: 10, xs: 2.5 } }}>
            <Typography
              sx={{ fontSize: { sm: 20, xs: 16 }, lineHeight: { sm: "28px", xs: "22px" } }}
            >
              Мы любим металл, и он отвечает нам взаимностью, только так можно создавать поистине
              достойные вещи. Каждый заказ индивидуален. В галерее художественной ковки представлены
              разные по сложности и цене работы. Возможно воплощение любого технического и
              художественного замысла. От стиля минимализм до барокко. Свойства металла принимать
              любые формы даёт возможность создавать дизайнерский металл.
            </Typography>
          </Box>
        </CommonPaper>
      </Container>
    </Box>
  );
}

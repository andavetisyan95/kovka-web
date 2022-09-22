//MUi components
import { Box, Container, Typography } from "@mui/material";

//Components
import { BoxBackground, CommonPaper } from "src/components/common";

export default function Machins() {
  return (
    <BoxBackground img="/images/Machins.svg">
      <Container sx={{ py: { xs: "80px" } }}>
        <CommonPaper title="ОБОРУДОВАНИЕ">
          <Box sx={{ pr: { sm: "80px", xs: "20px" } }}>
            <Typography
              sx={{ fontSize: { sm: "20px", xs: "16px" }, lineHeight: { sm: "28px", xs: "22px" } }}
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
    </BoxBackground>
  );
}

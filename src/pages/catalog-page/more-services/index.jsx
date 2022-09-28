//MUi components
import { Box, Container, Typography } from "@mui/material";

//Components
import { BoxBackground, CommonPaper } from "src/components/common";

export default function MoreServices() {
  return (
    <BoxBackground img="/images/catalogPage.svg">
      <Container sx={{ py: { xs: 10 } }}>
        <CommonPaper title="ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ">
          <Box sx={{ pr: { sm: 10, xs: 2.5 } }}>
            <Typography
              sx={{ fontSize: { sm: 20, xs: 16 }, lineHeight: { sm: "28px", xs: "22px" } }}
            >
              В рабочие дни осуществляется не только ковка, но и гибка, рубка металла. Благодаря
              этому вы можете не только купить элементы ковки, но и воспользоваться услугами по
              гибке и рубке собственных металлических фрагментов.
            </Typography>
          </Box>
        </CommonPaper>
      </Container>
    </BoxBackground>
  );
}

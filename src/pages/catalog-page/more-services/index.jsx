//MUi components
import { Box, Container, Typography } from "@mui/material";

//Components
import { BoxBackground, CommonPaper } from "src/components/common";

export default function MoreServices() {
  return (
    <BoxBackground img="/images/catalogPage.svg">
      <Container sx={{ py: { xs: "80px" } }}>
        <CommonPaper title="ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ">
          <Box sx={{ pr: { sm: "80px", xs: "20px" } }}>
            <Typography
              sx={{ fontSize: { sm: "20px", xs: "16px" }, lineHeight: { sm: "28px", xs: "22px" } }}
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

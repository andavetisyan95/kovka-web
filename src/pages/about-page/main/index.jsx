//Mui components
import { Container, Box, Typography } from "@mui/material";
//React components
import { BoxBackground, CommonPaper } from "src/components/common";

export default function Main() {
  return (
    <BoxBackground img="/images/aboutPage.svg">
      <Container sx={{ pt: { xs: 27.5 }, pb: { xs: 5 } }}>
        <CommonPaper title="О НАС">
          <Box sx={{ pr: { sm: 10, xs: 2.5 } }}>
            <Typography
              sx={{ fontSize: { sm: 20, xs: 16 }, lineHeight: { sm: "28px", xs: "22px" } }}
            >
              У нас Вы можете Заказать оригинальные кованые изделия, которые помогут создать красиво
              неповторимые интерьеры и экстерьеры. Наличие собственной производственного цеха
              позволяет принимать заказы на изготовление изделий. В число изготовляемых изделий
              входят: Лестницы, перила, калитки, ворота, заборы, ограждения. Решения для ландшафтных
              проектов − цветники, беседки, лавки, всё для мангальных зон. Изделия для дома:
              скамейки, стулья и столы, кресла, кровати, принадлежности для камина.Весь товар
              изготавливается мастерами своего дела, работающими в данной сфере уже более 10 года.
              Это гарантирует выполнение заказов в срок и высокое качество изделий художественной
              ковки для вас!
            </Typography>
          </Box>
        </CommonPaper>
      </Container>
    </BoxBackground>
  );
}

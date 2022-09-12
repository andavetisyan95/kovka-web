// import { Container } from "@mui/material";
import NavMenu from "./header/appBar/NavMenu";
import Footer from "src/layouts/footer/Footer";
import { Box, Container } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Box
    // sx={{
    //   width: {
    //     xs: "0",
    //     sm: "21%",
    //     md: "54%",
    //     lg: "75%",
    //     xl: "100%"
    //   }
    // }}
    >
      <NavMenu />

      <Container sx={{ height: "100vh" }}>{children}</Container>
      <Footer />
    </Box>
  );
}

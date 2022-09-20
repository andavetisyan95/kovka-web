//Mui components
import { Box, Container, Grid, Typography } from "@mui/material";
//React router
import { useState } from "react";
import { NavLink } from "react-router-dom";
//react components
import { CommonBox } from "src/components/common";

export default function Services({ services }) {
  const [isShown, setIsShown] = useState(false);
  const showImage = id => {
    setIsShown(true);
    //logica grel vor nkarner@ konkret idnerov beri cuyc ta
  };

  return (
    <CommonBox title="НАШИ УСЛУГИ">
      <Grid container direction="row" columnSpacing={10}>
        <Grid item>
          <Grid container sx={{ gap: { xs: "24px", sm: "40px" } }} direction="column">
            {services?.map(({ title, id, item }) => (
              <Grid item key={id}>
                <NavLink to={`/catalog_item/${item}`}>
                  <Typography
                    className="kovka_items"
                    variant="div"
                    component="div"
                    onMouseEnter={() => showImage(id)}
                    onMouseLeave={() => setIsShown(false)}
                    sx={{
                      fontSize: { lg: "30px", sm: "24px", xs: "20px" },
                      lineHeight: { lg: "38px", sm: "30px", xs: "25px" }
                    }}
                  >
                    {title}
                  </Typography>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item sx={{ display: { xs: "none", lg: "block" } }}>
          {/* nkarner@ dzevov bacen */}
          {isShown && <img width="662px" height="500px" src={"/images/gates.svg"} />}
        </Grid>
      </Grid>
    </CommonBox>
  );
}

//Mui components
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
//React router
import { useState } from "react";
//react components
import { CommonBox } from "src/components/common";

export default function Services({ services }) {
  const [isShown, setIsShown] = useState(false);

  const showImage = i => {
    setIsShown(true);
    //logica grel vor nkarner@ konkret idnerov beri cuyc ta
  };

  return (
    <CommonBox title="НАШИ УСЛУГИ">
      <Grid container direction="row" columnSpacing={10}>
        <Grid item>
          <Grid container direction="column">
            {services?.map(({ title, id }, i) => (
              <Grid item key={id}>
                <List>
                  <ListItem sx={{ padding: 0, cursor: "pointer" }}>
                    <ListItemText>
                      <Typography
                        variant="span"
                        component="span"
                        className="kovka_items"
                        onMouseEnter={() => showImage(i)}
                        onMouseLeave={() => setIsShown(false)}
                        sx={{
                          fontSize: { lg: "30px", sm: "24px", xs: "20px" },
                          lineHeight: { lg: "38px", sm: "30px", xs: "25px" }
                        }}
                      >
                        {title}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item sx={{ display: { xs: "none", lg: "block" } }}>
          {/* nkarner@ dzevov bacen */}
          {isShown && <img width="662px" height="500px" src={"/images/stul.svg"} alt="works" />}
        </Grid>
      </Grid>
    </CommonBox>
  );
}

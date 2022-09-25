//Mui components
import { Fade, Grid, Hidden, List, ListItem, ListItemText, Typography } from "@mui/material";
//React router
import { useState } from "react";
//react components
import { CommonBox } from "src/components/common";

export default function Services({ services }) {
  const [isShown, setIsShown] = useState(false);
  const [imgName, setImgName] = useState([]);

  const showImage = i => {
    setIsShown(true);
    services?.filter(el => {
      if (el.id === i) {
        return setImgName(el);
      } else {
        return null;
      }
    });
  };

  return (
    <CommonBox title="НАШИ УСЛУГИ">
      <Grid container columnSpacing={5}>
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
                          fontSize: { lg: 30, sm: 24, xs: 20 },
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
        <Hidden lgDown>
          <Grid item lg={6} xl={7}>
            {/* nkarner@ dzevov bacen */}
            {isShown && (
              <Fade in={isShown} timeout={1500}>
                <img width="100%" height={500} src={imgName.image} alt="works" />
              </Fade>
            )}
          </Grid>
        </Hidden>
      </Grid>
    </CommonBox>
  );
}

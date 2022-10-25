import React from "react";

//React hooks
import { useState } from "react";
import { useNavigate } from "react-router";

//Mui components
import {
  Fade,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Typography,
  Stack,
  Box
} from "@mui/material";

//react components
import { CommonBox } from "src/components/common";

//types
import { DataInsertion, Product } from "src/types/common-types";

//confguration for Typography variant property
declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    span: true;
  }
}

export default function Services({ services }: DataInsertion) {
  const [isShown, setIsShown] = useState(false);
  const [image, setImage] = useState<Product>();
  const navigate = useNavigate();

  const showImage = (i: number) => {
    setIsShown(true);
    services?.filter(el => {
      if (el.id === i) {
        return setImage(el);
      } else {
        return null;
      }
    });
  };

  return (
    <CommonBox title="НАШИ УСЛУГИ">
      <Grid container columnSpacing={1.5}>
        <Grid item>
          <Stack spacing={1.5}>
            {services?.map(({ title, id, item }, i) => (
              <Box key={id}>
                <List>
                  <ListItem
                    sx={{ padding: 0, cursor: "pointer" }}
                    onClick={() => navigate(`/catalog_item/${item}`)}
                  >
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
              </Box>
            ))}
          </Stack>
        </Grid>
        <Hidden lgDown>
          <Grid item lg={6} xl={7} position="relative" sx={{ overflow: "hidden" }}>
            {isShown && (
              <Fade in={isShown} timeout={1500}>
                <img
                  style={{ objectFit: "cover", borderRadius: 5 }}
                  width="100%"
                  height={500}
                  src={image?.image}
                  alt="works"
                />
              </Fade>
            )}
          </Grid>
        </Hidden>
      </Grid>
    </CommonBox>
  );
}

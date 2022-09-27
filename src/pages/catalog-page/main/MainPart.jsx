//react axios
import axios from "axios";
//Mui components
import { Box, Grid, Typography } from "@mui/material";
//react hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
//react components
import { CatalogBox } from "..";

export default function Main() {
  const [works, setWorks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/services")
      .then(res => setWorks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Box
      sx={{
        pt: { xl: "280px", lg: "200px", xs: "200px" },
        pb: { xs: "80px" },
        px: { xl: "228px", lg: "170px", sm: "70px", xs: "24px" }
      }}
    >
      <Grid container sx={{ gap: { xs: "40px", sm: "80px" } }}>
        <Grid item>
          <Typography
            variant="h1"
            sx={{
              color: "primary.main",
              fontFamily: "Play",
              fontStyle: "normal",
              fontSize: { sm: "50px", xs: "30px" },
              lineHeight: { lg: "69px", sm: "70px", xs: "42px" },
              fontWeight: 400
            }}
          >
            КАТАЛОГ
          </Typography>
        </Grid>
        <Grid item>
          <Grid container columnSpacing={3} rowSpacing={2}>
            {works.map(({ title, description, item, image, id }) => (
              <Grid
                item
                key={`${title}_${id}`}
                xs={12}
                sm={6}
                lg={4}
                onClick={() => navigate(`/catalog_item/${item}`)}
              >
                <CatalogBox title={title} description={description} item={item} image={image} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

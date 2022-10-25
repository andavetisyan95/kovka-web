import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";

//react-router
import { NavLink } from "react-router-dom";

//Mui components
import { Box, Grid, Hidden, Stack, Typography } from "@mui/material";

//react components
import CommonBox from "../common-box";
import BoxForWorks from "./BoxForWorks";

export default function OurWorks() {
  const [servicesData, setServiceData] = useState<[]>([]);

  const getImages = useCallback(async () => {
    const { data } = await axios.get<[]>(process.env.REACT_APP_SERVICE_HOST as string);
    setServiceData(data);
  }, []);

  useEffect(() => {
    getImages();
  }, [getImages]);

  const imageList: string[] = servicesData.map(({ image }) => image);

  return (
    <CommonBox title="НАШИ РАБОТЫ">
      <Stack spacing={8}>
        <Box>
          <Grid
            container
            spacing={{
              xs: 1,
              sm: 2,
              lg: 3
            }}
          >
            <Grid item xs={6} sm={4.5} lg={3}>
              <BoxForWorks imgName={imageList[0]} imageList={imageList} />
            </Grid>
            <Grid item xs={6} sm={7.5} lg={5}>
              <BoxForWorks imgName={imageList[1]} imageList={imageList} />
            </Grid>
            <Hidden only={["xs", "sm", "md"]}>
              <Grid item lg={4}>
                <BoxForWorks imgName={imageList[2]} imageList={imageList} />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={8} lg={6}>
              <BoxForWorks imgName={imageList[3]} imageList={imageList} />
            </Grid>
            <Hidden smDown>
              <Grid item sm={4} lg={3}>
                <BoxForWorks imgName={imageList[4]} imageList={imageList} />
              </Grid>
            </Hidden>
            <Hidden only={["xs", "sm", "md"]}>
              <Grid item lg={3}>
                <BoxForWorks imgName={imageList[5]} imageList={imageList} />
              </Grid>
            </Hidden>
          </Grid>
        </Box>
        <Box>
          <NavLink to={"/catalog"}>
            <Typography
              className="watch-more"
              sx={{ fontSize: { sx: 16, sm: 20 }, lineHeight: { sm: "25px", xs: "20px" } }}
            >
              Посмотреть больше
            </Typography>
          </NavLink>
        </Box>
      </Stack>
    </CommonBox>
  );
}

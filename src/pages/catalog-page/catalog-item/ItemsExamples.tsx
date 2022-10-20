import React from "react";

//Mui components
import { Box, Grid } from "@mui/material";

//React components
import { BoxForWorks, CommonBox } from "../../../components/common";

type ExamplesParams = {
  id: number;
  image: string;
};

type ItemsExamplesProps = {
  examples: ExamplesParams[];
};

export default function ItemsExamples({ examples }: ItemsExamplesProps) {
  const exampleImages: string[] = examples?.map(({ image }) => image);

  return (
    <Box px={{ xl: 28.5, xs: 3, sm: 12 }} pb={10}>
      <CommonBox title="Примеры работ ">
        <Grid container spacing={2}>
          {examples?.map(({ image, id }) => (
            <Grid key={id} item xs={12} sm={6} lg={4}>
              <BoxForWorks imgName={image} imageList={exampleImages} />
            </Grid>
          ))}
        </Grid>
      </CommonBox>
    </Box>
  );
}

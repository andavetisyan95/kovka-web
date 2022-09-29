//Mui components
import { Box, Grid } from "@mui/material";
//React components
import { BoxForWorks, CommonBox } from "src/components/common";

export default function ItemsExamples({ examples }) {
  const exampleImages = examples?.map(({ image }) => image);

  return (
    <Box sx={{ ml: { xl: 8 } }}>
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

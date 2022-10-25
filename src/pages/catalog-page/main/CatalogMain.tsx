import React from "react";

//react hooks
import { useNavigate } from "react-router";

//MUi components
import { Grid } from "@mui/material";

//react component
import { CatalogBox, CatalogCommon } from "..";

//types
import { Product } from "src/types/common-types";

type CatalogMainProps = {
  items: Product[];
};

export default function CatalogMain({ items }: CatalogMainProps) {
  const navigate = useNavigate();

  return (
    <CatalogCommon title="КАТАЛОГ">
      <Grid container columnSpacing={3} rowSpacing={2}>
        {items?.map(({ title, description, item, image, id }) => (
          <Grid
            item
            key={`${title}_${id}`}
            xs={12}
            sm={6}
            lg={4}
            onClick={() => navigate(`/catalog_item/${item}`)}
          >
            <CatalogBox title={title} description={description} image={image} />
          </Grid>
        ))}
      </Grid>
    </CatalogCommon>
  );
}

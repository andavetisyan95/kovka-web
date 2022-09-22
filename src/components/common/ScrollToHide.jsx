import { Slide, useScrollTrigger } from "@mui/material";
import React from "react";
//Mui components

export default function ScrollToHide(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.treshold,
    target: props.window ? window() : undefined
  });

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

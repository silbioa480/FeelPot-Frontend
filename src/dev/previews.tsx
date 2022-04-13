import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Router from "../Router";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/PaletteTree">
        <PaletteTree />
      </ComponentPreview>
      <ComponentPreview path="/Router">
        <Router />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;

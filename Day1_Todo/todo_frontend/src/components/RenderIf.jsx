import React from "react";

export const RenderIf = (props) => {
  return <React.Fragment>{props.isTrue ? props.children : ""}</React.Fragment>;
};

import React from "react";
import FunctionalComponentContainer from "../../src/components/units/21-functional-component/FunctionalComponent.container";

export default function MapElPage() {
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log(el);
    console.log();
    console.log("asdf", asdf);
    console.log();
  });

  return <FunctionalComponentContainer />;
  // return <></>;
}

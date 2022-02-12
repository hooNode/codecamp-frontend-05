import React from "react";
import FunctionalComponentUI from "./FunctionalComponent.Presenter";

export default function FunctionalComponentContainer() {
  return <FunctionalComponentUI count={2000} />;
  // return <>{FunctionalComponentUI({ count: 100 })}</>;
}

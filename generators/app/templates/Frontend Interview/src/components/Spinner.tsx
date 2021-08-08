import React from "react";
import "../../assets/spinnerCss.css";

export const Spinner = React.memo(() => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});

Spinner.displayName = "Spinner";

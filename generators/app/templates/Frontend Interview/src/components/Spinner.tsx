import React from "react";

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

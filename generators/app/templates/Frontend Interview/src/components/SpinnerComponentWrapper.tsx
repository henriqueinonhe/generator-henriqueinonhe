import React from "react";

export interface SpinnerComponentWrapperProps {
  isLoading : boolean;
  children : React.ReactNode;
}

export const SpinnerComponentWrapper = React.memo((props : SpinnerComponentWrapperProps) => {
  const {
    isLoading,
    children
  } = props;

  return (
    <>
      {
        isLoading &&
        children
      }
    </>
  );
});

SpinnerComponentWrapper.displayName = "SpinnerComponentWrapper";
import { useEffect } from "react";

export function useHandleErrors(errorHandler : (error : unknown) => void) : void {
  useEffect(() => {
    window.onunhandledrejection = ((event : PromiseRejectionEvent) => {
      const error = event.reason;
      errorHandler(error);

      event.preventDefault();
    });

    window.onerror = (event, source, lineno, colno, error) => {
      errorHandler({
        event,
        source,
        lineno,
        colno,
        error
      });
    };

    return () => {
      window.onunhandledrejection = null;
      window.onerror = null;
    };
  }, [errorHandler]);
}
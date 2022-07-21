import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export default {
  title: "ErrorBoundary",
  component: ErrorBoundary,
};

const prop = undefined;
const ComponentWithError = () => <h1>{prop.hello}</h1>;
const ComponentWithoutError = () => <h1>Without Error</h1>;

export const ErrorBoundaryWithError = () => (
  <ErrorBoundary>
    <ComponentWithError />
  </ErrorBoundary>
);

export const ErrorBoundaryWithoutError = () => (
  <ErrorBoundary>
    <ComponentWithoutError />
  </ErrorBoundary>
);

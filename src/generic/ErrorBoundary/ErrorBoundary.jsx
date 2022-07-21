import React from "react";

class ErrorBoundary extends React.Component {
  render() {
    return <h1>ErrorBoundary {this.props.greeting}</h1>;
  }
}

export default ErrorBoundary;

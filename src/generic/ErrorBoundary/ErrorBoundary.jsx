import React from "react";

class ErrorBoundary extends React.Component {
  isActive = () => {
    return this.props.active ? "Active" : "Inactive";
  };

  render() {
    return (
      <h1>
        ErrorBoundary {this.props.greeting}
        {this.isActive()}
      </h1>
    );
  }
}

export default ErrorBoundary;

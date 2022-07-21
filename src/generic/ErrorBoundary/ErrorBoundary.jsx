import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  isActive = () => {
    return this.state.active ? "Active" : "Inactive";
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

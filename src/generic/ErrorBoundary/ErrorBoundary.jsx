import React from "react";

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // this.setState(getDerivedStateFromError(error))
  static getDerivedStateFromError(error) {
     return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error info: ", errorInfo);
  }

  render() {
    return this.state.hasError ? <h1>There was a mistake</h1> : this.props.children;
  }
}

export default ErrorBoundary;

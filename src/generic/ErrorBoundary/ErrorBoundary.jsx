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

  onClickHandler = () => {
    this.setState({
      active: true,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>Activate</button>
        <h1>
          ErrorBoundary {this.props.greeting}
          {this.isActive()}
        </h1>
      </div>
    );
  }
}

export default ErrorBoundary;

import { Component } from "react";

const countHits = (WrappedComponent) => {
  class CountHits extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return CountHits;
};

export default countHits;

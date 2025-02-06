import { Component } from "react";

const countHits = (WrappedComponent) => {
  class CountHits extends Component {
    state = {
      hits: 0,
    };

    addOne = () => {
      this.setState((prevState) => {
        return {
          hits: prevState.hits + 1,
        };
      });
    };

    render() {
      return <WrappedComponent addOneHit={this.addOne} hocState={this.state} {...this.props} />;
    }
  }

  return CountHits;
};

export default countHits;

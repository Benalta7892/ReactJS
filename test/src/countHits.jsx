import { Component } from "react";

const countHits = (WrappedComponent, power) => {
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

    componentDidUpdate(prevProps, prevState) {
      if (this.state !== prevState) {
        const ComponentName = WrappedComponent.name;
        this.props.reduceHandler(ComponentName, power);
      }
    }

    render() {
      return <WrappedComponent addOneHit={this.addOne} hocState={this.state} {...this.props} />;
    }
  }

  return CountHits;
};

export default countHits;

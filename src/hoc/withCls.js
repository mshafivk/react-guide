import React, { Component } from "react";
const withCls = (WrappedComponent, className) => {
  //   return props => (
  //     <div className={className}>
  //       <WrappedComponent {...props}/>
  //     </div>
  //   );
  //above - shows HOC returning a functional component
  //below - shows HOC returning  anonymous class this can access life cycle hooks (stateful component)
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};
export default withCls;

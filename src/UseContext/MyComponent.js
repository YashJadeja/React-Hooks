import React from "react";
import MyContext from "./MyContext";

const MyComponent = () => {
  return (
    <MyContext.Consumer>{(branch) => <div>{branch}</div>}</MyContext.Consumer>
  );
};

export default MyComponent;

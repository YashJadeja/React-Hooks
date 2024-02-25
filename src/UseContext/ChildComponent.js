import React, { useContext } from "react";
import MyContext from "./MyContext";

const ChildComponent = () => {
  const { name, surName } = useContext(MyContext);

  return (
    <div>
      Hello! {surName} {name}
    </div>
  );
};

export default ChildComponent;

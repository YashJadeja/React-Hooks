import React, { useContext } from "react";
import MyContext from "./MyContext";

const Child1 = () => {
  const { name, surName } = useContext(MyContext);

  return (
    <div>
      Hello! {surName} {name}
    </div>
  );
};

export default Child1;

import React, { useContext } from "react";
import MyContext from "./MyContext";

const Child2 = () => {
  const { college, branch } = useContext(MyContext);

  return (
    <div>
      I am study in {branch} from {college}.
    </div>
  );
};

export default Child2;

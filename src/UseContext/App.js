import React from "react";
import MyContext from "./MyContext";
import ChildComponent from "./Child1";
import Child2 from "./Child2";
import MyComponent from "./MyComponent";

const App = () => {
  const name = "Yash";
  const surName = "Jadeja";
  const college = "Shantilal Shah Engineer College";
  const branch = "Information Technology";
  const object = { name, surName, college, branch };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>useContext</h1>
      <div style={{ padding: "20px 0" }}>
        <h4>=== Set object in value ===</h4>
        <MyContext.Provider value={object}>
          <ChildComponent />
        </MyContext.Provider>
        <h4>=== Set value as object ===</h4>
        <MyContext.Provider value={{ college, branch }}>
          <Child2 />
        </MyContext.Provider>
      </div>
      <div style={{ padding: "20px 0" }}>
        <h4>=== Set value as variable ===</h4>
        <MyContext.Provider value={branch}>
          <MyComponent />
        </MyContext.Provider>
      </div>
    </>
  );
};

export default App;

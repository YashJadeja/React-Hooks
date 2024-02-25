import React from "react";
import useFetch from "./UseFetch";

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </>
  );
};

export default App;

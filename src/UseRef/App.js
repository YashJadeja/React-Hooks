import React, { useEffect, useRef } from "react";

const App = () => {
  const nameRef = useRef("");

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  
  return (
    <div>
      <h4>{nameRef.current.value}</h4>
      <input ref={nameRef} />
    </div>
  );
};

export default App;

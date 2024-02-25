import React, { useState, useMemo } from "react";

function App() {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);

  const memoizedValue = useMemo(() => {
    return parseFloat(inputA) + parseFloat(inputB);
  }, [inputA, inputB]);

  const handleInputChangeA = (e) => {
    setInputA(e.target.value);
  };

  const handleInputChangeB = (e) => {
    setInputB(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputA} onChange={handleInputChangeA} />
      {" + "}
      <input type="text" value={inputB} onChange={handleInputChangeB} />
      <div>Sum: {memoizedValue}</div>
    </div>
  );
}

export default App;

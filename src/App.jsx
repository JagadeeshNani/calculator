import React, { useState } from "react";
import Display from "./component/Display";
import ButtonPanel from "./component/ButtonPanel";
import calculate from "./logic/calculator";

const App = () => {
  // const [next, setNext] = useState(null);
  // const [total, setTotal] = useState(null);
  // const [operation, setOperation] = useState(null);
  const [cal, setCal] = useState({
    next: null,
    total: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setCal(calculate(cal, buttonName));
  };
  return (
    <div>
      <Display value={cal.next || cal.total || 0} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;

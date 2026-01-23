import React, { useCallback, useState } from "react";
import Child from "./components/Child";

const Parent = () => {
  const [value, setvalue] = useState(0);

  const add = () => {
    setvalue((pre) => pre + 1);
  };

  const sub = useCallback(() => {
    console.log("useCallback");
    // Below is the dependecy array,  if you specific that this fn will run when which state/cond. changes so we need to specify that else if we write/console the "value" state it will not be printed.
  }, []);
  return (
    <div>
      <Child props={sub} />
      <button onClick={add}>+</button>
      {value}
    </div>
  );
};
export default Parent;

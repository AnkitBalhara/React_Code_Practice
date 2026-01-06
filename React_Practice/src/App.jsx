import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [value, setValue] = useState(0);

  function addValue(pre) {
    setValue((pre) => pre + 1);
    setValue((pre) => pre + 1);
  }
  function subValue(pre) {
    setValue(value - 1);
    setValue(value - 1);
  }

  const fnFun = useCallback( () => {
    console.log("Jai Hanuman")
  },[value])  

  return (
    <div>
      {/* <Navbar ex={"Jai SiyaRam"}  /> */}
      <Navbar  hanuman={fnFun} />

      <button onClick={addValue}>+</button>
      <button style={{ margin: "12px" }}>{value}</button>
      <button onClick={subValue}>-</button>
    </div>
  );
};

export default App;

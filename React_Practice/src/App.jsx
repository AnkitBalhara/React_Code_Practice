import React from "react";
import { useState, useRef } from "react";

function App() {
  const [value, setValue] = useState("");

  const debounce = (fn, delay) => {
    let timer;
    return (value) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(value);
      }, delay);
    };
  };
  const debouncedChange = useRef(
    debounce((val) => {
      setValue(val);
    }, 1000)
  ).current;
  return (
    <div>
      Jai Shree Ram
      <input type="text" onChange={(e) => debouncedChange(e.target.value)} />
      <div>{value}</div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Child from "./Child";
import { Memoized } from "./ChildOne";

const ParentOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("ksy");
  console.log("parent render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>count - {count}</button>
      <button onClick={() => setName("hah")}>changeName</button>
      <Memoized name={name}>
        <strong>HAHA</strong>
      </Memoized>
    </div>
  );
};

export default ParentOne;

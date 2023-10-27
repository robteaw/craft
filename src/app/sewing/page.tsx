"use client";
import React, { useState } from "react";

export default function Sewing() {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      <h1>Sewing is {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}

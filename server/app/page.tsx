"use client";
import { useState } from "react";
import Component from "@kapok/components";

export default function Page() {
  const [a, setA] = useState(1111);
  return (
    <div>
      <h1 onClick={() => setA(Math.random())}>Hello, Next.js222! {a}</h1>
      <Component />
    </div>
  );
}

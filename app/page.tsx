"use client";

import { useState } from "react";
import HomeScreen from "./maze/components/HomeScreen";
import MazePage from "./maze/page"; // Reuse the maze logic already built

export default function MainPage() {
  const [started, setStarted] = useState(false);

  return <HomeScreen onStart={() => {}} />;
}

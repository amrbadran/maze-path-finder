"use client";
import MazeCustomization from "./components/MazeCustomization";
import MazeGrid from "./components/MazeGrid";
import { useState } from "react";

export default function Home() {
  const DEFAULT_VALUE_ROWS_COLS = 10;
  const [rows, setRows] = useState<number>(DEFAULT_VALUE_ROWS_COLS);
  const [cols, setCols] = useState<number>(DEFAULT_VALUE_ROWS_COLS);
  return (
    <>
      <MazeCustomization
        Rows={rows}
        Cols={cols}
        handleRows={setRows}
        handleCols={setCols}
      />
      <MazeGrid rows={rows} cols={cols} />
    </>
  );
}

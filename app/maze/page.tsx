"use client";

import { useState } from "react";

import dynamic from "next/dynamic";

const MazeCustomization = dynamic(
  () => import("./components/MazeCustomization"),
  {
    ssr: false,
  }
);

const MazeGrid = dynamic(() => import("./components/MazeGrid"), {
  ssr: false,
});
export default function Home() {
  const DEFAULT_VALUE_ROWS_COLS = 10;
  const [rows, setRows] = useState<number>(DEFAULT_VALUE_ROWS_COLS);
  const [cols, setCols] = useState<number>(DEFAULT_VALUE_ROWS_COLS);
  const [mazeKey, setMazeKey] = useState(0);
  return (
    <>
      <MazeCustomization
        Rows={rows}
        Cols={cols}
        handleRows={setRows}
        handleCols={setCols}
        regenerateMaze={() => setMazeKey((prev) => prev + 1)}
      />
      <MazeGrid rows={rows} cols={cols} />
    </>
  );
}

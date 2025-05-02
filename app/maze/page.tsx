"use client";

import { useState, useEffect } from "react";
import { trainPerceptronModel, getTrainedModel } from "./API/trainer";
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
  const [model, setModel] = useState<any>(null);
  const DEFAULT_VALUE_ROWS_COLS = 10;
  const [rows, setRows] = useState<number>(DEFAULT_VALUE_ROWS_COLS);
  const [cols, setCols] = useState<number>(DEFAULT_VALUE_ROWS_COLS);
  const [mazeKey, setMazeKey] = useState<number>(0);

  useEffect(() => {
    const trainAndGetModel = async () => {
      await trainPerceptronModel();
      const trainedModel = await getTrainedModel();
      setModel(trainedModel);
    };
    trainAndGetModel();
  }, []);

  return (
    <>
      <MazeCustomization
        Rows={rows}
        Cols={cols}
        handleRows={setRows}
        handleCols={setCols}
        regenerateMaze={() => setMazeKey((prev) => prev + 1)}
      />
      <MazeGrid rows={rows} cols={cols} mazeKey={mazeKey} />
    </>
  );
}

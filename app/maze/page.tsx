"use client";

import { useState, useEffect } from "react";
import { trainPerceptronModel, getTrainedModel } from "./API/trainer";
import { predict } from "./API/predict";
import { GridContext } from "./context/GridContext";
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
const DEFAULT_VALUE_ROWS_COLS = 10;

export default function Home() {
  const [model, setModel] = useState<any>(null);

  const [rows, setRows] = useState<number>(DEFAULT_VALUE_ROWS_COLS);
  const [cols, setCols] = useState<number>(DEFAULT_VALUE_ROWS_COLS);
  const [mazeKey, setMazeKey] = useState<number>(0);
  const [gridData, setGridData] = useState<any[][]>([]);
  const [startPosition, setStartPosition] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [endPosition, setEndPosition] = useState<{
    row: number;
    col: number;
  } | null>(null);

  useEffect(() => {
    const trainAndGetModel = async () => {
      await trainPerceptronModel();
      const trainedModel = await getTrainedModel();
      console.log(trainedModel);
      setModel(trainedModel);

      predict(model, [1, 3, 4]);
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

      <GridContext.Provider
        value={{
          gridData,
          setGridData,
          startPosition,
          setStartPosition,
          endPosition,
          setEndPosition,
        }}
      >
        <MazeGrid rows={rows} cols={cols} mazeKey={mazeKey} />
      </GridContext.Provider>
    </>
  );
}

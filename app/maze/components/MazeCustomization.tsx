"use client";
import { useState, useContext } from "react";
import { GridContext } from "../context/GridContext";
import { useRouter } from "next/navigation";
import TextBox from "./ui/TextBox";
import Button from "./ui/Button";
import GridPreparation from "../helper/GridPreparation";
import PathFinder from "../API/PathFinder";
import { trainPerceptronModel } from "../API/trainer";
import PathDrawer from "../helper/PathDrawer";
import showAlert from "./ui/Alert";

const MazeCustomization = ({
  Rows,
  Cols,
  handleRows,
  handleCols,
  regenerateMaze,
}: {
  Rows: number;
  Cols: number;
  handleRows: (value: number) => void;
  handleCols: (value: number) => void;
  regenerateMaze: () => void;
}) => {
  const router = useRouter();
  const [formState, setFormState] = useState({ rows: Rows, cols: Cols });
  const {
    gridData,
    setGridData,
    startPosition,
    setStartPosition,
    endPosition,
    setEndPosition,
  } = useContext(GridContext);
  return (
    <div className="border-2 border-[#a97451] shadow rounded-lg mx-auto w-full max-w-5xl py-8 px-4 my-8">
      {/* Row of inputs and first button */}
      <div className="flex max-lg:flex-col max-lg:justify-center max-lg:items-center justify-center">
        <div className="mr-8">
          <TextBox
            defaultValue={Rows}
            label="Rows"
            onChangeHandler={(e) => {
              const value = e.target.value;
              if (isNaN(value)) return;
              setFormState((prev) => ({ ...prev, rows: value }));
            }}
          />
        </div>
        <div className="mr-8 max-lg:my-8">
          <TextBox
            defaultValue={Cols}
            label="Columns"
            onChangeHandler={(e) => {
              const value = e.target.value;
              if (isNaN(value)) return;
              setFormState((prev) => ({ ...prev, cols: value }));
            }}
          />
        </div>
        <div className="flex items-end justify-center max-lg:items-center">
          <Button
            label="Generate Maze"
            colorKey="blue"
            handler={() => {
              handleRows(formState.rows);
              handleCols(formState.cols);
              regenerateMaze();
            }}
          />
        </div>
      </div>
      <div className="w-full mt-10 flex justify-center gap-4">
        <Button
          label="Back"
          colorKey="red"
          handler={() => {
            router.back();
          }}
        />
        <Button
          label="Solve Maze Using A*"
          colorKey="green"
          handler={async () => {
            const GridPrepared = GridPreparation(gridData);
            const startPoint = startPosition;
            const endPoint = endPosition;
            if (!startPoint || !endPoint) {
              showAlert("Error", "Please select start and end points", "error");
              return;
            }
            const start = {
              row: startPoint.row,
              col: startPoint.col,
            };
            const end = {
              row: endPoint.row,
              col: endPoint.col,
            };
            const result = await PathFinder(
              GridPrepared,
              start,
              end,
              await trainPerceptronModel()
            );
            console.log(result);
            PathDrawer(gridData, setGridData, result.path);
          }}
        />
      </div>
    </div>
  );
};

export default MazeCustomization;

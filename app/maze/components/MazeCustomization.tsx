"use client";
import { useState } from "react";
import TextBox from "./ui/TextBox";
import Button from "./ui/Button";
const MazeCustomization = ({
  Rows,
  Cols,
  handleRows,
  handleCols,
}: {
  Rows: number;
  Cols: number;
  handleRows: (value: number) => void;
  handleCols: (value: number) => void;
}) => {
  const [formState, setFormState] = useState({ rows: "", cols: "" });
  return (
    <div className="flex max-lg:flex-col max-lg:justify-center max-lg:items-center justify-center border-2 border-[#a97451] shadow rounded-lg mx-auto w-full max-w-5xl py-8 px-4 my-8">
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
            handleRows(parseInt(formState.rows, 10));
            handleCols(parseInt(formState.cols, 10));
          }}
        />
      </div>
    </div>
  );
};

export default MazeCustomization;

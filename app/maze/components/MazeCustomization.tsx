"use client";
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
  return (
    <div className="flex max-lg:flex-col max-lg:justify-center max-lg:items-center justify-center border-2 border-[#a97451] shadow rounded-lg mx-auto w-full max-w-5xl py-8 px-4 my-8">
      <div className="mr-8">
        <TextBox
          defaultValue={Rows}
          label="Rows"
          onChangeHandler={handleRows}
        />
      </div>
      <div className="mr-8 max-lg:my-8">
        <TextBox
          defaultValue={Cols}
          label="Columns"
          onChangeHandler={handleCols}
        />
      </div>
      <div className="flex items-end justify-center max-lg:items-center">
        <Button
          label="Generate Maze"
          colorKey="blue"
          handler={() => {
            console.log(Rows, Cols);
          }}
        />
      </div>
    </div>
  );
};

export default MazeCustomization;

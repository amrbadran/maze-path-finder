import React from "react";
import TextBox from "./ui/TextBox";
import Button from "./ui/Button";
const MazeCustomization = () => {
  return (
    <div className="flex max-lg:flex-col max-lg:justify-center max-lg:items-center justify-center border-2 border-[#a97451] shadow rounded-lg mx-auto w-full max-w-5xl py-8 px-4 my-8">
      <div className="mr-8">
        <TextBox defaultValue={10} label="Rows" />
      </div>
      <div className="mr-8 max-lg:my-8">
        <TextBox defaultValue={10} label="Columns" />
      </div>
      <div className="flex items-end justify-center max-lg:items-center">
        <Button label="Generate Maze" colorFrom="blue-600" colorTo="blue-800" />
      </div>
    </div>
  );
};

export default MazeCustomization;

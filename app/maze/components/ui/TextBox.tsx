import React from "react";

const TextBox = ({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: number;
}) => {
  return (
    <>
      <h1 className="font-semibold text-md">{label}</h1>
      <input
        autoComplete="off"
        type="text"
        className="outline-0 border-2 border-[#d6b58b] 
            rounded-lg shadow-md w-64 h-12 focus:border-white text-center transition duration-200 ease-in 
           "
        defaultValue={defaultValue}
      />
    </>
  );
};

export default TextBox;

import React from "react";

const Button = ({
  label,
  colorFrom,
  colorTo,
}: {
  label: string;
  colorFrom: string;
  colorTo: string;
}) => {
  return (
    <button
      className={`
          px-8 py-3 border outline-0 rounded-lg font-smedium text-md
           bg-gradient-to-tl from-${colorFrom} to-${colorTo} hover:from-${colorTo} hover:to-${colorFrom} transition duration-200 ease-in-out
           cursor-pointer
           focus:outline-none focus:ring-2 focus:ring-[#885d40] focus:ring-opacity-50`}
    >
      {label}
    </button>
  );
};

export default Button;

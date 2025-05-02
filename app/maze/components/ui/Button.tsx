"use client";
export const COLORS = {
  red: "from-red-500 to-red-700 hover:from-red-700 hover:to-red-500",
  blue: "from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600",
  green: "from-green-500 to-green-700 hover:from-green-700 hover:to-green-500",
};

const Button = ({
  label,
  colorKey,
  handler = () => {},
}: {
  label: string;
  colorKey: keyof typeof COLORS;
  handler?: () => void;
}) => {
  const colorClasses = COLORS[colorKey];

  return (
    <button
      onClick={handler}
      className={`
          px-8 py-3 border outline-0 rounded-lg font-medium text-md
           bg-gradient-to-tl ${colorClasses} transition duration-200 ease-in-out
           cursor-pointer
           focus:outline-none focus:ring-2 focus:ring-[#885d40] focus:ring-opacity-50`}
    >
      {label}
    </button>
  );
};

export default Button;

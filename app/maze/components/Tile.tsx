import { useMemo } from "react";

const Tile = ({
  tileHeight,
  elevation,
}: {
  tileHeight: string;
  elevation: number;
}) => {
  const randomValuesRatios = [1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2];

  const background = () => {
    const rand = Math.floor(Math.random() * randomValuesRatios.length);
    return randomValuesRatios[rand] === 0
      ? "water.gif"
      : randomValuesRatios[rand] === 1
      ? "grass.gif"
      : "wall.jpg";
  };

  return (
    <div
      className="bg-gradient-to-tl from-[#6e4b34] to-[#885d40] relative aspect-square flex items-center justify-center overflow-hidden"
      style={{
        minWidth: "30px",
        minHeight: "30px",
      }}
    >
      <div
        className="absolute bg-cover flex justify-center items-center w-full bottom-0 text-center"
        style={{
          height: `${tileHeight}`,
          backgroundImage: `url(/assets/${background()})`, // Corrected: call the function
        }}
      >
        {elevation}
      </div>
    </div>
  );
};

export default Tile;

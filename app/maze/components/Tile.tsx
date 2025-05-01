import { useMemo } from "react";

const Tile = ({
  tileHeight,
  elevation,
}: {
  tileHeight: string;
  elevation: number;
}) => {
  const background = useMemo(() => {
    const rand = Math.floor(Math.random() * 3);
    return rand === 0 ? "water.gif" : rand === 1 ? "grass.gif" : "wall.jpg";
  }, []);

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
          backgroundImage: `url(/assets/${background})`,
        }}
      >
        {elevation}
      </div>
    </div>
  );
};

export default Tile;

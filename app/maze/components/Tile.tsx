import { useMemo } from "react";
import { FaFlag, FaMapMarkerAlt } from "react-icons/fa";

const Tile = ({
  tileHeight,
  elevation,
  onTileClick,
  isStart,
  isEnd,
}: {
  tileHeight: string;
  elevation: number;
  onTileClick?: () => void;
  isStart?: boolean;
  isEnd?: boolean;
}) => {
  const randomValuesRatios = [1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2];

  const background = useMemo(() => {
    const rand = Math.floor(Math.random() * randomValuesRatios.length);
    return randomValuesRatios[rand] === 0
      ? "water.gif"
      : randomValuesRatios[rand] === 1
      ? "grass.gif"
      : "wall.jpg";
  }, []);

  const isGrass = background === "grass.gif";

  const handleClick = () => {
    if (isGrass && onTileClick) {
      onTileClick();
    }
  };

  return (
    <div
      className={`bg-gradient-to-tl from-[#6e4b34] to-[#885d40] relative aspect-square flex items-center justify-center overflow-hidden ${
        isGrass ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
      style={{
        minWidth: "30px",
        minHeight: "30px",
      }}
    >
      {isStart && (
        <FaFlag className="absolute opacity-50 text-green-400 text-4xl z-10 drop-shadow-md" />
      )}
      {isEnd && (
        <FaMapMarkerAlt className="absolute opacity-50 text-red-600 text-4xl z-10 drop-shadow-md" />
      )}
      <div
        className="absolute bg-cover flex justify-center items-center w-full bottom-0 text-center"
        style={{
          height: `${tileHeight}`,
          backgroundImage: `url(/assets/${background})`,
        }}
      >
        <span className="text-white text-sm font-semibold drop-shadow z-20">
          {elevation}
        </span>
      </div>
    </div>
  );
};

export default Tile;

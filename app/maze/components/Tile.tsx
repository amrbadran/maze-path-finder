import { useMemo } from "react";
import { FaFlag, FaMapMarkerAlt } from "react-icons/fa";

const Tile = ({
  tileHeight,
  elevation,
  TileType,
  onTileClick,
  onTileTypeChange,
  isStart,
  isEnd,
  isOnPath,
  isOnTestedPath,
  isEditable,
}: {
  tileHeight: string;
  elevation: number;
  TileType: number;
  onTileClick?: () => void;
  onTileTypeChange?: (newType: number) => void;
  isStart?: boolean;
  isEnd?: boolean;
  isOnPath?: boolean;
  isOnTestedPath?: boolean;
  isEditable?: boolean;
}) => {
  const background = () => {
    return TileType === 1
      ? "water.gif"
      : TileType === 0
      ? "grass.gif"
      : "wall.jpg";
  };

  const isGrass = background() === "grass.gif";

  const handleClick = () => {
    if (isGrass && onTileClick) {
      onTileClick();
    }
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isEditable && onTileTypeChange) {
      const newType = (TileType + 1) % 3;
      onTileTypeChange(newType);
    }
  };

  return (
    <div
      className={`bg-gradient-to-tl from-[#6e4b34] to-[#885d40] relative aspect-square flex items-center justify-center overflow-hidden ${
        isGrass ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
      onContextMenu={handleRightClick}
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
          backgroundImage: `url(/assets/${background()})`,
        }}
      >
        <span className="text-white text-sm font-semibold drop-shadow z-20">
          {elevation}
        </span>
      </div>
      {(isOnTestedPath || isOnPath) && (
        <span
          className={`w-6 h-6 rounded-full border-2 border-white absolute z-20 
      ${isOnPath ? "bg-blue-600" : "bg-yellow-600 opacity-50"}`}
        ></span>
      )}

      {isEditable && (
        <span className="absolute top-0 left-0 text-xs text-white bg-black bg-opacity-50 p-1 z-20">
          {TileType === 0 ? "Grass" : TileType === 1 ? "Water" : "Wall"}
        </span>
      )}
    </div>
  );
};

export default Tile;

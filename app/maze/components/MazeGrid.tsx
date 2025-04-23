"use client";
import Tile from "./Tile";
const MazeGrid = ({ rows, cols }: { rows: number; cols: number }) => {
  return (
    <div className="w-full max-w-5xl mx-auto border-2 border-[#a97451] rounded-lg shadow-md">
      <div
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
        className={`grid gap-[1px]`}
      >
        {Array.from({ length: rows }).map((_, rowIdx) => {
          return Array.from({ length: cols }).map((_, colIdx) => {
            const elevation = Math.floor(Math.random() * 10) + 1;
            const tileHeight = `${+elevation * 10}%`;
            return (
              <div
                key={`${rowIdx}-${colIdx}`}
                className={`
                      bg-gradient-to-tl from-[#6e4b34] to-[#885d40]
    
                      relative aspect-square flex items-center justify-center overflow-hidden`}
                style={{
                  minWidth: "30px",
                  minHeight: "30px",
                }}
              >
                <div
                  className={`absolute bg-cover flex justify-center items-center w-full bottom-0 text-center`}
                  style={{
                    height: `${tileHeight}`,
                    backgroundImage: `url(/assets/${
                      Math.floor(Math.random() * 3) === 0
                        ? "water.gif"
                        : Math.floor(Math.random() * 3) === 1
                        ? "grass.gif"
                        : "wall.jpg"
                    })`,
                  }}
                >
                  {elevation}
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default MazeGrid;

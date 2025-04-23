import React from "react";

const MazeGrid = () => {
  const rows = 30;
  const cols = 8;

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
                {`(${rowIdx}, ${colIdx})`}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default MazeGrid;

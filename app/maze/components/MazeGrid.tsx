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
              <Tile
                key={`${rowIdx}-${colIdx}`}
                tileHeight={tileHeight}
                elevation={elevation}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default MazeGrid;

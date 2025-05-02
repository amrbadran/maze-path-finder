import { useState, useEffect } from "react";
import Tile from "./Tile";

const MazeGrid = ({
  rows,
  cols,
  mazeKey,
}: {
  rows: number;
  cols: number;
  mazeKey: number;
}) => {
  const [gridData, setGridData] = useState<any[][]>([]);
  const [startPosition, setStartPosition] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [endPosition, setEndPosition] = useState<{
    row: number;
    col: number;
  } | null>(null);

  useEffect(() => {
    const data = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => {
        const elevation = Math.floor(Math.random() * 10) + 1;
        const tileHeight = `${elevation * 10}%`;
        return { elevation, tileHeight };
      })
    );
    setGridData(data);
    setStartPosition(null);
    setEndPosition(null);
  }, [rows, cols, mazeKey]);

  const handleTileClick = (row: number, col: number) => {
    if (startPosition?.row === row && startPosition?.col === col) {
      setStartPosition(null);
    } else if (endPosition?.row === row && endPosition?.col === col) {
      setEndPosition(null);
    } else {
      if (!startPosition) {
        setStartPosition({ row, col });
      } else if (!endPosition) {
        setEndPosition({ row, col });
      }
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto border-2 border-[#a97451] rounded-lg shadow-md">
      <div
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
        className="grid gap-[1px]"
      >
        {gridData.map((row, rowIdx) =>
          row.map((tile, colIdx) => (
            <Tile
              key={`${rowIdx}-${colIdx}`}
              tileHeight={tile.tileHeight}
              elevation={tile.elevation}
              onTileClick={() => handleTileClick(rowIdx, colIdx)}
              isStart={
                startPosition?.row === rowIdx && startPosition?.col === colIdx
              }
              isEnd={endPosition?.row === rowIdx && endPosition?.col === colIdx}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MazeGrid;

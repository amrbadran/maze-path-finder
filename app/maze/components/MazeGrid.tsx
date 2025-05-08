import { useState, useEffect, useContext } from "react";
import Tile from "./Tile";
import { GridContext } from "../context/GridContext";
import GridPreparation from "../helper/GridPreparation";
import { clearPath } from "../helper/PathDrawer";

const MazeGrid = ({
  rows,
  cols,
  mazeKey,
  isEditable = false,
}: {
  rows: number;
  cols: number;
  mazeKey: number;
  isEditable?: boolean;
}) => {
  const {
    gridData,
    setGridData,
    startPosition,
    setStartPosition,
    endPosition,
    setEndPosition,
  } = useContext(GridContext);

  useEffect(() => {
    const randomValuesTile = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2];

    const data = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => {
        const elevation = Math.floor(Math.random() * 10) + 1;
        const tileHeight = `${elevation * 10}%`;
        const tileType =
          randomValuesTile[Math.floor(Math.random() * randomValuesTile.length)];
        const minObstacleDistance = Infinity;
        const isOnPath = false;
        return {
          elevation,
          tileHeight,
          tileType,
          minObstacleDistance,
          isOnPath,
        };
      })
    );
    setGridData(data);
    setStartPosition(null);
    setEndPosition(null);
    clearPath(data, setGridData);
  }, [rows, cols, mazeKey]);

  const handleTileClick = (row: number, col: number) => {
    if (startPosition?.row === row && startPosition?.col === col) {
      setStartPosition(null);
      clearPath(gridData, setGridData);
    } else if (endPosition?.row === row && endPosition?.col === col) {
      setEndPosition(null);
      clearPath(gridData, setGridData);
    } else {
      if (!startPosition) {
        setStartPosition({ row, col });
        clearPath(gridData, setGridData);
      } else if (!endPosition) {
        setEndPosition({ row, col });
        clearPath(gridData, setGridData);
      }
    }
  };

  const handleTileTypeChange = (row: number, col: number, newType: number) => {
    if (!isEditable) return;

    const newGridData = [...gridData];
    newGridData[row][col].tileType = newType;
    setGridData(newGridData);
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
        {gridData.map((row: any, rowIdx: number) =>
          row.map((tile: any, colIdx: number) => (
            <Tile
              key={`${rowIdx}-${colIdx}`}
              tileHeight={tile.tileHeight}
              elevation={tile.elevation}
              TileType={tile.tileType}
              onTileClick={() => handleTileClick(rowIdx, colIdx)}
              onTileTypeChange={(newType) =>
                handleTileTypeChange(rowIdx, colIdx, newType)
              }
              isStart={
                startPosition?.row === rowIdx && startPosition?.col === colIdx
              }
              isEnd={endPosition?.row === rowIdx && endPosition?.col === colIdx}
              isOnPath={tile.isOnPath}
              isEditable={isEditable}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MazeGrid;

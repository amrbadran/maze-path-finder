import { Cell } from "../types/Cell";

const WALL = 2;
const WATER = 1;
const GRASS = 0;
export default function GridPreparation(grid: any[][]) {
  const rows = grid.length;
  const cols = grid[0].length;

  const Obstacles = [];
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      const cell: Cell = grid[i][j];
      if (cell.tileType === WALL) {
        Obstacles.push([i, j]);
      }
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      const cell: Cell = grid[i][j];
      if (cell.tileType === WATER || cell.tileType === GRASS) {
        const minDistance = Obstacles.reduce((min, [x, y]) => {
          const distance = Math.abs(i - x) + Math.abs(j - y);
          return Math.min(min, distance);
        }, Infinity);

        cell.minObstacleDistance = minDistance;
        grid[i][j] = cell;
      }
    }
  }

  return grid;
}

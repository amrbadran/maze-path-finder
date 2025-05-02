import { Cell } from "@/app/maze/types/Cell";
import { NextResponse } from "next/server";
import { getPath, manhatan, isSafeTile } from "./helper";

const WALL = 2;
const WATER = 1;
const GRASS = 0;

export async function POST(request: Request) {
  // Implemeting A* algorithm
  const body = await request.json();
  const { start, end, grid, model } = body;

  let openList = [start];
  const closedList = new Set();
  const cameFrom = new Map();
  cameFrom.set(`${start.row},${start.col}`, null);

  const gScore = new Map();
  const fScore = new Map();
  gScore.set(`${start.row},${start.col}`, 0);
  fScore.set(`${start.row},${start.col}`, manhatan(start, end));

  while (openList.length > 0) {
    openList.sort((a, b) => {
      const aKey = `${a.row},${a.col}`;
      const bKey = `${b.row},${b.col}`;
      return (fScore.get(aKey) || Infinity) - (fScore.get(bKey) || Infinity);
    });
    const currentNode = openList.shift();

    closedList.add(`${currentNode.row},${currentNode.col}`);

    if (currentNode.row === end.row && currentNode.col === end.col) {
      return NextResponse.json({
        path: getPath(cameFrom, end),
        message: "Path found",
      });
    }

    const neighbors = [
      { row: currentNode.row - 1, col: currentNode.col },
      { row: currentNode.row + 1, col: currentNode.col },
      { row: currentNode.row, col: currentNode.col - 1 },
      { row: currentNode.row, col: currentNode.col + 1 },
    ];

    for (const neighbor of neighbors) {
      const neighborKey = `${neighbor.row},${neighbor.col}`;
      console.log(neighborKey, closedList.has(neighborKey));
      const isInOpenList = openList.some(
        (item) => item.row === neighbor.row && item.col === neighbor.col
      );

      if (
        neighbor.row < 0 ||
        neighbor.col < 0 ||
        neighbor.row >= grid.length ||
        neighbor.col >= grid[0].length ||
        grid[neighbor.row][neighbor.col].tileType === WALL ||
        grid[neighbor.row][neighbor.col].tileType === WATER ||
        !isSafeTile(neighbor, grid, model.model)
      ) {
        continue;
      }
      if (!closedList.has(neighborKey) && !isInOpenList) {
        openList.push(neighbor);
        cameFrom.set(neighborKey, currentNode);
        gScore.set(
          neighborKey,
          (gScore.get(`${currentNode.row},${currentNode.col}`) || 0) + 1
        );
        fScore.set(
          neighborKey,
          gScore.get(neighborKey) + manhatan(neighbor, end)
        );
      } else {
        const OldfValue = fScore.get(neighborKey) || Infinity;
        const NewfValue =
          (gScore.get(`${currentNode.row},${currentNode.col}`) || 0) +
          1 +
          manhatan(neighbor, end);
        if (NewfValue < OldfValue) {
          cameFrom.set(neighborKey, currentNode);
          fScore.set(neighborKey, NewfValue);
          openList.push(neighbor);
          closedList.delete(neighborKey);
          gScore.set(
            neighborKey,
            (gScore.get(`${currentNode.row},${currentNode.col}`) || 0) + 1
          );
        }
      }
    }
    openList = openList.filter(
      (item) => item.row !== currentNode.row || item.col !== currentNode.col
    );

    closedList.add(`${currentNode.row},${currentNode.col}`);
  }

  return NextResponse.json({ message: "No path found" });
}

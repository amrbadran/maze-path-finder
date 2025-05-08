import { Cell } from "@/app/maze/types/Cell";
import { predict } from "../perceptron/trainer";
export function getPath(cameFrom: Map<string, any>, end: any) {
  const path = [];
  let currentNode = end;
  while (currentNode) {
    path.push(currentNode);
    currentNode = cameFrom.get(`${currentNode.row},${currentNode.col}`);
  }
  return path.reverse();
}

export function manhatan(start: any, end: any) {
  return Math.abs(start.row - end.row) + Math.abs(start.col - end.col);
}

export function isSafeTile(neighbor: any, grid: Cell[][], model: any) {
  const cell = grid[neighbor.row][neighbor.col];
  const input = [cell.tileType, cell.elevation, cell.minObstacleDistance];
  const prediction = predict(input, model.weights, model.bias);
  return prediction === 1;
}
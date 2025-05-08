import showAlert from "../components/ui/Alert";

export default function PathDrawer(
  gridData: any[][],
  setGridData: any,
  path: any[]
) {
  if (!path) {
    showAlert("Error", "No path found", "error");
    return;
  }
  path.forEach((cell, index) => {
    setTimeout(() => {
      const { row, col } = cell;
      const newGridData = [...gridData];
      newGridData[row][col] = {
        ...newGridData[row][col],
        isOnPath: true,
      };
      setGridData(newGridData);
    }, 300 * index);
  });
  setTimeout(() => {
    showAlert("Success", "Path found", "success");
  }, 300 * path.length);
}

export function clearPath(gridData: any[][], setGridData: any) {
  const newGridData = gridData.map((row) =>
    row.map((cell) => ({ ...cell, isOnPath: false }))
  );
  setGridData(newGridData);
}
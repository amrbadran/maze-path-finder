import showAlert from "../components/ui/Alert";

export default function PathDrawer(
  gridData: any[][],
  setGridData: any,
  path: any[],
  testedPath: any[]
) {
  if (!path) {
    showAlert("Error", "No path found", "error");
    return;
  }

  testedPath.forEach((cell, index) => {
    setTimeout(() => {
      const { row, col } = cell;
      const newGridData = [...gridData];

      const isInPath = path.some((p) => p.row === row && p.col === col);

      newGridData[row][col] = {
        ...newGridData[row][col],
        isOnTestedPath: true,
        ...(isInPath && { isOnPath: true }),
      };

      setGridData(newGridData);
    }, 300 * index);
  });

  setTimeout(() => {
    showAlert("Success", "Path found", "success");
  }, 300 * testedPath.length);
}

export function clearPath(gridData: any[][], setGridData: any) {
  const newGridData = gridData.map((row) =>
    row.map((cell) => ({ ...cell, isOnPath: false, isOnTestedPath: false }))
  );
  setGridData(newGridData);
}

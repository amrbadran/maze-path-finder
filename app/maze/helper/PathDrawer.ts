export default function PathDrawer(
  gridData: any[][],
  setGridData: any,
  path: any[]
) {
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
}

export default async function PathFinder(
  grid: any[][],
  startPoint: any,
  endPoint: any,
  model: any = null
) {
  const response = await fetch("/api/path", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start: startPoint,
      end: endPoint,
      grid: grid,
      model: model,
    }),
  });
  const data = await response.json();
  return data;
}

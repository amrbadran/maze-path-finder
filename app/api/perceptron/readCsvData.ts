import fs from "fs";
import path from "path";
import Papa from "papaparse";

export function readCSVData() {
  const filePath = path.join(process.cwd(), "public/data/Data.csv");
  const file = fs.readFileSync(filePath, "utf8");

  const parsed = Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data as string[][];
}

import { NextResponse } from "next/server";
import { getModel, predict, trainPerceptron } from "./trainer";
import { readCSVData } from "./readCsvData";

export async function GET() {
  const model = getModel();

  if (!model.weights || model.weights.length === 0) {
    return NextResponse.json(
      { error: "Model not trained yet." },
      { status: 404 }
    );
  }

  return NextResponse.json(model);
}

export async function POST() {
  const rawCsvData = await readCSVData();
  const formattedData = (rawCsvData as any[]).map((row) => ({
    inputs: [
      Number(row["Terrain"]),
      Number(row["Elevation"]),
      Number(row["Obstacle Distance"]),
    ],
    YActual: Number(row["Label"]),
  }));

  const model = trainPerceptron(formattedData);
  return NextResponse.json({ message: "Training complete", model });
}

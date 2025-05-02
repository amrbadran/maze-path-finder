import { NextResponse } from "next/server";
import { predict } from "../trainer";
export async function POST(req: Request) {
  const { model, input } = await req.json();

  if (!model || !input) {
    return NextResponse.json(
      { error: "Model and input are required" },
      { status: 400 }
    );
  }

  const prediction = predict(input, model.weights, model.bias);

  return NextResponse.json({ prediction });
}

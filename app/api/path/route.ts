import { NextResponse } from "next/server";

export async function GET() {}

export async function POST(request: Request) {
  const body = await request.json();
  const { start, end, grid, model } = body;
  console.log("Start:", start);
  console.log("End:", end);
  console.log("model:", model);
  return NextResponse.json({ message: "Pathfinding completed" });
}

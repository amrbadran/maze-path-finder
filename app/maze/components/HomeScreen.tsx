"use client";
import Button from "./ui/Button";

export default function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#1f1f2f] via-[#2d2d44] to-[#1f1f2f] flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-5xl font-extrabold mb-12 tracking-wide text-green-300 drop-shadow-md">
        🧩 Maze Pathfinder
      </h1>

      <div className="flex flex-row space-x-8">
        <Button label="✖ Exit" colorKey="red" handler={() => window.close()} />

        <Button label="▶ Start Game" colorKey="green" handler={onStart} />
      </div>
    </div>
  );
}

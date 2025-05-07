"use client";

export default function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#1f1f2f] via-[#2d2d44] to-[#1f1f2f] flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-5xl font-extrabold mb-12 tracking-wide text-green-300 drop-shadow-md">
        🧩 Maze Pathfinder
      </h1>

      <div className="flex flex-row space-x-8">
      <button
          onClick={() => window.close()}
          className="bg-red-600 hover:bg-red-500 text-white text-xl px-8 py-3 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
        >
          ✖ Exit
        </button>
        
        <button
          onClick={onStart}
          className="bg-green-600 hover:bg-green-500 text-white text-xl px-8 py-3 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
        >
          ▶ Start Game
        </button>

        
      </div>
    </div>
  );
}

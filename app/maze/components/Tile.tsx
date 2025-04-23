"use client";
import { useEffect, useState } from "react";

const tiles = ["water.gif", "grass.gif", "wall.jpg"];

const Tile = () => {
  const [randomTile, setRandomTile] = useState<string | null>(null);
  const [tileHeight, setTileHeight] = useState<number>(0);

  useEffect(() => {
    const tile = tiles[Math.floor(Math.random() * tiles.length)];
    const height = (Math.floor(Math.random() * 10) + 1) * 10;
    setRandomTile(tile);
    setTileHeight(height);
  }, []);

  if (!randomTile) return null;

  return (
    <div
      className={`absolute bg-cover bg-[url(/assets/${randomTile})] w-full h-[${tileHeight}%] bottom-0 text-center`}
    >
      {tileHeight / 10}
    </div>
  );
};

export default Tile;

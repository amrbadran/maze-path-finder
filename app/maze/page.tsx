import MazeCustomization from "./components/MazeCustomization";
import MazeGrid from "./components/MazeGrid";

export default function Home() {
  return (
    <>
      <MazeCustomization />
      <MazeGrid rows={10} cols={10} />
    </>
  );
}

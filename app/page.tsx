import Image from "next/image";
import { SimBoard } from "./components/SimBoard";
import { CommandButtons } from "./components/CommandButtons";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-evenly mt-10">
      <SimBoard/>
      <CommandButtons/>
    </div>
  );
}

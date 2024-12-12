import { SimBoard } from "./components/SimBoard";
import { CommandButtons } from "./components/CommandButtons";
import { ReportButton } from "./components/ReportButton";
import { Instructions } from "./components/Instructions";
import { BoardProvider } from "./boardContext/BoardContext";

export default function Home() {
  return (
    <BoardProvider>
      <div className="h-screen flex flex-col items-center justify-evenly mt-10">
        <Instructions/>
        <SimBoard/>
        <CommandButtons/>
        <ReportButton/>
      </div>
    </BoardProvider>
  );
}

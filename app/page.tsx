import { SimBoard } from "./components/SimBoard";
import { CommandButtons } from "./components/CommandButtons";
import { ReportButton } from "./components/ReportButton";
import { Instructions } from "./components/Instructions";
import { BoardProvider } from "./boardContext/BoardContext";

export default function Home() {
  return (
    <BoardProvider>
      <div className="min-h-screen flex flex-col items-center gap-6 md:gap-12 lg:gap-16 py-10">
        <Instructions/>
        <SimBoard/>
        <CommandButtons/>
        <ReportButton/>
      </div>
    </BoardProvider>
  );
}

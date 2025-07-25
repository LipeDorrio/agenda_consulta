import { Funnel, FunnelX } from "lucide-react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col border-2">
      <div className="m-4">
        <Navbar />
        <div className="border-2 p-3 bg-zinc-150 w-full rounded-3xl">
          <h1 className="font-bold text-2xl flex gap-1">
            <Funnel />
            Filtros
          </h1>
          <div className="grid grid-cols-4 gap-3 p-3 rounded-2xl my-4">
            <select
              className="outline-2 hover:outline-blue-900 rounded-2xl p-3"
              name=""
              id=""
            >
              <option value="">teste</option>
            </select>
            <select
              className="outline-2 hover:outline-blue-900 rounded-2xl p-3"
              name=""
              id=""
            >
              <option value="">teste</option>
            </select>
            <input type="date" />
            <Button classe="outline-1">
              <FunnelX />
              Limpar Filtros
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

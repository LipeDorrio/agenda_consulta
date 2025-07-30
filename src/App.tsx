import { Funnel, FunnelX, Plus } from "lucide-react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col border-1 bg-amber-50">
      <div className="m-4">
        <Navbar />
        <div className="border-1 p-3 bg-zinc-150 w-full rounded-3xl bg-zinc-50 shadow-xl">
          <h1 className="font-bold text-2xl flex gap-3">
            <Funnel />
            Filtros
          </h1>
          <div className="grid grid-cols-4 gap-3 p-3 rounded-2xl my-4">
            <select
              className="outline-1 hover:outline-blue-900 rounded-2xl p-3 "
              name=""
              id=""
            >
              <option value="">Option 1</option>
              <option value="" disabled selected>
                Selecione um valor
              </option>
            </select>
            <select
              className="outline-1 hover:outline-blue-900 rounded-2xl p-3 "
              name=""
              id=""
            >
              <option value="" disabled selected>
                Selecione um valor
              </option>
              <option value="teste" selected>
                teste
              </option>
              <option value="">Option 2</option>
            </select>
            <Input type="date" />
            <Button classe="outline-1 ">
              <FunnelX />
              Limpar Filtros
            </Button>
          </div>
        </div>
      </div>
      <button
        onClick={() => {}}
        className="w-15 h-15 bg-zinc-500 text-white p-3 rounded-full fixed bottom-7 right-7 shadow-xl hover:bg-zinc-600 transition duration-300 hover:scale-110"
      >
        <Plus className="flex items-center justify-center w-full h-full" />
      </button>
    </div>
  );
}

export default App;

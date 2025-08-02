import { Funnel, FunnelX } from "lucide-react";
import Button from "./Button";
import Input from "./Input";

function Filters() {
  return (
    <div className="border-1 p-5 w-full rounded-3xl bg-zinc-50 shadow-xl">
      <h1 className="font-bold text-2xl flex gap-3">
        <Funnel />
        Filtros
      </h1>
      <div className="grid grid-cols-4 gap-3 p-3 rounded-2xl my-3">
        <select
          className="outline-1 hover:outline-blue-900 rounded-2xl p-3"
          name=""
          id=""
        >
          <option value="">Option 1</option>
          <option value="" disabled selected>
            Selecione um valor
          </option>
        </select>
        <select
          className="outline-1 hover:outline-blue-900 rounded-2xl p-3"
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
        <Button classe="text-l !font-bold bg-zinc-100 ">
          <FunnelX />
          Limpar Filtros
        </Button>
      </div>
    </div>
  );
}
export default Filters;

import { CalendarDays, ChartColumn } from "lucide-react";
import Button from "./Button";

function Navbar() {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl">Sistema de Agendamento</h1>
      <p className="text-center font-light text-[23px] my-3">
        Gerencie consultas médicas de forma eficiente
      </p>
      <div className="flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center rounded-3xl my-15">
          <div className="w-full grid grid-cols-2 justify-center gap-3 p-2 items-center bg-zinc-100 rounded-3xl">
            <Button classe="bg-zinc-200/50">
              <CalendarDays /> Agenda
            </Button>
            <Button classe="bg-zinc-200/50">
              <ChartColumn /> Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

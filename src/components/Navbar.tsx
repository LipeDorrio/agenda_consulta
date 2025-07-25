import { CalendarDays, ChartColumn } from "lucide-react";
import Button from "./Button";

function Navbar() {
  return (
    <div>
      <h1 className="font-bold text-5xl">Sistema de Agendamento</h1>
      <p className="font-light text-[23px] my-3">
        Gerencie consultas médicas de forma eficiente
      </p>
      <div className="w-1/3 flex justify-center rounded-3xl my-15">
        <div className="h-[60px] w-full grid grid-cols-2 justify-center gap-3 p-2 items-center bg-zinc-100 rounded-3xl">
          <Button>
            <CalendarDays /> Agenda
          </Button>
          <Button>
            <ChartColumn /> Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

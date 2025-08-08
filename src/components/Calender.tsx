import { useMemo } from "react";
import type { Consulta } from "../types/Consulta";

type CalenderProps = {
  consultas?: Consulta[];
};

function Calender({ consultas }: CalenderProps) {
  const hours = useMemo(() => {
    return [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
    ];
  }, []);

  const days = useMemo(() => {
    return ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  }, []);

  return (
    <div className="flex flex-col items-center justify-start border-1 bg-zinc-50 p-10 rounded-2xl">
      <h1 className="text-2xl font-bold">Calendário</h1>
      <div className="w-full rounded-md border-1 mt-5">
        <div className="grid">
          <table>
            <thead>
              <tr>
                <th className="p-8 font-bold text-center border-r-1">
                  Horário
                </th>
                <th className="p-8 font-bold text-center border-r-1">Dom</th>
                <th className="p-8 font-bold text-center border-r-1">Seg</th>
                <th className="p-8 font-bold text-center border-r-1">Ter</th>
                <th className="p-8 font-bold text-center border-r-1">Qua</th>
                <th className="p-8 font-bold text-center border-r-1">Qui</th>
                <th className="p-8 font-bold text-center border-r-1">Sex</th>
                <th className="p-8 font-bold text-center">Sab</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                return hours.flatMap((hour, rowIdx) => (
                  <tr key={`hour-${hour}`}>
                    <td className="p-8 font-bold text-center border-r-1 border-t-1">
                      {hour}
                    </td>
                    {days.map((_, colIdx) => (
                      <td
                        key={`cell-${rowIdx}-${colIdx}`}
                        className={`p-8 text-center border-t-1${
                          colIdx < days.length - 1 ? " border-r-1" : ""
                        }`}
                      >
                        {consultas?.map((consulta) => (
                          <div className="" key={consulta.id_doutor}>
                            {consulta.tp_status}
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>
                ));
              })()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calender;

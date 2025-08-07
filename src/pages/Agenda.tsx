import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import { Plus } from "lucide-react";
import Modal from "../components/Modal";
import axios from "axios";
import Calender from "../components/Calender";

type Consulta = {
  id_consulta: number;
  ds_consulta: string;
  dt_consulta: string;
  dt_hora: string;
  nm_especialidade: string;
  tp_status: string;
};

function Agenda() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  async function getConsultas() {
    const response = await axios.get("http://localhost:3000/consulta");
    setConsultas(response.data);
  }

  useEffect(() => {
    getConsultas();
  }, []);

  return (
    <div className="h-full w-full p-7 flex flex-col gap-7">
      <Filters />
      <Calender consultas={consultas} />
      {/* <div className="mt-5 border-1 shadow-md bg-zinc-100 flex flex-col justify-center rounded-xl p-5">
        <h1 className="text-center font-bold text-3xl">Agenda</h1>
        <p className="text-center font-light text-[20px] my-3">
          Gerencie suas consultas médicas de forma prática
        </p>
      </div>
      <div className="mt-5 border-2 p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {consultas.map((consulta) => (
          <div
            className="border-2 w-full p-2 h-fit rounded-2xl gap-2"
            key={consulta.id_consulta}
          >
            <div>
              <strong>Descrição:</strong> {consulta.ds_consulta}
            </div>
            <div>
              <strong>Data:</strong> {consulta.dt_consulta}
            </div>
            <div>
              <strong>Hora da consulta:</strong> {consulta.dt_hora}
            </div>
            <div>
              <strong>Especialidade:</strong> {consulta.nm_especialidade}
            </div>
            <div>
              <strong>Status:</strong> {consulta.tp_status}
            </div>
          </div>
        ))}
      </div> */}
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Cadastro"
      />
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="w-15 h-15 bg-green-500 text-white p-3 rounded-full fixed bottom-7 right-7 shadow-xl hover:bg-green-600 transition duration-300 hover:scale-110"
      >
        <Plus className="flex items-center justify-center w-full h-full" />
      </button>
    </div>
  );
}

export default Agenda;

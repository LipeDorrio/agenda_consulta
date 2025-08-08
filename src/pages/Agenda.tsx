import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import { Plus } from "lucide-react";
import Modal from "../components/Modal";
import axios from "axios";
import Calender from "../components/Calender";
import type { Consulta } from "../types/Consulta";

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
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setConsultas={setConsultas}
        consultas={consultas}
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

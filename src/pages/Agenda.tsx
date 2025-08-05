import { useState } from "react";
import Filters from "../components/Filters";
import { Plus } from "lucide-react";
import Modal from "../components/Modal";

function Agenda() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="m-5 h-full">
      <Filters />
      <div className="mt-5 border-1 shadow-2xl bg-zinc-100 flex flex-col justify-center rounded-xl p-5">
        <h1 className="text-center font-bold text-3xl">Agenda</h1>
        <p className="text-center font-light text-[20px] my-3">
          Gerencie suas consultas médicas de forma prática
        </p>
      </div>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="w-15 h-15 bg-green-500 text-white p-3 rounded-full fixed bottom-7 right-7 shadow-xl hover:bg-green-600 transition duration-300 hover:scale-110"
      >
        <Plus className="flex items-center justify-center w-full h-full" />
      </button>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Cadastro"
      />
    </div>
  );
}

export default Agenda;

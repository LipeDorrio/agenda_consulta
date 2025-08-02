import { Plus, X } from "lucide-react";
import Button from "./Button";
import Input from "./Input";
import { useEffect, useRef } from "react";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  title: string;
};

function Modal({ isModalOpen, setIsModalOpen, title }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-zinc-900/80 bg-opacity-50 flex justify-center items-center z-50">
        <div
          ref={modalRef}
          className="relative bg-white p-5 rounded-xl shadow-xl max-w-lg w-full mx-auto max-h-[90vh] overflow-y-auto"
        >
          <div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 bg-red-500 rounded-md right-4 text-zinc-700 hover:bg-red-600 transition duration-300 p-2"
            >
              <X className="w-5 h-5 flex justify-center items-center" />
            </button>
          </div>
          <h2 className="text-xl font-bold mb-4 text-center">
            {title} de Consulta
          </h2>
          <form className="grid grid-cols-1 gap-4">
            <label htmlFor="nm_paciente">Paciente:</label>
            <select
              className="outline-1 rounded-2xl p-3"
              name="nm_paciente"
              id="nm_paciente"
            >
              <option value="" disabled selected>
                Selecione um paciente
              </option>
              <option value="12353145234">Joseffer</option>
            </select>
            <label htmlFor="nm_medico">Médico:</label>
            <select
              className="outline-1 rounded-2xl p-3 hover:bg-zinc-300 transition duration-300 focus:bg-transparent"
              name="nm_medico"
              id="nm_medico"
            >
              <option value="" disabled selected>
                Selecione um valor
              </option>
            </select>
            <label htmlFor="nm_especialidade">Especialidade:</label>
            <select
              className="outline-1 rounded-2xl p-3 hover:bg-zinc-300 transition duration-300 focus:bg-transparent"
              name="nm_especialidade"
              id="nm_especialidade"
            >
              <option value="" disabled selected>
                Selecione um valor
              </option>
            </select>
            <div className="grid grid-cols-2 gap-5">
              <Input type="date" label="Data" nm_label="nm_data" />
              <Input type="time" label="Horário" nm_label="nm_horario" />
            </div>
            <label htmlFor="status">Status: </label>
            <select
              className="outline-1 rounded-2xl p-3 hover:bg-zinc-300 transition duration-300 focus:bg-transparent"
              name="status"
              id="status"
            >
              <option value="" disabled selected>
                Selecione um status
              </option>
              <option value="agendado">Agendado</option>
              <option value="cancelado">Cancelado</option>
              <option value="concluido">Concluído</option>
            </select>
            <label htmlFor="observacao">Observação:</label>
            <textarea
              className="outline-1 rounded-2xl p-3 hover:bg-zinc-300 transition duration-300 focus:bg-transparent"
              name="observacao"
              id="observacao"
              rows={4}
              placeholder="Observações sobre a consulta"
            ></textarea>
            <div className="w-full flex justify-center items-center">
              <Button classe="bg-zinc-400 text-white w-1/2">
                <Plus /> Salvar
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default Modal;

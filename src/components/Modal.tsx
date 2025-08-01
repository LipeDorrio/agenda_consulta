import { Plus, X } from "lucide-react";
import Button from "./Button";
import Input from "./Input";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

function Modal({ isModalOpen, setIsModalOpen }: Props) {
  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-zinc-900/50 bg-opacity-50 flex justify-center items-center z-50">
        <div className="relative bg-white p-5 rounded-xl shadow-xl w-1/3">
          <div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 bg-red-600 rounded-xl right-4 text-zinc-500"
            >
              <X className="w-7 h-7 flex justify-center items-center" />
            </button>
          </div>
          <h2 className="text-xl font-bold mb-4 text-center">
            Cadastro de Consulta
          </h2>
          <form className="grid grid-cols-1 gap-4">
            <Input type="text" placeholder="Nome do Paciente" />
            <Input type="date" />
            <div className="w-full flex justify-center items-center">
              <Button classe="bg-blue-500 text-white w-1/2">
                <Plus /> Cadastrar
              </Button>
            </div>
          </form>
          {/* <Button
            onClick={() => setIsModalOpen(false)}
            classe="flex justify-center items-center bg-red-500 text-white mt-4 w-1/2"
          >
            <X />
          </Button> */}
        </div>
      </div>
    )
  );
}

export default Modal;

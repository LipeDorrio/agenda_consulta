import { Plus, X } from "lucide-react";
import Button from "./Button";
import Input from "./Input";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import type { Consulta } from "../types/Consulta";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  setConsultas: (consultas: Consulta[]) => void;
  consultas: Consulta[];
  title: string;
};

function Modal({ isModalOpen, setIsModalOpen, title, setConsultas , consultas}: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    id_doutor: "",
    nm_especialidade: "",
    dt_consulta: "",
    dt_fimconsulta: "2003-02-02",
    dt_hora: "",
    tp_status: "",
    ds_consulta: "",
  });

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    await axios.post("http://localhost:3000/consulta", formData);
    setFormData({
      id_doutor: "",
      nm_especialidade: "",
      dt_consulta: "",
      dt_fimconsulta: "2003-02-02",
      dt_hora: "",
      tp_status: "",
      ds_consulta: "",
    });
    setConsultas([...consultas, formData]);
    setIsModalOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setFormData({
          id_doutor: "",
          nm_especialidade: "",
          dt_consulta: "",
          dt_fimconsulta: "2003-02-02",
          dt_hora: "",
          tp_status: "",
          ds_consulta: "",
        });
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
          <form onSubmit={onSave} className="grid grid-cols-1 gap-4">
            <label htmlFor="nm_paciente">Paciente:</label>
            <select
              className="outline-1 rounded-2xl p-3 hover:bg-zinc-300 transition duration-300 focus:bg-transparent"
              name="nm_paciente"
              id="nm_paciente"
            >
              <option value="" disabled>
                Selecione um paciente
              </option>
              <option value="12353145234">Joseffer</option>
            </select>
            <label htmlFor="id_doutor">Médico:</label>
            <select
              className="outline-1 rounded-2xl p-3 hover:bg-zinc-300 transition duration-300 focus:bg-transparent"
              name="id_doutor"
              id="id_doutor"
              value={formData.id_doutor}
              onChange={(event) =>
                setFormData({ ...formData, id_doutor: event.target.value })
              }
            >
              <option value="" disabled>
                Selecione um valor
              </option>
              <option value="234">Augusto</option>
              <option value="34234">Cardina</option>
            </select>
            <label htmlFor="nm_especialidade">Especialidade:</label>
            <select
              className="outline-1 rounded-2xl p-3 hover:bg-zinc-300 transition duration-300 focus:bg-transparent"
              name="nm_especialidade"
              id="nm_especialidade"
              value={formData.nm_especialidade}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  nm_especialidade: event.target.value,
                })
              }
            >
              <option value="" disabled>
                Selecione um valor
              </option>
              <option value="1234">Dermatologista</option>
              <option value="343234">Cu</option>
            </select>
            <div className="grid grid-cols-2 gap-5">
              <Input
                type="date"
                label="Data"
                nm_label="dt_consulta"
                value={formData.dt_consulta}
                onChange={(event) =>
                  setFormData({ ...formData, dt_consulta: event.target.value })
                }
              />
              <Input
                type="time"
                label="Horário"
                nm_label="dt_hora"
                value={formData.dt_hora}
                onChange={(event) =>
                  setFormData({ ...formData, dt_hora: event.target.value })
                }
              />
            </div>
            <label htmlFor="tp_status">Status: </label>
            <select
              className="outline-1 rounded-2xl p-3 hover:bg-zinc-300 transition duration-300 focus:bg-transparent"
              name="tp_status"
              id="tp_status"
              value={formData.tp_status}
              onChange={(event) =>
                setFormData({ ...formData, tp_status: event.target.value })
              }
            >
              <option value="" disabled>
                Selecione um status
              </option>
              <option value="agendado">Agendado</option>
              <option value="cancelado">Cancelado</option>
              <option value="concluido">Concluído</option>
            </select>
            <label htmlFor="ds_consulta">Observação:</label>
            <textarea
              className="outline-1 rounded-2xl p-3 hover:bg-zinc-300 transition duration-300 focus:bg-transparent"
              name="ds_consulta"
              id="ds_consulta"
              rows={4}
              value={formData.ds_consulta}
              onChange={(event) =>
                setFormData({ ...formData, ds_consulta: event.target.value })
              }
              placeholder="Observações sobre a consulta"
            ></textarea>
            <div className="w-full flex justify-center items-center">
              <Button
                type="submit"
                onClick={onSave}
                classe="bg-zinc-400 text-white w-1/2"
              >
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

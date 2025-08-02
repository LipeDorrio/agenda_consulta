import { Funnel, FunnelX, Plus } from "lucide-react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
import Modal from "./components/Modal";
import Filters from "./components/Filters";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col border-1">
      <div className="m-4">
        <Navbar />
        <Filters />
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

export default App;

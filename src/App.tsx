import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Agenda from "./pages/Agenda";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Agenda />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

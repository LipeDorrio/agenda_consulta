import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col border-2">
      <div className="m-4">
        <Navbar />
        {/* <div className="border-2 h-full">
          <div className="grid grid-cols-1">
            <div className="w-full border-2 h-40 my-4">teste</div>
            <div className="">teste</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;

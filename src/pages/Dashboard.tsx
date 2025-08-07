function Dashboard() {
  return (
    <div className="m-5 p-5 grid grid-cols-3 h-full gap-5">
      <div className="w-full h-full border-1 shadow-2xl bg-zinc-50 flex justify-center rounded-xl items-center">
        Dashboard
      </div>
      <div className="h-full border-1 shadow-2xl bg-zinc-50 flex justify-center rounded-xl items-center">
        Dashboard
      </div>
      <div className="h-full border-1 shadow-2xl bg-zinc-50 flex justify-center rounded-xl items-center">
        Dashboard
      </div>
      <div className="h-full border-1 shadow-2xl bg-zinc-50 flex justify-end rounded-xl col-span-3 p-5">
        <div className="w-full h-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-15 h-15 bg-zinc-200 rounded-full overflow-hidden">
                <img
                  src="/src/img/felipe.jpg"
                  alt="Felipe Dorrio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm font-medium">Felipe Dorrio</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full border-1 shadow-2xl bg-zinc-50 flex justify-end rounded-xl col-span-3 p-5">
        <div className="w-full h-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-15 h-15 bg-zinc-200 rounded-full overflow-hidden">
                <img
                  src="/src/img/felipe.jpg"
                  alt="Felipe Dorrio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm font-medium">Felipe Dorrio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

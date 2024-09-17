import { Toaster } from "react-hot-toast";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="h-full bg-[#111111]">
      <div className="max-w-8xl flex gap-20 px-20 py-10">
        <Sidebar />

        <div className="flex-1 min-h-full bg-[#1E1E1E] rounded-lg component">
          <Navigation />

          <Toaster position="bottom-left" reverseOrder={false} />
          <main className="px-12">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;

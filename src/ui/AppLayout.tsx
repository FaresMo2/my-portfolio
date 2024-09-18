import { Toaster } from "react-hot-toast";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="applayout h-screen overflow-y-auto  lg:h-full bg-[#111111] ">
      <div className="flex gap-5 lg:px-20 lg:gap-20 lg:py-10 lg:max-w-8xl">
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

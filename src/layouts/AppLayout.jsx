import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      {/* Header + content */}
      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4">
          <Header />
          <Outlet />
        </div>
      </main>

      {/* Footer full-width but content centered */}
      <footer className="mt-10 bg-gray-800">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 text-center">
          sharjeel0x ©
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;

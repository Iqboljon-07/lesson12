import Header from "@/components/header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

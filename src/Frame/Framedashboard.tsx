import Header from "@/pages/UIcomponents/Header";
import Menu from "@/pages/UIcomponents/Menu";

import React from "react";

function Framedashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Menu />
      <div className="flex flex-col w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Framedashboard;

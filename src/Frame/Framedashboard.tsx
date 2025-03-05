import Header from "@/pages/UIcomponents/Header";
import Menu from "@/pages/UIcomponents/Menu";

import React from "react";

function Framedashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-900">
      <Menu /> 
      <Header />
      <div className="flex min-h-screen flex-col w-full bg-slate-900 ">
       
        {children}
      </div>
    </div>
  );
}

export default Framedashboard;

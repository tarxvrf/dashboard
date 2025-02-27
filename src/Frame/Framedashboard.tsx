import Header from "@/pages/UIcomponents/Header";
import Menu from "@/pages/UIcomponents/Menu";

import React from "react";

function Framedashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row " >          
        <Menu />
        <div className="flex flex-col w-full h-screen overflow-y-auto border">
          <Header />
          <div className="flex flex-col h-screen overflow-y-auto p-4">{children}</div>
        </div>
       
    
    </div>
  );
}

export default Framedashboard;

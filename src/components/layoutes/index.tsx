import { MainLayOuteProps } from "@/interfaces";
import React from "react";
import { MenuBar, Footer } from "../index";

const MainLayoute = ({ children }: MainLayOuteProps) => {
  return (
    <div>
      <MenuBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayoute;

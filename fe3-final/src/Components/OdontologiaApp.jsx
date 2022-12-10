import React from "react";
import { Outlet } from "react-router-dom";

import Theme, { ThemeProvider } from "./utils/Theme";
import {DataProvider} from "./utils/Data";
import Footer from "./Footer";
import Navbar from "./Navbar";

function OdontologiaApp() {
  return (
    <div className="Layout">
      <ThemeProvider>
        <DataProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </DataProvider>
      </ThemeProvider>
    </div>
  );
}

export default OdontologiaApp;

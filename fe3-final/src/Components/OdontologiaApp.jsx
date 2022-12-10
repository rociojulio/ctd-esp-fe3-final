import React from "react";
import { Outlet } from "react-router-dom";

import Theme from "./utils/Theme";
import Data from "./utils/Data";
import Footer from "./Footer";
import Navbar from "./Navbar";

function OdontologiaApp() {
  return (
    <div className="Layout">
      <Theme>
        <Data>
          {/* <Navbar />
          <Outlet />
          {/* <Footer /> */}
        </Data> 
      </Theme>
    </div>
  );
}

export default OdontologiaApp;
import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import OdontologiaApp from "./Components/OdontologiaApp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OdontologiaApp />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

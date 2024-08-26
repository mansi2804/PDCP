import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Check from "./Pages/Check";
import Plans from "./Pages/Plans";
import Events from "./Pages/Events";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Check" element={<Check />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Check from "./Pages/Check";
import Plans from "./Pages/Plans";
import Events from "./Pages/Events";
import Details from "./pages/Details";

import CreatePlan from "./Pages/CreatePlan";
import ModifyPlan from "./Pages/ModifyPlan";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Check" element={<Check />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/CreatePlan" element={<CreatePlan />} />
          <Route path="/ModifyPlan" element={<ModifyPlan />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

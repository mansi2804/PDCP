import React from "react";
import { Footer } from "../components/footer";
import { Search } from "../components/SearchcreatePlan";
import MapDisplay from "../components/MapDisplay";
import { ModifyLocationList } from "../components/ModifyLocationList";


const ModifyPlan = () => {
  return (
    <div>
      <Search />
      <ModifyLocationList />  
      <Footer />
    </div>
  );
};

export default ModifyPlan;
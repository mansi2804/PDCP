import React from "react";
import { Footer } from "../components/footer";
import { Search } from "../components/SearchcreatePlan";
import MapDisplay from "../components/MapDisplay";
import ModifyLocationList from "../components/ModifyLocationList";


const ModifyPlan = () => {
  return (
    <div>
      <Search />
      
      <div style={{ display: 'flex', height: '78vh' }}>
            <div style={{ width: '50%' }}>
                {<div className="flex flex-col lg:flex-row">
                <ModifyLocationList />
                </div>}
            </div>
        <MapDisplay />
     </div>
        
      <Footer />
    </div>
  );
};

export default ModifyPlan;
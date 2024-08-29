import React from "react";
import { Footer } from "../components/footer";
import { Search } from "../components/SearchCreatePlan";
import MapDisplay from "../components/MapDisplay";
import LocationList from "../components/LocationList";


const CreatePlan = () => {
  return (
    <div>
      <Search />
      
      <div style={{ display: 'flex', height: '78vh' }}>
            <div style={{ width: '100%' }}>
                {<div className="flex lg:flex-col lg:flex-row">
                <LocationList />
                </div>}
            </div>
        <MapDisplay />
     </div>
        
      <Footer />
    </div>
  );
};

export default CreatePlan;
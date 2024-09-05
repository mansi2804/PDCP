import React from "react";
import { Footer } from "../components/footer";
import { Search } from "../components/SearchcreatePlan";
import MapDisplay from "../components/MapDisplay";
import { ModifyLocationList } from "../components/ModifyLocationList";
import { LocationProvider } from '../components/LocationContext';


const ModifyPlan = () => {
  return (
    <div>
      <LocationProvider>
      <Search />
      <ModifyLocationList />  
      </LocationProvider>
      <Footer />
    </div>
  );
};

export default ModifyPlan;
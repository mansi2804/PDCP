import React from "react";
import { Footer } from "../components/footer";
import { Search } from "../components/SearchCreatePlan";
import  LocationList  from "../components/LocationList";
import { LocationProvider } from '../components/LocationContext';




const CreatePlan = () => {
  return (
    <div>
      <LocationProvider>
      <Search />
      <LocationList />  
      </LocationProvider>
      <Footer />
    </div>
  );
};

export default CreatePlan;

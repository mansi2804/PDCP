import React from "react";
import { Footer } from "../components/footer";
import { Search } from "../components/SearchCreatePlan";
import  LocationList  from "../components/LocationList";




const CreatePlan = () => {
  return (
    <div>
      <Search />
      <LocationList />  
      <Footer />
    </div>
  );
};

export default CreatePlan;

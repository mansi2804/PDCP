import React, { useState } from 'react';
import ModifyPlanModal from '/src/components/ModifyPlanModal';

const locations = [
    { name: "The Art Institute of Chicago", rating: "4.7", location: "Chicago, IL", price: "$$$" },
    { name: "Millennium Park", rating: "4.8", location: "Chicago, IL", price: "$$" },
    { name: "Willis Tower", rating: "4.5", location: "Chicago, IL", price: "$$$" },
    { name: "Navy Pier", rating: "4.3", location: "Chicago, IL", price: "$$" },
    { name: "Lincoln Park Zoo", rating: "4.6", location: "Chicago, IL", price: "Free" },
    { name: "Shedd Aquarium", rating: "4.4", location: "Chicago, IL", price: "$$$" },
    { name: "Field Museum", rating: "4.5", location: "Chicago, IL", price: "$$$" },
    { name: "Chicago Riverwalk", rating: "4.8", location: "Chicago, IL", price: "Free" },
    { name: "Cloud Gate", rating: "4.7", location: "Chicago, IL", price: "Free" },
    { name: "Museum of Science and Industry", rating: "4.5", location: "Chicago, IL", price: "$$$" }
];

function ModifyLocationList() {
    const [showAll, setShowAll] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const handleAddClick = (location) => {
      setSelectedLocation(location);
      setModalOpen(true);
  };

    return (
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#000235] to-[#8080d7]">
            <h2 className="text-xl font-semibold  text-white mb-4">The Top 10 Places Near Chicago</h2>
            <div className="mb-4">
                <label className="mr-2 text-white">Filters:</label>
                <select className="p-1 rounded bg-white text-black mr-1">
                    <option>Day</option>
                    <option>Night</option>
                </select>
                <select className="p-1 rounded bg-white text-black mr-1">
                    <option>Type</option>
                    <option>Park</option>
                    <option>Museum</option>
                </select>
                <select className="p-1 rounded bg-white text-black mr-1">
                    <option>Distance</option>
                    <option>Close</option>
                    <option>Far</option>
                </select>
                <select className="p-1 rounded bg-white text-black">
                    <option>Category</option>
                    <option>Entertainment</option>
                    <option>Education</option>
                </select>
            </div>
            {/* Scrollable container for locations */}
            <div className="max-h-[60vh] overflow-auto space-y-4">
                {locations.slice(0, showAll ? locations.length : 10).map((location, index) => (
                    <div key={index} className="bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-between">
                        <div>
                            <h3 className="text-sm font-semibold">{location.name}</h3>
                            <p className="text-xs">Rating: {location.rating}</p>
                            <p className="text-xs">Location: {location.location}</p>
                            <p className="text-xs">Price: {location.price}</p>
                        </div>
                        <button onClick={() => handleAddClick(location)}  className="rounded-full border border-gray-400 bg-gradient-to-t from-[#8D8DDA] to-white text-black hover:from-[#8080d7] hover:to-white shadow-md  font-bold py-2 px-4 rounded text-xs">
                        
                            Modify
                        </button>
                    </div>
                ))}
            </div>
            <ModifyPlanModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} planDetails={selectedLocation} />
        </div>
    );
}

export default ModifyLocationList;

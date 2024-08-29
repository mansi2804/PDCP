import React, { useState } from 'react';
import CreatePlanModal from '/src/components/CreatePlanModal';

const locations = [
    { name: "The Art Institute of Chicago", rating: 4.7, location: "Chicago, IL", distance: 1, price: 10.5 },
    { name: "Millennium Park", rating: 4.8, location: "Chicago, IL", distance: 2, price: 20 },
    { name: "Willis Tower", rating: 4.5, location: "Chicago, IL", distance: 3, price: 5 },
    { name: "Navy Pier", rating: 4.3, location: "Chicago, IL", distance: 0.5, price: 30 },
    { name: "Lincoln Park Zoo", rating: 4.6, location: "Chicago, IL", distance: 2.5, price: 15 },
    { name: "Shedd Aquarium", rating: 4.4, location: "Chicago, IL", distance: 1.5, price: 23 },
    { name: "Field Museum", rating: 4.5, location: "Chicago, IL", distance: 1, price: 12 },
    { name: "Chicago Riverwalk", rating: 4.8, location: "Chicago, IL", distance: 1, price: 11 },
    { name: "Cloud Gate", rating: 4.7, location: "Chicago, IL", distance: 1, price: 21 },
    { name: "Museum of Science and Industry", rating: 4.5, location: "Chicago, IL", distance: 4, price: 76 }
];

function LocationList() {
    const [priceFilter, setPriceFilter] = useState('');
    const [distanceFilter, setDistanceFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleAddClick = (location) => {
        setSelectedLocation(location);
        setModalOpen(true);
    };

    const filteredLocations = locations.filter(location => {
        return (
            (!priceFilter || (priceFilter === 'Below 10' && location.price < 10) || 
             (priceFilter === 'Between 10 - 20' && location.price >= 10 && location.price <= 20) || 
             (priceFilter === 'More than 20' && location.price > 20)) &&
            (!distanceFilter || (distanceFilter === 'Under 2 miles' && location.distance <= 2) ||
             (distanceFilter === 'Under 3 miles' && location.distance <= 3) ||
             (distanceFilter === 'Under 5 miles' && location.distance <= 5) ||
             (distanceFilter === 'more than 5 miles' && location.distance > 5)) &&
            (!ratingFilter || (ratingFilter === 'Ratings: 4 - 5 Star' && location.rating >= 4) ||
             (ratingFilter === 'Ratings: 3.5-4' && location.rating >= 3.5 && location.rating < 4) ||
             (ratingFilter === 'Ratings: 3-3.5' && location.rating >= 3 && location.rating < 3.5))
        );
    });

    

    return (
        //<div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#000235] to-[#8080d7]">
        <div className="flex-1 scrollable-div">
            <h2 className="text-xl font-semibold text-white mb-4">The Top 10 Places Near Chicago</h2>
            <div className="mb-4">
            <label className="mr-2 text-white">Filters:</label>
                <select className="p-1 rounded bg-white text-black mr-1" value={priceFilter} onChange={e => setPriceFilter(e.target.value)}>
                    <option value="">All Prices</option>
                    <option value="Below 10">Below 10$</option>
                    <option value="Between 10 - 20">Between 10$ - 20$</option>
                    <option value="More than 20">More than 20$</option>
                </select>
                {/* Distance filter */}
                <select className="p-1 rounded bg-white text-black mr-1" value={distanceFilter} onChange={e => setDistanceFilter(e.target.value)}>
                    <option value="">All Distances</option>
                    <option value="Under 2 miles">Under 2 miles</option>
                    <option value="Under 3 miles">Under 3 miles</option>
                    <option value="Under 5 miles">Under 5 miles</option>
                    <option value="more than 5 miles">More than 5 miles</option>
                </select>
                {/* Rating filter */}
                <select className="p-1 rounded bg-white text-black" value={ratingFilter} onChange={e => setRatingFilter(e.target.value)}>
                    <option value="">All Ratings</option>
                    <option value="Ratings: 4 - 5 Star">Ratings: 4 - 5 Star</option>
                    <option value="Ratings: 3.5-4">Ratings: 3.5-4</option>
                    <option value="Ratings: 3-3.5">Ratings: 3-3.5</option>
                </select>
            </div>
            <div className="max-h-[65vh] overflow-auto-y space-y-4">
                {filteredLocations.map((location, index) => (
                    <div key={index} className="bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-between">
                        <div>
                            <h3 className="text-sm font-semibold">{location.name}</h3>
                            <p className="text-xs">Rating: {location.rating}</p>
                            <p className="text-xs">Location: {location.location}</p>
                            <p className="text-xs">Distance: {location.distance} miles</p>
                            <p className="text-xs">Price: ${location.price}</p>
                        </div>
                        <button onClick={() => handleAddClick(location)} className="rounded-full border border-gray-400 bg-gradient-to-t from-[#8D8DDA] to-white text-black hover:from-[#8080d7] hover:to-white shadow-md font-bold py-2 px-4 rounded text-xs">
                            ADD
                        </button>
                    </div>
                ))}
            </div>
            <CreatePlanModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} planDetails={selectedLocation} />
        </div>
    );
}

export default LocationList;

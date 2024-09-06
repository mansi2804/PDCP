import React, { useContext,useState, useEffect, useRef }  from 'react';
import CreatePlanModal from '/src/components/CreatePlanModal';
//import MapDisplay from '/src/components/MapDisplay';
import L from 'leaflet';
import CustomScrollbarContainer from './ui/CustomScrollbarContainer';
import { LocationContext } from '/src/components/LocationContext';  



function LocationList() {
    const { locations,setSelectLocation } = useContext(LocationContext);
    const [priceFilter, setPriceFilter] = useState('');
    const [distanceFilter, setDistanceFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    

    const [locationInput, setLocationInput] = useState('Chicago, IL'); // Default location
    const [businessType, setSearchQuery] = useState(''); // Search query state

    

    const handleAddClick = (location) => {
        setSelectLocation(location);
        setSelectedLocation(location);
        setModalOpen(true);
    };

    const mapRef = useRef(null);

    useEffect(() => {
        const map = L.map(mapRef.current).setView([41.8781, -87.6298], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        return () => map.remove();
    }, []);

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
        <div className="Main1 flex flex-row h-[78vh], zIndex: 50">
            <div className="Child1 w-1/2  bg-gradient-to-b from-[#000235] to-[#8080d7] relative, zIndex: 50">
                <h2 className="text-xl font-semibold text-white mb-4"> {`Top Places for ${businessType} Near ${locationInput}`}</h2>
                {/* Filters */}
                <div className="mb-4">
                    {/* Price filter */}
                    <select className="p-1 rounded bg-gradient-to-t from-[#8D8DDA] to-white  text-black mr-8" onChange={e => setPriceFilter(e.target.value)}>
                        <option value="">All Prices</option>
                        <option value="Below 10">Below $10</option>
                        <option value="Between 10 - 20">$10 - $20</option>
                        <option value="More than 20">Above $20</option>
                    </select>
                    {/* Distance filter */}
                    <select className="p-1 bg-gradient-to-t from-[#8D8DDA] to-white rounded text-black mr-8" onChange={e => setDistanceFilter(e.target.value)}>
                        <option value="">All Distances</option>
                        <option value="Under 2 miles">Under 2 miles</option>
                        <option value="Under 3 miles">Under 3 miles</option>
                        <option value="Under 5 miles">Under 5 miles</option>
                        <option value="more than 5 miles">Over 5 miles</option>
                    </select>
                    {/* Rating filter */}
                    <select className="p-1 bg-gradient-to-t from-[#8D8DDA] to-white rounded text-black mr-8" onChange={e => setRatingFilter(e.target.value)}>
                        <option value="">All Ratings</option>
                        <option value="Ratings: 4 - 5 Star">4 - 5 Stars</option>
                        <option value="Ratings: 3.5-4">3.5 - 4 Stars</option>
                        <option value="Ratings: 3-3.5">3 - 3.5 Stars</option>
                    </select>
                </div>
                {/* Location listings */}
                
                <div className="flex h-[65vh]">
                
                    <main className="flex-1 overflow-y-auto bg-gradient-to-b from-[#000235] to-[#8080d7]">
                    <CustomScrollbarContainer>
                        <div className="container mx-auto px-8 py-4">
                            <div className="grid grid-cols-1 gap-4 mt-6">
                                {filteredLocations.map((location, index) => (
                                    <div key={index} className="bg-gradient-to-r from-[#8D8DDA] to-white rounded-lg shadow-md overflow-hidden flex">
                                        <img
                                            src={location.photo_url || "/placeholder.svg"}
                                            alt={location.name}
                                            width={100}
                                            height={100}
                                            className="w-38 h-38 object-cover"
                                            style={{ aspectRatio: "100/100", objectFit: "cover" }}
                                        />
                                        <div className="flex-1 p-4">
                                            <h3 className="text-sm font-semibold">{location.name}</h3>
                                            <p className="text-xs">Rating: {location.rating}</p>
                                            <p className="text-xs">Location: {location.address}</p>
                                            <p className="text-xs">phone_number: {location.phone_number}</p>
                                            <p className="text-xs">Distance: {location.distance} miles</p>
                                            <p className="text-xs">price_level: {location.price_level}</p>
                                        </div>
                                        <div className="relative h-full">
                                            <div className="absolute bottom-8 right-8 flex flex-row gap-2">
                                                <button onClick={() => handleAddClick(location)} className="w-28 rounded-full border border-gray-400 bg-gradient-to-t from-[#8D8DDA] to-white text-black hover:from-[#8080d7] hover:to-white shadow-md">
                                                    ADD
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </CustomScrollbarContainer>
                    </main>
                    
                </div>
                
            </div>


            <div className="Child2 w-1/2 bg-gradient-to-b from-[#000235] to-[#8080d7]" style={{ position: 'relative', zIndex: 50 }}>
    {/* Adjusted to ensure this div can control its layering relative to other elements */}
    <div ref={mapRef} style={{ width: '100%', height: '77.5vh', zIndex: 10 }}>
        {/* Your map will fill this div */}
    </div>
</div>


            <CreatePlanModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} planDetails={selectedLocation} />
            



        </div>
    );
}

export default LocationList;
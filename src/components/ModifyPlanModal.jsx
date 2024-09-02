import React, { useState } from 'react';

const ModifyPlanModal = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [category, setCategory] = useState('');


    // Simulated location data (hardcoded for demonstration)
    const allLocations = [
        { id: 1, name: "Millennium Park", city: "Chicago" },
        { id: 2, name: "Willis Tower", city: "Chicago" },
        { id: 3, name: "Willis chicago", city: "Chicago" },
        // More locations can be added here
    ];

    const handleSearch = () => {
        // Filtering locations based on search query
        const filtered = allLocations.filter(location =>
            location.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setLocations(filtered);
    };

    const handleLocationSelect = (locationId) => {
        setSelectedLocation(locationId);
        const selected = allLocations.find(location => location.id === locationId);
        setSearchQuery(selected ? `${selected.name}, ${selected.city}` : '');
        setLocations([]); // Clear locations after selection
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gradient-to-t from-[#8D8DDA] to-white rounded-lg shadow-lg w-[35%] max-w-4xl p-6 relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex items-start justify-between">
                    <div className="flex-1 mr-4">
                        <label className="block font-medium text-gray-700">Category</label>
                        <select className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500">
                            <option value="">Select Category</option>
                            <option value="restaurants">Restaurants</option>
                            <option value="clubs">Clubs</option>
                            {/* Additional categories can be added here */}
                        </select>
                    </div>

                    {/* Search Location */}
                    <div className="flex-1 relative">
                        <label className="block font-medium text-gray-700">Location</label>
                        
                            <input
                                type="text"
                                placeholder="Search Location"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500"
                            />
                            <button onClick={handleSearch} className="absolute right-0 top-0 mt-6 mr bg-purple-500 hover:bg-purple-700 text-white p-2 rounded-lg">
                                <SearchIcon />
                            </button>
                       


                {/* Location Suggestions */}
                {locations.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto w-full">
                        {locations.map((location) => (
                            <li
                                key={location.id}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleLocationSelect(location.id)}
                            >
                                {location.name}, {location.city}
                            </li>
                        ))}
                    </ul>
                )}

                </div>
                </div>

                {/* Other details */}
                <div className="flex mt-4 space-x-4">
                    <div className="flex-1">
                        <label className="block font-medium text-gray-700">Date</label>
                        <input type="date" className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500" />
                    </div>
                    <div className="flex-1">
                        <label className="block font-medium text-gray-700">Time</label>
                        <input type="time" className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block font-medium text-gray-700">Description</label>
                    <textarea placeholder="Enter Description" className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div className="mt-4">
                    <label className="block font-medium text-gray-700">Number of People</label>
                    <input type="number" placeholder="Enter Number" className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={onClose} className="rounded-full border border-gray-400 bg-gradient-to-t from-[#8D8DDA] to-white text-black hover:from-[#8080d7] hover:to-white shadow-md font-bold py-2 px-4 rounded text-xs">
                        Modify Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

function SearchIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
        </svg>
    );
}

export default ModifyPlanModal;

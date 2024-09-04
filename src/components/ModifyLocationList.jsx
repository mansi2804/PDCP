import React, { useState, useEffect, useRef }  from 'react';
import { Button } from "/src/components/ui/button";
import { Share } from "/src/components/Share";
import L from 'leaflet';
import CustomScrollbarContainer from './ui/CustomScrollbarContainer';
import ModifyPlanModal from '/src/components/ModifyPlanModal';

export function ModifyLocationList() {
    const [events, setEvents] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [showShareDialog, setShowShareDialog] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };


    const handleCloseModal = () => {
        setModalOpen(false);
    };


    const mapRef = useRef(null);

    useEffect(() => {
        const map = L.map(mapRef.current).setView([41.8781, -87.6298], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        return () => map.remove();
    }, []);

    const data = {
        events: [
            {
                name: "Sample Event - Test",
                date: "07-28-2024",
                time: "8:00pm",
                attendees: "15",
                imageUrl:
                    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            },
            {
                name: "Sample Event - Test",
                date: "07-28-2024",
                time: "8:00pm",
                attendees: "15",
                imageUrl:
                    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            },
            {
                name: "Sample Event - Test",
                date: "07-28-2024",
                time: "8:00pm",
                attendees: "15",
                imageUrl:
                    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            },
            {
                name: "Sample Event - Test",
                date: "07-28-2024",
                time: "8:00pm",
                attendees: "15",
                imageUrl:
                    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            }, {
                name: "Sample Event - Test",
                date: "07-28-2024",
                time: "8:00pm",
                attendees: "15",
                imageUrl:
                    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            },

        ],
    };

    const fetchEvents = async () => {
        setLoading(true);
        try {
            // const response = await fetch('/api/events'); // Replace with your API endpoint
            // const data = await response.json();
            setEvents(data.events); // Assuming `data.events` contains the list of events
            setHasMore(data.hasMore); // Assuming `data.hasMore` indicates if there are more events
        } catch (error) {
            console.error("Error fetching events:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const loadMoreEvents = async () => {
        if (loading) return;

        setLoading(true);
        try {
            const response = await fetch(`/api/events?offset=${events.length}`); // Adjust query parameters as needed
            const data = await response.json();
            setEvents((prevEvents) => [...prevEvents, ...data.events]);
            setHasMore(data.hasMore);
        } catch (error) {
            console.error("Error fetching more events:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Main1 flex flex-row h-[78vh] z-50">
            <main className="Child1 w-1/2  bg-gradient-to-b from-[#000235] to-[#8080d7] relative z-50">
                <h2 className="text-xl font-semibold text-white mb-4">The Top 10 Places Near Chicago</h2>
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

                <div className="flex h-[65vh]">

                    <main className="flex-1 overflow-y-auto bg-gradient-to-b from-[#000235] to-[#8080d7]">
                        <CustomScrollbarContainer>
                            <div className="container mx-auto px-8 py-4">
                                <div className="grid grid-cols-1 gap-4 mt-6">
                                    {events.length === 0 ? (
                                        <div className="text-center text-white mt-8">
                                            <p>No events available at the moment.</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="grid grid-cols-1 gap-4 mt-2">
                                                {events.map((event, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-gradient-to-r from-[#8D8DDA] to-white rounded-lg shadow-md overflow-hidden flex"
                                                    >
                                                        <img
                                                            src={event.imageUrl || "/placeholder.svg"}
                                                            alt={event.name}
                                                            width={100}
                                                            height={100}
                                                            className="w-28 h-28 object-cover"
                                                            style={{ aspectRatio: "200/200", objectFit: "cover" }}
                                                        />
                                                        <div className="flex-1 p-4">
                                                            <h3 className="text-lg font-semibold">{event.name}</h3>
                                                            <p className="text-sm font-semibold">
                                                                {event.date} - {event.time}
                                                            </p>
                                                            <p className="text-sm font-semibold">
                                                                <UserIcon className="w-4 h-4 inline-block mr-1" />
                                                                {event.attendees} Attending
                                                            </p>
                                                        </div>
                                                        <div className="relative h-full">
                                                            <div className="absolute bottom-8 right-8 flex flex-row gap-2">
                                                                <Button onClick={handleOpenModal}
                                                                    variant="outline"
                                                                    className="w-28 rounded-full border border-gray-400 bg-gradient-to-t from-[#8D8DDA] to-white text-black hover:from-[#8080d7] hover:to-white shadow-md"
                                                                >
                                                                    Edit
                                                                </Button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {hasMore && (
                                                <div className="flex justify-center mt-8">
                                                    <Button onClick={loadMoreEvents} disabled={loading}>
                                                        {loading ? "Loading..." : "See More"}
                                                    </Button>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>



                            </div>
                        </CustomScrollbarContainer>
                    </main>

                </div>
            </main>


            <div className="Child2 w-1/2 bg-gradient-to-b from-[#000235] to-[#8080d7]" style={{ position: 'relative', zIndex: 50 }}>
                {/* Adjusted to ensure this div can control its layering relative to other elements */}
                <div ref={mapRef} style={{ width: '100%', height: '77.5vh', zIndex: 10 }}>
                    {/* Your map will fill this div */}
                </div>
            </div>


            <ModifyPlanModal isOpen={modalOpen} onClose={handleCloseModal} />

        </div>
    );
}

function UserIcon(props) {
    return (
        <svg
            {...props}
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}

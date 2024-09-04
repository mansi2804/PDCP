    import React, { useState } from 'react';

    const CreatePlanModal = ({ isOpen, onClose }) => {
    // Adding state for each form field
    const [planName, setPlanName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');


        const handleSubmit = async () => {
            // Constructing the event data
            const eventData = {
                title: planName,
                date: `${date}T${time}`, // Assuming the backend expects a combined date-time string in ISO format
                description: description,
                location: "Not specified", // Adjust based on your form, if you have location input
                numberOfPeople: numberOfPeople
            };
    
            // API call to create the event
            try {
                const response = await fetch('http://localhost:8000/api/events/create/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // Assuming authentication is needed; include your auth tokens as required
                    },
                    credentials: 'include',
                    body: JSON.stringify(eventData)
                    
                });
    
                const result = await response.json();
                if (response.ok) {
                    onClose(); // Close modal on successful creation
                    alert('Plan created successfully');
                } else {
                    throw new Error(result.error || 'Failed to create plan');
                }
            } catch (error) {
                console.error('Error creating plan:', error);
                alert(error.message);
            }
        };


        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" >
            <div className="bg-gradient-to-t from-[#8D8DDA] to-white rounded-lg shadow-lg  w-[35%] max-w-4xl p-6 relative" style={{ height: 'auto' }}>
        
                    <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                
                    <div>
                        <label className="block font-medium text-gray-700">Plan Name</label>
                        <input
                        type="text"
                        placeholder="Enter Plan Name"
                        value={planName}
                        onChange={(e) => setPlanName(e.target.value)}
                        className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500"
                    />
                    </div>
                    <div className="flex mt-4 space-x-4">
                        <div className="flex-1">
                        <label className="block font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500"
                        />
                        </div>
                        <div className="flex-1">
                        <label className="block font-medium text-gray-700">Time</label>
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500"
                        />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block font-medium text-gray-700">Description</label>
                        <textarea
                        placeholder="Enter Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500"
                    />
                    </div>
                    <div className="mt-4">
                        <label className="block font-medium text-gray-700">Number of People</label>
                        <input
                        type="number"
                        placeholder="Enter Number"
                        value={numberOfPeople}
                        onChange={(e) => setNumberOfPeople(e.target.value)}
                        className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500"
                    />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button onClick={handleSubmit} className="rounded-full border border-gray-400 bg-gradient-to-t from-[#8D8DDA] to-white text-black hover:from-[#8080d7] hover:to-white shadow-md  font-bold py-2 px-4 rounded text-xs">
                            Create Plan
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    export default CreatePlanModal;

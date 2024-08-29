import React from 'react';

const CreatePlanModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-left items-center p-20">
            <div className="bg-white p-2 rounded-2xl shadow-xl w-full max-w-lg relative">
    
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="font-bold text-xl mb-4 text-purple-800">Create Plan</h2>
                <div>
                    <label className="block font-medium text-gray-700">Plan Name</label>
                    <input type="text" placeholder="Enter Plan Name" className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500"/>
                </div>
                <div className="mt-4">
                    <label className="block font-medium text-gray-700">Date</label>
                    <input type="date" className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500"/>
                </div>
                <div className="mt-4">
                    <label className="block font-medium text-gray-700">Time</label>
                    <input type="time" className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500"/>
                </div>
                <div className="mt-4">
                    <label className="block font-medium text-gray-700">Description</label>
                    <textarea placeholder="Enter Description" className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500"/>
                </div>
                <div className="mt-4">
                    <label className="block font-medium text-gray-700">Number of People</label>
                    <input type="number" placeholder="Enter Number" className="p-2 rounded-lg border-purple-300 w-full focus:ring-purple-500 focus:border-purple-500"/>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={onClose} className="rounded-full border border-gray-400 bg-gradient-to-t from-[#8D8DDA] to-white text-black hover:from-[#8080d7] hover:to-white shadow-md  font-bold py-2 px-4 rounded text-xs">
                        Create Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePlanModal;

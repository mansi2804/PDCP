import React, {useState} from "react";


export function Plandescription() {
  const attendees = [
    { name: "Mansi", role: "Attendee" },
    { name: "Yogi", role: "Attendee" },
    { name: "Pratima", role: "Attendee" },
  ];

  const announcements = [
    { name: "Yogi", comment: "Hey..." },
    { name: "Mansi", comment: "Hey..." },
    { name: "Varshitha", comment: "Hey..." },
  ];
  const [isDeletePopupVisible, setDeletePopupVisible] = useState(false);

  const [isInvitePopupVisible, setIsInvitePopupVisible] = useState(false);
  const [email, setEmail] = useState('');

  const handleDeleteClick = () => {
    setDeletePopupVisible(true);
  };

  const handleCancelClick = () => {
    setDeletePopupVisible(false);
    setIsInvitePopupVisible(false);
  };

  const handleConfirmDelete = () => {
    // Handle delete logic here
    setDeletePopupVisible(false);
    
  };


  const handleInviteClick = () => {
    setIsInvitePopupVisible(true);
  };


  const handleSendInvite = () => {
    // Add your invite sending logic here
    console.log("Invite sent to:", email);
    setIsInvitePopupVisible(false);
  };

  return (

    <div className="min-h-screen bg-gradient-to-b from-[#000235] to-[#8080d7] p-8">

      {/* Event Details */}
      {/* <div className="p-8 rounded-lg shadow-lg mb-8"> */}
      {/* <div> */}
      <h2 className="white text-2xl font-bold mb-4 text-white">PLAN NAME</h2>
      <div className="flex">
        <div className="flex-shrink-0 mr-8">
          <div className="bg-gray-300 w-20 h-20 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A8.96 8.96 0 0112 15c2.136 0 4.11.701 5.879 1.804M15 9a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <p className="text-center mt-4 text-white">Hosted by Name</p>
        </div>
      </div>
      {/* </div> */}
      <div className="flex items-start bg-white p-8 rounded-lg shadow-lg mb-8 ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-gray-500"
    fill="none"
    viewBox="0 0 30 30"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 12l-5.5-5.5a1.5 1.5 0 00-2.1 0L8 12l-3-3-4 4"
    />
    <circle cx="15" cy="10" r="2" stroke="currentColor" strokeWidth="2" />
  </svg>
  
  <div className="ml-4 ">
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
      phasellus mollis sit aliquam sit nullam.
    </p>
    <p className="text-gray-600 mt-4">
      Date: 07-28-2024<br />
      Time: 8:00pm<br />
      Location: Venue Address<br />
    </p>
  </div>
</div>


      {/* Attendees and Announcements */}
      <div className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ATTENDEES</h3>
          {attendees.map((attendee, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg mb-2 flex items-center"
            >
              <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A8.96 8.96 0 0112 15c2.136 0 4.11.701 5.879 1.804M15 9a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">{attendee.name}</p>
                <p className="text-gray-500">{attendee.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">ANNOUNCEMENTS</h3>
          <div className="bg-gray-100 p-4 rounded-lg h-56 overflow-y-auto">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="flex items-start mb-4"
              >
                <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A8.96 8.96 0 0112 15c2.136 0 4.11.701 5.879 1.804M15 9a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">{announcement.name}</p>
                  <p className="text-gray-500">{announcement.comment}</p>
                </div>
              </div>
            ))}
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full p-2 rounded-lg border border-gray-300"
            />
            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Comment
              </button>
              <button className="text-gray-500">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around">
        <button className="bg-gradient-to-t from-[#8d8ddf] to-white rounded-full border border-input px-8 py-2 text-base font-medium shadow-lg transition-transform transform hover:from-[#8080d7] hover:to-white hover:scale-105 hover:bg-accent hover:text-accent-foreground"
        onClick={handleInviteClick}>
          INVITE
        </button>
        <button className="bg-gradient-to-t from-[#8d8ddf] to-white rounded-full border border-input px-8 py-2 text-base font-medium shadow-lg transition-transform transform hover:from-[#8080d7] hover:to-white hover:scale-105 hover:bg-accent hover:text-accent-foreground"
        onClick={handleDeleteClick}>
          DELETE
        </button>
        <button className="bg-gradient-to-t from-[#8d8ddf] to-white rounded-full border border-input px-8 py-2 text-base font-medium shadow-lg transition-transform transform hover:from-[#8080d7] hover:to-white hover:scale-105 hover:bg-accent hover:text-accent-foreground">
        
          EDIT
        </button>
      </div>
      {isDeletePopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gradient-to-t from-[#8d8ddf] to-white rounded-full border border-input px-12 py-8 text-base font-medium shadow-lg transition-transform transform hover:from-[#8080d7] hover:to-white hover:scale-105 hover:bg-accent hover:text-accent-foreground">
            <div className="flex justify-end">
              <button
                onClick={handleCancelClick}
                className="text-xl font-bold text-black"
              >
                ×
              </button>
            </div>
            <p className="text-lg mb-4">Are you sure you want to confirm the deletion?</p>
            <div className="flex justify-between">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-6 py-2 rounded-lg"
              >
                Delete
              </button>
              <button
                onClick={handleCancelClick}
                className="bg-white border border-gray-300 px-6 py-2 rounded-lg"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
            {isInvitePopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gradient-to-b from-[#000235] to-[#8080d7] text-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-end">
              <button
                onClick={handleCancelClick}
                className="text-xl font-bold text-white"
              >
                ×
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Share Event Plan</h2>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">Email ID</label>
              <input
                type="email"
                placeholder="Enter Email-ID"
                className="w-full p-2 border rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSendInvite}
                className="bg-gradient-to-t from-[#8d8ddf] to-white rounded-full border border-input px-8 py-2 text-black font-medium shadow-lg transition-transform transform hover:from-[#8080d7] hover:to-white hover:scale-105 hover:bg-accent hover:text-accent-foreground"
              >
                Send Invite
              </button>
            </div>
          </div>
        </div>
      )}
    <footer className="text-center mt-8 text-gray-400">
        <p>Copyright © 2024 PDCP | All Rights Reserved</p>
      </footer>
    </div>
     
  );
}
export default Plandescription;

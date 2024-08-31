import React, { useState } from "react";


export function Plandescription() {
  const attendees = [
    // { name: "Mansi", role: "Attendee" },
    // { name: "Yogi", role: "Attendee" },
    // { name: "Pratima", role: "Attendee" },
  ];

  const announcements = [
    // { name: "Yogi", comment: "Hey..." },
    // { name: "Mansi", comment: "Hey..." },
    // { name: "Varshitha", comment: "Hey..." },
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
      <div className="bg-gradient-to-b from-[#000235] to-[#8080d7] p-8 rounded-lg shadow-lg grid grid-cols-1 gap-4  mb-8 flex ">
        <h2 className="white text-2xl font-bold mb-4 text-white">PLAN NAME</h2>
                            <img
                      src={event.imageUrl || '/placeholder.svg'}
                      alt={event.name}
                      width={200}
                      height={200}
                      className="w-48 h-48 object-cover"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }} />
{/* </div> */}
        <div className="ml-4 ">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
          <p className="text-white mt-4">
            Date: 07-28-2024<br />
            Time: 8:00pm<br />
            Location: Venue Address<br />
          </p>
        </div>
      </div>
      


        {/* Attendees and Announcements */}
        <div className="bg-gradient-to-t from-[#8d8ddf] to-white p-8 rounded-lg shadow-lg grid grid-cols-2 gap-8 mb-8 flex justify around">
          <div>
            <h3 className="text-xl font-bold mb-4">ATTENDEES</h3>
            {attendees.length > 0 ?(
            attendees.map((attendee, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-[#716F97] to-[#8d8ddf] p-4 rounded-lg mb-2 flex items-center"
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
                  <p className="text-black-500">{attendee.role}</p>
                </div>
              </div>
            ))
          ): (
            <p className="text-black">No attendees are available</p>
          )}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">ANNOUNCEMENTS</h3>
            <div className="bg-gradient-to-t from-[#AAD9D9] to-white p-4 rounded-lg h-56 overflow-y-auto">
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
                <button className="bg-gradient-to-t from-[#8d8ddf] to-white rounded-full border border-input px-8 py-2 text-base font-medium shadow-lg transition-transform transform hover:from-[#8080d7] hover:to-white hover:scale-105 hover:bg-accent hover:text-accent-foreground">
                  Comment
                </button>
                <button className="bg-gradient-to-t from-[#8d8ddf] to-white rounded-full border border-input px-8 py-2 text-base font-medium shadow-lg transition-transform transform hover:from-[#8080d7] hover:to-white hover:scale-105 hover:bg-accent hover:text-accent-foreground">Cancel</button>
              </div>
            </div>
          </div>
        
          {/*Buttons*/}
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
                    className="bg-gradient-to-t from-[#F52E13] to-white px-6 py-2 rounded-lg"
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
          </div>
        </div>
    </div>
  );
}
export default Plandescription;

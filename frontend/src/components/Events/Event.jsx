import React, { useState, useEffect } from 'react';
import imageurl from "../../assets/card_photo.avif"

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the list of upcoming events from your API or service
    // This is just a placeholder and should be replaced with actual API call
    setEvents([
      { id: 1, name: 'Event 1', date: '2024-04-20', },
      { id: 2, name: 'Event 2', date: '2024-05-15' },
      { id: 3, name: 'Event 3', date: '2024-05-20' },
      { id: 4, name: 'Event 4', date: '2024-06-15' },
      // Add more events here
    ]);
  }, []);

  const registerForEvent = (eventId) => {
    console.log(`Registering for event with ID: ${eventId}`);
    // Implement the registration logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={imageurl} alt={event.name} className="rounded-t-lg" />
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p className="text-gray-600">{event.date}</p>
            <button
              className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => registerForEvent(event.id)}
            >
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;

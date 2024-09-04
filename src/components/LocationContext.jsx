import React, { createContext, useState } from 'react';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLocations = async (locationQuery, businessType) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/search/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location: locationQuery, businesstype: businessType })
      });
      const data = await response.json();
      if (response.ok) {
        setLocations(data);
      } else {
        throw new Error('Failed to fetch locations');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocationContext.Provider value={{ locations, fetchLocations, loading }}>
      {children}
    </LocationContext.Provider>
  );
};

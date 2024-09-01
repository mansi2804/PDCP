import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

function MapDisplay({ isBlurred }) {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = L.map(mapRef.current).setView([41.8781, -87.6298], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        return () => map.remove();
    }, []);

    return <div ref={mapRef} style={{ display: 'flex-1', height: '77.5vh'}}/>;
}

export default MapDisplay;

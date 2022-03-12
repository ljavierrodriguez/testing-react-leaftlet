import React from 'react';
import { useEffect } from 'react';
import L from 'leaflet';


const MyMap = ({ lat, long }) => {
    useEffect(() => {
        loadMap();
    }, [])

    function loadMap() {
        var map = L.map('map').setView([lat, long], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            mapZoom: 13
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    }

    return (
        <div id="map"></div>
    );
}

export default MyMap;
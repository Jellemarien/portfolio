let map = L.map('mapW').setView([51.21674, 4.69245], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let WMarker = L.marker([51.21674, 4.69245]).addTo(map);
WMarker.bindPopup("patrijzenlaan 6").openPopup();
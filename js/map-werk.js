let map = L.map('mapW').setView([51.21674, 4.69245], 9);

var logo = L.icon({
    iconUrl: './assets/logo-transparent-png.png',

    iconSize:     [75, 50], // size of the icon
    iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let WMarker = L.marker([51.21674, 4.69245], { icon: logo }).addTo(map);
WMarker.bindPopup("patrijzenlaan 6").openPopup();
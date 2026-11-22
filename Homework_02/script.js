// 
const map = L.map("map", {
    scrollWheelZoom: false   // колесо мыши не мешает прокручивать страницу
}).setView([48.4647, 35.0462], 14);

// 
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap &copy; CARTO",
    maxZoom: 19
}).addTo(map);

// метка
L.marker([48.4647, 35.0462])
    .addTo(map)
    .bindPopup("Навчальний центр<br>вул. Освітня, 10");
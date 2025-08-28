// Coordenadas reais da Av. Frederico Dihl, 475 — Aparecida, Alvorada
const latitude = -29.9916;
const longitude = -51.0806;

// Exibe o endereço no texto
document.getElementById('localizacao').textContent =
  '📍 Nosso endereço: Av. Frederico Dihl, 475 — Aparecida, Alvorada - RS';

// Inicializa o mapa
const map = L.map('map').setView([latitude, longitude], 16);

// Adiciona os tiles do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap',
}).addTo(map);

// Adiciona o marcador com popup
L.marker([latitude, longitude])
  .addTo(map)
  .bindPopup('<strong>JLE Beauty</strong><br>Av. Frederico Dihl, 475 — Aparecida, Alvorada - RS')
  .openPopup();

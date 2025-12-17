 const map = new maplibregl.Map({
    container: "map",
    style: "https://demotiles.maplibre.org/style.json",
    center: [162.9554, 23.4162],
    zoom: 2,
    attributionControl: false
  });

  map.dragRotate.disable();

  const locations = {
    "goku": { lng: 162.9554, lat: 23.4162 },
    "vegeta": { lng: 139.6917, lat: 35.6895 },
    "frieza": { lng: -46.6333, lat: -23.5505 }
  };


 

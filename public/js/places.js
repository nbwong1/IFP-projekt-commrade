let map;
let service;
let infowindow;

//takes a location and names it location
function findLocation(location = "Museum of Contemporary Art Australia") {
  const request = {
    query: location,
    fields: ["name", "geometry"],
  };

  service = new google.maps.places.PlacesService(map);
  console.log(request);
  service.findPlaceFromQuery(request, (results, status) => {
    console.log(results, status);
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function initMap() {
  const sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15,
  });
  //grabbed from html
  const location = document.getElementById("location").value;
  findLocation(location);
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    // infowindow.setContent(place.name || "");
    // infowindow.open(map);
    alert(place.name);
  });
}

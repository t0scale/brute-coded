function initMap() {
    const freeform = { lat: 37.80000137989557, lng: -122.42781690146376 };
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: freeform,
      mapId: '9e967e7e3bf5154c',
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControl: true,
    });
    
    const marker = new google.maps.Marker({
      position: freeform,
      map: map,
      title: "freeform",
    });
  }
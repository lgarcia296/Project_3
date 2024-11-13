// Example function to toggle visibility of the Google Maps iframe
document.addEventListener("DOMContentLoaded", function() {
  const toggleMapButton = document.createElement('button');
  toggleMapButton.textContent = "Toggle Map Visibility";
  document.body.appendChild(toggleMapButton);

  const mapIframe = document.querySelector('iframe');
  mapIframe.style.display = 'block'; // Initial display of iframe

  // Event listener to toggle map visibility on button click
  toggleMapButton.addEventListener('click', () => {
    if (mapIframe.style.display === 'block') {
      mapIframe.style.display = 'none';
      toggleMapButton.textContent = "Show Map";
    } else {
      mapIframe.style.display = 'block';
      toggleMapButton.textContent = "Hide Map";
    }
  });

  // Example of changing iframe source dynamically
  const changeMapButton = document.createElement('button');
  changeMapButton.textContent = "Load New Map Location";
  document.body.appendChild(changeMapButton);

  changeMapButton.addEventListener('click', () => {
    mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1OaTngTIdmt-lngwb6UyHXDFzqZFlwaZq&ehbc=2E312F";
  });
});

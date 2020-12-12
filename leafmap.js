
//Display MapmyIndia maps on the webpage
var map=new MapmyIndia.Map("mapid",{});

//Adding pointers to the map
L.marker([33.2778, 75.3412]).addTo(map); //Jammu and Kashmir
L.marker([31.1471, 75.3412]).addTo(map); //Punjab
L.marker([30.0668, 79.0193]).addTo(map); //Uttaranchal
L.marker([29.0588, 76.0856]).addTo(map); //Haryana
L.marker([28.7041, 77.1025]).addTo(map); //Delhi
L.marker([27.0238, 74.2179]).addTo(map); //Rajasthan
L.marker([23.6102, 85.2799]).addTo(map); //Jharkhand
L.marker([21.2787, 81.8661]).addTo(map); //Chatisgarh
L.marker([22.9868, 87.8550]).addTo(map); //West Bengal
L.marker([25.0961, 85.3131]).addTo(map); //Bihar
L.marker([27.5330, 88.5122]).addTo(map); //Sikkim
L.marker([22.2587, 71.1924]).addTo(map); //Gujrat
L.marker([22.9734, 78.6569]).addTo(map); //Madhya Pradesh
L.marker([20.9517, 85.0985]).addTo(map); //Orissa
L.marker([19.7515, 75.7139]).addTo(map); //Maharashtra
L.marker([18.1124, 79.0193]).addTo(map); //Telangana
L.marker([15.9129, 79.7400]).addTo(map); //Andhra Pradesh
L.marker([15.2993, 74.1240]).addTo(map); //Goa
L.marker([11.1271, 78.6569]).addTo(map); //Karnataka
L.marker([15.3173, 75.7139]).addTo(map); //Tamil Nadu
L.marker([10.8505, 76.2711]).addTo(map); //Kerala

map.setZoom(4);

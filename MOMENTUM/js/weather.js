const API_KEY = "32f768d329174ae2668cc48c3fec6c9c";

function GeoOk(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    fetch(url);
}

function GeoErr() {
    alert("Can't find you.No weather for you.");
}



navigator.geolocation.getCurrentPosition(GeoOk, GeoErr);
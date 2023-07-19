"use strict";
const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".details");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--fees");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--duration");
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const coords = [latitude, longitude];
      var map = L.map("map").setView(coords, 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS popup.<br> Easily customizable.")
        .openPopup();
    },
    function () {
      alert("could not get your position");
    }
  );

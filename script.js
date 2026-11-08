"use strict";

const market = document.getElementById("market");
const analyze = document.getElementById("analyze");
const message = document.getElementById("message");
const connection = document.getElementById("connection");
const selectedMarket = document.getElementById("selectedMarket");
const clock = document.getElementById("clock");
const history = document.getElementById("history");

function updateClock() {
  const now = new Date();

  clock.textContent = now.toLocaleTimeString("fr-FR");
}

function updateMarket() {
  selectedMarket.textContent = market.value;
}

function addHistory(text) {
  const item = document.createElement("p");
  item.textContent = text;

  history.prepend(item);

  while (history.children.length > 10) {
    history.lastElementChild.remove();
  }
}

market.addEventListener("change", updateMarket);

analyze.addEventListener("click", () => {
  message.textContent =
    "Recherche de données de marché en attente de configuration.";

  connection.textContent = "Non connecté";

  addHistory(
    market.value + " — " +
    new Date().toLocaleTimeString("fr-FR") +
    " — Données non disponibles"
  );
});

updateMarket();
updateClock();

setInterval(updateClock, 1000);

connection.textContent = "Non connecté";

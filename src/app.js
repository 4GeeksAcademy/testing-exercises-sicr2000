/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "Tu mamá",
    "Tu abuela",
    "El mono",
    "Mark Zuckerberg",
    "Messi",
    "Samuel"
  ];
  let action = ["mojó", "rompió", "rayó", "reventó"];
  let what = ["el carro", "la mesa", "el sofa", "el play", "mi cama"];
  let when = [
    "cuando me iba a dormir",
    "antes de salir a trabajar",
    "después del almuerzo",
    "mientras yo estaba en el baño",
    "durante una sesión de fotos"
  ];

  function pickRandom() {
    const position1 = Math.floor(Math.random() * who.length);

    const position2 = Math.floor(Math.random() * action.length);

    const position3 = Math.floor(Math.random() * what.length);

    const position4 = Math.floor(Math.random() * when.length);

    return (
      who[position1] +
      " " +
      action[position2] +
      " " +
      what[position3] +
      " " +
      when[position4]
    );
  }

  console.log(pickRandom());

  let parrafo = document.getElementById("excuse");
  parrafo.innerText = pickRandom();
  console.log(parrafo);
};

// let position1 = Math.floor(Math.random() * who.length);

// let position2 = Math.floor(Math.random() * action.length);

// let position3 = Math.floor(Math.random() * what.length);

// let position4 = Math.floor(Math.random() * when.length);

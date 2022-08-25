const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  let userInput = inputEl.value;

  const meterToFixed = (userInput * meterToFeet).toFixed(3);
  const feetToFixed = (userInput / meterToFeet).toFixed(3);

  const literToFixed = (userInput * literToGallon).toFixed(3);
  const gallonToFixed = (userInput / literToGallon).toFixed(3);

  const kiloToFixed = (userInput * kiloToPound).toFixed(3);
  const poundToFixed = (userInput / kiloToPound).toFixed(3);

  // Meter to Feet
  lengthEl.textContent = `${userInput} meter = ${meterToFixed} feet | ${userInput} feet = ${feetToFixed} meter`;

  // Liter to Gallon
  volEl.textContent = `${userInput} liter = ${literToFixed} gallon | ${userInput} gallon = ${gallonToFixed} liter`;

  // Kilo to Pound
  massEl.textContent = `${userInput} kilo = ${kiloToFixed} pound | ${userInput} pound = ${poundToFixed} kilo`;
});

// Color Swatch
let light = document.querySelector(".clr-light");
let dark = document.querySelector(".clr-dark");
let green = document.querySelector(".clr-green");
let blue = document.querySelector(".clr-blue");
let purple = document.querySelector(".clr-purple");
let red = document.querySelector(".clr-red");
let yellow = document.querySelector(".clr-yellow");

// Body Elements
let body = document.getElementById("body");
let hero = document.getElementById("hero");
let heroTitle = document.querySelector(".hero__title");
let input = document.getElementById("input");
let conSection = document.getElementById("con-section");
let conBox = document.querySelectorAll(".con-box");
let conTitle = document.querySelectorAll(".con-title");
let metricText = document.querySelectorAll(".metric-text");

// Light
light.addEventListener("click", function () {
  body.classList.toggle("light");
  hero.classList.toggle("light");
  heroTitle.classList.toggle("light");
  input.classList.toggle("light");
  conSection.classList.toggle("light");

  conBox.forEach((n) => {
    n.classList.toggle("light");
  });

  conTitle.forEach((n) => {
    n.classList.toggle("light");
  });

  metricText.forEach((n) => {
    n.classList.toggle("light");
  });
});

// Dark
dark.addEventListener("click", function () {
  body.classList.toggle("dark");
  hero.classList.toggle("dark");
  heroTitle.classList.toggle("dark");
  input.classList.toggle("dark");
  conSection.classList.toggle("dark");

  conBox.forEach((n) => {
    n.classList.toggle("dark");
  });

  conTitle.forEach((n) => {
    n.classList.toggle("dark");
  });

  metricText.forEach((n) => {
    n.classList.toggle("dark");
  });
});

// Green
green.addEventListener("click", function () {
    body.classList.toggle("green");
    hero.classList.toggle("green");
    heroTitle.classList.toggle("green");
    input.classList.toggle("green");
    conSection.classList.toggle("green");
  
    conBox.forEach((n) => {
      n.classList.toggle("green");
    });
  
    conTitle.forEach((n) => {
      n.classList.toggle("green");
    });
  
    metricText.forEach((n) => {
      n.classList.toggle("green");
    });
  });

// Blue
blue.addEventListener("click", function () {
    body.classList.toggle("blue");
    hero.classList.toggle("blue");
    heroTitle.classList.toggle("blue");
    input.classList.toggle("blue");
    conSection.classList.toggle("blue");
  
    conBox.forEach((n) => {
      n.classList.toggle("blue");
    });
  
    conTitle.forEach((n) => {
      n.classList.toggle("blue");
    });
  
    metricText.forEach((n) => {
      n.classList.toggle("blue");
    });
  });

// Purple
purple.addEventListener("click", function () {
    body.classList.toggle("purple");
    hero.classList.toggle("purple");
    heroTitle.classList.toggle("purple");
    input.classList.toggle("purple");
    conSection.classList.toggle("purple");
  
    conBox.forEach((n) => {
      n.classList.toggle("purple");
    });
  
    conTitle.forEach((n) => {
      n.classList.toggle("purple");
    });
  
    metricText.forEach((n) => {
      n.classList.toggle("purple");
    });
  });

// Red
red.addEventListener("click", function () {
    body.classList.toggle("red");
    hero.classList.toggle("red");
    heroTitle.classList.toggle("red");
    input.classList.toggle("red");
    conSection.classList.toggle("red");
  
    conBox.forEach((n) => {
      n.classList.toggle("red");
    });
  
    conTitle.forEach((n) => {
      n.classList.toggle("red");
    });
  
    metricText.forEach((n) => {
      n.classList.toggle("red");
    });
  });

// Yellow
yellow.addEventListener("click", function () {
    body.classList.toggle("yellow");
    hero.classList.toggle("yellow");
    heroTitle.classList.toggle("yellow");
    input.classList.toggle("yellow");
    conSection.classList.toggle("yellow");
  
    conBox.forEach((n) => {
      n.classList.toggle("yellow");
    });
  
    conTitle.forEach((n) => {
      n.classList.toggle("yellow");
    });
  
    metricText.forEach((n) => {
      n.classList.toggle("yellow");
    });
  });
"use strict";
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const startBtnRef = document.querySelector("button[data-action = start]");
const stopBtnRef = document.querySelector("button[data-action = stop]");
let intervalId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyBackground = () => {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};

const handleStartChangeColor = () => {
  intervalId = setInterval(bodyBackground, 1000);
  startBtnRef.setAttribute("disabled", "disabled");
};
const handleStopChangeColor = () => {
  clearInterval(intervalId);
  startBtnRef.removeAttribute("disabled");
};

startBtnRef.addEventListener("click", handleStartChangeColor);
stopBtnRef.addEventListener("click", handleStopChangeColor);

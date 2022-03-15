var hourHand = document.querySelector("[data-hour-hand]");
var minuteHand = document.querySelector("[data-minute-hand]");
var secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  var currentDate = new Date();
  var secondsRatio = currentDate.getSeconds() / 60;
  var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  var hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  console.log(element);
  console.log(rotationRatio);
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
<<<<<<< HEAD
setInterval(setClock, 1000)
=======
setInterval(setClock, 1000);

const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();setInterval(setClock, 1000)
>>>>>>> f4b81d829379cecd11440c4ce8045055544285e1


const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)

}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

<<<<<<< HEAD
setClock()
=======
setClock();
>>>>>>> f4b81d829379cecd11440c4ce8045055544285e1

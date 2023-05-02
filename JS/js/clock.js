// [5.0]

// const clock = document.querySelector('#clock')

// function sayHello() {
//   console.log("Hello")
// }

// setInterval(sayHello, 2000)

// ============================================================
// [5.1 - 5.3]
const clock = document.querySelector('#clock')


// function getClock() {
//   const date = new Date();
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const seconds = String(date.getSeconds()).padStart(2, "0");
//   clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// getClock()
// setInterval(getClock, 1000)

// 다른 표현 방법
function setclock() {
  clock.innerText = new Date().toLocaleTimeString()
}

setclock()
setInterval(setclock, 1000)
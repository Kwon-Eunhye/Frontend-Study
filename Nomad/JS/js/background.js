// const images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.png'];
const body = document.querySelector("body");
const images = ["6.jpeg", "7.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = `url(./img/${chosenImage})`;
const h2 = document.querySelector("#clock");

// console.log(chosenImage)

// const bgImage = document.createElement("img"); // 자바스립트에서 html에 추가할 element 생성

// bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

// document.body.appendChild(bgImage)  // body 마지막에 노드 추가

// document.body.insertBefore(bgImage, h2); // 해당 h2 노드 앞에 추가

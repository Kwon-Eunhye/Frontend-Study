// const calculaotor = {
//   add: function(a, b) {
//     return a+b
//   },
//   min: function(a, b) {
//     return a-b
//   },
//   times: function(a, b) {
//     return a*b
//   },
//   divide: function(a, b) {
//     return a/b
//   },
//   powerOf: function(a, b) {
//     return a**b
//   }
// }

// calculaotor.add(10,2)
// calculaotor.min(10,2)
// calculaotor.times(10,2)
// calculaotor.divide(10,2)
// calculaotor.powerOf(10,2)

// const age = parseInt( prompt("How old are you?"));  // parseInt : 스트링을 넘버 타입을 변경

// if(isNaN(age) || age < 0) {  // isNaN : age가 숫자인지 아닌지에 따라 true/false 리턴
//   alert('Please write a real positive number')
// } else if (age < 18) {
//   console.log("You are too young")
// } else if (age >= 18 && age <= 50) {
//   console.log('You can drink')
// } else if (age > 50 && age <=80) {
//   console.log('You should exercise')
// } else if (age === 100) {
//   console.log('wow you are wise')
// } else if (age > 80) {
//   console.log('You can do whatever you want.')
// }

// ------------------------------------------------------------------------------------

// const h1 = document.getElementById("h1");

// //  console.log(h1);
// console.dir(h1)

// const h1 = document.querySelector('.hello:first-child h1')

// function handleh1Click() {
//   h1.style.color = 'blue'
// }

// function handleMouseEnter() {
//   h1.innerText = 'Mouse is here'
// }

// function handleMouseLeave() {
//   h1.innerText = 'Mouse is gone'
// }

// h1.addEventListener("click", handleh1Click)
// h1.addEventListener("mouseenter", handleMouseEnter)
// h1.addEventListener("mouseleave", handleMouseLeave)

// const h1 = document.querySelector('.hello h1')

// console.dir(h1)

// function handleOnClick() {
//   h1.innerText = 'ON'
//   h1.style.color = 'black'
//   h1.style.backgroundColor = 'white'
// }

// function handleOffClick() {
//   h1.innerText = 'OFF'
//   h1.style.color = 'white'
//   h1.style.backgroundColor = 'black'
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = 'tomato'
// }

// function handleWindowOffline() {
//   alert('Wifi Disconnected!')
// }
// function handleWindowOnline() {
//   alert('Wifi Connect Success!')
// }

// h1.addEventListener('mouseenter',handleOffClick)
// h1.addEventListener('mouseleave',handleOnClick)

// window.addEventListener('resize', handleWindowResize)
// window.addEventListener('offline', handleWindowOffline)
// window.addEventListener('online', handleWindowOnline)

// const h1 = document.querySelector('.hello:first-child h1')

// function handleh1Click() {

//   const currentColor = h1.style.color
//   let newColor, newBackgroundColor;

//   if (currentColor === 'blue') {
//     h1.innerText = 'OFF'
//     newColor = 'white'
//     newBackgroundColor = 'gray'
//   } else {
//     h1.innerText = 'ON'
//     newColor = 'blue'
//     newBackgroundColor = 'white'
//   }

//   h1.style.color = newColor
//   h1.style.backgroundColor = newBackgroundColor
// }

// h1.addEventListener('click',handleh1Click)

// -------------------------------------------------------------
// [className에 만들어준 클래스 이름을 사용하면 오타가 날 가능성이 있기때문에
// 변수로 저장하여 만들기]

// const h1 = document.querySelector('.hello:first-child h1')

// function handleTitleClick() {
//   const clickedClass = 'active'
//   if(h1.className === clickedClass) {
//     h1.className = ""
//   } else {

//     h1.className = clickedClass
//   }
//   console.log(h1.className)
// }

// h1.addEventListener("click", handleTitleClick)

// ----------------------------------------------------------------
// [classList function을 활용하여 클래스이름 전체를 변경하는것이아니고
// 해당 html 엘리먼트의 존재 유무에 따라 변경가능 ]

// const h1 = document.querySelector('.hello:first-child h1')

// function handleTitleClick() {
//   const clickedClass = 'active'
//   if(h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass)
//   } else {
//     h1.classList.add(clickedClass)
//   }
//   console.log(h1.className)
// }

// h1.addEventListener("click", handleTitleClick)

// =============================================================================
// [classList.toggle(token) function : 해당 classname이 존재하면 삭제/ 없으면 추가하는 함수
// const h1 = document.querySelector('.hello:first-child h1')

// function handleTitleClick() {
//   // const clickedClass = 'active'

//   h1.classList.toggle('active') // 한번만 사용하기 때문에 클래스 이름 사용
// }

// h1.addEventListener("click", handleTitleClick)

//=========================================================================================
//[4]

// const loginInput = document.querySelector('#login-form input')
// const loginButton = document.querySelector('#login-form button')

// function onLoginSubmit() {
//   const username = loginInput.value;
//   console.log(username)
// }

// loginButton.addEventListener("click", onLoginSubmit)

//=========================================================================================
//[4.2 - 4.3]

// const loginForm = document.querySelector('#login-form')
// const loginInput = document.querySelector('#login-form input')

// const link = document.querySelector("a")

// function onLoginSubmit(event) {
//   event.preventDefault();
//   console.log()
// }

// function handleLinkClick(event) {
//   event.preventDefault()
//   console.dir(event)
// }

// loginForm.addEventListener('submit',onLoginSubmit)
// link.addEventListener('click', handleLinkClick)

//=========================================================================================
//[4.4 - 4.6]

// const loginForm = document.querySelector('#login-form')
// const loginInput = document.querySelector('#login-form input')
// const greeting = document.querySelector('#greeting')

// const HIDDEN_CLASSNAME = "hidden"
// const USERNAME_KEY = "username"

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME)
//   const username = loginInput.value;
//   localStorage.setItem(USERNAME_KEY, username)
//   paintGreetings(username)
// }

// function paintGreetings(username) {
//   greeting.innerText = `Hello ${username}`
//   greeting.classList.remove(HIDDEN_CLASSNAME)
// }
// const savedUsername = localStorage.getItem(USERNAME_KEY)

// if(savedUsername === null) {
//   // show the form
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener('submit',onLoginSubmit)
// } else {
//   // show the greetings
//   paintGreetings(savedUsername)
// }

//=========================================================================================
//[4.7]

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const toDoDisplay = document.querySelector('#todo')
const QuoteDisplay = document.querySelector('#quote');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Welcome ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function elementDisplay() {
  toDoDisplay.style.display = "block"
  QuoteDisplay.style.display = "none"
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // show the greetings
  paintGreetings();
  elementDisplay();
}

const quotes = [
  {
      quote: "People say that nothing is impossible, but I do nothing every day",
      author: "Winnie the Pooh"
  },
  {
      quote: "How do you spell love?','You don't spell it, you feel it.",
      author: "Winnie the Pooh"
  },
  {
      quote: "If you live to be a hundred, I hope I live to be a hundred minus one day, so that I never have to live a day without you.",
      author: "Winnie the Pooh"
  },
  {
      quote: "Sometimes the smallest things take up the most room in your heart.",
      author: "Winnie the Pooh"
  },
  {
      quote: "I'm short and fat and proud of that!!",
      author: "Winnie the Pooh"
  },
  {
      quote: "Promise me you'll always remember:You are braver than you believe and stronger than you seem,and smarter than you think",
      author: "Winnie the Pooh"
  },
  {
      quote: "Life is a journey to be experienced, not a problem to be solved",
      author: "Winnie the Pooh"
  },
  {
      quote: "Some people care too much. I think it's called love.",
      author: "Winnie the Pooh"
  },
  {
      quote: "Rivers know this: there is no hurry. We shall get there some day. ",
      author: "Winnie the Pooh"
  },
  {
      quote: "If you do only what you can, you'll never be better than now.",
      author: "panda"
  },
  
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

// console.log(quotes[Math.floor(Math.random() * quotes.length)])

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = " - " + todaysQuote.author + " - ";
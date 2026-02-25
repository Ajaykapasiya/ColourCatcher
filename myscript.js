// let targetColor = "";
// let score = 0;
// let time = 30;
// let timer;
// let colors = [
//   "red",
//   "orange",
//   "blue",
//   "green",
//   "black",
//   "grey",
//   "hotpink",
//   "purple",
//   "white",
//   "yellow",
//   "lightgreen",
//   "khaki",
//   "maroon",
//   "browm",
//   "navy",
//   "indigo",
// ];

// const grid = document.getElementById("grid");
// const targetColorDisplay = document.getElementById("target-color");
// const scoreDisplay = document.getElementById("score");
// const timeDisplay = document.getElementById("time");

// function shuffleArray(colors) {
//   for (let i = colors.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [colors[i], colors[j]] = [colors[j], colors[i]];
//   }
//   return colors;
// }

// function createGrid() {
//   grid.innerHTML = "";
//   colors = shuffleArray(colors);
//   console.log(colors);
//   targetColor = colors[Math.floor(Math.random() * 16)];
//   targetColorDisplay.textContent = targetColor;
//   colors.forEach((color) => {
//     const box = document.createElement("div");
//     box.className = "Color-box";
//     box.style.backgroundColor = color;
//     box.addEventListener("click", () => {
//       handleClick(color);
//     });
//     grid.appendChild(box);
//   });
// }

// function handleClick(clickedColor) {
//   if (clickedColor == targetColor) {
//     score++;
//     scoreDisplay.textContent = score;
//     createGrid();
//   }
// }

// function startGame() {
//   score = 0;
//   time = 30;
//   scoreDisplay.textContent = score;
//   timeDisplay.textContent = time;
//   createGrid();
//   clearInterval(timer);
//   timer = setInterval(() => {
//     time--;
//     timeDisplay.textContent = time;
//     if (time === 0) {
//       clearInterval(timer);
//       alert("Time's up! Your score is " + score);
//     }
//   }, 1000);
// }

// let darkButton = document.getElementById("dark");
// let lightButton = document.getElementById("light");

// lightButton.addEventListener("click", lightMode);
// darkButton.addEventListener("click", darkMode);

// function lightMode() {
//   document.body.style.backgroundColor = "#f0f0f0";
//   let gc = document.querySelector(".game-container");
//   gc.style.backgroundColor = "white";
//   gc.style.color = "black";
// }

// function darkMode() {
//   document.body.style.backgroundColor = "#333333";
//   let gc = document.querySelector(".game-container");
//   gc.style.backgroundColor = "black";
//   gc.style.color = "white";
// }

// const f3 = (username) => {console.log("I am F3,",username)}

// f3("Hello")

// (function(){
//     console.log("I am f6");

// })()

// function f4(){
//     console.log(arguments);

// }

// f4(10,12)

// const obj={
//     name:"Ram",
//     age:23,
//     sayHi:function(){
//         console.log("I am "+this.name);

//     }
// }
// obj.sayHi()

// const anotherObj={
//     name:"Sam"
// }
// anotherObj.sayHi=obj.sayHi
// anotherObj.sayHi()
// obj.sayHi()

// function books(id,title,price){
//     this.id = id
//     this.title = title
//     this.price = price
//     console.log(this);

// }

// b1 = new books(123,'hello',2343)
// console.log("The title of book is "+b1.title)
// console.log("The id of book is "+b1.id)
// console.log("The price of book is $"+b1.price);

// const obj = {
//   a: 20,
//   f1: function () {
//     console.log(this.a);
//     setTimeout(function () {
//       console.log(this);
//     }, 2000);
//   },
//   f2: function () {
//     console.log(this.a);
//     setTimeout(() => {
//       console.log(this);
//     }, 2000);
//   },
// };

// obj.f1();
// obj.f2()

// let numbers = [1, 2, 3, 4];

// // let result = numbers.map(num => num * 2);

// let result = numbers.map((e)=>e*2)

// console.log(result);

// let numbers = [1, 2, 3, 4, 5];

// let result = numbers.filter((num) => num > 3);

// console.log(result);

// let s1 = "Hello"

// s2 = s1.split('').join('')
// console.log(s2);

// function f1(fun){
//     console.log("I am in f1()");
//     fun()
// }

// f1(() => {
//     console.log("Hello");

// })

// setTimeout(() => {
//     console.log("Task 1 done");

//     setTimeout(() => {
//         console.log("Task 2 done");

//         setTimeout(() => {
//             console.log("Task 3 done");

//             setTimeout(() => {
//                 console.log("Task 4 done");
//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);

// let promise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Data received");
//     } else {
//         reject("Error occurred");
//     }
// });

// promise
//   .then(result => {
//       console.log(result);   // Data received
//   })
//   .catch(error => {
//       console.log(error);
//   });

// function someApi1() {
//   let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise 1");

//       let x = Math.round(Math.random() * 10 + 1);
//       if (x % 2 == 0) {
//         resolve(x);
//       } else {
//         reject(x);
//       }
//     }, 5000);
//   });
//   return p1
// }

// function someApi2() {
//   let p2 = new Promise((resolve, reject) => {
//     let x = Math.round(Math.random() * 10 + 1);
//     if (x % 2 == 0) {
//       resolve(x);
//     } else {
//       reject(x);
//     }
//   });
//   return p2
// }

// someApi1()
  
//    .then((result) => {
//       console.log("Promise Pass" + result);
//      return someApi2();
//     },
//     (error) => {
//       console.log("Promise Failed" + error);
//     },
//   )
//   .then(
//     (result) => {
//       console.log("Promise Pass" + result);
//     },
//     (error) => {
//       console.log("Promise Failed" + error);
//     },
//   );





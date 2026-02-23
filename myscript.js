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
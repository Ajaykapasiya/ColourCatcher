let targetColor = "";
let score = 0;
let time = 30;
let timer;
let colors = ['red','orange','blue','green','black','grey','hotpink','purple','white','yellow','lightgreen','khaki','maroon','browm','navy','indigo'];

const grid = document.getElementById("grid");
const targetColorDisplay = document.getElementById("targetColour");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

function getRondomcolor(){

}

function shuffleArray(colors){

}

function createGrid(){
    grid.innerHTML="";
    colors = shuffleArray(colors)
    targetColor = colors[Math.floor(Math.random()*16)];
    targetColorDisplay.textContent = targetColor;
    colors.forEach((color)=>{
        const box = document.createElement("div");
        box.className = "Color-box";
        box.style.backgroundColor = color;
        box.addEventListener('click',()=>{handleClick(color);})
        grid.appendChild(box); 
    })
}

function startGame(){
    score:0;
    time:30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = time; 
    createGrid();
    clearInterval(timer);
    timer = setInterval(()=>{
        timer--;
        timeDisplay.textContent = time
        if(time === 0){
             clearInterval(timer);
             alert("Time's up! Your score is "+score);
        }
    },1000)
}
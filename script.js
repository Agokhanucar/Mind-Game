"use strict";
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const box10 = document.querySelector(".box10");
const box11 = document.querySelector(".box11");
const box12 = document.querySelector(".box12");
const box13 = document.querySelector(".box13");
const box14 = document.querySelector(".box14");
const box15 = document.querySelector(".box15");
const box16 = document.querySelector(".box16");

const bgColorBox1 = getComputedStyle(box1).backgroundColor;
const bgColorBox2 = getComputedStyle(box2).backgroundColor;
const bgColorBox3 = getComputedStyle(box3).backgroundColor;
const bgColorBox4 = getComputedStyle(box4).backgroundColor;
const bgColorBox5 = getComputedStyle(box5).backgroundColor;
const bgColorBox6 = getComputedStyle(box6).backgroundColor;
const bgColorBox7 = getComputedStyle(box7).backgroundColor;
const bgColorBox8 = getComputedStyle(box8).backgroundColor;
const bgColorBox9 = getComputedStyle(box9).backgroundColor;
const bgColorBox10 = getComputedStyle(box10).backgroundColor;
const bgColorBox11 = getComputedStyle(box11).backgroundColor;
const bgColorBox12 = getComputedStyle(box12).backgroundColor;
const bgColorBox13 = getComputedStyle(box13).backgroundColor;
const bgColorBox14 = getComputedStyle(box14).backgroundColor;
const bgColorBox15 = getComputedStyle(box15).backgroundColor;
const bgColorBox16 = getComputedStyle(box16).backgroundColor;

const bgColors = [
    bgColorBox1,
    bgColorBox2,
    bgColorBox3,
    bgColorBox4,
    bgColorBox5,
    bgColorBox6,
    bgColorBox7,
    bgColorBox8,
    bgColorBox9,
    bgColorBox10,
    bgColorBox11,
    bgColorBox12,
    bgColorBox13,
    bgColorBox14,
    bgColorBox15,
    bgColorBox16,
];

const boxes = [
    box1,
    box2,
    box3,
    box4,
    box5,
    box6,
    box7,
    box8,
    box9,
    box10,
    box11,
    box12,
    box13,
    box14,
    box15,
    box16,
];

const startButton = document.querySelector(".startbutton");
startButton.addEventListener("click", function (){
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "gray";
    }
});

let firstBox = null;
let tries = 0;
let matches = 0;
let highScore = Infinity; 
const body = document.querySelector("body");
const header1 = document.querySelector(".header1");

const tryDisplay = document.querySelector(".try");
const matchedBoxesDisplay = document.querySelector(".matchedboxes");
const scoreDisplay = document.querySelector(".score");
const highScoreDisplay = document.querySelector(".highscore");

function checkMatch(box1, box2) { 
    tries++;
    tryDisplay.textContent = tries;
    if (box1.style.backgroundColor === box2.style.backgroundColor) {
        matches += 2;
        matchedBoxesDisplay.textContent = matches / 2;
        if (matches === boxes.length) {
            scoreDisplay.textContent = tries;
            body.style.backgroundColor = "green";
            header1.textContent = "YOU WIN!";
            if (tries < highScore) {
                highScore = tries; 
                highScoreDisplay.textContent = highScore;
            }
        }
    } else {
        setTimeout(function (){
            box1.style.backgroundColor = "gray";
            box2.style.backgroundColor = "gray";
        }, 300);
    }
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        if (boxes[i].style.backgroundColor === "gray") {
            boxes[i].style.backgroundColor = bgColors[i];
            if (!firstBox) {
                firstBox = boxes[i];
            } else {
                checkMatch(boxes[i], firstBox);
                firstBox = null;
            }
        }
    });
}

const againButton = document.querySelector(".againbutton");
againButton.addEventListener("click", function () {
    body.style.backgroundColor = "crimson";
    scoreDisplay.textContent = "0";
    matchedBoxesDisplay.textContent = "0";
    tryDisplay.textContent = "0";
    header1.textContent = "Mind Game";
    tries = 0;
    matches = 0;
    for (let j = 0; j < boxes.length; j++) {
        boxes[j].style.backgroundColor = "gray"; 
    }
});

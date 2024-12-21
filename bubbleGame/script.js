// let bottomDiv = document.querySelector("#btm-pan");
let clutter = "";
let timmer = 60;
let timerInt;
let randomNumber;
let score = 0;

function setTimmer() {

    timerInt = setInterval(() => {
        if (timmer >= 0) {
            document.querySelector("#time").innerHTML = timmer;
            timmer--;

        } else {
            clearInterval(timerInt);
            document.querySelector("#btmPan").innerHTML = `<h2>Game over</h2>`
        }

    }, 1000);
}
function setHitVal() {
    randomNumber = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").innerHTML = randomNumber;
}

function changeScore() {

    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}

function makeBubble() {
    for (let i = 1; i <= 85; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div id="bubble">${rn}</div>`

    }
    document.querySelector("#btmPan").innerHTML = clutter;
}

document.querySelector("#btmPan").addEventListener("click", (details) => {
    let checkedNumber = Number(details.target.innerHTML);
    if (checkedNumber == randomNumber) {
        setHitVal();
        changeScore();
        makeBubble();
    }

})

setTimmer();
setHitVal();
makeBubble();
// changeScore();
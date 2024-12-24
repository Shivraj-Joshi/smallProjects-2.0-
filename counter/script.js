let count = 0;

function increaseCount() {
    count++;
    document.querySelector("#counter").innerHTML = `${count}`;
}

function decreaseCount() {
    count--;
    document.querySelector("#counter").innerHTML = `${count}`;
}

function resetCount() {
    count = 0;
    document.querySelector("#counter").innerHTML = `${count}`;
}



document.querySelector("#increase").addEventListener("click", increaseCount);
document.querySelector("#reset").addEventListener("click", resetCount);
document.querySelector("#decrease").addEventListener("click", decreaseCount);
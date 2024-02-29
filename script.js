let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let disp = document.querySelector(".disp");

let count = 0;

updateCounter();

inc.addEventListener("click", () => {
    count++;
    updateCounter();
});

dec.addEventListener("click", () => {
    count--;
    updateCounter();
});

function updateCounter() {
    disp.innerHTML = count;
    animationNum();
};

function animationNum() {
    disp.classList.add("Anmi-disp");
    disp.classList.remove("disp");
    setTimeout(() => {
        disp.classList.add("disp");
        disp.classList.remove("Anmi-disp");
    }, 150);
}
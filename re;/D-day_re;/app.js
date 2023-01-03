const main = document.querySelector("#main");
const title = document.querySelector(".title")

function mainHandle(event) {
    const Hidden = "hidden";
    event.preventDefault();
   clock.classList.remove(Hidden);
}

function mouseEnter() {
    title.innerText = "By. 아라리";
}

function mouseLeave() {
    title.innerText = "디데이 계산기";
}

main.addEventListener("submit", mainHandle);
title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("mouseleave", mouseLeave);
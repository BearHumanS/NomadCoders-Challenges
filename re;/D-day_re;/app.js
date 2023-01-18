const main = document.querySelector("#main");
const title = document.querySelector(".title")
const select = document.querySelector(".select");

function mainHandle(event) {
    const Hidden = "hidden";
    event.preventDefault();
   clock.classList.remove(Hidden);
}

function mouseEnter() {
    title.innerText = "By. 곰인간";
}

function mouseLeave() {
    title.innerText = "디데이 계산기";
}

function selectLink(e) {
    const selectLink = document.querySelector(".select");
    const Link = select.querySelector("#링크")

    window.open(selectLink.value);
    window.location.reload(Link);
}


select.addEventListener("change", selectLink);
main.addEventListener("submit", mainHandle);
title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("mouseleave", mouseLeave);
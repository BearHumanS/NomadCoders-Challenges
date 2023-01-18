const main = document.querySelector("#main");
const title = document.querySelector(".title")
const select = document.querySelector(".select");

function mainHandle(event) {
    const Hidden = "hidden";
    event.preventDefault();
   clock.classList.remove(Hidden);
}

main.addEventListener("submit", mainHandle);

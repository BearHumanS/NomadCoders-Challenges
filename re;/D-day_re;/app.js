const main = document.querySelector("#main");

function mainHandle(event) {
    const Hidden = "hidden";
    event.preventDefault();
    main.classList.add(Hidden);
    clock.classList.remove(Hidden);
}

main.addEventListener("submit", mainHandle);
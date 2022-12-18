const clock = document.querySelector("#clock");

function Dday() {
    const target = new Date("2022-12-25");
    const today = new Date();
    const diff = target - today;
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const min = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor(diff/ 1000 % 60);
    clock.innerText = `${d}일 ${h}시 ${min}분 ${s}초`;

    const 시간 = Math.floor((diff / (1000*60*60)) % 24);
    console.log(시간);
    console.log(h);
    const 초 = Math.floor(diff%(1000*60) / 1000);
    console.log(초);
    console.log(s);
}

Dday();
setInterval(Dday, 1000);

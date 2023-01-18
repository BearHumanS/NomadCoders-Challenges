const clock = document.querySelector("#clock");

function Dday() {
    const target = new Date("2023-12-25");
    const today = new Date();
    const diff = target - today;
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const min = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor(diff/ 1000 % 60);
    clock.innerText = `${d}일 ${h}시 ${min}분 ${s}초`;
}

Dday();
setInterval(Dday, 1000);


/* 처음 봤을 때 이해가 안되서 가만히 보다가, 1000밀리초가 1분이 되려면 60을 곱하고, 
1분이 1시간이 되려면 60을 곱하고, 1시간이 하루가 되려면 24를 곱한다 라고 생각했음. */
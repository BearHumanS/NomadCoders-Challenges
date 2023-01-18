const clock = document.querySelector("#clock");
const Xday = document.querySelector("#Xday"); 
const day = document.querySelector("#day");


function getDay() {
   const XdayValue = Xday.value;
   const dayValue = day.value;
   
   const standard = new Date(dayValue);
   const target = new Date(XdayValue);
   
   const diff = target - standard;
   const d = Math.floor(diff / (1000*60*60*24));
  /*  const h = Math.floor((diff / (1000*60*60)) % 24);
   const m = Math.floor((diff / (1000*60)) % 60);
   const s = Math.floor(diff/ 1000 % 60); */
   clock.innerText = `${d}일 입니다.`;
   
}

getDay();
setInterval(getDay, 1000);


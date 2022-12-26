const clock = document.querySelector("#clock");
const Xday = document.querySelector("#Xday"); 


function getDay() {
   const XdayValue = Xday.value;
   
   const target = new Date(XdayValue);
   const today = new Date();
   const diff = target - today;
   const d = Math.floor(diff / (1000*60*60*24));
   const h = Math.floor((diff / (1000*60*60)) % 24);
   const m = Math.floor((diff / (1000*60)) % 60);
   const s = Math.floor(diff/ 1000 % 60);
   clock.innerText = `${d}일 ${h}시 ${m}분 ${s}초`;
   

   console.log(typeof XdayValue);
}

getDay();
setInterval(getDay, 1000);
const clock = document.querySelector("h2#clock");

//interval은 '매번'일어나야하는 무언가

//setInterval은 두 개의 인수를 받음 -> 첫번째는 실행하고자하는 function, 두번째는 호출되는 function 간격(ms) 설정


//setTimeout -> 먼저 호출하려는 function 삽입, 다음 얼마나 기다릴지(ms)
//console에서 Date()하면 시간나옴.
//매초마다 date.gethours& date.getminutes& date.getseconds 호출해야함

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes  = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//원래 숫자 수.padStart(string자리수, "채울 문자")--> 1.padStart(2,"0")-> 01로 나옴


getClock();
setInterval(getClock,1000);

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
   h1.classList.toggle("clicked");
}
h1.addEventListener("click",handleTitleClick);

//getElementById >> 하나의 값
//getElementsByClassName >> 배열(많은 element 가져올 때)
//getElementsByTagName . . . >> 배열(NAME할당 가능)
// id 빼고는 배열을 가져오기 때문에 title.innerText 등의 방법은 사용X

// querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
//==> 단하나(첫번째)의 element를 return함.
// querySelectorAll : 조건에 맞는 모든 element가 있는 array를 가져다 줌.
//const title = document.querySelector("#hello");와
//const title = document.queryElementById("hello");는 같은 역할

//element의 내부 보기: console.dir()
//기본적으로 object로 표시한 element를 보여줌(전부 js object임)
// 그 element 중 앞에 on이 붙은 것 --> event임
// event : 어떤 행위를 하는 것
//모든 event는 js가 listen할 수 있음.
//eventlistner-> js에게 어떤 event를 listen하고 싶은지 알려주기
//title.addEventListner("click"): 누군가 title을 click하는 것을 listen할 것.

//title.addEventListener("click",handleTitleClick);
//click하면 handleTitleClick이라는 function이 동작하길 원함
//그래서 handle~ 함수에 () 를 안넣은 것임
//즉, js가 대신 실행시켜주길 바라는 것임! ()은 실행버튼인 것.
//너무 복잡하면 element를 console.dir로 출력해서 on~ 이라고 적혀있는걸 사용하면 됨.
//listen하고 싶은 event를 찾는 가장 좋은 방법 :구글에 찾고 싶은 element의 이름 검색
//classList -> class들의 목록으로 작업할수 있게 허용, 
//className -: 이전calss를 상관X, 모든걸 교체
//toggle은 토큰이 존재하면 토큰제거, 토큰존재 하지않으면 토큰 추가

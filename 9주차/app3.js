const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   event.preventDefault();
   //event.preventDefault(): 브라우저가 기본동작을 실행하지 못하게 함.
   //event object는 preventDefault함수를 기본적으로 가짐
   const username = loginInput.value;
   loginForm.classList.add(HIDDEN_CLASSNAME);
   localStorage.setItem(USERNAME_KEY, username);
   greeting.innerText = "Hello "+ username;
  //와 같은 의미 greeting.innerText = `Hello ${username}`;<<--``로 시작해야함
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello "+ username;
}


loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

// submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미
// JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들

//querySelector()을 사용할 때--> 대상이 id인지 명확히 해줘야 함. #00
//input안의 button을 누르거나 type이 submit인 input 클릭 ->
//submit은 엔터를 누르거나 버튼클릭할 떄 발생
//모든 eventlistener function의 첫번쨰 argument==> 항상 막 벌어진 일에 대한 정보
//orm을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
//preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!
//JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음
//1. 유저가 처음 앱을 열면 FORM & H1 ==> CSS - HIDDEN이라는 CLASS 때문에 숨겨져 있음.
//2. JS가 USERNAME_KEY를 가지고 LOCAL STORAGE 확인. (배부분의 경우에는 처음 앱을 실행했을 때 KEY와 VALUE가 없음.- SAVEDUSERNAME===NULL)
//3. 
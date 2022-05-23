const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

//1. Math 객체 기능
//Math.random() 0부터 1사이 무작위의 값을 반환해줌
//Math.floor() 내림
//Math.ceil() 올림
//Math.round() 반올림

//2. JS에서 html 요소를 생성
//createElement(" ") 예를 들어,
//document.createElement("img")일 경우 html 내에 img 태그를 생성

//appendChild()
// 함수 안의 경로에 정의한 값을 가장 뒤에서 기입함
//prependChild()
// 반대로 앞에서 기입
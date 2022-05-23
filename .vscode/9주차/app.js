const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if(isNaN(age)|| age <0){
    console.log("Please wirte a real positive number");

} else if(age <18) {
    console.log("Ypu aRe too young");
}  else if(age>=18 && age<=50){
    console.log("You can drink!"); 
}  else if(age >50 && age<=80){
    console.log("You should exercise");
}  else if(age>80){
    console.log("You can do whatever you want");
}  else if(age===100){
    console.log("wow you are wise");
}

else
console.log("You cat't drink...");

 
//isNaN 은 무언가가 NaN인지 판별하는 방법
//if(condition){
  // 실행코드=true ---실행
  // 실행코드=false ----다음 else 값 실행
  // condition은 boolean으로 판별가능해야 한다, (true , false)
//|입력 방법-->enter 키 위의 \ + shift 
//AND = &&, OR = ||
//= --> value를 할당. === --> 같은지 확인, !== --> 같지 않음을 확인

true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false
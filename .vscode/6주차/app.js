const a = 10;
const b = 4;
let myName ="js";

console.log(a+b);
console.log(a/b);
console.log(a*b);
console.log("hello"+myName);

myName = "jseon";
console.log("your name is"+ myName);

const amIFat = null;
let something;
console.log(something, amIFat);

const mon ="mon";
const tue ="tue";
const wed ="wed";
const thu ="thu";
const fri ="fri";
const sat ="sat";
const sun ="sund";

const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun];

const nonsense =[1,2, "hello", false, null, true, undefined];
//Get Item from Array

console.log(daysOfWeek [2], nonsense);
//Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);
//#2.6//
const player = {
    name : "JJ", points : 10, handsome : true,
};
console.log(player);
console.log(player.name);
player.lastName = "potato";
console.log(player);
player.points = player.points + 15;
console.log(player.points);

//#2.7
function sayHello (nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I am "+ age);
}
sayHello("gg", 12);
sayHello("dal", 20);
sayHello("nico", 19);

function plus(a, b){
    console.log (a + b);
}

function divide(a, b) {
    console.log(a/b);
}

plus(10, 20);
divide(100, 10);



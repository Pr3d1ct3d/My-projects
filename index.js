/*
window.alert('bombo clat');
document.getElementById("myH1").textContent = "hello";
document.getElementById("myP").textContent = "i like piza";

let fullname = "Or hamer";
let age = 15;
let isStudent = true;

document.getElementById("P1").textContent = `Your name is ${fullname}`;
document.getElementById("P2").textContent = `You are ${age} years old`;
document.getElementById("P3").textContent = `Enrolled: ${isStudent}`;

let username

document.getElementById("mySumb").onclick = function(){
  username = document.getElementById("myText").value;
  document.getElementById("h1").textContent = `Hello, ${username}`
}


let age = window.prompt("how old is u");
age=Number(age)
age+=1;

console.log(age);
*/

const decreasBtn = document.getElementById("decreasBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}

decreasBtn.onclick = function(){
  count--;
  countLabel.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count
}
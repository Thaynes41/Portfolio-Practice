let main = document.getElementsByTagName("main");

let headings = document.getElementsByClassName("headings");

let paras = document.getElementsByClassName("content");

let a = document.getElementById("navigation");

let firstChild = document.getElementById("firstsection");

console.log(main);
console.log(headings);
console.log(paras);
console.log(a);
console.log(main[0]);


paras[0].textContent ="I just changed you";



let newElement = document.createElement("section");

main[0].insertBefore(newElement, firstChild);
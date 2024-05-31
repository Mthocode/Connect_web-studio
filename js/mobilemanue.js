let bars = document.getElementsByClassName(".fa-bars");
let xmark = document.getElementsByClassName(".fa-xmark");
let nav = document.getElementsByTagName("nav");
let unl = document.getElementsByTagName("ul");

let test1 = getEventListeners(document.querySelector('fa-bars'));
let test2 = getEventListeners(document.querySelector('fa-xmark'));

console.log(test1);
console.log(test2);

bars.addEventListener("click", () => {
    console.log("manue open");
   /* bars.style.display = "none";
    xmark.style.display = "block";
    nav.style.display = "block";
    nav.style.width = "100%";
    unl.style.opacity = "5";*/
});

xmark.addEventListener("click", () => {
    console.log("manue closed");
   /* bars.style.display = "block";
    xmark.style.display = "none";
    nav.style.display = "none";
    nav.style.width = "0%";
    unl.style.opacity = "0";*/
});
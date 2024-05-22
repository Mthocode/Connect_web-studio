let contaner = document.getElementById("project-con");
let projects = document.getElementsByClassName("project-eg");
let last_projectc = document.getElementById("end");
let left_BTN = document.getElementById("leftbtn");
let right_BTN = document.getElementById("rightbtn");

left_BTN.addEventListener("click", () => {
    contaner.scrollLeft += 430;
});

right_BTN.addEventListener("click", () => {
    contaner.scrollLeft -= 430;
});
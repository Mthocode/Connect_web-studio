let bars = document.getElementById("bars");
let xmark = document.getElementById("xmark");
let nav = document.getElementById("navi");
let unl = document.getElementById("ul");


bars.addEventListener("click", () => {
    
    bars.style.display = "none";
    xmark.style.display = "block";
    nav.style.display = "block";
    nav.style.width = "100%";
    unl.style.opacity = "5";
});

xmark.addEventListener("click", () => {
    
    bars.style.display = "block";
    xmark.style.display = "none";
    nav.style.display = "none";
    nav.style.width = "0%";
    unl.style.opacity = "0";
});
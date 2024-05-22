window.addEventListener("scroll", () => {
    let neavigation = document.getElementById("navigationbur");
    const scrollP = window.scrollY;
    
    /* console.log("hello");
    console.log(scrollP);
    console.log(document.body.scrollTop); */

    if(scrollP > 50)
    {
        neavigation.style.backgroundColor = "rgba(15, 15, 15, 1)";
        neavigation.style.backgroundImage = "linear-gradient(50deg,rgba(17, 17, 17, 0),rgba(194, 192, 192, 1))";
        neavigation.style.boxShadow = "2px 8px 14px rgba(37, 37, 37, 1)";
    }
    else if(scrollP < 51)
    {
        neavigation.style.backgroundColor = "rgba(15, 15, 15, 0)";
        neavigation.style.backgroundImage = "linear-gradient(50deg,rgba(17, 17, 17, 0),rgba(194, 192, 192, 0))";
        neavigation.style.boxShadow = "2px 8px 14px rgba(37, 37, 37, 0)";
    } 
})  
let cover = document.getElementById("cover_frame");
let close_BTN = document.getElementById("close");
let form = document.getElementById("businfo");

/*display the form*/
function formcanvis()
{
    cover.style.display = "block";
    close_BTN.style.display = "block";
    form.style.display = "flex";
}

/*close the form*/
close_BTN.addEventListener("click", function (){
    cover.style.display = "none";
    close_BTN.style.display = "none";
    form.style.display = "none";
})


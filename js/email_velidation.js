const usersname = document.querySelector("#username");
const reason =  document.querySelector("#reason");
const email =  document.querySelector("#email");
const comment =  document.querySelector("#massagebox");

const nameErr = document.getElementById("nameErr");
const reasonErr = document.getElementById("reasonErr");
const emailErr = document.getElementById("emailErr");
const commentErr = document.getElementById("massageboxErr");

const form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    
    if(usersname.value === "")
    {
        usersname.style.border = "2px solid red";
        nameErr.innerHTML = "name is not spasifide";
        e.preventDefault();
    }
    else
    {
        usersname.style.border = "2px solid black";
        nameErr.innerHTML = "";
    }
    if(reason.value === "")
    {
        reason.style.border = "2px solid red";
        reasonErr.innerHTML = "reson is not spasifide";
        e.preventDefault();
    }
    else
    {
        reason.style.border = "2px solid black";
        reasonErr.innerHTML = "";
    }
    if(email.value === "")
    {
        email.style.border = "2px solid red";
        emailErr.innerHTML = "email is not spasifide";
        e.preventDefault();
    }
    else
    {
        email.style.border = "2px solid black";
        emailErr.innerHTML = "";
    }
    if(comment.value === "")
    {
        comment.style.border = "2px solid red";
        commentErr.innerHTML = "comment is not spasifide";
        e.preventDefault();
    }
    else
    {
        comment.style.border = "2px solid black";
        commentErr.innerHTML = "";
    }
});

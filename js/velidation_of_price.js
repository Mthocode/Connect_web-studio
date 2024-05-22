const name_of_user = document.querySelector("#username");
const businessnam = document.getElementById("businessnam");
const email =  document.getElementById("email");
const comment =  document.getElementById("massagebox");
const numpages = document.getElementById("select");
const street = document.getElementById("street");
const surburb = document.getElementById("surburb");
const cityortown = document.getElementById("city");
const province = document.getElementById("select1");
const postalcoad = document.getElementById("postalc");
const date = document.getElementById("date");
const inform = document.getElementById("form");

const UsernameErr = document.getElementById("usernameErr");
const businessErr =  document.getElementById("businessErr");
const emailErr =  document.getElementById("emailErr");
const massageErr = document.getElementById("massageErr");
const numpErr = document.getElementById("numpErr");
const streetErr = document.getElementById("streetErr");
const surburbErr = document.getElementById("surburbErr");
const cityErr = document.getElementById("cityErr");
const provinceErr = document.getElementById("provinceErr");
const postalcodeErr = document.getElementById("postalcodeErr");
const dateErr = document.getElementById("dateErr");

inform.addEventListener("submit", (e)=>{

    const formelement = [name_of_user,businessnam,email,comment,numpages,street,surburb,cityortown,
    province,postalcoad,date];

    const errwithmass =[UsernameErr,businessErr,emailErr,massageErr,numpErr,streetErr,surburbErr,
        cityErr,provinceErr,postalcodeErr,dateErr]["your name is not set","your business's name is not set",
        "your email is not set","please type a short sumery about your business","number of pages not set","your steet name/number/house number is not set",
        "your surberb or location is not set eg.ex12","your provinc is not set","your postal code is not set","date not set"];

        for(let x = 0; x < formelement.length; x++)
        {
            if(formelement[x].value === "")
            {
                formelement[x].style.border = "2px solid red";
                errwithmass[x][x].innerHTML = errwithmass[x][x];
                e.preventDefault(); 
            }
            else
            {
                formelement[x].style.border = "2px solid black";
                errwithmass[x][x].innerHTML = ""; 
            }
        }
});
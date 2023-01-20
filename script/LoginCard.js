let button=document.querySelector("#loki-login-button");
let email=document.querySelector("#form2Example17");
let password=document.querySelector("#form2Example27");

button.addEventListener("click",(event)=>{
    let checkvalue;
    fetch(`https://63c8ed6a904f040a9652b740.mockapi.io/users?search=${email.value}`).then((res)=>{
        return res.json()
    }).then((res)=>{
        checkvalue=res[0];
        if(email.value==checkvalue.email && password.value==checkvalue.password){
            localStorage.setItem("currentuser",JSON.stringify(checkvalue));
            window.location.href="index.html"

        }
        else{
            alert("Wrong Credentials!")
        }
    }).catch((err)=>{
        alert("Wrong Credentials!")
    })
    
})
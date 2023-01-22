let Currentuser=document.querySelector("#l-navbar-black");
let currentuser=JSON.parse(localStorage.getItem("currentuser"))
if(currentuser !==null){
    Currentuser.innerText=currentuser.name;
    let signinpop=document.querySelector("#signinpop");
    signinpop.style.display="none"
}else{
    Currentuser.innerText="Hello User"
    let signinpop=document.querySelector("#signinpop");
    signinpop.style.display="inline"
}

let searchinput=document.querySelector("#l-search-input");
searchinput.addEventListener("change",(event)=>{
    window.location.href="products.html";
})

let goaddtocartpage=document.querySelector(".goaddtocartpage");
console.log(goaddtocartpage)
goaddtocartpage.addEventListener("click",(event)=>{
    window.location.href="addtocart.html"
})
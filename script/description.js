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

let currentproduct=JSON.parse(localStorage.getItem("currentproduct"))
let tbody=document.querySelector("#product-description");

let divleft=document.createElement("div");
divleft.className="divleft";
let image=document.createElement("img");
image.src=currentproduct.avatar;
divleft.append(image);
tbody.append(divleft)

let divright=document.createElement("div");
divright.className="divright";
let title=document.createElement("p");
let rating=document.createElement("p");
let description=document.createElement("p");
let category=document.createElement("p");
let price=document.createElement("p");
let addtocart=document.createElement("button");
addtocart.className="addtocart";

title.innerText=`Title: ${currentproduct.title}`;
rating.innerText=`Rating: ${currentproduct.rating} ⭐`;
description.innerText=`Description: ${currentproduct.description}`;
category.innerText=`Category: ${currentproduct.category}`;
price.innerHTML=`Price: ${currentproduct.price}`;
addtocart.innerText="Add to cart";
divright.append(title,rating,description,category,price,addtocart)
tbody.append(divright)


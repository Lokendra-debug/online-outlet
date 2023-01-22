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



addtocart.addEventListener("click",(event)=>{

    if(currentuser !==null){
            xyz();
            async function xyz(){
                try {
                    let data=await fetch(`https://63c8ed6a904f040a9652b740.mockapi.io/users?search=${currentuser.email}`);
                    let result=await data.json();
                    let userlive=result[0];
                    let datahaikya=userlive.cart.filter((ele,index)=>{
                        return currentproduct.id ==ele.id;
                    });

                    if(datahaikya.length!== 0){
                        alert("data is already add to cart")
                        location.href="addtocart.html"
                    }else{
                        userlive.cart.push(currentproduct);

                        fetch(`https://63c8ed6a904f040a9652b740.mockapi.io/users/${userlive.id}`, {
                        method: 'PUT', 
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(userlive),
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                        alert("you are successfully add to cart");
                        location.href="addtocart.html"
                        
                    }
                    
                } catch (error) {
                    console.log("something wronge in fetch a wala ")
                    
                }
            }

       
    }else{
        alert("You are not Login");
    }

})
divright.append(title,rating,description,category,price,addtocart)
tbody.append(divright)




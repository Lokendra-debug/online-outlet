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

let goaddtocartpage=document.querySelector(".goaddtocartpage");
console.log(goaddtocartpage)
goaddtocartpage.addEventListener("click",(event)=>{
    window.location.href="addtocart.html"
})

let searchinput=document.querySelector("#l-search-input");
searchinput.addEventListener("change",(event)=>{
    fetch(`https://63c8ed6a904f040a9652b740.mockapi.io/product?search=${searchinput.value}`).then((res)=>{
        return res.json();
    }).then((res)=>{
        displayproduct(res)
    })
})



let filterproducts=document.querySelector("#filter-products");
let allfunctionality=document.querySelector("#all-functionality");
let allproducts=document.querySelector("#all-products");
let url="https://63c8ed6a904f040a9652b740.mockapi.io/product"
let maindata=[];

fetch(url).then((res)=>{
    return res.json()
}).then((res)=>{
    
    maindata=res;
    displayproduct(maindata)
})

function displayproduct(data){
    allproducts.innerHTML=null;

    data.forEach((ele,index)=>{
        let div=document.createElement("div");
        let avatar=document.createElement("img");
        let title=document.createElement("p");
        let rating=document.createElement("p");
        let price=document.createElement("p");

        avatar.src=ele.avatar;
        title.innerText=ele.title;
        rating.innerText=`Rating ${ele.rating%4} ⭐`;
        price.innerText=`Price $${ele.price}`;
        div.addEventListener("click",(event)=>{
            ele.quantity=1;
            
            localStorage.setItem("currentproduct",JSON.stringify(ele));
            window.location.href="description.html"
        })
        div.append(avatar,title,rating,price);
        allproducts.append(div);
        
    })
}

let lowtohigh=document.querySelector("#lowtohigh");
let hightolow=document.querySelector("#hightolow");
let filterbyratings=document.querySelector("#filterbyratings");
let filterbyacategory=document.querySelector("#filterbyacategory");
let seeallproducts=document.querySelector("#seeallproducts");

lowtohigh.addEventListener("click",(event)=>{
    fetch(`https://63c8ed6a904f040a9652b740.mockapi.io/product?sortBy=price&order=asc`).then((res)=>{
        return res.json();
    }).then((res)=>{
        displayproduct(res)
    })
});

hightolow.addEventListener("click",(event)=>{
    fetch(`https://63c8ed6a904f040a9652b740.mockapi.io/product?sortBy=price&order=desc`).then((res)=>{
        return res.json();
    }).then((res)=>{
        displayproduct(res)
    })
});

filterbyratings.addEventListener("click",(event)=>{
    fetch(`https://63c8ed6a904f040a9652b740.mockapi.io/product?sortBy=rating&order=asc`).then((res)=>{
        return res.json();
    }).then((res)=>{
        displayproduct(res)
    })
});

filterbyacategory.addEventListener("click",(event)=>{
    fetch(`https://63c8ed6a904f040a9652b740.mockapi.io/product?sortBy=price&order=desc`).then((res)=>{
        return res.json();
    }).then((res)=>{
        displayproduct(res)
    })
});

seeallproducts.addEventListener("click",(event)=>{
    fetch(`https://63c8ed6a904f040a9652b740.mockapi.io/product`).then((res)=>{
        return res.json();
    }).then((res)=>{
        displayproduct(res)
    })
});



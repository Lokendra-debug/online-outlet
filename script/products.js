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
            
            localStorage.setItem("currentproduct",JSON.stringify(event.target.parentNode))
            window.location.href="description.html"
        })
        div.append(avatar,title,rating,price);
        allproducts.append(div);
        
    })
}


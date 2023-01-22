let Currentuser=document.querySelector("#l-navbar-black");
let currentuser=JSON.parse(localStorage.getItem("currentuser")) || [];
if(currentuser !==null){
    Currentuser.innerText=currentuser.name;
    let signinpop=document.querySelector("#signinpop");
    signinpop.style.display="none"
}else{
    Currentuser.innerText="Hello User"
    let signinpop=document.querySelector("#signinpop");
    signinpop.style.display="inline"
}

lena();
async function lena(){
    try {
        let data=await fetch(`https://63c8ed6a904f040a9652b740.mockapi.io/users/${currentuser.id}`)
        let result=await data.json();
        currentuser= result;
        localStorage.setItem("currentuser",JSON.stringify(currentuser));
        currentuser=JSON.parse(localStorage.getItem("currentuser")) || [];
        display(currentuser.cart)
        
        
    } catch (error) {
        console.log("someting wronge in the fetch data")
    }
}

function display(data){
    let bagtotal=document.querySelector("#bagtotal");
    let totalitems=document.querySelector("#totalitems");
    let tbody=document.querySelector("#left-main-addtocart");
    tbody.innerHTML=null;

    data.forEach((ele,index)=>{
        bagtotal.innerText=Number(bagtotal.innerText)+ele.quantity*ele.price;
        totalitems.innerText=Number(totalitems.innerText)+ele.quantity;
        let bigdiv=document.createElement("div");
        let img=document.createElement("img");
        let title=document.createElement("p");
        let price=document.createElement("p")
        let smalldiv=document.createElement("div");
        let increment=document.createElement("button");
        let quantity=document.createElement("p");
        let decrement=document.createElement("button");
        let deletee=document.createElement("button");
        
        

        img.src=ele.avatar;
        title.innerText=ele.title;
        price.innerText=`$${ele.price}`;
        smalldiv.append(increment,quantity,decrement)
        smalldiv.className="innerplusminus"
        increment.innerHTML=`<i class="fa-solid fa-plus"></i>`;
        quantity.innerText=ele.quantity;
        decrement.innerHTML=`<i class="fa-solid fa-minus"></i>`;
        deletee.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
        bigdiv.append(img,title,price,smalldiv,deletee);
        tbody.append(bigdiv) 
    })

}








let name=document.querySelector("#form3Example1c");
let email=document.querySelector("#form3Example3c");
let password=document.querySelector("#form3Example4c")
let button=document.querySelector("#regiserbutton");

button.addEventListener("click",(event)=>{
    checksignup()
    async function checksignup(){
        try {
            let data=await fetch(`https://63c8ed6a904f040a9652b740.mockapi.io/users?search=${email.value}`)
            let result=await data.json();
            if(result[0].email==email.value){
                alert("your email address has already been registered. please log in directly")
                window.location.href="LoginCard.html";
            }
        } catch (error) {
            const data = { cart:[],
            order:[],email:email.value,name:name.value,password:password.value};

            fetch('https://63c8ed6a904f040a9652b740.mockapi.io/users', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
        }
    }

})
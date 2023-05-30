var createaccount=document.getElementById("createaccount")
var btn=document.getElementById("btn")
const baseUrl="https://students.codex.today/createAccount";
createaccount.addEventListener("submit",(event)=>{
    event.preventDefault();
    const formData = {
        name: createaccount.name.value,
        number: createaccount.number.value,
        email: createaccount.email.value,
        password: createaccount.password.value
      }
        
    fetch(baseUrl, {
      
      method: "POST",//sending the data
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)//json converts to string
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})
var login=document.getElementById("login");
var btn=document.getElementById("btn");
login.addEventListener("submit",(event)=>{
  event.preventDefault();
  const formData={
    name: login.name.value,
    email: login.email.value,
    password: login.password.value

  }
  fetch("https://students.codex.today/login",{
        
    method: "POST",//sending the data
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)//json converts to string
  
  })
  .then(res => res.json())
    .then(data =>{
      localStorage.setItem("email",data.email)
      localStorage.setItem("token",data.token)
      localStorage.setItem("userId",data.userId)
    })
    .catch(err => console.log(err))
})
window.onload=()=>{
  const token = localStorage.getItem("token");
  if(token){
      window.location.assign("./html2.html");
  }
}

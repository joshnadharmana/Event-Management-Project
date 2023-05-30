
btn.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
window.onload = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.assign("./html.html");
  }
}
const baseUrl = "https://students.codex.today/getUsers";
var accountdetails = document.getElementById("accountdetails")
// accountdetails.addEventListener("click",=>(){

// })


let filtered;


fetch("https://students.codex.today/getUsers", {

  method: "GET",//sending the data
  headers: {
    "Content-Type": "application/json",
    "Authorization": "bearer " + localStorage.getItem("token")

  },
  // body: JSON.stringify(formData)//json converts to string

})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const localId = localStorage.getItem("userId");
    // console.log(localId)
    filtered = data.filter(each => each._id == localId)[0]
    // console.log(filtered)
  })
  .catch(err => console.log(err))

//  const result=filter(email)


var event1 = document.getElementById("event1");




const gg = document.querySelector('#accountdetails');

gg.onclick = () => {
  console.log(filtered)
  console.log(filtered.name);
  localStorage.setItem("obj", JSON.stringify(filtered));
  window.location.assign("/html5.html")
  // document.write(filtered.name)
}
var addevn = document.getElementById("addevn")
addevn.innerHTML = `
<div id="eventprint"></div>
<form id="createevent">
<div> <span id="clid"><label id="label" for="">Event Name</label></span><span><select name="Eventname" id=""><option value="interview">interview</option><option value="documentation">documentation</option></select></span></div>
<div> <span id="clid"><label id="label" for="">End date</label></span><span><input name="Enddate" type="date"></span></div>
<div> <span id="clid"><label id="label" for="">End time</label></span><span><input name="Endtime" type="time"></span></div>
<div><button name="availabletime" type="submit" id="addevent">Add Event</button> </div>
</form>`

// const event(data)
var addevent = document.getElementById("addevent")
var addeventForm = document.getElementById("createevent")
addeventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const eventData = {
    Eventname: addeventForm.Eventname.value,
    Enddate: addeventForm.Enddate.value,
    Endtime: addeventForm.Endtime.value,
    // availabletime: addeventForm.availabletime.value,
    email: localStorage.getItem("email")
  }

  fetch("https://students.codex.today/addevent", {

    method: "POST",//sending the data
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(eventData) //json converts to string
  })
    .then(res => res.json())
    .then(data => console.log(data => {
      network.getEvent("Eventname", data.Eventname)

    }))
    .catch(err => console.log(err))


})

fetch("https://students.codex.today/getEvent", {
  headers: {
    "Authorization": "Bearer " + localStorage.getItem("token")
  }
})
  .then(res => res.json())
  .then(data => {
    


    data.forEach((e, index) => {

      if (index < 25) {

        var html1 =
          `<div class="ent">
<p>Enddate:${e.Enddate}</p>
<p> Endtime:${e.Endtime}</p>
<p>Eventname:${e.Eventname}</p>
<p id="eml">email:${e.email}</p>
<p id="timer"></p>
</div>`
var eventm = document.getElementById("eventm");

        eventm.innerHTML += html1
        var timer=document.getElementById("timer")
        var myinterval=setInterval(()=>
      {
        var currenttime=new Date().getTime();
        var endtime=new Date("may 31, 2023 16:53:11");
        var expiredtime=endtime-currenttime;
        var day=Math.floor(expiredtime/(24*60*60*1000));
        var hours=Math.floor(expiredtime%(24*60*60*1000)/(60*60*1000));
        var minutes=Math.floor(expiredtime%(60*60*1000)/(60*1000));
        var seconds=Math.floor(expiredtime%(60*1000)/(1000));
        timer.innerHTML=day + "D: " + hours + "H: " + minutes +"M: " + seconds + "S ";
        if(expiredtime < 0)
        {
            clearInterval(myinterval);
            timer.innerHTML="expired"
        }
      
      },1000);
      
      
      
      
      
      
      
      }

    });
    

  })
  .catch(err => console.log(err))

 
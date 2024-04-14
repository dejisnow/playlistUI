window.onload=()=>{
    
    let next = document.querySelector(".next");
   let shuffle = document.querySelector(".shuf");
   let play = document.querySelector(".play")
   let prev = document.querySelector(".prev")
   let disc = document.querySelector(".disc")
  let share =  document.querySelector(".share")  
let songlist__btn=  document.querySelector(".songlist__btn")  
let songDiv = document.querySelector(".songDiv")
let songs =  document.querySelector(".songs")  

let isDisplayed = false;
const playList = {


favorite:[
{
     artiste:"wizkid",
    song :"baba nla",
    duration:4, 
     
},{
     artiste:"davido",
    song :"FIA",
    duration:3.5,   
},{
     artiste:"burna boy",
    song :"won da mo",
    duration:5,   
}
],
frequentlyPlayed:[
{
     artiste:"Nathaniel Bassey",
    song :"IBA",
    duration:6,   
},{
     artiste:"davido",
    song :"FEM",
    duration:4.5,   
},{
     artiste:"burna boy",
    song :"last last",
    duration:5.6,   
}
]

    
}



songlist__btn.addEventListener("click",()=>{
    songs.classList.add("active")
     
     })

 //Play
  
  play.addEventListener("click",()=>{
 disc.classList.toggle("active")
  play.classList.toggle("active")
  if(play.classList.contains("active")){
      play.innerHTML = "Pause"
  }else{
      play.innerHTML = "Play"
  }
  
      
  })
  
  
  let allSongFunc = ()=>{
  
  let allFav = playList.favorite.map(x=>{
  songs.innerHTML+=`<div class="songDiv">${x.artiste}_${x.song}</div>`
  
   
  })
  }
  
  
    
    
    
}

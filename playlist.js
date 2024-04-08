window.onload=()=>{
    
    let next = document.querySelector(".next");
   let shuffle = document.querySelector(".shuf");
   let prev = document.querySelector(".prev")
  let share =  document.querySelector(".share")  
let songlist__btn=  document.querySelector(".songlist__btn")  
let songDiv = document.querySelector(".songDiv")
let songs =  document.querySelector(".songs")  


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

let obj = {
    name:"Deji snow",
    age:27,
    gender:"Male",
}


  songlist__btn.addEventListener("click",()=>{
  songs.classList.toggle("active")
    songs.style.display= "flex"
    songDiv.style.display = "block"
  })
  
  let allSongFunc = ()=>{
  
  let allFav = playList.favorite.map(x=>{
   songs.innerHTML+=`<div class="songDiv">${x.artiste}_${x.song}</div>`
  })
  /*     
  for([key,value] of Object.entries(obj)){
         
         console.log(`${value}`)
       } 
       */
       

  }
  
  allSongFunc()
    
    
    
}

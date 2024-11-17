console.log("hello");
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterplay = document.getElementById("masterplay");
let progress = document.getElementById("progress");
let songitem = Array.from(document.getElementsByClassName("playlist"))
let songitemplay =Array.from( document.getElementsByClassName("songitemplay"));
let songs =[
    {songname:"shayad", filepath:"1.mp3", coverpath:"shayad.jpg"},
    {songname:"husn", filepath:"2.mp3",coverpath:"husna.jpg"},
    {songname:"hamari aduri kahani", filepath:"3.mp3",coverpath:"hamari.jpg"},
    {songname:"stranga", filepath:"4.mp3",coverpath:"satranga.jpg"},
    
];
songitem.forEach((Element,i)=> {
   
    Element.getElementsByTagName("img")[0].src= songs[i].coverpath;
    Element.getElementsByClassName("songname")[0].innerText= songs[i].songname;


});

masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
    
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
       
    }
    })

audioElement.addEventListener("timeupdate",()=>{
    time = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    progress.value = time;
})
progress.addEventListener("change",()=>{
    audioElement.currentTime = progress.value*audioElement.duration/100;
})
const makeallplase=()=>{
    songitemplay.forEach((Element)=>{
        Element.classList.remove("fa-circle-pause");
        Element.classList.add("fa-circle-play")
        })
    }


songitemplay.forEach((Element)=>{

    Element.addEventListener("click",(e)=>{
        makeallplase()
        
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause");
        audioElement.src=`${index}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
      

    })
})
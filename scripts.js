let songnIndex=0;
let masterplay=document.getElementById("masterplay");
let audioelement=new Audio('Spotify/Blue Eyes Full Video Song Yo Yo Honey Singh _ Blockbuster Song Of 2013.mp3');
let myprogressbar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');

let songitems=Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songname: "Blue Eyes Full Song - Yo Yo Honey Singh", filePath: "Spotify/Blue Eyes Full Video Song Yo Yo Honey Singh _ Blockbuster Song Of 2013.mp3",coverPath: "Spotify/song1.jpg"},
    {songname: "Genius (Lyrics) ft. Sia, Diplo", filePath: "Spotify/LSD - Genius (Lyrics) ft. Sia, Diplo, Labrinth.mp3",coverPath: "Spotify/Blue-Eyes-2013-500x500.jpg"},
    {songname: "Girls Like You", filePath: "Spotify/audio (1).mp3",coverPath: "Spotify/MV5BMTE5MzM4MzAtMzE4Mi00NTNiLTk3ODktNGQ4MjQ2MzNlYjRlXkEyXkFqcGc@._V1_.jpg"},
    {songname: "Justin Bieber - Let Me Love You", filePath: "Spotify/DJ Snake ft. Justin Bieber - Let Me Love You [Lyric Video].mp3",coverPath: "Spotify/images.jpeg"},
    {songname: "Hanumankind – Big Dawgs", filePath: "Spotify/Hanumankind – Big Dawgs _ Ft. Kalmi (Official Music Video) _ Def Jam India.mp3",coverPath: "Spotify/hqdefault.jpg"},
    {songname: "Let me down slowly", filePath: "Spotify/audio (2).mp3",coverPath: "Spotify/ab67616d0000b2738381da28ed338392afbda29a.jpeg"},
    {songname: "People", filePath: "Spotify/people.mp3",coverPath: "Spotify/maxresdefault (1).jpg"},
    {songname: "No Lie", filePath: "Spotify/No Lie.mp3",coverPath: "Spotify/No-Lie-Eduardo-Versati-Remix-English-2017-500x500.jpg"}
]

songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].src = songs[i].songname;
})

//Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
    
    }
)

//Listen to Events
audioelement.addEventListener('timeupdate', ()=>{
   
    //Update Seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime=((myprogressbar.value  * audioelement.duration)/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        gif.style.opacity = 0;
})}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    
    element.addEventListener('click', (e)=>{
         makeAllPlays();
         songnIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
         audioelement.src = songs[songnIndex].filePath;
         mastersongname.innerText = songs[songnIndex].songname;
         audioelement.currentTime=0;
         audioelement.play();
         masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
         gif.style.opacity = 1;
 
    }) 
 })

 document.getElementById('next').addEventListener('click', ()=>{
    if(songnIndex>=6){
        songnIndex = 0
    }
    else{
        songnIndex += 1;
    }

    audioelement.src = songs[songnIndex].filePath;
    mastersongname.innerText = songs[songnIndex].songname;
         audioelement.currentTime=0;
         audioelement.play();
         masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
         gif.style.opacity = 1;
 })

 document.getElementById('previous').addEventListener('click', ()=>{
    if(songnIndex<=0){
        songnIndex = 0
    }
    else{
        songnIndex -= 1;
    }

    audioelement.src = songs[songnIndex].filePath;
    mastersongname.innerText = songs[songnIndex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
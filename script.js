console.log("Welcome to Spotify");
let songindex =0;
let audioElement = new Audio('song/dev.mp3');
let masterplay = document.getElementById('masterplay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName:"Devo Ke Dev O Mahadev...",filepath: " song/dev.mp3",coverpath:"songs/dev.mp3"},
    {songName:"O Kanha Ab To Murli Ki...",filepath: " song/okanha.mp3",coverpath:"songs/okanha.mp3"},
    {songName:"Homa Cola Tale Tale...",filepath: " song/HOLA.mp3",coverpath:"songs/HOLA.mp3"},
    {songName:"let me love you...",filepath: " song/L_M_L_Y.mp3",coverpath:"songs/L_M_L_Y.mp3"},
    {songName:"Dandelians...",filepath: " song/Dandelians.mp3",coverpath:"songs/Dandelians.mp3"},
    {songName:"kesariya...",filepath: " song/kesariya.mp3",coverpath:"songs/kesariya.mp3"},
    {songName:"Lean on..,",filepath: " song/Lean_on.mp3",coverpath:"songs/Lean_on.mp3"},
    {songName:"Malang-sajna..,",filepath: " song/malang.mp3",coverpath:"songs/malang.mp3"},
    {songName:"Malang-sajna..,",filepath: " song/malang.mp3",coverpath:"songs/malang.mp3"},
    {songName:"Malang-sajna..,",filepath: " song/malang.mp3",coverpath:"songs/malang.mp3"},
    
]

songitem.forEach((element,i )=>{
    console.log(element,1);
    element.getElementByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
}); 


masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-play');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    MyProgressBar.value = progress;
});

MyProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =MyProgressBar.value*audioElement.duration/100;
})

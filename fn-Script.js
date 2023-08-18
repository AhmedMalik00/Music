let index = 1;
let functionrunning = false;
let currentAudioElement = null;


function increasedecrease(value){
    index += value;
    console.log(index)
    if(index === 8){
        index = 1;
    }
    else if(index === 0){
        index = 7;
    }
    playmusic(index , findSongName(index));
};


function findSongName(index) {
    for (const value of songslist) {
        if (value.image == index) {
            return value.name;
        }
    }
    return ''; // Return an empty string if no matching song is found
}
if(!functionrunning){
    playmusic(1 , 'Sohne Lagde');
    currentAudioElement.pause();
    settimer('3:39');
}


function playmusic(value , currentsongname) {
    functionrunning = true;
    if (currentAudioElement) {
        currentAudioElement.pause();
        document.querySelector(`.fa-pause-circle`).classList.remove('fa-pause-circle');
    }

    currentAudioElement = new Audio(`./${value}.mp3`);
    document.querySelector(`#songNo${value}`).classList.toggle('fa-pause-circle');
    document.querySelector('.gift').style.opacity = '1';
    currentAudioElement.play();
    currenttime = 0;
    isPlaying = true;
    index = Number(value);

    currrentsong(currentsongname);
    
    let progressBar = document.getElementById('progressbar')
    currentAudioElement.addEventListener('timeupdate' , ()=>{
        let progress = parseInt((currentAudioElement.currentTime/currentAudioElement.duration)*100);
        console.log(progress);
        progressBar.value = progress;
    });
    progressBar.addEventListener('input' , ()=>{
        const NewCurrentTime = (progressBar.value * currentAudioElement.duration)/100;
        currentAudioElement.currentTime = NewCurrentTime;
    });
}


function pauseplay(){
if(currentAudioElement)
{
    const playbutton = document.getElementById('playbtn');
    if(currentAudioElement.paused){
    currentAudioElement.play();
    isPlaying = true;
    playbutton.classList.remove('fa-play-circle');
    playbutton.classList.add('fa-pause-circle');
    document.querySelector('.gift').style.opacity = '1';
}
    else{
        currentAudioElement.pause();
        isPlaying = false;
        playbutton.classList.remove('fa-pause-circle');
        playbutton.classList.add('fa-play-circle');
        document.querySelector('.gift').style.opacity = '0';
    }
}
}


function currrentsong(value){
document.getElementById('currentsong').innerText = `${value}`;
}
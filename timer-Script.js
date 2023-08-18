let currenttime = 0;
    let isPlaying = false;
    const timerElement = document.querySelector('#timer2');
    const updatedTimer = setInterval(() => {
        if (isPlaying) {
            currenttime++;
            const Minutes = Math.floor(currenttime / 60);
            const Seconds = currenttime % 60;
            timerElement.textContent = `${Minutes}:${Seconds < 10 ? '0' : ''}${Seconds}`;
            if (currenttime >= Math.floor(currentAudioElement.duration)) {
                currenttime = 0;
                isPlaying = false;
            }
        }
    }, 1000);
    const progressBar = document.getElementById('progressbar');
    progressBar.addEventListener('input', () => {
        const newCurrentTime = (progressBar.value * currentAudioElement.duration) / 100;
        currenttime = Math.floor(newCurrentTime);

        const currentMinutes = Math.floor(currenttime / 60);
        const currentSeconds = Math.floor(currenttime % 60);

        const totalMinutes = Math.floor(currentAudioElement.duration / 60);
        const totalSeconds = Math.floor(currentAudioElement.duration % 60);

        timerElement.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds} / ${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
    });
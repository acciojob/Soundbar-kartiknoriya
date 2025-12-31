function playSound(audioId) {
    const audio = document.getElementById(audioId);

    if (audio) {
        audio.currentTime = 0; // restart sound
        audio.play();
    }
}

function stopAllSounds() {
    const allAudios = document.querySelectorAll("audio");

    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

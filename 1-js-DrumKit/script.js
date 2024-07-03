// Event Listener when key is pressed
window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    if (audio == null) {
        return;
    }

    // Plays audio from beginning each press
    audio.currentTime = 0;
    audio.play();

    // Adds playing class to simulate animation
    const key = document.querySelector(`div[data-key="${e.code}"]`);
    key.classList.add("playing");
});

// Event Listener for when key is released to simulate animated press
window.addEventListener("keyup", (e) => {
    const key = document.querySelector(`div[data-key="${e.code}"]`);

    // If invalid key is pressed
    if (key == null) {
        return;
    }
    key.classList.remove("playing");
});
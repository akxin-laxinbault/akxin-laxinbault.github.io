// Upcoming Music Controls
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("upcoming-audio");
  const playPauseBtn = document.getElementById("play-pause-btn");

  // Toggle play/pause
  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "❚❚ Pause";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▷ Play";
    }
  });
});

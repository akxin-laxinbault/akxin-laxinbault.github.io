// Upcoming Music Controls
document.addEventListener("DOMContentLoaded", () => {
  const teaserBtn = document.getElementById("teaser-btn");
  const musicInfo = document.getElementById("music-info");
  const audio = document.getElementById("upcoming-audio");
  const playPauseBtn = document.getElementById("play-pause-btn");

  teaserBtn.addEventListener("click", () => {
    teaserBtn.style.display = "none";
    musicInfo.classList.remove("hidden");
    audio.play();
  });

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "⏸ Pause";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶ Play";
    }
  });
});

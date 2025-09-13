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

// Forms
document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion-collapse');

  accordions.forEach(acc => {
    acc.addEventListener('show.bs.collapse', function () {
      const iframe = this.querySelector('iframe');
      if (iframe) iframe.style.height = "1300px";
    });

    acc.addEventListener('hide.bs.collapse', function () {
      const iframe = this.querySelector('iframe');
      if (iframe) iframe.style.height = "0px";
    });
  });
});
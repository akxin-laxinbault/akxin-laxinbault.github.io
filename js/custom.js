// Upcoming Music Controls
document.addEventListener("DOMContentLoaded", () => {
  const gistUrl = "https://gist.githubusercontent.com/akxin-laxinbault/00437e52b1882682c349ee2bbe37c7f9/raw/akxin-contents.json";

  fetch(gistUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById("music-title").textContent = data.title;
      document.getElementById("music-composer").textContent = data.composer;
      document.getElementById("music-date").textContent = "Release Date: " + data.release_date;

      // Update the audio source to point to your Google Drive teaser link
      const audio = document.getElementById("upcoming-audio");
      audio.src = data.link;

      // Simple play/pause button logic
      const playBtn = document.getElementById("play-pause-btn");
      playBtn.addEventListener("click", () => {
        if (audio.paused) {
          audio.play();
          playBtn.textContent = "❚❚ Pause";
        } else {
          audio.pause();
          playBtn.textContent = "▷ Play";
        }
      });
    })
    .catch(error => {
      console.error("Error loading upcoming release data:", error);
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

// For updating contens
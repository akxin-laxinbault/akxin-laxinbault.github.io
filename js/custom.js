// Upcoming Music Controls
document.addEventListener("DOMContentLoaded", () => {
  const gistUrl = "https://gist.githubusercontent.com/akxin-laxinbault/00437e52b1882682c349ee2bbe37c7f9/raw/akxin-contents.json";

  fetch(gistUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById("music-title").textContent = data.title;
      document.getElementById("music-composer").textContent = data.composer;

      const playBtn = document.getElementById("play-pause-btn");
      const audio = document.getElementById("upcoming-audio");

      if (data.link && data.link.trim() !== "") {
        const fixedLink = data.link.replace("dl=0", "dl=1");
        audio.src = fixedLink;
        audio.load();

        playBtn.addEventListener("click", () => {
          if (audio.paused) {
            audio.play();
            playBtn.textContent = "❚❚ Pause";
          } else {
            audio.pause();
            playBtn.textContent = "▷ Play";
          }
        });
      } else {
        playBtn.style.display = "none"; // only hide if no link
      }
    })
    .catch(err => console.error("Error loading upcoming release data:", err));
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
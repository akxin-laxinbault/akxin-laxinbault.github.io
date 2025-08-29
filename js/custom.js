const audio = document.getElementById("upcoming-audio");
let hasPlayed = false;

function playOnScroll() {
  if (!hasPlayed) {
    audio.play().catch(err => console.log("Autoplay blocked:", err));
    hasPlayed = true;
  }
}

window.addEventListener("scroll", playOnScroll);

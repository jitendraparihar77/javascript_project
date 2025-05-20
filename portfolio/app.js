let banner = document.querySelector(".banner");

let datnight = document.querySelector(".daynight");

datnight.addEventListener("click", () => {
  banner.classList.toggle("night");
});

let typeEffect = new Typed("#text", {
  strings: ["Jitendra Parihar", "Web-developer", "YouTuber"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});

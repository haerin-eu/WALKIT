const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;

/* CREATE DOTS */
slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  if(index === 0){
    dot.classList.add("active");
  }

  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
});

function updateSlider(){
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  const dots = document.querySelectorAll(".dot");

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function moveSlide(direction){
  currentIndex += direction;

  if(currentIndex < 0){
    currentIndex = slides.length - 1;
  }

  if(currentIndex >= slides.length){
    currentIndex = 0;
  }

  updateSlider();
}

/* AUTO SLIDE */
setInterval(() => {
  moveSlide(1);
}, 3000);


/* PARALAX */


window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // video background moves slower (depth effect)
  const video = document.querySelector(".video-container video");
  if (video) {
    video.style.transform = `translateY(${scrollY * 0.3}px) scale(1.1)`;
  }

  // stars move slightly faster for layered depth
  const stars = document.querySelector(".stars");
  if (stars) {
    stars.style.transform = `translateY(${scrollY * 0.6}px)`;
  }

  // hero content subtle float on scroll
  const content = document.querySelector(".content");
  if (content) {
    content.style.transform = `translateY(${scrollY * 0.2}px)`;
  }
});

/* FOOTER */

document.getElementById("feedback-form").addEventListener("submit", function() {
  alert("Feedback sent successfully!");
});

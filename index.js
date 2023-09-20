let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// TIMER
const btnStartElement = document.querySelector('[data-action="start"]');
const btnStopElement = document.querySelector('[data-action="stop"]');
const btnResetElement = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 0;
let interval;


const start = () => {
  isRunning = true;
  interval = setInterval(incrementTimer, 1000)
}

const stop = () => {
  isRunning = false;
  clearInterval(interval);
}

const reset = () => {
  minutes.innerText = '00';
  seconds.innerText = '00';
}

const pad = (number) => {
  return (number < 10) ? '0' + number : number;
}

const incrementTimer = () => {
  timerTime++;
  
  const numberMinutes = Math.floor(timerTime / 60);
  const numberSeconds = timerTime % 60;
  
  minutes.innerText = pad(numberMinutes);
  seconds.innerText = pad(numberSeconds);
}

btnStartElement.addEventListener('click', startTimer = () => {
  start();
});

btnStopElement.addEventListener('click', stopTimer = () => {
  stop();
});

btnResetElement.addEventListener('click', stopTimer = () => {
  reset();
});

// Timer end

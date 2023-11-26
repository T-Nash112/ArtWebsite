// Generate a random color in hexadecimal format
function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

var slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slideshow-image");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[slideIndex - 1].classList.add("active");
}

// Automatic slideshow
setInterval(function() {
  changeSlide(1);
}, 2000); // Change slide every 5 seconds (adjust as needed)

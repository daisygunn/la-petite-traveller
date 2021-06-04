/**
 *  <!-- Part of responsive navbar code found on W3 schools -->
 */
function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/**
 * 
 */
function showMore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (moreText.style.display === "inline") {
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

var slideIndex = 1;
showSlides(slideIndex);

/**
 * Next/previous controls
 * 
 * @param {*} n 
 */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/**
 * Thumbnail image controls
 * 
 * @param {*} n 
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * 
 */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

const button = document.querySelector('.btn')
const form = document.querySelector('.form')

button.addEventListener('click', function () {
    form.classList.add('form--no')
});

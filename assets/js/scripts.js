/**
 *  Part of responsive navbar code found on W3 schools
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
 * Read more/read less button 
 */
function showMore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read_more");

    if (moreText.style.display === "inline") {
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}



/**
 *  Form button
 */
const button = document.querySelector('.btn')
const form = document.querySelector('.form')

button.addEventListener('click', function () {
    form.classList.add('form--no')
});

function signUp() {
    document.getElementById("form_btn").innerHTML = "Thank You!";
  }


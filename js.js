function myFunction(x) {
  x.classList.toggle("change");
} 

var sun = document.querySelector('.theme');

sun.addEventListener('click', () => {
document.body.classList.toggle('darkmode');
document.body.style.transition="all 1s";
if(document.body.classList.contains('darkmode')){
  sun.innerHTML = "<i class='bi bi-moon'></i>";
  document.querySelector('.about-me').style.background="rgb(69, 68, 68);"
}else{
  sun.innerHTML = "<i class='bi bi-sun'></i>";
  document.querySelector('.about-me').style.background="darkcyan";
}
});

// scroll btn
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


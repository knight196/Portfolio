function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
      document.querySelector('.open').style.display="none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
       document.querySelector('.open').style.display="flex";
  }

 var sun = document.querySelector('.fa-sun');

  var moon = document.querySelector('.moon');

  sun.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    document.body.style.transition="all 1s";
    moon.style.display="inline-flex";
    sun.style.display="none";
    document.querySelector('.aboutme').style.backgroundColor="rgb(69, 68, 68)";
    });
    
    moon.addEventListener('click', () => {
      document.body.classList.toggle('darkmode');
      document.body.style.transition="all 1s";
      sun.style.display="inline-flex";
      moon.style.display="none";
      document.querySelector('.aboutme').style.backgroundColor="darkcyan";
      });
      

  var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

//Get the button
var mybutton =
document.getElementById("myBtn");

//when the user scrolls down 20px from the top of the document,show the button

window.onscroll = function()
{scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  {
    mybutton.style.display = "block";
  }else{
    mybutton.style.display = "none";
  }
}

//when the user clicks on the button, scroll to the top of the document
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

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

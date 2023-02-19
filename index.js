
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector('a');
  const menu = dropdown.querySelector('.dropdown-menu');

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('open');
  });
});

  

  // Get the height of the document
var docHeight = document.body.clientHeight;

// Get the current height of the window
var windowHeight = window.innerHeight;

window.onscroll = function() {
  // Get the current scroll position
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  
  // Check if the user has scrolled to the bottom of the page
  if (scrollTop + windowHeight >= docHeight) {
    // Show the footer
    document.getElementById("footer").style.display = "block";
  } else {
    // Hide the footer
    document.getElementById("footer").style.display = "none";
  }
};


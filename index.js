function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

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

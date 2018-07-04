/* Scroll Feature */
flip = document.getElementsByClassName("flip")[0];
flip2 = document.getElementsByClassName("flip2")[0];
flip3 = document.getElementsByClassName("flip3")[0];
flip4 = document.getElementsByClassName("flip4")[0];
console.log(flip2.offsetTop)

console.dir(flip)
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
  // console.dir(flip)
  if (window.pageYOffset >= flip.offsetTop-200) {
    console.log(window.pageYOffset)
    flip.style.animation = "rotate 3s ease 1s backwards";
    flip2.style.animation = "rotate 3s ease 2s backwards";
    flip3.style.animation = "rotate 3s ease 3s backwards";
    flip4.style.animation = "rotate 3s ease 4s backwards";
    flip.style.display = "block";
    flip2.style.display = "block";
    flip3.style.display = "block";
    flip4.style.display = "block";
    
    console.log(flip2.offsetTop)
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Dropdown */

// Dropdown 1

/* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

// Dropdown 2

/* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown2");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

// Dropdown 3

/* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown3");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

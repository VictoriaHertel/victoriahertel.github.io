// LANDING PAGE JS
// NAV MENU: HIDE & SHOW THROUGH SCROLL

var navLeft = document.getElementById("nav-left");
var navRight = document.getElementById("nav-right");

var scrollPos = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;

window.addEventListener('scroll', function(){

  var newScrollPos = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;

  if (newScrollPos < scrollPos) {
    if (newScrollPos > 0) {
      fadeIn(navLeft);
      fadeIn(navRight);
    }
  }
  else {
    if (newScrollPos > 0) {
      fadeOut(navLeft);
      fadeOut(navRight);
    }
  }

  scrollPos = newScrollPos;

  console.log("Scroll position: " + scrollPos);
});

window.addEventListener('load', function() {
  navLeft.style.opacity = 1;
  navRight.style.opacity = 1;
});

function fadeOut(element) {
  element.style.opacity = 0;
}

function fadeIn(element) {
  element.style.opacity = 1;
}

// NAV MENU MOBILE: HAMBURGER

var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  document.querySelector('.header-right').classList.toggle('show');
});





// VIDEO SECTION: ADJUST DIMENSIONS

function adjustVideoDimensions() {
  const iframe = document.getElementById('video-iframe');
  const aspectRatio = 16 / 9;
  const windowAspectRatio = window.innerWidth / window.innerHeight;

  if (windowAspectRatio > aspectRatio) {
    iframe.style.width = '100%';
    iframe.style.height = (window.innerWidth / aspectRatio) + 'px';
  } else {
    iframe.style.width = (window.innerHeight * aspectRatio) + 'px';
    iframe.style.height = '100%';
  }
}

window.addEventListener('resize', adjustVideoDimensions);
window.addEventListener('load', adjustVideoDimensions);




// PORTFOLIO PAGE JS
// TIMES SECTION: SCROLL TO TIMES

const timesLink = document.querySelector('[href="#times-section-link"]');

timesLink.addEventListener('click', (event) => {
  event.preventDefault();
  const timesSection = document.querySelector('#times-section');
  timesSection.scrollIntoView({ behavior: 'smooth' });
});

// SCROLL TO TOP ON PAGE REFRESH

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}











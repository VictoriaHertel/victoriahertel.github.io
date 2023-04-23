// LANDING PAGE
// NAV MENU: HIDE & SHOW THROUGH SCROLL

const navLeft = document.getElementById("nav-left");
const navRight = document.getElementById("nav-right");

const navLeftMobile = document.getElementById("nav-left-mobile");
const navRightMobile = document.getElementById("nav-right-mobile");

const navHamburger = document.getElementById("hamburger");

let scrollPos = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;

window.addEventListener('scroll', function(){

  const newScrollPos = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;

  if (newScrollPos < scrollPos) {
      fadeIn(navLeft);
      fadeIn(navRight);
      fadeIn(navLeftMobile); 
      fadeIn(navRightMobile);     
      fadeIn(navHamburger);
  }
  else {
    if (newScrollPos > 5) {
      fadeOut(navLeft);
      fadeOut(navRight);
      fadeOut(navLeftMobile);
      fadeOut(navRightMobile);      
      fadeOut(navHamburger);
    }
  }

  scrollPos = newScrollPos;

  console.log("Scroll position: " + scrollPos);
});

window.addEventListener('load', function() {
  navLeft.style.opacity = 1;
  navRight.style.opacity = 1;
  navLeftMobile.style.opacity = 1; 
  navRightMobile.style.opacity = 1;    
  navHamburger.style.opacity = 1;
});

function fadeOut(element) {
  element.style.opacity = 0;
}

function fadeIn(element) {
  element.style.opacity = 1;
}






// NAV MENU MOBILE: HAMBURGER

navHamburger.addEventListener('click', function() {
  navHamburger.classList.toggle('active');
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





// PORTFOLIO PAGE
// TIMES SECTION: SCROLL TO TIMES

const timesLink = document.querySelector('[href="#portfolio-times-section"]');

timesLink.addEventListener('click', (event) => {
  event.preventDefault();
  const timesSection = document.querySelector('#portfolio-times-section');
  const offset = 50; // Adjust this value to control the amount of white space

  const targetPosition = timesSection.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
});




// SCROLL TO TOP ON PAGE REFRESH

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}











// LANDING PAGE BEGINNING

// NAV MENU: HIDE & SHOW THROUGH SCROLL

const navLeft = document.getElementById("nav-left");
const navRight = document.getElementById("nav-right");

const navLeftMobile = document.getElementById("nav-left-mobile");
const navRightMobile = document.getElementById("nav-right-mobile");

const navHamburger = document.getElementById("hamburger");
const hamburgerLinks = document.querySelectorAll('.hamburger-link');

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
  document.getElementById('hamburger-dropdown').classList.toggle('show');
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

// LANDING PAGE END





// PORTFOLIO PAGE BEGINNING

// TIMES SECTION: SCROLL TO TIMES

const timesLink = document.querySelector('[href="#portfolio-times-section"]');

timesLink.addEventListener('click', (event) => {
  event.preventDefault();
  const timesSection = document.querySelector('#portfolio-times-section');
  const offset = 50;

  const targetPosition = timesSection.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
});

// STEPS SECTION: SCROLL TO STEPS

const stepsLink = document.querySelector('[href="#portfolio-steps-section"]');

stepsLink.addEventListener('click', (event) => {
  event.preventDefault();
  const stepsSection = document.querySelector('#portfolio-steps-section');
  const offset = 50;

  const targetPosition = stepsSection.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
});

// SCENT SECTION: SCROLL TO SCENT

const scentLink = document.querySelector('[href="#portfolio-scent-section"]');

scentLink.addEventListener('click', (event) => {
  event.preventDefault();
  const scentSection = document.querySelector('#portfolio-scent-section');
  const offset = 50;

  const targetPosition = scentSection.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
});

// DROP SECTION: SCROLL TO DROP

const dropLink = document.querySelector('[href="#portfolio-drop-section"]');

dropLink.addEventListener('click', (event) => {
  event.preventDefault();
  const dropSection = document.querySelector('#portfolio-drop-section');
  const offset = 50;

  const targetPosition = dropSection.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
});

// CORE SECTION: SCROLL TO CORE

const coreLink = document.querySelector('[href="#portfolio-core-section"]');

coreLink.addEventListener('click', (event) => {
  event.preventDefault();
  const coreSection = document.querySelector('#portfolio-core-section');
  const offset = 50;

  const targetPosition = coreSection.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
});


// PORTFOLIO PAGE END






// SCROLL TO TOP ON PAGE REFRESH

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}











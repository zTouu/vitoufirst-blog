'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}
function footer(){
  return `
  <footer>
  <div class="container">
    <div class="wrapper">
      <a href="index.html" class="footer-logo">
        <img
          src="./assets/images/logo-light.svg"
          alt="DevBlog's Logo"
          width="150"
          height="40"
          class="logo-light"
        />
        <img
          src="./assets/images/logo-dark.svg"
          alt="DevBlog's Logo"
          width="150"
          height="40"
          class="logo-dark"
        />
      </a>

      <p class="footer-text">
        Learn about Web accessibility, Web performance, and Database
        management.
      </p>
    </div>

    <div class="wrapper">
      <p class="footer-title">Quick Links</p>

      <ul>
        <li>
          <a href="#" class="footer-link">Advertise with us</a>
        </li>

        <li>
          <a href="#" class="footer-link">About Us</a>
        </li>

        <li>
          <a href="#" class="footer-link">Contact Us</a>
        </li>
      </ul>
    </div>

    <div class="wrapper">
      <p class="footer-title">Legal Stuff</p>

      <ul>
        <li>
          <a href="#" class="footer-link">Privacy Notice</a>
        </li>

        <li>
          <a href="#" class="footer-link">Cookie Policy</a>
        </li>

        <li>
          <a href="#" class="footer-link">Terms Of Use</a>
        </li>
      </ul>
    </div>
  </div>

  <p class="copyright">
    &copy; Copyright 2023 <a href="index.html">ninvitou</a>
  </p>
</footer>
  `
}

document.body.insertAdjacentHTML('beforeend',footer());

//function div(){

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
/* Nav */
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.navmenu');
  const navOverlay = document.querySelector('.nav-overlay');

  function toggleMenu() {
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
  }

  burgerMenu.addEventListener('click', toggleMenu);

  document.querySelectorAll('.navlink').forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      navOverlay.classList.remove('active');
    });
  });

  navOverlay.addEventListener('click', function () {
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
  });
});
/* Cookie */
document.addEventListener('DOMContentLoaded', function () {
  // Function to create a cookie
  function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Function to get a cookie
  function getCookie(name) {
      const cname = name + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(cname) === 0) {
              return c.substring(cname.length, c.length);
          }
      }
      return "";
  }

  var cookieBanner = document.getElementById('cookie-banner');
  var acceptCookiesButton = document.getElementById('accept-cookies');
  var declineButton = document.getElementById('decline');

  // Check if the user has already accepted cookies
  if (getCookie("cookies_accepted") !== "true") {
      if (cookieBanner) cookieBanner.style.display = 'block';
  }

  // Handle the accept button click
  if (acceptCookiesButton) {
      acceptCookiesButton.addEventListener('click', function () {
          setCookie("cookies_accepted", "true", 365);
          if (cookieBanner) cookieBanner.style.display = 'none';
      });
  }

  // Handle the decline button click
  if (declineButton) {
      declineButton.addEventListener('click', function () {
          if (cookieBanner) cookieBanner.style.display = 'none';
      });
  }
});
// Contact Form
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  if(!form) return;
  var inputs = form.querySelectorAll('input');

  inputs.forEach(function(input) {
      input.addEventListener('focus', function() {
          if (input.value === input.defaultValue) {
              input.value = '';
              input.style.color = '#000'; // Change the text color on focus
          }
      });

      input.addEventListener('blur', function() {
          if (input.value === '') {
              input.value = input.defaultValue;
              input.style.color = '#888'; // Revert to default color
          }
      });
  });

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Simple validation (checking if required fields are filled)
      var isValid = true;
      inputs.forEach(function(input) {
          if (input.required && input.value === input.defaultValue) {
              isValid = false;
              input.style.borderColor = 'red'; // Indicate the error
          }
      });

      if (isValid) {
          // Redirect to the thank you page
          window.location.href = 'thankyou.html';
      }
  });
});



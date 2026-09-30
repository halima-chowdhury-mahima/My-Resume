// ===============================
// ELEMENTS
// ===============================

const header = document.querySelector(".header");

const menuBtn = document.getElementById("menuBtn");

const navLinksContainer =
  document.getElementById("navLinks");

const navLinks =
  document.querySelectorAll(".nav-link");

const themeBtn =
  document.getElementById("themeBtn");


// ===============================
// MOBILE MENU
// ===============================

menuBtn.addEventListener("click", function () {

  navLinksContainer.classList.toggle("open");

  const icon =
    menuBtn.querySelector("i");

  if (
    navLinksContainer.classList.contains("open")
  ) {

    icon.classList.remove("fa-bars");

    icon.classList.add("fa-xmark");

  } else {

    icon.classList.remove("fa-xmark");

    icon.classList.add("fa-bars");

  }

});


// Close menu after clicking link

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    navLinksContainer.classList.remove("open");

    const icon =
      menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");

    icon.classList.add("fa-bars");

  });

});


// ===============================
// HEADER SCROLL EFFECT
// ===============================

window.addEventListener("scroll", function () {

  if (window.scrollY > 30) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


// ===============================
// DARK / LIGHT MODE
// ===============================

function updateThemeIcon() {

  const icon =
    themeBtn.querySelector("i");

  if (
    document.body.classList.contains("light")
  ) {

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

  } else {

    icon.classList.remove("fa-sun");

    icon.classList.add("fa-moon");

  }

}


// Load saved theme

const savedTheme =
  localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

  document.body.classList.add("light");

}

updateThemeIcon();


// Change theme

themeBtn.addEventListener("click", function () {

  document.body.classList.toggle("light");

  if (
    document.body.classList.contains("light")
  ) {

    localStorage.setItem(
      "portfolio-theme",
      "light"
    );

  } else {

    localStorage.setItem(
      "portfolio-theme",
      "dark"
    );

  }

  updateThemeIcon();

});


// ===============================
// TYPING EFFECT
// ===============================

const typingText =
  document.getElementById("typingText");

const words = [

  "modern websites.",

  "responsive interfaces.",

  "meaningful experiences.",

  "ideas into products."

];

let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

  const currentWord =
    words[wordIndex];

  if (!deleting) {

    typingText.textContent =
      currentWord.substring(
        0,
        characterIndex + 1
      );

    characterIndex++;

    if (
      characterIndex ===
      currentWord.length
    ) {

      deleting = true;

      setTimeout(
        typeEffect,
        1300
      );

      return;

    }

  } else {

    typingText.textContent =
      currentWord.substring(
        0,
        characterIndex - 1
      );

    characterIndex--;

    if (characterIndex === 0) {

      deleting = false;

      wordIndex++;

      if (
        wordIndex ===
        words.length
      ) {

        wordIndex = 0;

      }

    }

  }

  let speed;

  if (deleting) {

    speed = 45;

  } else {

    speed = 80;

  }

  setTimeout(
    typeEffect,
    speed
  );

}

typeEffect();


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(

    function (entries) {

      entries.forEach(
        function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "show"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(
  function (element) {

    revealObserver.observe(element);

  }
);


// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const sections =
  document.querySelectorAll(
    "section[id]"
  );


function updateActiveLink() {

  let currentSection = "";

  sections.forEach(
    function (section) {

      const sectionTop =
        section.offsetTop;

      const sectionHeight =
        section.offsetHeight;

      if (
        window.scrollY >=
        sectionTop - 180
      ) {

        currentSection =
          section.getAttribute("id");

      }

    }
  );


  navLinks.forEach(
    function (link) {

      link.classList.remove("active");

      if (
        link.getAttribute("href") ===
        "#" + currentSection
      ) {

        link.classList.add("active");

      }

    }
  );

}


window.addEventListener(
  "scroll",
  updateActiveLink
);


// ===============================
// INITIAL HEADER STATE
// ===============================

if (window.scrollY > 30) {

  header.classList.add("scrolled");

}
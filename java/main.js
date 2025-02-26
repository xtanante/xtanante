// main.js

// Background Change on Mouseover
function changeBackground(imageUrl) {
    var container = document.getElementById('container-grid');
    container.style.opacity = '0';
  
    setTimeout(function() {
      container.style.backgroundImage = "url('" + imageUrl + "')";
      container.style.opacity = '1';
    }, 100);
  }
  
  var box1 = document.querySelector('.box1');
  if (box1) { // Check if the element exists
    box1.addEventListener('mouseover', function() {
      changeBackground('/img/img-1.jpg');
    });
  }
  
  var box2 = document.querySelector('.box2');
  if (box2) {
    box2.addEventListener('mouseover', function() {
      changeBackground('/img/img-2.jpg');
    });
  }
  
  var box3 = document.querySelector('.box3');
  if (box3) {
    box3.addEventListener('mouseover', function() {
      changeBackground('/img/img-3.jpg');
    });
  }
  
  var box4 = document.querySelector('.box4');
  if (box4) {
    box4.addEventListener('mouseover', function() {
      changeBackground('/img/img-4.jpg');
    });
  }
  
  // Menu Toggle
  var menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('open');
      document.querySelector('nav').classList.toggle('open');
    });
  }
  
  // Carousel
  const carouselTrack = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  let currentIndex = 0;
  let intervalId;
  
  function updateCarousel() {
    if (carouselTrack) {
      carouselTrack.style.transform = `translateX(-${currentIndex * 100 / slides.length}%)`;
    }
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }
  
  function startCarousel() {
    intervalId = setInterval(nextSlide, 3000);
  }
  
  function stopCarousel() {
    clearInterval(intervalId);
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      stopCarousel();
      nextSlide();
      startCarousel();
    });
  }
  
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      stopCarousel();
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
      startCarousel();
    });
  }
  
  if (carouselTrack) {
    startCarousel();
  }
  
  // Header Color Change on Scroll
  const header = document.querySelector('.header');
  const acercaSection = document.getElementById('acerca');
  const acerca2Section = document.getElementById('acerca2');
  
  window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
  
    if (acercaSection && header) {
      if (scrollPosition >= acercaSection.offsetTop) {
        header.classList.add('gris');
      } else {
        header.classList.remove('gris');
      }
    }
  });
  
  // Parallax Effect
  function handleScroll() {
    const gallerySection = document.getElementById("galeria");
    if (gallerySection) {
      const images = gallerySection.querySelectorAll("img");
      const scrollPosition = window.scrollY + window.innerHeight - gallerySection.offsetTop;
  
      images.forEach((image, index) => {
        const offset = index * 100;
        const opacity = Math.max(0, Math.min(1, (scrollPosition - offset) / 100));
        image.style.opacity = opacity;
      });
    }
  }
  
  window.addEventListener("scroll", handleScroll);
  
  // Intersection Observer for Animation
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "enter-from-outside 1.5s ease forwards";
        entry.target.style.animationDelay = "0.2s";
      } else {
        entry.target.style.animation = "none";
      }
    });
  }
  
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
  });
  
  const items = document.querySelectorAll('.angry-grid div');
  items.forEach((item) => {
    observer.observe(item);
  });

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.1
    });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });

  // print.html

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("printForm");
    const confirmation = document.getElementById("confirmation");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Simulasi kirim data, bisa diubah ke fetch/axios
      setTimeout(() => {
        form.reset();
        confirmation.classList.remove("hidden");
      }, 500);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".menu-item");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.1
    });
  
    items.forEach(item => observer.observe(item));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".alu-card");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });
  
    cards.forEach(card => observer.observe(card));
  });





// about us
document.addEventListener("DOMContentLoaded", function() {
  console.log("Print & Eat - About Us Page Loaded");
  // You can add interactive features here, if needed.
});







const track = document.getElementById("carousel-track");
const dotsContainer = document.getElementById("dots");
const slides = document.querySelectorAll(".slide");
const visibleCount = 4;
let index = 0;
const maxIndex = slides.length - visibleCount;

// Buat dots
for (let i = 0; i <= maxIndex; i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
}

const updateCarousel = () => {
  const slideWidth = slides[0].offsetWidth + 20; // width + gap
  track.style.transform = `translateX(-${index * slideWidth}px)`;

  document.querySelectorAll(".dots span").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
};

const moveSlide = (dir) => {
  index += dir;
  if (index < 0) index = maxIndex;
  if (index > maxIndex) index = 0;
  updateCarousel();
};

// Auto slide
let autoSlide = setInterval(() => moveSlide(1), 2000); // geser tiap 2 detik

const resetAutoSlide = () => {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => moveSlide(1), 4000);
};

window.addEventListener("load", updateCarousel);



  // Scroll animation
  const boxes = document.querySelectorAll('.feature-box');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  boxes.forEach(box => {
    observer.observe(box);
  });


  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
  }


  
 function toggleMenu() {
      const navLinks = document.getElementById('nav-links');
      const hamburger = document.querySelector('.hamburger');
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active');
    }

    function toggleDropdown(event) {
      event.stopPropagation();
      const dropdown = event.currentTarget;
      dropdown.classList.toggle('open');
    }

    // Close dropdown if clicked outside
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
    });
  






  
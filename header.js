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
  

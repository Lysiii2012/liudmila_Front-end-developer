var swiper = new Swiper('.blog-slider', {
//     autoplay: {
//     delay: 8000,
//   }, 
     spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
    document.addEventListener("DOMContentLoaded", function () {
      const drop = document.getElementById("drop");
      const nav = document.querySelector(".nav-links");
      const body = document.body;
  
      function toggleMenu() {
          nav.classList.toggle("open");
          drop.querySelectorAll("span").forEach(i => {
              i.classList.toggle("open");
          });
          body.classList.toggle("hidden");
      }
  
      drop.addEventListener("click", toggleMenu);
  
      const navLinks = document.querySelectorAll(".nav-links a");
  
      function scrollToTarget(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const targetRect = targetElement.getBoundingClientRect();
            window.scrollTo({
                top: window.scrollY + targetRect.top - 60,
                behavior: 'smooth'
            });
        }
    }
    
  
      navLinks.forEach(link => {
          link.addEventListener("click", function (event) {
              event.preventDefault();
              const targetId = link.getAttribute("href").substring(1);
              scrollToTarget(targetId);
              toggleMenu();
          });
      });
  
      const observerOptions = {
          rootMargin: '0px',
          threshold: 0.5
      };
  
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const targetId = entry.target.getAttribute("id");
                  navLinks.forEach(link => {
                      link.classList.remove("active");
                      if (link.getAttribute("href").substring(1) === targetId) {
                          link.classList.add("active");
                      }
                  });
              }
          });
      }, observerOptions);
  
      navLinks.forEach(link => {
          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              observer.observe(targetElement);
          }
      });
  });
  
  const checkbox = document.getElementById('base-ui');

  checkbox.addEventListener('change', function() {
    const isChecked = this.checked;
    if (isChecked) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  });
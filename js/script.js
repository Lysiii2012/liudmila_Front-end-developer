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

    document.addEventListener("DOMContentLoaded", function() {
      let navLinks = document.querySelectorAll(".nav-links a");
    
      navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
          navLinks.forEach(function(link) {
            link.classList.remove("active");
          });
    
          this.classList.add("active");
        });
      });
    });


    document.addEventListener("scroll", function() {
      var scroll = window.scrollY || document.documentElement.scrollTop;
    
      if (scroll > 100) {
        document.getElementById("drop").classList.add("active");
      } else if (scroll < 80) {
        document.getElementById("drop").classList.remove("active");
      }
    });
    
    function toggleMenu() {
      var drop = document.getElementById("drop");
      var nav = document.querySelector(".burger");
      var body = document.body;
    
      drop.addEventListener("click", function() {
        nav.classList.toggle("open");
        drop.querySelector("span").classList.toggle("open");
        body.classList.toggle("hidden");
        window.scrollTo(0, 0); // cheating
      });
    
      var navLinks = document.querySelector(".nav-links  li");
      navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
          nav.classList.toggle("open");
          drop.querySelector("span").classList.toggle("open");
          body.classList.toggle("hidden");
          window.scrollTo(0, 0); // cheating
        });
      });
    }
    
    // Call the toggleMenu function when the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", toggleMenu);
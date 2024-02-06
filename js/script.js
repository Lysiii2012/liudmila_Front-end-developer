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
  

    

    // window.addEventListener("scroll", function () {
    //   var scroll = window.scrollY || document.documentElement.scrollTop;
    //   var drop = document.getElementById("drop");
    
    //   if (scroll > 100) {
    //     drop.classList.add("active");
    //   } else if (scroll < 80) {
    //     drop.classList.remove("active");
    //   }
    // });
    
      // var drop = document.getElementById("drop");
      // let nav = document.querySelector(".nav-links");
      // var body = document.body;

     
      

    // document.addEventListener("scroll", function() {
    //   var scroll = window.scrollY || document.documentElement.scrollTop;
    
    //   if (scroll > 100) {
    //     document.getElementById("drop").classList.add("active");
    //   } else if (scroll < 80) {
    //     document.getElementById("drop").classList.remove("active");
    //   }
    // });
    
    // function toggleMenu() {
    //   var drop = document.getElementById("drop");
    //   var nav = document.querySelectorAll(".burger span");
    //   var body = document.body;
    
    //   drop.addEventListener("click", function() {
    //     nav.forEach(i => {
    //       i.classList.toggle("open");
    //     })
    //     drop.querySelector("span").classList.toggle("open");
    //     body.classList.toggle("hidden");
    //     window.scrollTo(0, 0); // cheating
    //   });
    
    //   var navLinks = document.querySelector(".nav-links ~ ul li");
    //   navLinks.forEach(function(link) {
    //     link.addEventListener("click", function() {
    //       nav.forEach(i => {
    //         i.classList.toggle("open");
    //       })
    //       drop.querySelector("span").classList.toggle("open");
    //       body.classList.toggle("hidden");
    //       window.scrollTo(0, 0); // cheating
    //     });
    //   });
    // }
    
    // // Call the toggleMenu function when the DOM is fully loaded
    // document.addEventListener("DOMContentLoaded", toggleMenu);
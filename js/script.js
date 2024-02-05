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
      // Обработчик для выделения активной ссылки
    
      // Обработчик для меню и его закрытия
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
    
      const navLinksMenu = document.querySelectorAll(".nav-links ~ ul li");
      navLinksMenu.forEach(function (link) {
        link.addEventListener("click", function () {
          toggleMenu();
          // Добавьте другие действия, если необходимо
        });
      });
    
      const linkMob = document.querySelectorAll('.nav-links.open a');
    
      linkMob.forEach(link => {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
             toggleMenu();
        });
      });
      let navLinks = document.querySelectorAll(".nav-links a");
    
      navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
          navLinks.forEach(function (link) {
            link.classList.remove("active");
          });
          toggleMenu();
          this.classList.add("active");
        });
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
    // ================  counter =============
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter-number');

    const animateCount = (counter) => {
      const target = +counter.getAttribute('data-target');
      const speed = 200; 
      const increment = target / speed;

      const updateCounter = () => {
        const currentValue = +counter.innerText;

        if (currentValue < target) {
          counter.innerText = Math.ceil(currentValue + increment);
          setTimeout(updateCounter, 20); // Adjust the timeout for smoother/faster animation
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    counters.forEach(counter => {
      observer.observe(counter);
    });
  });
    // ================ ******* =============


    // ================ progress effect =============
    let section = document.querySelector('.about'); // update section selector if needed
    let bars = document.querySelectorAll('.skill-bar .inner-bar');

    window.onscroll = function () {
      if (window.scrollY >= section.offsetTop - 100 ) {
        bars.forEach((bar) => {
          bar.style.width = bar.dataset.width + '%';
        });
      }
    };
    // ================ *********** =============


    // ================ stiky nav =============
    window.addEventListener("scroll", function() {
      var about = document.querySelector("about" )  
      var nav = document.querySelector("header nav"); // More specific selector
      
      if (window.scrollY > 530 ) {
        nav.classList.add('sticky');

      } else {
        nav.classList.remove('sticky');
      }
    });
    // ================ ******* =============


    // ================ preload =============
    window.addEventListener("load", function() {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("content").style.display = "block";
      });
    // ================ ******* =============

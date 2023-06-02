

  const menuToggle = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

function filterProjects(category) {
    const projects = document.querySelectorAll('.project-box');
  
    projects.forEach((project) => {
      if (category === 'all' || project.dataset.category === category) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  }
  
  document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => filterProjects(button.dataset.filter));
  });

  
  
  document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".card-box");
  
    // Set initial opacity and translateY for all boxes
    boxes.forEach((box) => {
      box.style.opacity = 0;
      box.style.transform = "translateY(50px)";
    });
  
    // Function to animate a box
    function animateBox(box) {
      anime({
        targets: box,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutExpo",
      });
    }
  
    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateBox(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
  
    // Observe each box
    boxes.forEach((box) => {
      observer.observe(box);
    });
  });
  
  
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  const menuToggle = document.querySelector('.menu-toggle');
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
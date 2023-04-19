// Get all the navbar links
const navLinks = document.querySelectorAll('.nav-links li a');

// Loop through the links and add a hover event listener
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('hovered');
  });

  link.addEventListener('mouseout', () => {
    link.classList.remove('hovered');
  });
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // script.js
  
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    const detailsContainer = document.querySelector('.details-containerde');
    
    if (isElementInViewport(detailsContainer)) {
      detailsContainer.classList.add('show');
      window.removeEventListener('scroll', handleScroll);
    }
  }
  
  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);
  
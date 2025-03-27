const menu = document.querySelector('#menu');
const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', function() {
  sidebar.classList.toggle('show-sidebar');
  
  // Optional: Toggle aria-expanded for accessibility
  const isExpanded = sidebar.classList.contains('show-sidebar');
  menu.setAttribute('aria-expanded', isExpanded);
});

// Close sidebar when clicking outside (optional)
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && e.target !== menu) {
    sidebar.classList.remove('show-sidebar');
    menu.setAttribute('aria-expanded', 'false');
  }
});
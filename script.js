// JavaScript code for Mood Ring color mode selection and navigation

// Function to change color mode and navigate to home.html
function changeColorModeAndNavigate(color) {
  // Set the selected color mode to localStorage
  localStorage.setItem('colorMode', color);
  
  // Redirect to home.html
  window.location.href = 'home.html';
}

// Function to apply color mode to header-menu on home.html
function applyColorModeToHeader() {
  const headerMenu = document.querySelector('.header-menu');
  const storedColorMode = localStorage.getItem('colorMode');
  
  if (storedColorMode) {
      headerMenu.classList.add(storedColorMode);
  }
}

// Check if the current page is home.html and apply color mode to header-menu
if (window.location.pathname.includes('home.html')) {
  applyColorModeToHeader();
}

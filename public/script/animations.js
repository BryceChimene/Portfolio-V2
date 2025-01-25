window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('homepage-hero');
  
    // Simulate a loading delay
    setTimeout(() => {
      // Shrink the loading screen to 25% height
      loadingScreen.classList.add('shrink');
  
      // Wait for the transition to complete before showing the main content
      loadingScreen.addEventListener('transitionend', () => {
        loadingScreen.style.position = 'relative';
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = '1'; // Fade in the main content
      });
    }, 3000); // Adjust delay (in milliseconds) as needed
  });
  
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('homepage-hero');
  const slideH1Left = document.getElementById('fill-space');

  // Simulate a loading delay
  setTimeout(() => {
    // Shrink the loading screen to 200px height
    loadingScreen.classList.add('shrink');

    // Wait for the transition to complete before showing the main content
    loadingScreen.addEventListener('transitionend', () => {
      loadingScreen.style.position = 'absolute';
      slideH1Left.style.flex = 'auto';
      mainContent.classList.remove('hidden');
      mainContent.style.opacity = '1'; // Fade in the main content
    });
  }, 3000); // Adjust delay (in milliseconds) as needed
});

// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

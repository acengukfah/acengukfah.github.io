document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Scroll Progress Indicator
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      scrollIndicator.style.transform = `scaleX(${scrolled / 100})`;
    });
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
      }
    });
  });

  // Typing Animation
  function startTypingAnimation() {
    const titleText = "Agung Fitrah Ramadhana Ukfah";
    const titleElement = document.querySelector('.typing-animation');
    let index = 0;

    function typeTitle() {
      if (titleElement && index < titleText.length) {
        titleElement.textContent = titleText.slice(0, index + 1);
        index++;
        setTimeout(typeTitle, 100);
      }
    }

    setTimeout(typeTitle, 1000);
  }

  // Profile Picture Toggle
  function initializeProfilePicture() {
    let isOnline = localStorage.getItem('profileOnline') !== 'false';
    let hoverTimeout = null;
    const profileImage = document.getElementById('profileImage');
    const statusIndicator = document.getElementById('statusIndicator');
    const profileLoading = document.getElementById('profileLoading');

    const offlineImageUrl = 'images/profile-offline.png';
    const onlineImageUrl = 'images/profile-online.jpeg';

    function setProfileState(online) {
      isOnline = online;
      localStorage.setItem('profileOnline', online);
      if (isOnline) {
        statusIndicator.classList.remove('bg-gray-400');
        statusIndicator.classList.add('bg-green-500');
        profileImage.src = onlineImageUrl;
      } else {
        statusIndicator.classList.remove('bg-green-500');
        statusIndicator.classList.add('bg-gray-400');
        profileImage.src = offlineImageUrl;
      }
    }

    if (profileImage && statusIndicator && profileLoading) {
      setProfileState(isOnline);

      profileImage.addEventListener('mouseenter', () => {
        profileLoading.classList.add('active');
        hoverTimeout = setTimeout(() => {
          setProfileState(!isOnline);
          profileLoading.classList.remove('active');
        }, 1500);
      });

      profileImage.addEventListener('mouseleave', () => {
        profileLoading.classList.remove('active');
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
          hoverTimeout = null;
        }
      });

      profileImage.addEventListener('click', () => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
          hoverTimeout = null;
        }
        profileImage.classList.add('clicking');
        profileLoading.classList.add('active');
        setTimeout(() => {
          setProfileState(!isOnline);
          profileLoading.classList.remove('active');
          profileImage.classList.remove('clicking');
        }, 1500);
      });
    }
  }

  // Notification System
  function showNotification(message, icon = 'fas fa-check-circle') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<i class="${icon}"></i>${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => document.body.removeChild(notification), 400);
    }, 3000);
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(this);

      fetch('https://formspree.io/f/mdkgqaeb', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          showNotification('Message sent successfully! I\'ll get back to you soon.', 'fas fa-paper-plane');
          this.reset();
        } else {
          response.json().then(data => {
            showNotification(data.error || 'Oops! There was a problem submitting your form.', 'fas fa-exclamation-triangle');
          });
        }
      })
      .catch(() => {
        showNotification('Oops! There was a problem submitting your form.', 'fas fa-exclamation-triangle');
      });
    });
  }

  // CV Download Function
  window.downloadCV = function() {
    const link = document.createElement('a');
    link.href = 'files/Agung-Fitrah-Ramadhana-Ukfah.pdf';
    link.download = 'Agung_Ukfah_CV.pdf';
    link.click();
    
    showNotification('CV download will start shortly!', 'fas fa-download');
  };

  // Scroll to Projects and Filter Function
  window.scrollToProjectsAndFilter = function(category) {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Find and click the corresponding filter button
      const filterButton = document.querySelector(`.filter-button[data-category="${category}"]`);
      if (filterButton) {
        filterButton.click();
      }
    }
  };

  // Initialize all UI components
  startTypingAnimation();
  initializeProfilePicture();

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
}); 
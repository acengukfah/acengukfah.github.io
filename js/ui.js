// Smooth scroll function for the contact section
window.scrollToContact = function() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;

  function closeMobileMenu() {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      if (menuIcon) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
      }
    }
  }

  function toggleMobileMenu() {
    if (mobileMenu) {
      const isHidden = mobileMenu.classList.toggle('hidden');
      if (menuIcon) {
        if (isHidden) {
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        } else {
          menuIcon.classList.remove('fa-bars');
          menuIcon.classList.add('fa-times');
        }
      }
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
      closeMobileMenu();
    }
  });

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
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        closeMobileMenu();
      }
    });
  });

  // Typing Animation with Multi-Title Loop
  function startTypingAnimation() {
    const titles = [
      "Full-Stack Developer & Software Engineer",
      "AI / ML & Computer Vision Enthusiast",
      "Python, Laravel & Cloud Backend Specialist"
    ];
    const titleElement = document.querySelector('.typing-animation');
    if (!titleElement) return;

    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentTitle = titles[titleIndex];

      if (isDeleting) {
        titleElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
      } else {
        titleElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 25 : 50;

      if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2200; // Pause when title is fully typed
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 350; // Pause before typing next title
      }

      setTimeout(typeLoop, typeSpeed);
    }

    setTimeout(typeLoop, 400);
  }

  // Profile Picture Toggle
  function initializeProfilePicture() {
    let isOnline = localStorage.getItem('profileOnline') !== 'false';
    let hoverTimeout = null;
    const profileImage = document.getElementById('profileImage');
    const statusIndicator = document.getElementById('statusIndicator');
    const statusBadge = document.getElementById('statusBadge');
    const profileLoading = document.getElementById('profileLoading');

    const offlineImageUrl = 'images/profile-offline.png';
    const onlineImageUrl = 'images/profile-online.jpeg';

    function setProfileState(online) {
      isOnline = online;
      localStorage.setItem('profileOnline', online);
      const statusText = statusBadge ? statusBadge.querySelector('span:last-child') : null;
      
      if (isOnline) {
        if (statusIndicator) {
          statusIndicator.classList.remove('bg-gray-400');
          statusIndicator.classList.add('bg-black');
        }
        if (statusBadge) {
          statusBadge.classList.remove('bg-gray-300');
          statusBadge.classList.add('bg-neo-lime');
        }
        if (statusText) statusText.textContent = 'AVAILABLE FOR WORK';
        profileImage.src = onlineImageUrl;
      } else {
        if (statusIndicator) {
          statusIndicator.classList.remove('bg-black');
          statusIndicator.classList.add('bg-gray-400');
        }
        if (statusBadge) {
          statusBadge.classList.remove('bg-neo-lime');
          statusBadge.classList.add('bg-gray-300');
        }
        if (statusText) statusText.textContent = 'OFFLINE';
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
        }, 1200);
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
        }, 800);
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

  // Contact Form Submission (Direct to Gmail via Google Apps Script)
  const contactForm = document.getElementById('contactForm');
  const GMAIL_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw8rBvPeV3t6NbbgqMk7toYP616wZjuzDh1rKmxKvp1gkUnikCihxaP4dEUI7ytFnlK/exec';

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '<i class="fas fa-paper-plane mr-2"></i> SEND MESSAGE';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> SENDING...';
      }

      const payload = {
        name: this.name ? this.name.value.trim() : '',
        email: this.email ? this.email.value.trim() : '',
        message: this.message ? this.message.value.trim() : ''
      };

      fetch(GMAIL_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      })
      .then(() => {
        showNotification('Message sent directly to Gmail! I\'ll reply soon.', 'fas fa-paper-plane');
        this.reset();
      })
      .catch((err) => {
        console.error('Submission error:', err);
        showNotification('Oops! There was a problem sending your message.', 'fas fa-exclamation-triangle');
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
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
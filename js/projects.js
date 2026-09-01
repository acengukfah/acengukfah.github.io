// Project Data
const projectsData = [
  {
    title: "Forever-More Digital Invitations",
    image: "images/forever-more.webp",
    categories: ["fullstack"],
    techStack: ["JavaScript", "Supabase", "Swiper.js", "Cloudinary", "Vercel"],
    github: null,
    liveDemo: "https://eugenia-silvester.vercel.app/",
    secondaryLink: {
      url: "https://forevermore.vercel.app/",
      label: "Platform",
      icon: "fas fa-heart"
    },
    description: "Interactive digital wedding invitation platform with real-time RSVP and guestbook."
  },
  // {
  //   title: "iDeviceStore Jogja",
  //   image: "images/idevicestore-jogja.jpg",
  //   categories: ["fullstack"],
  //   techStack: ["Django", "React", "MySQL", "Tailwind"],
  //   github: "https://github.com/acengukfah/GebutDev-idevicestore",
  //   liveDemo: "https://idevicestore-jogja.com",
  //   description: "Web app for Apple devices with inventory management and payment integration."
  // },
  {
    title: "ICITDA Online Conference",
    image: "images/icitda.png",
    categories: ["backend"],
    techStack: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/acengukfah/icitda",
    liveDemo: "https://icitda.org/",
    description: "An online platform for scheduling and hosting ICITDA conferences."
  },
  {
    title: "Daily Logbook BPN Kabupaten Klaten",
    image: "images/BPN-Klaten.jpg",
    categories: ["fullstack"],
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/acengukfah/BukuHarian-BPN",
    liveDemo: null,
    description: "Rebuilding a traditional Google Form into an interactive web application for daily logbook."
  },
  {
    title: "Full REST API Informatics Expo V2 UII",
    image: "images/informatics-expo.png",
    categories: ["backend"],
    techStack: ["Laravel", "MySQL", "REST API", "JWT"],
    github: "https://github.com/acengukfah/informatics-expo-v2-api",
    liveDemo: "https://informatics.uii.ac.id/sarjana/informatics-expo/",
    description: "Comprehensive REST API for university informatics expo event management system."
  },
  {
    title: "SMPN 5 Sengkang",
    image: "images/smpn5sengkang.jpeg",
    categories: ["backend", "fullstack"],
    techStack: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],
    github: "https://github.com/acengukfah/GebutDev-cms-sekolah",
    liveDemo: "https://smpn5sengkang.sch.id",
    description: "Complete school management system with student information and academic tracking."
  },
  {
    title: "SMPN 3 Majauleng",
    image: "images/smpn3majauleng.jpg",
    categories: ["fullstack"],
    techStack: ["Laravel", "React", "MySQL", "Tailwind"],
    github: "https://github.com/acengukfah/GebutDev-web-sekolah",
    liveDemo: "https://smpn3sengkang.sch.id",
    description: "Modern school website with dynamic content management and online registration."
  },
  {
    title: "SKL Online Junior High School",
    image: "images/smpn3majauleng.webp",
    categories: ["fullstack"],
    techStack: ["Laravel", "React", "MySQL", "PDF Generator"],
    github: "https://github.com/acengukfah/GebutDev-web-sekolah",
    liveDemo: "https://kelulusan.smpn3sengkang.sch.id",
    description: "Online certificate generation system for junior high school graduates."
  },
  {
    title: "Warung Rakyat UII",
    image: "images/warung-rakyat.jpg",
    categories: ["fullstack"],
    techStack: ["Laravel", "MySQL", "AJAX", "Bootstrap"],
    github: "https://github.com/acengukfah/vlt-pasarrakyatuii",
    liveDemo: "https://fit.uii.ac.id/blog/2020/04/22/warung-rakyat-uii/",
    description: "An online marketplace by UII supporting UMKM during COVID-19."
  },
  {
    title: "Sekawan Informatika",
    image: "images/sekawan-informatika.png",
    categories: ["fullstack"],
    techStack: ["Vue.js", "Laravel", "MySQL", "Vuetify"],
    github: "https://github.com/acengukfah/si-penjaluran",
    liveDemo: "https://sekawan.informatics.uii.ac.id/",
    description: "UII website to support academic activities during the fourth year of study."
  },
  {
    title: "Amaliah",
    image: "images/fitur-3.svg",
    categories: ["backend"],
    techStack: ["Laravel", "Lumen", "MySQL", "REST API"],
    github: "https://github.com/acengukfah/amaliah-user-lumen",
    liveDemo: null,
    description: "A web application for managing and tracking social assistance distribution."
  },
  {
    title: "Ball Throwing Computer Vision Game",
    image: "images/ball-throwing-game.png",
    categories: ["datascience"],
    techStack: ["Python", "OpenCV", "YOLO", "NumPy"],
    github: "https://github.com/acengukfah/ball-throwing-cv-game",
    liveDemo: null,
    description: "Interactive game using computer vision to detect and track ball throwing motions."
  },
  {
    title: "Baby is You from Baba is You",
    image: "images/baby-is-you.png",
    categories: ["fullstack"],
    techStack: ["C#", "Unity", "GameDev"],
    github: "https://github.com/acengukfah/baby-is-you",
    liveDemo: "/baby-is-you",
    description: "A clever puzzle game where you manipulate words to change the rules and solve levels."
  },
  {
    title: "Stream 24/7 tweet ETL",
    image: "images/twitter-etl.png",
    categories: ["datascience"],
    techStack: ["Python", "Apache Airflow", "Pandas", "Scikit-learn"],
    github: "https://github.com/acengukfah/data-ranger",
    liveDemo: null,
    description: "Real-time ETL pipeline for Twitter data retrieval and sentiment analysis using ML."
  },
];

// Project rendering functions
function createProjectCard(project, index) {
  const techStackHtml = project.techStack.map(tech => 
    `<span class="neo-badge bg-[#FFFDF6] text-black text-[11px] font-mono py-0.5 px-2">${tech}</span>`
  ).join('');

  const primaryCategory = project.categories[0] || 'project';
  const categoryColors = {
    'fullstack': 'bg-neo-yellow',
    'backend': 'bg-neo-cyan',
    'datascience': 'bg-neo-purple'
  };
  const categoryBadgeColor = categoryColors[primaryCategory] || 'bg-neo-yellow';

  const linksHtml = `
    <div class="flex flex-wrap gap-2.5 mt-4 pt-3 border-t-2 border-black">
      ${project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
           class="neo-btn bg-black text-white text-xs px-3 py-1.5 hover:bg-neutral-800">
          <i class="fab fa-github mr-1.5"></i>
          <span>GitHub</span>
        </a>
      ` : ''}
      ${project.liveDemo ? `
        <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer"
           class="neo-btn bg-neo-cyan text-black text-xs px-3.5 py-1.5 hover:bg-cyan-300">
          <i class="fas fa-external-link-alt mr-1.5"></i>
          <span>Live Demo</span>
        </a>
      ` : ''}
      ${project.secondaryLink ? `
        <a href="${project.secondaryLink.url}" target="_blank" rel="noopener noreferrer"
           class="neo-btn bg-neo-pink text-black text-xs px-3 py-1.5 hover:bg-pink-300">
          <i class="${project.secondaryLink.icon || 'fas fa-heart'} mr-1.5"></i>
          <span>${project.secondaryLink.label || 'Platform'}</span>
        </a>
      ` : ''}
    </div>
  `;

  return `
    <div class="neo-card bg-white border-[3px] border-black shadow-[6px_6px_0px_#000] p-4 flex flex-col justify-between animate-fadeInUp" style="animation-delay: ${index * 60}ms">
      <div>
        <div class="relative border-2 border-black overflow-hidden mb-4 bg-yellow-100 cursor-pointer group" onclick="openImageModal('${project.image}', '${project.title}')">
          <img src="${project.image}" alt="${project.title}" 
               class="w-full h-44 object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-200">
          <div class="absolute top-2 left-2">
            <span class="neo-badge ${categoryBadgeColor} text-black font-heading text-[10px] uppercase">${primaryCategory}</span>
          </div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="neo-btn bg-white text-black text-xs px-2.5 py-1"><i class="fas fa-expand mr-1"></i> Preview</span>
          </div>
        </div>
        <h3 class="font-heading font-extrabold text-xl text-black mb-2 leading-tight">${project.title}</h3>
        <p class="text-gray-700 text-sm mb-3 leading-relaxed">${project.description}</p>
        <div class="flex flex-wrap gap-1.5 mb-2">
          ${techStackHtml}
        </div>
      </div>
      ${linksHtml}
    </div>
  `;
}

// Image modal functions
function openImageModal(imageSrc, imageAlt) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  modal.classList.remove('hidden');
  
  // Prevent body scrolling when modal is open
  document.body.style.overflow = 'hidden';
}

function renderProjects(category) {
  const projectListEl = document.getElementById('project-list');
  let projects = category === 'all' ? projectsData : projectsData.filter(project => project.categories.includes(category));

  if (projects.length === 0) {
    projectListEl.innerHTML = '<div class="col-span-full neo-box p-8 text-center text-black font-heading font-bold text-lg">No projects found in this category.</div>';
    return;
  }

  // Update content
  projectListEl.innerHTML = projects.map((project, index) => createProjectCard(project, index)).join('');
}

// Initialize projects when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-button');
  const modal = document.getElementById('imageModal');
  const closeModal = document.getElementById('closeModal');
  
  // Modal close button handler
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
  }
  
  // Close modal when clicking outside the image
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Don't do anything if the button is already active
      if (button.classList.contains('active')) return;
      
      // Remove active styles from all buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-neo-yellow', 'shadow-[5px_5px_0px_#000]', 'active');
        btn.classList.add('bg-white', 'shadow-[3px_3px_0px_#000]');
      });
      
      // Add active styles to clicked button
      button.classList.remove('bg-white', 'shadow-[3px_3px_0px_#000]');
      button.classList.add('bg-neo-yellow', 'shadow-[5px_5px_0px_#000]', 'active');

      // Render projects for selected category
      renderProjects(button.getAttribute('data-category'));
    });
  });

  // Initial render with all projects
  renderProjects('all');
}); 
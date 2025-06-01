// Project Data
const projectsData = [
  {
    title: "iDeviceStore Jogja",
    image: "images/idevicestore-jogja.jpg",
    categories: ["fullstack"],
    techStack: ["Django", "React", "MySQL", "Tailwind"],
    github: "https://github.com/acengukfah/GebutDev-idevicestore",
    liveDemo: "https://idevicestore-jogja.com",
    description: "Web app for Apple devices with inventory management and payment integration."
  },
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
    title: "Full REST API Informatics Expo V2 UII",
    image: "images/informatics-expo.png",
    categories: ["backend"],
    techStack: ["Laravel", "MySQL", "REST API", "JWT"],
    github: "https://github.com/acengukfah/informatics-expo-v2-api",
    liveDemo: "https://informatics.uii.ac.id/sarjana/informatics-expo/",
    description: "Comprehensive REST API for university informatics expo event management system."
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
];

// Project rendering functions
function createProjectCard(project, index) {
  const techStackHtml = project.techStack.map(tech => 
    `<span class="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs rounded-full font-medium">${tech}</span>`
  ).join('');

  const linksHtml = `
    <div class="flex gap-3 mt-4">
      ${project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
           class="flex items-center gap-1 px-3 py-1 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
          <i class="fab fa-github"></i>
          <span>GitHub</span>
        </a>
      ` : ''}
      ${project.liveDemo ? `
        <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer"
           class="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <i class="fas fa-external-link-alt"></i>
          <span>Live Demo</span>
        </a>
      ` : ''}
    </div>
  `;

  return `
    <div class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeInUp" style="animation-delay: ${index * 100}ms">
      <div class="relative group">
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-slate-800 mb-2">${project.title}</h3>
        <p class="text-gray-600 text-sm mb-3 leading-relaxed">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-3">
          ${techStackHtml}
        </div>
        ${linksHtml}
      </div>
    </div>
  `;
}

function renderProjects(category) {
  const projectListEl = document.getElementById('project-list');
  let projects = category === 'all' ? projectsData : projectsData.filter(project => project.categories.includes(category));

  if (projects.length === 0) {
    projectListEl.innerHTML = '<div class="col-span-full text-center text-gray-500 py-8">No projects found in this category.</div>';
    return;
  }

  // Update content
  projectListEl.innerHTML = projects.map((project, index) => createProjectCard(project, index)).join('');
}

// Initialize projects when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-button');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Don't do anything if the button is already active
      if (button.classList.contains('active')) return;
      
      // Remove active styles from all buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white', 'active');
        btn.classList.add('bg-gray-200', 'text-gray-700');
      });
      
      // Add active styles to clicked button
      button.classList.remove('bg-gray-200', 'text-gray-700');
      button.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white', 'active');

      // Render projects for selected category
      renderProjects(button.getAttribute('data-category'));
    });
  });

  // Initial render with all projects
  renderProjects('all');
}); 
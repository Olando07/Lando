// Typewriter effect
const roles = ["Web developer", "Software developer", "Frontend developer", "Backend developer", "Fullstack developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;
const typewriterElement = document.getElementById("typewriter");

function type() {
	const currentRole = roles[roleIndex];
	if (isDeleting) {
		typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
		charIndex--;
		typeSpeed = 50;
	} else {
		typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
		charIndex++;
		typeSpeed = 100;
	}

	if (!isDeleting && charIndex === currentRole.length) {
		isDeleting = true;
		typeSpeed = 1500; // Pause before deleting
	} else if (isDeleting && charIndex === 0) {
		isDeleting = false;
		roleIndex = (roleIndex + 1) % roles.length;
		typeSpeed = 500; // Pause before typing new word
	}

	setTimeout(type, typeSpeed);
}

// Start typewriter on load
document.addEventListener("DOMContentLoaded", () => {
	if (typewriterElement) type();

	// Theme setup
	const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
	const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

	if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMatchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
		document.documentElement.classList.add("dark");
		themeToggleLightIcon.classList.remove("hidden");
	} else {
		document.documentElement.classList.remove("dark");
		themeToggleDarkIcon.classList.remove("hidden");
	}

	const themeToggleBtn = document.getElementById("theme-toggle");
	themeToggleBtn.addEventListener("click", function () {
		themeToggleDarkIcon.classList.toggle("hidden");
		themeToggleLightIcon.classList.toggle("hidden");
		if (localStorage.getItem("color-theme")) {
			if (localStorage.getItem("color-theme") === "light") {
				document.documentElement.classList.add("dark");
				localStorage.setItem("color-theme", "dark");
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("color-theme", "light");
			}
		} else {
			if (document.documentElement.classList.contains("dark")) {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("color-theme", "light");
			} else {
				document.documentElement.classList.add("dark");
				localStorage.setItem("color-theme", "dark");
			}
		}
	});

	// Populate Projects
	const projects = [
		{
			name: "Fintech App",
			pic: "images/fintech-dashboard-resize.png",
			repo: "https://github.com/Olando07/fintech-app",
			url: "https://olando07.github.io/fintech-app/",
			tags: ["React", "JavaScript", "Tailwind", "CSS"],
		},
		{
			name: "Pokemon Info",
			pic: "images/pokemon_resize.png",
			repo: "https://github.com/Olando07/Pokemon_app8",
			url: "https://olando07.github.io/Pokemon_app8/",
			tags: ["React", "JavaScript", "CSS", "API"],
		},
		{
			name: "To-Do List",
			pic: "images/ToDo-List_resize.png",
			repo: "https://github.com/Olando07/To-do-list",
			url: "https://olando07.github.io/To-do-list/",
			tags: ["React", "JavaScript", "CSS"],
		},
		{
			name: "Exotic Central",
			pic: "images/Exotic-Central_resize.png",
			repo: "https://github.com/Olando07/car-rental-app",
			url: "https://olando07.github.io/car-rental-app/",
			tags: ["HTML", "JavaScript", "CSS"],
		},
		{
			name: "Student Guide",
			pic: "images/Student-guide_resize.png",
			repo: "https://github.com/Olando07/New-Student-Guide",
			url: "https://olando07.github.io/New-Student-Guide/",
			tags: ["React", "JavaScript", "CSS"],
		},
	];

	const projectsGrid = document.getElementById("projects-grid");
	if (projectsGrid) {
		projects.forEach((project) => {
			const tagsHtml = project.tags ? project.tags.map((tag) => `<span class="px-3 py-1 bg-brand/10 text-brand dark:bg-brand/20 dark:text-brand-accent text-xs font-semibold rounded-full">${tag}</span>`).join("") : "";
			const card = document.createElement("div");
			card.className = "flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-800 transition-transform duration-300 hover:-translate-y-2";
			card.innerHTML = `
                <div class="h-48 overflow-hidden bg-gray-200 dark:bg-slate-800">
                    <img src="${project.pic}" alt="${project.name}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x300?text=Preview+Not+Available'">
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold mb-3 dark:text-white">${project.name}</h3>
                    <div class="flex flex-wrap gap-2 mb-6 flex-grow">
                        ${tagsHtml}
                    </div>
                    <div class="flex gap-4 mt-auto">
                        <a href="${project.repo}" target="_blank" class="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-brand transition-colors text-sm font-medium"><i class="fa-brands fa-github mr-2"></i>Code</a>
                        <a href="${project.url}" target="_blank" class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition-colors text-sm font-medium"><i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>Live</a>
                    </div>
                </div>
            `;
			projectsGrid.appendChild(card);
		});
	}
});

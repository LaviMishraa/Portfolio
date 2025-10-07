// Project data
const projects = [
    {
        image: "Images/Projects/T_V_V_T.png",
        heading: "01",
        title: "Voice-To-Text-Text-To-Voice-Converter-System",
        description: "Voice-to-Text and Text-to-Voice Converter System is a multilingual web application that converts spoken words into written text and vice versa. It leverages modern speech APIs to ensure high accuracy and low latency for real-time communication.",
        lang: "HTML,CSS,JavaScript",
        github: "https://github.com/LaviMishraa/Voice-To-Text-Text-To-Voice-Converter-System"
    },
    {
        image: "Images/Projects/notes.png",
        heading: "02",
        title: "Make_Notes",
        description: "A clean, minimal, and responsive single-page notes app built with vanilla **HTML**, **CSS** and **JavaScript**, using `localStorage` for persistence. Great as a small portfolio project to demonstrate UI design skills, DOM manipulation, and client-side data persistence.",
        lang: "JavaScript, HTML, CSS",
        github: "https://github.com/LaviMishraa/Make_Notes/tree/main"
    },
    {
        image: "Images/Projects/eStreamly.png",
        heading: "03",
        title: "eStreamly",
        description: "eStreamly eStreamly offers a live shopping solution that integrates shoppable videos and livestreams across websites and social media platforms. Their in-video checkout feature boasts a 9% conversion rate, making it a powerful tool for engaging customers in real-time.",
        lang: "HTML, CSS, JavaScript, React.js, Node.js, SQL",
        github: "https://github.com/LaviMishraa"
    }
];

let currentIndex = 0;

function updateContent(index) {
    const project = projects[index];
    const projectImage = document.querySelector("#projects .image img");
    const projectHeading = document.querySelector("#projects .content .heading");
    const projectTitle = document.querySelector("#projects .content h1");
    const projectDescription = document.querySelector("#projects .content p:not(.lang)");
    const projectLang = document.querySelector("#projects .content .lang");
    const projectGithub = document.querySelector("#projects .buttons a");

    projectImage.src = project.image;
    projectHeading.textContent = project.heading;
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectLang.textContent = project.lang;
    projectGithub.href = project.github;
}

function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateContent(currentIndex);
}

function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateContent(currentIndex);
}

updateContent(currentIndex);

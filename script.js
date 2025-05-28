// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Greeting Message
const heroSection = document.getElementById('hero');
const time = new Date().getHours();
let greeting;

if (time < 12) {
    greeting = "Good Morning!";
} else if (time < 18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

heroSection.insertAdjacentHTML('beforeend', `<p>${greeting}</p>`);

// Optional: Load Certificates Dynamically
const certificates = [
    {
        title: "Data Science for Engineers",
        issuer: "NPTEL",
        link: "link-to-certificate.pdf"
    },
    {
        title: "Java Data Structures & Algorithms",
        issuer: "Udemy",
        link: "link-to-certificate.pdf"
    },
    {
        title: "Machine Learning Basics",
        issuer: "Coursera",
        link: "link-to-certificate.pdf"
    }
];

const certificatesGrid = document.querySelector('.certificates-grid');

certificates.forEach(cert => {
    const card = document.createElement('div');
    card.classList.add('certificate-card');
    card.innerHTML = `
        <h3>${cert.title}</h3>
        <p>Issued by: ${cert.issuer}</p>
        <a href="${cert.link}" class="btn" target="_blank">View Certificate</a>
    `;
    certificatesGrid.appendChild(card);
});
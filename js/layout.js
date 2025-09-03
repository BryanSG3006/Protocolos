const basePath = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost"
    ? "." // en local
    : "/Protocolos"; // en GitHub Pages

const navbarPath = `${basePath}/layout/navbar.html`;
const footerPath = `${basePath}/layout/footer.html`;

// Llamado al navbar
fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        // Marcar activo
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll(".navbar-menu a");

        navLinks.forEach(link => {
            const hrefFile = link.getAttribute("href").split("/").pop();
            if (currentPath === hrefFile) {
                link.classList.add("active");
            }
        });

        // Menú hamburguesa
        const toggleButton = document.getElementById('navbar-toggle');
        const menu = document.querySelector('.navbar-menu');

        if (toggleButton && menu) {
            toggleButton.addEventListener('click', () => {
                menu.classList.toggle('show');
            });
        }
    })
    .catch(error => console.error("Error cargando el navbar:", error));

// Llamado al footer
fetch(footerPath)
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Error cargando el footer:', error);
    });

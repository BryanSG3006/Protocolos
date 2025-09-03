// Llamado al navbar
const isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
const navbarPath = isLocal ? "./layout/navbar.html" : "/Citas-Becas-UTN/layout/navbar.html";

fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        // Marcar el link activo según la página actual
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
fetch('./layout/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Error cargando el footer:', error);
    });

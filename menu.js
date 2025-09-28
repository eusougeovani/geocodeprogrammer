// Menu lateral independente e responsivo
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var sideMenu = document.getElementById('side-menu');
    var closeMenu = document.getElementById('close-menu');
    if (menuToggle && sideMenu && closeMenu) {
        menuToggle.onclick = function () {
            sideMenu.classList.add('open');
            menuToggle.setAttribute('aria-expanded', 'true');
        };
        closeMenu.onclick = function () {
            sideMenu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        };
        document.addEventListener('click', function (e) {
            if (
                sideMenu.classList.contains('open') &&
                !sideMenu.contains(e.target) &&
                e.target !== menuToggle
            ) {
                sideMenu.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
})

document.querySelectorAll('.side-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('side-menu').classList.remove('open');
            document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false');
        }
    });
});
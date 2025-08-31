// Menu hamburguesa

const hambur = document.querySelector(".header__menu-hamburg-icon");
const menu = document.querySelector(".navbar__links");
const link = document.querySelectorAll(".navbar__link");
const cruz = document.querySelector(".icon__x");
const carrito = document.querySelector(".carrito");
const iconoCarrito = document.querySelector(".header__shopping-icon");

hambur.addEventListener('click', () => {
    menu.classList.toggle('active');
    cruz.classList.toggle('opacity');
})

iconoCarrito.addEventListener('click', () => {
    carrito.classList.toggle('active');
})


document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hambur.contains(e.target)) {
        menu.classList.remove('active');
        cruz.classList.remove('opacity');
    }
})


document.addEventListener('click', (e) => {
    if (!carrito.contains(e.target) && !iconoCarrito.contains(e.target)) {
        carrito.classList.remove('active');
    }
})

// Submenu

const items = document.querySelectorAll(".navbar__item");

items.forEach(item => {
    const link = item.querySelector(".navbar__link");
    const submenu = item.querySelector(".navbar__submenu");
    const arrow = item.querySelector(".navbar__arrow-right")

    if (link && submenu && arrow) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Cierra otros submenús antes de abrir este
            items.forEach(i => {
                if (i !== item) {
                    i.querySelector(".navbar__submenu")?.classList.remove("active");
                    i.querySelector(".navbar__arrow-right")?.classList.remove("active");
                }
            });

            submenu.classList.toggle("active");
            arrow?.classList.toggle("active");
        });
    }
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar__item")) {
        items.forEach(item => {
            item.querySelector(".navbar__submenu")?.classList.remove("active");
        });
    }
});

// Rotate Arrow
const card = carrusel.querySelector('.card');
const gap = parseFloat(getComputedStyle(carrusel).gap) || 0;
const step = card.getBoundingClientRect().width + gap;

document.querySelector('.prev').onclick = () =>
    carrusel.scrollBy({ left: -step, behavior: 'smooth' });

document.querySelector('.next').onclick = () =>
    carrusel.scrollBy({ left: step, behavior: 'smooth' });
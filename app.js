// Botón de claro a oscuro

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Cargar preferencia desde localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.classList.replace('btn-light', 'btn-dark'); // Cambiar estilo del botón
        toggleButton.innerHTML = '<i class=i class="fa-solid fa-sun"></i>';
    }

    toggleButton.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');

        // Cambiar clase del botón
        toggleButton.classList.toggle('btn-light', !isDarkMode);
        toggleButton.classList.toggle('btn-dark', isDarkMode);

        // Cambiar el icono
        toggleButton.innerHTML = isDarkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';

        // Guardar preferencia en localStorage
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });
});



// Carrousel de Imágenes

document.addEventListener("DOMContentLoaded", () => {
    const carouselSlide = document.querySelector('.carousel-container');
    const carouselImages = document.querySelectorAll('.carousel-container img');

    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let counter = 0;

    // Actualizar tamaño dinámico
    let size = carouselImages[0].clientWidth;

    // Ajustar el tamaño al cambiar la ventana
    window.addEventListener('resize', () => {
        size = carouselImages[0].clientWidth;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return;
        counter++;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });
});


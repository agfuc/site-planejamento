document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navMobile = document.getElementById("navMobile");
    const slider = document.getElementById("slider");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // 1. LÓGICA DO MENU MOBILE
    if (menuToggle && navMobile) {
        menuToggle.addEventListener("click", () => {
            const ativo = navMobile.classList.toggle("active");
            menuToggle.textContent = ativo ? "✕" : "☰";

            if (slider) {
                slider.style.display = ativo ? "none" : "block";
            }
        });
    }

    // 2.  MODO ESCURO (ÍCONES DINÂMICOS)
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector("i");

        darkModeToggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            // Alterna as classes do Phosphor Icons corretamente
            if (icon) {
                if (body.classList.contains("dark-mode")) {
                    icon.classList.remove("ph-moon");
                    icon.classList.add("ph-sun"); // Muda para o ícone de sol
                } else {
                    icon.classList.remove("ph-sun");
                    icon.classList.add("ph-moon"); // Volta para a lua
                }
            }
        });
    }

    // 3. SLIDER / CARROSSEL
    const slidesContainer = document.getElementById("slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    let index = 0;

    function moveSlide() {
        index = (index + 1) % totalSlides;
        if (slidesContainer) {
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        }
    }

    if (totalSlides > 0) {
        setInterval(moveSlide, 4000);
    }

    // 4. CONTADORES ANIMADOS
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });

});
document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navMobile = document.getElementById("navMobile");
    const slider = document.getElementById("slider");

    // MENU
    menuToggle.addEventListener("click", () => {
        const ativo = navMobile.classList.toggle("active");
        menuToggle.textContent = ativo ? "✕" : "☰";

        if (slider) {
            slider.style.display = ativo ? "none" : "block";
        }
    });

    // SLIDER
    const slidesContainer = document.getElementById("slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    let index = 0;

    function moveSlide() {
        index = (index + 1) % totalSlides;
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    if (totalSlides > 0) {
        setInterval(moveSlide, 4000);
    }

});
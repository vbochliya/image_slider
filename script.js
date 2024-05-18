document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const closeModal = document.querySelector(".close");
    const cancelModal = document.querySelector(".cancel");
    const slides = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const images = document.querySelectorAll(".imgdiv img");
    
    let currentSlideIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = "flex";
            currentSlideIndex = index;
            showSlides(currentSlideIndex);
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });
    cancelModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    prev.addEventListener('click', () => {
        showSlides(--currentSlideIndex);
    });

    next.addEventListener('click', () => {
        showSlides(++currentSlideIndex);
    });



    function showSlides(index) {
        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }

        slides.forEach((slide, i) => {
            slide.style.display = i === currentSlideIndex ? "block" : "none";
        });
    }





});

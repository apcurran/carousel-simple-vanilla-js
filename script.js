"use strict";

{
    
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".btn-prev");
    const nextBtn = document.querySelector(".btn-next");
    
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });
    
    let counter = 0;
    
    nextBtn.addEventListener("click", () => {
        counter++;
        moveSlide();
    });
    
    prevBtn.addEventListener("click", () => {
        counter--;
        moveSlide();
    });
    
    function moveSlide() {
        if (counter > slides.length - 1) {
            counter = 0;
        } else if (counter < 0) {
            counter = slides.length - 1;
        }
    
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    }

}

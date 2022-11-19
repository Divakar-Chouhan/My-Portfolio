const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");

const nextButton = document.getElementById("slide-arrow-next");
const prevButton = document.getElementById("slide-arrow-prev");

nextButton.addEventListener("click", () => {
    const slideWidth=slide.clientWidth;
    slidesContainer.scrollLeft+=slideWidth;
});
prevButton.addEventListener("click", () => {
    const slideWidth=slide.clientWidth;
    slidesContainer.scrollLeft-=slideWidth;
});
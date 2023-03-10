const sliderContianer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slider");
const slideLeft = document.querySelector(".left-slider");
const upBotton = document.querySelector(".up-button");
const downBotton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBotton.addEventListener("click", () => changeSlide("up"));
downBotton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
    const slideHeight = sliderContianer.clientHeight;
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${
        activeSlideIndex * slideHeight
    }px)`;
    slideLeft.style.transform = `translateY(${
        activeSlideIndex * slideHeight
    }px)`;
};

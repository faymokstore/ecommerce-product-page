const carouselImages = [
'https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Febuary/Valentine/HOMEPAGESLIDE.gif',
'https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Febuary/Valentine/Brand-days/Trendyol/Homepage-slider-712x384-bd.jpg',
'https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Awoof-of-the-month/0-2-Feb/712X384.jpg'
];

let currentIndex = 0;
let slideTimeout;

const carouselImage = document.getElementById('carousel-img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Set first image
carouselImage.src = carouselImages[currentIndex];

prevBtn.addEventListener('click', () => {
    changeSlide(-1);
    resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
    changeSlide(1);
    resetAutoSlide();
});

function changeSlide(direction){
    currentIndex = (currentIndex + direction + carouselImages.length) % carouselImages.length;
    carouselImage.src = carouselImages[currentIndex];
}

function startAutoSlide(){
    slideTimeout = setTimeout(function auto(){
        changeSlide(1);
        slideTimeout = setTimeout(auto, 2000);
    }, 2000);
}

function resetAutoSlide(){
    clearTimeout(slideTimeout);
    startAutoSlide();
}

startAutoSlide();

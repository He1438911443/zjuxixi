let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slider-images img');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
}

// 页面加载时默认显示第一张图片
document.addEventListener('DOMContentLoaded', () => {
    changeSlide(0);
});


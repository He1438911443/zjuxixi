let currentIndex = 0;  // 当前显示的图片索引
const images = document.querySelectorAll('.slider-images img');  // 获取所有图片
const totalImages = images.length;  // 获取图片总数
const sliderWrapper = document.querySelector('.slider-images');  // 获取图片容器

// 切换图片函数
function changeSlide(direction) {
    currentIndex += direction;

    // 如果到达最后一张图片，跳转到第一张
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    // 如果到达第一张图片，跳转到最后一张
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // 通过改变 transform 属性来切换图片
    const offset = -currentIndex * 100;  // 计算偏移量
    sliderWrapper.style.transform = `translateX(${offset}%)`;  // 通过平移实现切换
}

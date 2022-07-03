import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const botaoUpgrade = document.getElementById('producao');
botaoUpgrade.value = 'New Upgrade';

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    loop: true,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }
});
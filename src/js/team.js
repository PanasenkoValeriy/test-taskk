import aleksImgUrl from '../img/team-imgs/Aleks.jpg';
import romaImgUrl from '../img/team-imgs/Roma.jpg';
import danyaImgUrl from '../img/team-imgs/Danya.jpg';
import valeraImgUrl from '../img/team-imgs/Valera.jpg';

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  speed: 800,
  keyboard: true,
});

const aleksImg = document.querySelector('.aleks');
const romaImg = document.querySelector('.roma');
const danyaImg = document.querySelector('.danya');
const valeraImg = document.querySelector('.valera');

const imgs = [aleksImg, romaImg, danyaImg, valeraImg];
const imgUrls = [aleksImgUrl, romaImgUrl, danyaImgUrl, valeraImgUrl];

for(let i = 0; i < imgs.length; i++) {
  imgs[i].src += imgUrls[i];
}
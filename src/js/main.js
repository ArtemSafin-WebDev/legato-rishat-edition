import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import onlyNumeric from './onlyNumeric';
import fileUpload from './fileUpload';
import fixedHeader from './fixedHeader';
import faqAccordions from './faqAccordions';
import surfaceTypesSlider from './surfaceTypesSlider';
import reviewsSlider from './reviewsSlider';
import introAnimation from './introAnimation';
import photoComparisonSlider from './photoComparisonSlider';
import fullscreenGallery from './fullscreenGallery';
import anchorLinks from './anchorLinks';
import modal from './modal';
import addContent from './addContent';


document.addEventListener('DOMContentLoaded', function () {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    fileUpload();
    fixedHeader();
    faqAccordions();
    surfaceTypesSlider();
    reviewsSlider();
    introAnimation();
    photoComparisonSlider();
    modal();
    addContent();

    fullscreenGallery();
    anchorLinks();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})

// открывание меню на главной странице
const openMenu = document.querySelector('.menu');
const closeBtn = document.querySelector('.page-header__menu-close');
const overlay = document.querySelector('.page-header__menu');

openMenu.addEventListener('click', () => {
    document.querySelector('.page-header__menu').classList.add('open');
    document.querySelector('.page-header__menu-inner').classList.add('open');
})

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
    document.querySelector('.page-header__menu').classList.remove('open');
    document.querySelector('.page-header__menu-inner').classList.remove('open');
}


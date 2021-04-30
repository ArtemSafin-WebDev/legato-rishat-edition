export default function addContent() {

    const whyUsBtn = document.querySelector('.why-us__next');
    const nextBtnAccardion = document.querySelector('.faq__next');


    whyUsBtn.addEventListener('click', () => {
        console.log('test');
        var nextContent = Array.prototype.slice.call(document.querySelectorAll('.why-us__difference-list-item'));
        nextContent.forEach(function (link) {
            link.classList.remove('item-close');
        })
        whyUsBtn.innerHTML = '';
    })
    nextBtnAccardion.addEventListener('click', () => {
        console.log('test');
        var nextContent = Array.prototype.slice.call(document.querySelectorAll('.faq__col'));
        nextContent.forEach(function (link) {
            link.classList.remove('item-close');
        })
        nextBtnAccardion.innerHTML = '';
    })
}

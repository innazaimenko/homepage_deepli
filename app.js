var btn = document.querySelector('.modal-btn');
var popupLoad = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

window.addEventListener('load', function () {
    popupLoad.classList.add('popup-active');
});

modalClose.addEventListener('click', function (){
    popupLoad.classList.remove('popup-active');
});
const popupBtn = document.querySelector(".popup__button");
const popupWrap = document.querySelector('.popup__wrap');
const popup = document.querySelector('.popup');
const popupCloseCross = document.querySelector('.popup__close');

const popupOpen = function(){
	popupWrap.classList.remove('hide-content');
	setTimeout(function(){
		popupWrap.classList.add('show');
		popup.classList.add('is-open');
	}, 10);
	
}
const popupClose = function(){
	popup.classList.remove('is-open');
	setTimeout(function(){
		popupWrap.classList.remove('show');
		popupWrap.classList.add('hide-content');
	}, 180);
}

popupBtn.addEventListener('click', popupOpen);
popupCloseCross.addEventListener('click', popupClose);

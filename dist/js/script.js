AOS.init({
	duration: 1000,
});

// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const targetId = this.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: 'smooth'  // Плавний перехід
			});
		}
	});
});


// Using slick slider for reviews

$('.reviews__wrapper').slick({
	centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    arrows: false,
    variableWidth: true,
    margin: 20,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    speed: 5000,
	draggable: false
});

// Input error 

const inputArea = document.querySelector('.contact__input'),
	  inputBtn = document.querySelector('.contact__btn'),
	  inputForm = document.querySelector('.contact__form');

const inputMsg = document.createElement('div');
inputMsg.textContent = 'Please enter the correct email';
inputMsg.classList.add('contact__msg')

inputBtn.addEventListener('click', e => {
	if (inputArea.value === '') {
		e.preventDefault();
		inputForm.appendChild(inputMsg);
		inputArea.classList.add('contact__input_error');
		setTimeout(() => {
			inputForm.removeChild(inputMsg);
			inputArea.classList.remove('contact__input_error');
		}, 6000)
	}
})

// Hamburger script

const hamburger = document.querySelector('.header__hamburger'),
	  menu = document.querySelector('.header__nav'),
	  menuItem = document.querySelectorAll('.header__link'),
	  body = document.querySelector('body');

hamburger.addEventListener('click', () => {
	body.classList.toggle('overflow');
	hamburger.classList.toggle('header__hamburger_active');
	menu.classList.toggle('header__nav_active');
});

menuItem.forEach(item => {
	item.addEventListener('click', () => {
		if (hamburger.classList.contains('header__hamburger_active')) {
			hamburger.classList.remove('header__hamburger_active');
			menu.classList.remove('header__nav_active');
			body.classList.remove('overflow');
		}
	})
});
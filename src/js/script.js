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
    responsive: [
		{
			breakpoint: 768,
			settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
			}
		}
	]
});

// Input error 

const inputArea = document.querySelector('.contact__input'),
	  inputBtn = document.querySelector('.contact__btn'),
	  inputForm = document.querySelector('.contact__form');

const inputMsg = document.createElement('div');
inputMsg.textContent = 'Please enter the correct email';
inputMsg.classList.add('contact__msg')

inputBtn.addEventListener('click', () => {
	if (inputArea.value === '') {
		inputForm.appendChild(inputMsg);
		inputArea.classList.add('contact__input_error');
		setTimeout(() => {
			inputForm.removeChild(inputMsg);
			inputArea.classList.remove('contact__input_error');
		}, 6000)
	}
})

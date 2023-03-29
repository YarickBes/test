// Додаємо обробник події на кнопку "Допомогти"
const donateButton = document.querySelector('.donate-button');
donateButton.addEventListener('click', function() {
	alert('Дякуємо, за Ваший внесок!');
});

// Додаємо обробник події на кнопку "Всі новини"
// const subscribeButton = document.querySelector('.news-button');
//subscribeButton.addEventListener('click', function() {
//	alert('Дякуємо за підписку!');
//}); 

// Додаємо обробник події на форму зворотного зв'язку
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', function(event) {
	event.preventDefault(); // Скасуємо дію за умовчанням

	// Отримуємо значення полів форми
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const message = document.querySelector('#message').value;

	// Перевіряємо, що всі поля заповнені
	if (name === '' || email === '' || message === '') {
		alert('Будь ласка, заповніть усі поля.');
		return;
	}

	// Надсилаємо дані на сервер
	alert(`Дякую за повідомлення, ${name}! Ми зв'яжемося з Вами найближчим часом.`);
});


const contactForm = document.querySelector('.contact__form'),
	  spinner = document.querySelectorAll('.contact__spinner');

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const btn = document.querySelector('.contact__btn');

	const message = {
		error: 'Что-то пошло не так!',
		success: 'Спасибо за сообщение!'
	}

	const showSpinner = (command) => {

		spinner.forEach(item => {
			item.style.display = command
		})
	}

	const createMessage = (text, selector) => {
		const p = document.createElement('p');
		p.style.color = 'red';
		p.textContent = text;
		selector.after(p)
		setTimeout(() => {
			p.style.display = 'none'
		}, 1500);
	}

	showSpinner('block')

	const data = new FormData(contactForm);

	fetch('../mailer/smart.php', {
		method: 'POST',
		body: data,
	})
	.then(() => {
		showSpinner('none');
		createMessage(message.success, btn)
	})
	.catch((e) => {
		createMessage(message.error, btn)
	})
	.finally(() => {
		contactForm.reset()
	}) 

})
function testWebP(callback) {

	var webP = new Image();
	
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
	
testWebP(function (support) {
	
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});

window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	const hint = document.querySelector('#hint'),
		skillsHint = document.querySelector('.skills__hint');

hint.addEventListener('mouseenter', () => {
	skillsHint.style.opacity = '1'
})

hint.addEventListener('mouseleave', () => {
	skillsHint.style.opacity = '0'
})
;
	const btn = document.querySelectorAll('.header__item a');

const scrolling = (element) => {
	window.scroll({
		top: element.offsetTop,
		left: 0,
		behavior: 'smooth'
	})
}

btn.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		const section = document.querySelector(item.hash);
		scrolling(section);
	})
});
	const aboutMeDescription = document.querySelector('.aboutMe__description'),
	  aboutMeBlock = document.querySelectorAll('.aboutMe__block'),
	  portfolioWorks = document.querySelector('.portfolio__works'),
	  portfolioWork = document.querySelectorAll('.portfolio__work');

const getFadeAnim = (selectorWrapper, selector, activeClass) => {

	const height = selectorWrapper.getBoundingClientRect().height,
		  bottom = selectorWrapper.getBoundingClientRect().bottom;

	if (window.innerHeight + height > bottom) {
		selector.forEach(item => {
			item.classList.remove(activeClass);
		})
	}
}

window.addEventListener('scroll', () => {

	getFadeAnim(aboutMeDescription, aboutMeBlock, 'aboutMe__active')
	getFadeAnim(portfolioWorks, portfolioWork, 'portfolio__active')

});
	const skillsActiveFirst = document.querySelector('.skills__active-first'),
	  skillsActiveSecond = document.querySelector('.skills__active-second'),
	  skillsActiveThird = document.querySelector('.skills__active-third');

let counter = 0;
	
const Circle = (sel) => {
	const circles = document.querySelectorAll(sel);
	[].forEach.call(circles, (el) => {
		let valEl = parseFloat(el.innerHTML);
		valEl = valEl * 408 / 100;
		el.innerHTML =
			'<svg width="160" height="160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style="stroke-dasharray:' + valEl + 'px 408px;" r="65" cx="-80" cy="80" /></svg>';
	});
};

Circle('.skills__circle');



;
	const mask = () => {

	const input = document.querySelectorAll('[name="phone"]');

	function setCursorPosition(pos, elem) {
		// elem.focus();

		if (elem.setSelectionRange) {
			elem.setSelectionRange(pos, pos);
		} else if (elem.createTextRange) {
			range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
		}
	}
	
	function createMask(e) {
		let matrix = '+7 (___) ___ __ __',
			i = 0,
			def = matrix.replace(/\D/g, ''),
			val = this.value.replace(/\D/g, '');

		if (def.length >= val.length) {
			val = def;
		}

		this.value = matrix.replace(/./g, function(a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
		});

		if (e.type === 'blur') {
			if (this.value.length == 2) {
				this.value = '';
			} else {
				setCursorPosition(this.value.length, this);
			}
		}
	}

	input.forEach(item => {
		item.addEventListener('input', createMask);
		item.addEventListener('focus', createMask);
		item.addEventListener('blur', createMask);
	})

}

mask();;
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

});
})
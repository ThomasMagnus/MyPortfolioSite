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
})
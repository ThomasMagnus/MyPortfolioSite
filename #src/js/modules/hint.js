const hint = document.querySelector('#hint'),
		skillsHint = document.querySelector('.skills__hint');

hint.addEventListener('mouseenter', () => {
	skillsHint.style.opacity = '1'
})

hint.addEventListener('mouseleave', () => {
	skillsHint.style.opacity = '0'
})

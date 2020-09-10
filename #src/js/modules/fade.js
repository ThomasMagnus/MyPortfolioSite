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

})
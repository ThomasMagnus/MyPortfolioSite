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




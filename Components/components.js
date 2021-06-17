//alert close example

const alertExampleBox = document.querySelector('#alert-example-close');
const alertExampleCloseBtn = document.querySelector('#alert-example-close-btn');

alertExampleCloseBtn.addEventListener('click', () => {
	alertExampleBox.style.display = 'none';
});

//form validation example

const allForms = document.querySelectorAll('.submit-form-example');

allForms.forEach((form) => {
	form.addEventListener(
		'submit',
		(e) => {
			if (!form.checkValidity()) {
				e.preventDefault();
			}
			e.preventDefault();
			form.classList.add('form-validated');
		},
		false,
	);
});

//Modal

const modalCTA = document.querySelector('#example-modal-CTA');
const modalInterstitial = document.querySelector('#example-modal-interstitial');
const modalCloseBtn = document.querySelector('#example-modal-close');
const modalBackBtn = document.querySelector('#example-modal-back');

modalCTA.addEventListener('click', () => {
	modalInterstitial.classList.add('active');
	document.body.style.overflow = 'hidden';
});

modalCloseBtn.addEventListener('click', () => {
	modalInterstitial.classList.remove('active');
	document.body.style.overflow = 'visible';
});

modalBackBtn.addEventListener('click', () => {
	modalInterstitial.classList.remove('active');
	document.body.style.overflow = 'visible';
});

// Rating JS

const ratingStars = document.querySelectorAll(
	'.example-rating-form .rating-star-input',
);
const ratingStarsForm = document.querySelector('.example-rating-form');
const ratingExampleShowRating = document.querySelector(
	'.rating-example-number-show',
);

ratingStars.forEach((star, id) => {
	star.addEventListener('change', () => checkAllTheBelowStars(id));
});

function checkAllTheBelowStars(idx) {
	if (ratingStars[idx].checked) {
		for (let j = idx - 1; j >= 0; j--) {
			ratingStars[j].checked = true;
		}
	} else {
		for (let j = idx + 1; j < ratingStars.length; j++) {
			ratingStars[j].checked = false;
		}
	}
}

ratingStarsForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let sum = 0;
	ratingStars.forEach((star) => {
		if (star.checked) sum += 1;
	});
	ratingExampleShowRating.innerText = `You have submitted ${sum} rating`;
});

//Show Toast

const toastExample = document.querySelector('#toast-example-success');
const btnToShowToast = document.querySelector('.show-toast-example-btn');
const btnToCloseToast = document.querySelector('#toast-example-success-btn');

let timerIdForToast;
btnToShowToast.addEventListener('click', () => {
	toastExample.style.display = 'block';
	timerIdForToast = setTimeout(() => {
		toastExample.style.display = 'none';
	}, 2000);
});
btnToCloseToast.addEventListener('click', () => {
	clearTimeout(timerIdForToast);
	toastExample.style.display = 'none';
});

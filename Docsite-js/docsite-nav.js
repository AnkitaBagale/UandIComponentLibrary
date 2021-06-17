//nav-bar
const myNav = document.querySelector('#my-nav-bar');
const myBurger = document.querySelector('#my-burger-menu');

myBurger.addEventListener('click', () => {
	myNav.classList.toggle('active');
});

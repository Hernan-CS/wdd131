/*---- Button code -----*/

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	menuButton.classList.toggle('open');
});

/* ---- Date code ----- */

const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = '\u00A9 ' + currentYear;

document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
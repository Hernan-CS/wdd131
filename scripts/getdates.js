const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = '\u00A9 ' + currentYear;

document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
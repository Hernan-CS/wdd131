  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City, Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Frankfurt, Germany",
      location: "Frankfurt, Germany",
      dedicated: "1987, August, 28",
      area: 32895,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924.jpg"
    },
    {
      templeName: "Bahía Blanca, Argentina",
      location: "Bahía Blanca, Argentina",
      dedicated: "2025, November, 23",
      area: 19000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-60881.jpg"
    },
    {
      templeName: "Hong Kong, China",
      location: "Hong Kong, China",
      dedicated: "1996, May, 26",
      area: 51921,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125.jpg"
    },
  ];

  /* TEMPLE CONTAINER */

  const container = document.getElementById("temple-container");

  function displayTemples(templeList) {
    container.innerHTML = '';
    templeList.forEach(temple => {
      const card = document.createElement("div");
      card.className = "temple-card";

      card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><span class="label">Location:</span>${temple.location}</p>
        <p><span class="label">Dedicated:</span>${temple.dedicated}</p>
        <p><span class="label">Size:</span>${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"
          width="400" height="250" class="temple-image" />
      `;
      container.appendChild(card);
    });
  }

  // Display of all
  displayTemples(temples);

  // Filter buttons
  const filterButtons = document.querySelectorAll('nav button[data-filter]');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      let filteredTemples;

      switch (filter) {
        case 'old':
          // Temples dedicated before 1900
          filteredTemples = temples.filter(temple => {
            const year = new Date(temple.dedicated).getFullYear();
            return year < 1900;
          });
          break;
        case 'new':
          // Temples dedicated after 2000
          filteredTemples = temples.filter(temple => {
            const year = new Date(temple.dedicated).getFullYear();
            return year > 2000;
          });
          break;
        case 'large':
          // Temples larger than 90,000 sq ft
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
        case 'small':
          // Temples smaller than 10,000 sq ft
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
        case 'home':
        default:
          // Show all temples
          filteredTemples = temples;
          break;
      }

      displayTemples(filteredTemples);

      // Close mobile menu if open, so when you press the button it hides.
      nav.classList.remove('open');
      menuButton.classList.remove('open');
    });
  });

  /*---- Button code -----*/

  const menuButton = document.getElementById('menu');
  const nav = document.querySelector('nav');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
  });

  /* ---- Date code ----- */

  const currentYear = new Date().getFullYear();
  document.getElementById('currentyear').textContent = '\u00A9 ' + currentYear;

  document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
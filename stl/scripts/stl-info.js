const cardsData = [
  {desc: "Understands and uses basic phrases for immediate needs. Introduces themselves and interacts in simple, routine conversations.", link: "stl-tips.html", image: "images/beginner.jpg"},
  {desc: "Understands sentences related to familiar topics. Communicates in simple, routine tasks requiring a direct exchange of information.", link: "stl-tips.html", image: "images/elementary.jpg"},
  {desc: "Deals with most travel situations. Can describe experiences, events, dreams, and briefly explain reasons for opinions, plans, and preferences.", link: "stl-tips.html", image: "images/intermediate.jpg"},
  {desc: "Communicates fluently and spontaneously with native speakers. Produces detailed texts on a range of familiar and unfamiliar topics.", link: "stl-tips.html", image: "images/upp-intermediate.jpg"},
  {desc: "Expresses ideas clearly and effectively in complex contexts. Understands detailed and long texts, conveying subtle meanings and opinions.", link: "stl-tips.html", image: "images/advanced.jpg"},
  {desc: "Communicates with ease in any situation. Reads and writes complex texts, using language with full accuracy, nuance, and clarity.", link: "stl-tips.html", image: "images/proficiency.jpg"},
];

const container = document.getElementById("card-container");

cardsData.forEach(card => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  cardDiv.innerHTML = `
    <img src="${card.image}" alt="Placeholder image" loading="lazy">
    <div class="card-content">
      <p class="card-desc">${card.desc}</p>
      <a href="${card.link}">How to improve</a>
    </div>
  `;

  container.appendChild(cardDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    });

  document.getElementById("year").textContent = new Date().getFullYear();
}); 
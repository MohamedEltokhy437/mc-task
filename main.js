// Menu item details data
const itemDetails = {
  'Big Mac': {
    title: 'Big Mac',
    description: 'The iconic burger with two beef patties, special sauce, lettuce, cheese, pickles, and onions.',
    price: '$4.99',
    image: 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/product-1534-Big-Mac.png'
  },
  'Fries': {
    title: 'World Famous Fries',
    description: 'Crispy, golden fries made from premium potatoes. A perfect side for any meal.',
    price: '$2.49',
    image: 'https://www.mcdonalds.com/content/dam/usa/nfl/assets/nav/Fries.png'
  },
  'Coke': {
    title: 'Coca-Cola®',
    description: 'Classic, refreshing Coca-Cola® served ice cold. The perfect drink to complement your meal.',
    price: '$1.99',
    image: 'https://www.mcdonalds.com/content/dam/usa/nfl/assets/nav/Coke.png'
  }
};

window.showDetails = function(item) {
  const details = itemDetails[item];
  if (!details) return;
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <div class="text-center">
      <img src="${details.image}" alt="${details.title}" class="img-fluid rounded mb-3" style="max-height: 180px;">
      <h4 class="mb-2">${details.title}</h4>
      <p>${details.description}</p>
      <span class="fw-bold text-danger">${details.price}</span>
    </div>
  `;
  const itemModal = new bootstrap.Modal(document.getElementById('itemModal'));
  itemModal.show();
};

// Optional: Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
}); 
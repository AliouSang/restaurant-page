export function loadMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('tab-content', 'menu-container');

  const heading = document.createElement('h1');
  heading.textContent = 'Our Menu';

  const grid = document.createElement('div');
  grid.classList.add('menu-grid');

  const menuItems = [
    {
      name: 'Truffle Tagliatelle',
      price: '$24',
      description: 'Handmade fresh pasta tossed with seasonal black truffles, parmigiano, and cultured butter.',
    },
    {
      name: 'Seared Ribeye Steak',
      price: '$38',
      description: 'Prime dry-aged beef, rosemary garlic compound butter, served with roasted fingerling potatoes.',
    },
    {
      name: 'Pan-Seared Salmon',
      price: '$28',
      description: 'Wild salmon with a crisp skin, asparagus puree, and citrus herb emulsion.',
    },
    {
      name: 'Classic Crème Brûlée',
      price: '$12',
      description: 'Rich Tahitian vanilla custard beneath a caramelized sugar crust.',
    },
  ];

  menuItems.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card', 'menu-card');

    const itemHeader = document.createElement('div');
    itemHeader.classList.add('menu-item-header');

    const name = document.createElement('h3');
    name.textContent = item.name;

    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = item.price;

    itemHeader.append(name, price);

    const desc = document.createElement('p');
    desc.textContent = item.description;

    card.append(itemHeader, desc);
    grid.appendChild(card);
  });

  menuContainer.append(heading, grid);
  return menuContainer;
}
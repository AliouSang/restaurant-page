export function loadContact() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('tab-content', 'contact-container');

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  const card = document.createElement('div');
  card.classList.add('card', 'contact-card');

  const phone = document.createElement('p');
  phone.innerHTML = '<strong>Phone:</strong> (555) 019-2834';

  const email = document.createElement('p');
  email.innerHTML = '<strong>Email:</strong> reservations@ledelice.com';

  const address = document.createElement('p');
  address.innerHTML = '<strong>Address:</strong> 104 Culinary Way, Foodville';

  card.append(phone, email, address);
  contactContainer.append(heading, card);

  return contactContainer;
}
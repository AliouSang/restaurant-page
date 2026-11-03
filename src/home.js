export function loadHome() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('tab-content', 'home-container');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Le Délice';

  const tagline = document.createElement('p');
  tagline.classList.add('tagline');
  tagline.textContent = 'Crafting unforgettable culinary experiences since 2015.';

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 
    'At Le Délice, we blend traditional techniques with fresh, locally sourced ingredients to bring you simple yet elevated flavors. Whether you are stopping by for a afternoon espresso or an evening dinner, our doors are always open.';

  const hoursSection = document.createElement('div');
  hoursSection.classList.add('card');
  
  const hoursHeading = document.createElement('h2');
  hoursHeading.textContent = 'Hours of Operation';
  
  const hoursList = document.createElement('ul');
  const hours = [
    'Mon - Thu: 11:00 AM - 10:00 PM',
    'Fri - Sat: 11:00 AM - 11:30 PM',
    'Sun: Closed',
  ];
  hours.forEach((time) => {
    const li = document.createElement('li');
    li.textContent = time;
    hoursList.appendChild(li);
  });

  hoursSection.append(hoursHeading, hoursList);
  homeContainer.append(headline, tagline, description, hoursSection);

  return homeContainer;
}
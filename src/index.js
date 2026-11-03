import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const contactBtn = document.querySelector('#contact-btn');
const navButtons = document.querySelectorAll('.nav-btn');

function renderTab(loadTabFunction, activeBtn) {
  // Wipe current DOM content
  contentDiv.textContent = '';
  
  // Render new tab module content
  const tabElement = loadTabFunction();
  contentDiv.appendChild(tabElement);

  // Update active state on nav buttons
  navButtons.forEach((btn) => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}

// Event Listeners
homeBtn.addEventListener('click', () => renderTab(loadHome, homeBtn));
menuBtn.addEventListener('click', () => renderTab(loadMenu, menuBtn));
contactBtn.addEventListener('click', () => renderTab(loadContact, contactBtn));

// Initial page load
renderTab(loadHome, homeBtn);
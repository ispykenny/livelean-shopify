export default function() {
  const menu_trigger = document.querySelector('.menu');
  const header = document.querySelector('header');
  menu_trigger.addEventListener('click', () => header.classList.toggle('nav-showing'))
}
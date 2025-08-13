// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
console.log("coucou")

console.log('app.js chargé par Encore');

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.basculer')) {
      document.body.classList.toggle('open');
      console.log('body classes ->', document.body.className);
    }
  });
});

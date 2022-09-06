var hamburgerBtn = document.querySelector('.hamburger');
var ul = document.querySelector('.nav__list');

hamburgerBtn.addEventListener('click', function () {
  ul.classList.toggle('show');
  hamburgerBtn.classList.toggle('fa-times');
});

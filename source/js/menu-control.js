var mainMenu = document.querySelector('.main-menu');
var mainMenuButton = document.querySelector('.main-menu__button');
var mainNavToggle = document.querySelector('.main-nav__toggle');

if (mainMenuButton.classList.contains('main-menu__button--no-js')) {
  mainMenuButton.classList.remove('main-menu__button--no-js');
  mainMenuButton.classList.add('main-menu__button--close');
}

if (mainMenu && mainMenu.classList.contains('main-menu--no-js')) {
  mainMenu.classList.remove('main-menu--no-js');

  mainNavToggle.addEventListener('click', function () {
    mainMenu.classList.add('main-menu--with-js');
  });

  mainMenuButton.addEventListener('click', function () {
      mainMenu.classList.remove('main-menu--with-js');
  })
}

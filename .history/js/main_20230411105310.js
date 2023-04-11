document.addEventListener('DOMContentLoaded', function(){

  new Cuttr('.post__descr', {
    truncate: 'characters',
    length: 80,
    readMore: true,
    readMoreText: 'Show more...',
    readLessText: 'Show less',
    readMoreBtnPosition: 'after',
    readMoreBtnAdditionalClasses: 'post__more'
  });

  let menuButton = document.querySelector('.open-menu');
  let mobileMenu = document.querySelector('.mobile-menu');
  let menuOverlay = document.querySelector('.mobile-menu__overflow');

  function toggleMenu() {
    menuButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  }

  menuButton.addEventListener('click', toggleMenu);

});


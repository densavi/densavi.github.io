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

  function toggleMenu() {
    menuButton.classList.toggle('active');
    console.log('123');
  }

  menuButton.onClick = toggleMenu;

});


document.addEventListener('DOMContentLoaded', function(){

  console.log('123');

  new Cuttr('.post__descr', {
    truncate: 'characters',
    length: 80,
    readMore: true,
    readMoreText: 'Show more...',
    readLessText: 'Show less',
    readMoreBtnPosition: 'after',
    readMoreBtnAdditionalClasses: 'post__more'
    
  });

});


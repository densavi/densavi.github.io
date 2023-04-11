document.addEventListener('DOMContentLoaded', function(){

  new Cuttr('.post__descr', {
    truncate: 'characters',
    length: 250,
    readMore: true,
    readMoreText: 'Read more',
    readLessText: 'Read less',
    readMoreBtnPosition: 'after',
    readMoreBtnAdditionalClasses: 'btn-large btn-flat waves-effect waves-light orange darken-1 white-text margin-top'
    
  });

});


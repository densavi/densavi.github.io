$(function() {

	function menuHamburger() {
		$('.header__menu').click(function(){
			$(this).toggleClass('open');
		});
	} menuHamburger();

	function tabs() {
		$('.provide-serc__caption').on('click', 'li:not(.active)', function() {
		    $(this)
		      .addClass('active').siblings().removeClass('active')
		      .closest('.provide-serc__tabs').find('.provide-serc__content').removeClass('active').eq($(this).index()).addClass('active');
		});
	} tabs();

	function slider() {
		$('.slider').slick({
			slidesToShow: 2,
			dots: true,
			arrows: false,
			adaptiveHeight: true,
			responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		    ]
		});
		$('.slider__arrow--next').on('click', function(){
		  $('.slider').slick('slickNext');
		});
		$('.slider__arrow--prev').on('click', function(){
		  $('.slider').slick('slickPrev');
		});
	} slider();

	function mobileSlider() {
		$('.partners__list').slick({
			slidesToShow: 6,
			dots: false,
			responsive: [
			{
			  breakpoint: 1000,
			  settings: {
			    slidesToShow: 3,
			    dots: true
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
			    slidesToShow: 2,
			    dots: true
			  }
			}
			]
		});
	} mobileSlider();


	function openMenu() {
		$('.header__menu').click(function() {
			$('.menu').slideToggle();
			$('body').toggleClass('scroll');
		});

		$(".menu__list").on("click","a", function (event) {
			event.preventDefault();
			$('.menu').slideUp();
			$('.header__menu').removeClass('open');
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
	} openMenu();


});

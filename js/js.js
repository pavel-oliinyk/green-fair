$('.cover').slick({
	dots:true,
	arrows:false,
	autoplay:true,
	speed:3000,
});

$(document).ready(function(){
			var touch = $('.touch-menu');
		    var menu = $('.nav-menu');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 760 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		});

$('.cover2').slick({
	dots:true,
	arrows:false,
	autoplay:false,
	speed:3000,
});

$(document).ready(function(){

 $(".grid").masonry({
  itemSelector: '.grid-item',
  columnWidth: 10,
  fitWidth: true
 });
});

//scroll animation
// $(window).scroll(function() {
//     $('.mov').each(function(){
//       var imagePos = $(this).offset().top;
//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow+180) {
//         $(this).addClass('rubberBand');
//       }
//     });
//   });

// $(window).scroll(function() {
//     $('.mov').each(function(){
//       var imagePos = $(this).offset().top;
//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow+150) {
//         $(this).addClass('bounceInLeft');
//       }
//     });
//   });

// $(window).scroll(function() {
//     $('.mov').each(function(){
//       var imagePos = $(this).offset().top;
//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow+210) {
//         $(this).addClass('bounceInUp');
//       }
//     });
//   });
// $(window).scroll(function() {
//     $('.mov').each(function(){
//       var imagePos = $(this).offset().top;
//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow+200) {
//         $(this).addClass('bounceInRight');
//       }
//     });
//   });


$(function(){
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
    $('body').toggleClass('body-stop');
  });
  });
  	

  $(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
		$('body').removeClass('body-noscroll vh100');
		$('.top-nav-bg').fadeOut();
		$('.button_resize').removeClass('button_container_move');
	}, 3000);
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('.top-nav-bg').fadeIn();
	$('.button_resize').addClass('button_container_move');
  } else {
    $('.top-nav-bg').fadeOut();
	$('.button_resize').removeClass('button_container_move');
  }
});

$(function(){
new vUnit({
		CSSMap: {
			'.vh': {
				property: 'height',
				reference: 'vh'
			},
			'.vw': {
				property: 'width',
				reference: 'vw'
			},
			'.vwfs': {
				property: 'font-size',
				reference: 'vw'
			},
			'.vhmt': {
				property: 'margin-top',
				reference: 'vh'
			},
			'.vhmb': {
				property: 'margin-bottom',
				reference: 'vh'
			},
			'.vminw': {
				property: 'width',
				reference: 'vmin'
			},
			'.vmaxw': {
				property: 'width',
				reference: 'vmax'
			}
		}
	}).init();
	});

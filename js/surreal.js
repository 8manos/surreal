$(document).on('ready', function(){
	console.log("Starting...");

	$('#cabeza .toggle').on( 'click', function(e){
		e.preventDefault();
		if( $('body').hasClass('show-menu') ){
			$('body').removeClass('show-menu');
		}else{
			$('body').addClass('show-menu');
		}
	});

	$(".owl-carousel").owlCarousel({
		items : 1,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: false,
		itemsMobile: false
	});

	var owl = $(".owl-carousel").data('owlCarousel');
});
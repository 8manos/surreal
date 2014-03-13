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
		singleItem: true,
		navigation: true,
		paginationNumbers: true,
		addClassActive: true
	});

	var owl = $(".owl-carousel").data('owlCarousel');
});
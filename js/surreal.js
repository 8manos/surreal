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
		lazyLoad: true,
		lazyFollow: true,
		singleItem: true,
		navigation: true,
		paginationNumbers: true,
		addClassActive: true,
		afterMove: function( slide ){ 
			location.hash = "page-" + $('.owl-item.active').index();
		}
	});

	var owl = $(".owl-carousel").data('owlCarousel');

	if( location.hash ){
		var pagina = location.hash.replace('#page-','');
		owl.jumpTo( pagina)
	}
	
	$(window).on( "hashchange", function( event ) {
		var pagina = location.hash.replace('#page-','');
		owl.goTo( pagina)
	});
});
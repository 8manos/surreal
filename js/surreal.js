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
		afterInit: function() { setTimeout( paginaCompleta , 250); },
		afterMove: function( slide ){ 
			// Modificamos el hash para cada pagina
			location.hash = "page-" + $('.owl-item.active').index();
		}
	});

	var owl = $(".owl-carousel").data('owlCarousel');

	// Vamos a pagina solicitada al comienzo
	if( location.hash ){
		var pagina = location.hash.replace('#page-','');
		owl.jumpTo( pagina)
	}

	// Escuchamos cambios en el hash
	$(window).on( "hashchange", function( event ) {
		var pagina = location.hash.replace('#page-','');
		owl.goTo( pagina)
	});


	// Nos aseguramos que la pagina se vea completa en carousel
	function paginaCompleta(){
		var	altoCarousel = $('.owl-wrapper-outer').height(),
		    altoDisponible = $(window).height() - $('#cabeza').height();

		console.log( "Carousel: ", altoCarousel );
		console.log( "Disponible: ", altoDisponible );

		if( altoCarousel > altoDisponible ){
			$('.owl-wrapper-outer').height( altoDisponible - 50 );
		}

	}

	$(window).load(function(){

		// preferred v2, timeout instead of interval - no unnecessary ticks
		var scrollTimeout; 

		$(window).on( 'resize', function () {
			if (scrollTimeout) {
				// clear the timeout, if one is pending
				clearTimeout(scrollTimeout);
				scrollTimeout = null;
			}
			scrollTimeout = setTimeout( paginaCompleta , 150);
		});

	});
});

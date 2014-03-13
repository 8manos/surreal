$(document).on('ready', function(){
	console.log("Starting...");


	// Menu con toggle para quienes lo soportan
	$('#cabeza .toggle').on( 'click', function(e){
		e.preventDefault();
		if( $('body').hasClass('show-menu') ){
			$('body').removeClass('show-menu');
		}else{
			$('body').addClass('show-menu');
		}
	});

	// Inicializamos carousel
	$(".owl-carousel").owlCarousel({
		lazyLoad: true,
		lazyFollow: true,
		singleItem: true,
		paginationNumbers: true,
		addClassActive: true,
		afterInit: function() { setTimeout( paginaCompleta , 250); },
		afterMove: function( slide ){ 
			// Modificamos el hash para cada pagina
			setTimeout( function(){
				location.hash = "page-" + $('.owl-item.active').index();
			}, 10 );
		}
	});
	var owl = $(".owl-carousel").data('owlCarousel');

	// Mapeamos controles de teclado
	$(document).keydown(function(e){
		if (e.keyCode == 37) { 
		   owl.prev();
		   return false;
		}
		if (e.keyCode == 39) { 
		   owl.next();
		   return false;
		}
	});


	// Escuchamos cambios en el hash
	var hashTimeout; 
	$(window).on( "hashchange", function( event ) {
		if (hashTimeout) {
			clearTimeout(hashTimeout);
			hashTimeout = null;
		}

		hashTimeout = setTimeout( function(){
			var pagina = location.hash.replace('#page-','');
			owl.goTo( parseInt(pagina) );
		}, 10 );
	});


	// Nos aseguramos que la pagina se vea completa en carousel
	function paginaCompleta(){
		var	altoCarousel = $('.owl-wrapper-outer').height(),
			altoDisponible = $(window).height() - $('#cabeza').height() - 50;

		if( altoCarousel >= altoDisponible ){
			$('.owl-wrapper-outer').height( altoDisponible );
		}else{
			$('.owl-wrapper-outer').css( 'height', 'auto');
		}

	}

	// Cosas para hacer cuando ya todo haya cargado
	$(window).load(function(){

		var scrollTimeout; 

		// Vamos a pagina solicitada al comienzo
		if( location.hash ){
			var pagina = location.hash.replace('#page-','');
			owl.jumpTo( pagina)
		}
		
		$(window).on( 'resize', function () {
			if (scrollTimeout) {
				clearTimeout(scrollTimeout);
				scrollTimeout = null;
			}
			scrollTimeout = setTimeout( paginaCompleta , 150);
		});

	});
});

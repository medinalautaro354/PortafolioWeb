$(document).ready(function(){

	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 1500 + (index * 500));
	});

	
	
var acercaDe = $('#acerca-de').offset().top,
	trabajos = $('#trabajos').offset().top,
	contacto = $('#contacto').offset().top;
		

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe - 100
		},500);
	});

	$('#btn-trabajos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: trabajos - 100
		},500);
	});

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto
		},500);
	});



});
(function( $ ) {
	'use strict';
	
	jQuery(document).ready(function($){
		$('#api-nav-dropdown').on("click",function(event){
			$(this).find('span i').toggleClass('fa-solid fa-angle-up fa-solid fa-angle-down');
			event.stopPropagation();

			$(".dropdown-api-nav").slideToggle();

		});

		$(".dropdown-api-nav").on("click", function (event) {
			event.stopPropagation();
		});

	});

	$(document).on("click", function () {
		$(".dropdown-api-nav").hide();
        $('#api-nav-dropdown span i').addClass('fa-angle-down');
        $('#api-nav-dropdown span i').removeClass('fa-angle-up');
	});

})( jQuery );
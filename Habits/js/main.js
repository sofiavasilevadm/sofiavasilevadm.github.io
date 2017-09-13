<<<<<<< HEAD
$(document).ready(function(){
	$( ".circle-menu__point" ).hover(function() {
    	$(this).toggleClass( "active", function() {});
			$(this).siblings().toggleClass( "opacity", function() {
    	});
	});
	+
	$( ".circle-menu__point-second" ).mouseover(function() {
		  $(".submenu-list-second").addClass( "visible", function() {
    	});
    	$(".submenu-list-first").removeClass( "visible", function() {
    	});
    	$(".submenu-list-third").removeClass( "visible", function() {
    	});
	});
	$( ".circle-menu__point-first" ).mouseover(function() {
		  $(".submenu-list-first").addClass( "visible", function() {
    	});
    	$(".submenu-list-third").removeClass( "visible", function() {
    	});
    	 $(".submenu-list-second").removeClass( "visible", function() {
    	});
	});
	$( ".circle-menu__point-third" ).mouseover(function() {
		  $(".submenu-list-third").addClass( "visible", function() {
    	});
    	$(".submenu-list-second").removeClass( "visible", function() {
    	});
    	$(".submenu-list-first").removeClass( "visible", function() {
    	});
	});
=======
$(document).ready(function(){
	$( ".circle-menu__point" ).hover(function() {
    	$(this).toggleClass( "active", function() {});
			$(this).siblings().toggleClass( "opacity", function() {
    	});
	});
	+
	$( ".circle-menu__point-second" ).mouseover(function() {
		  $(".submenu-list-second").toggleClass( "visible", function() {
    	});
	});
	$( ".circle-menu__point-second" ).mouseout(function() {
		  $(".submenu-list-second").removeClass( "visible", function() {
    	});
	});
	$( ".circle-menu__point-first" ).mouseover(function() {
		  $(".submenu-list-first").toggleClass( "visible", function() {
    	});
	});
	$( ".circle-menu__point-third" ).mouseover(function() {
		  $(".submenu-list-third").toggleClass( "visible", function() {
    	});
	});
>>>>>>> 97961847b436ccf43bd11fc781e700af7f7f4def
});
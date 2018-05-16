$(document).ready(function() {

	var navToggleButton = $('#navigation__button');
	var navToggleIcon = $('.header__nav-toggle .fas');
	var navList = $('.header__nav');
	var navListOpen = 'header__nav--open';
	var navLink = $('.header__nav a');


	navToggleButton.on('click', function(e) {
		e.preventDefault();

		navList.toggleClass(navListOpen);

		navBtnToggle();

	})

	navLink.on('click', function() {

		navBtnToggle();

		navList.removeClass(navListOpen);


	})

	function navBtnToggle() {
		if (navToggleButton.hasClass('active')) {
			navToggleButton.removeClass("active");
		}
		else {
			navToggleButton.addClass("active");
		}
	}

})
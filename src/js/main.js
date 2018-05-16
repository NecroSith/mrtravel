$(document).ready(function() {

	// Плавный переход к секциям
	$("a[href*='#']").mPageScroll2id();


	// Фильтр работ
	var mixer = mixitup('#hotel-filter');

	// Кнопка в фильтре работ
	var filterBtn = $('.filter__menu-element');
	var filterBtnActive = 'filter__menu-element--active';

	$(filterBtn).on('click', function() {
		$(filterBtn).removeClass(filterBtnActive);
		$(this).toggleClass(filterBtnActive);
	})

	// wow = new WOW(
 //     {
 //      boxClass:     'wow',      // default
 //      animateClass: 'animated', // default
 //      offset:       200,          // default
 //      mobile:       true,       // default
 //      live:         true        // default
 //    }
 //    )
 //    wow.init();

		// jQuery Validate JS

});
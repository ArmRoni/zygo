jQuery(function(){
	jQuery('.mobile_menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
});

jQuery('.professional_carousel').owlCarousel({
	loop:false,
	nav:true,
	margin:26,
	items:3,
	dots:false,
	mouseDrag: true,
	responsiveClass:true,
	responsive:{
        0:{
            items:1,
			nav:true,
			loop:true,
			// stagePadding: 96,
			// center: true,
			margin:26,
        },
		768:{
         items:2,
		},
		 992:{
            items:3,
        }
    }
});


(function($){
	var submitIcon = $('.searchbox-icon');
	var inputBox = $('.searchbox-input');
	var searchBox = $('.searchbox');
	var isOpen = false;
	submitIcon.click(function(){
		if(isOpen == false){
			searchBox.addClass('searchbox-open');
			inputBox.focus();
			isOpen = true;
		} else {
			searchBox.removeClass('searchbox-open');
			inputBox.focusout();
			isOpen = false;
		}
	});  
	 submitIcon.mouseup(function(){
			return false;
		});
	searchBox.mouseup(function(){
			return false;
		});
	jQuery(document).mouseup(function(){
			if(isOpen == true){
				jQuery('.searchbox-icon').css('display','block');
				submitIcon.click();
			}
		});	
})(jQuery);
function buttonUp(){
	var inputVal = jQuery('.searchbox-input').val();
	inputVal = jQuery.trim(inputVal).length;
	if( inputVal !== 0){
		jQuery('.searchbox-icon').css('display','none');
	} else {
		jQuery('.searchbox-input').val('');
		jQuery('.searchbox-icon').css('display','block');
	}
}


jQuery( ".searchbox-icon-view" ).click(function() {
  jQuery(this).addClass('hide-view');
  jQuery('.join_now_btn,.mobile_menu,.slicknav_menu').addClass('hide-view');
  jQuery('.search_popup_area').fadeToggle('fast');
  $('#search').focus();
});
jQuery( ".pop-close" ).click(function() {
  jQuery('.searchbox-icon-view,.join_now_btn,.mobile_menu,.slicknav_menu').removeClass('hide-view');
  jQuery('.search_popup_area').fadeOut('fast');
});





var toggleMenu = function() {
	console.log($(window).width() );
	console.log(( $(window).width() >= 320 ) && ( $(window).width() <= 768 ));
	if( ( $(window).width() >= 320 ) && ( $(window).width() <= 768 ) ) {
			if ($(".lateral-menu").is(":visible") == false) {
				$(".lateral-menu").fadeIn(0);
				$(".menu").css({"height":"40em"});
			} else {
				$(".lateral-menu").fadeOut(0);
				$(".menu").css({"height":"4em"});
			}
		}
}  

$(window).resize(function() {
	console.log($(window).width() );
	if(  ( $(window).width() > 768 ) ) {
		console.log($(window).width() );
		$(".lateral-menu").css({"display":"block"});
	}
})

$(window).resize(function() {
	console.log($(window).width() );
	if(  ( $(window).width() < 769 ) ) {
		console.log($(window).width() );
		$(".lateral-menu").css({"display":"none"});
	}
})
  
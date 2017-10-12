var toggleMenu = function() {
	console.log($(window).width() );
	console.log(( $(window).width() >= 320 ) && ( $(window).width() <= 768 ));
	console.log($(".lateral-menu").css("display"));
	if( ( $(window).width() >= 320 ) && ( $(window).width() <= 768 ) ) {
			if ($(".menu").css("display") == "none") {
				console.log('dffd');
				$(".lateral-menu").fadeIn(0);
				$(".menu").css({"height":"40em"});
				$(".menu").addClass("shown");
				$(".lateral-menu").addClass("shown");
			} else {
				$(".lateral-menu").fadeOut(0);
				$(".menu").removeClass("shown");
				$(".menu").css({"display":"none !important"});
			}
		}
}  

$(window).resize(function() {
	console.log($(window).width() );
	if(  ( $(window).width() > 768 ) ) {
		console.log($(window).width() );
		$(".menu").css({"height":"3em"});
		$(".lateral-menu").css({"display":"block"});
	}
})

$(window).resize(function() {
	console.log($(window).width() );
	if(  ( $(window).width() < 769 ) ) {
		console.log($(window).width() );
		$(".menu").removeClass("shown");
	}
})
  
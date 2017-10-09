function toggleMenu() {
	if ($(".lateral-menu").is(":visible") == false) {
		$(".lateral-menu").fadeIn("slow");
		$(".menu").css({"height":"40em"});
	} else {
		$(".lateral-menu").fadeOut("slow");
		$(".menu").css({"height":"4em"});
	}
}
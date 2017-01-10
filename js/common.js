$(document).ready(function () {

	$('#portfolio_grid').mixItUp();

	$(".s_portfolio li").click(function () {

		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active")
	});

	$('.popup').magnificPopup({
		type: 'image'
	});

	$('.popup_content').magnificPopup({
		type: 'inline',
		midClick: true
	});

	$(".top_text h1, .section_header").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "zoomOutDown");

	$(".animation0").animated("flipInY", "flipOutY");
	$(".animation1").animated("bounceInLeft", "bounceOutLeft");
	$(".animation2").animated("bounceInRight", "bounceOutRight");
	$(".left .resume_item").animated("slideInLeft", "slideOutLeft");
	$(".right .resume_item").animated("slideInRight", "slideOutRight");

	$(".portfolio_item ").each(function (i) {
		$(this).find(".portfolio_description").attr("id", "work_" + i)
	})

	$(".port_item_content").each(function (i) {
		$(this).find("a").attr("href", "#work_" + i);

	})


	$(window).load(function () {
		$('.preloader').fadeOut('slow', function () {
			$(this).remove();
		});
	});


	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

	function heightDetect() {
		$(".main_head").css("min-height", $(window).height());
		$(".top_wrapper").css("height", $(window).height());
	};

	heightDetect();

	$(window).resize(function () {
		heightDetect();
	})
	
	$(".top_mnu ul a").mPageScroll2id();

	$(".toggle_mnu").click(function () {

		$(".sandwich").toggleClass("active");

		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUpBig animated")

		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUpBig animated")
		}

	})

	$(".top_mnu li a").click(function () {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>")
});
$(window).on("load", function(){
	$(".loader .inner").fadeOut(750, function(){
		$(".loader").fadeOut(1000);
	});
});


$(document).ready(function(){
	$('#slides').superslides({
		animation: 'fade',
		play: 1400,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer.","Web Developer.","Student."],
		stringsElement: null,
		loop: true,
		fadeOut: true,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});


    var skillsOffset = $(".skillsSection").offset().top;
    var statsOffset = $(".statSection").offset().top;
    var countUp = false;

    $(window).scroll(function(){
    	if(window.pageYOffset > skillsOffset - $(window).height() + 200){
    		$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#fff',
				trackColor: false,
				scaleColor: false,
				lineWidth: 4,
				size: 152,
				onStep: function(from,to,percent){
					$(this.el).find('.percent').text(Math.round(percent));
				}
		    });
    	}

    	if(!countUp && window.pageYOffset > statsOffset - $(window).height() + 200){
	    	$(".counter").each(function(){
		    	var element = $(this);
		    	var endVal = parseInt(element.text());

		    	element.countup(endVal);
	    	});
	    	countUp = true;
    	}
    });

    $("#navigation li a").click(function(e){
    	e.preventDefault();

    	const targetElement = $(this).attr("href");
    	const targetPosition = $(targetElement).offset().top;

    	$("html,body").animate({scrollTop: targetPosition - 50},"slow");
    });

    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on('scroll', stickyNavigation);

    function stickyNavigation(){
    	var body = $("body");

    	if($(window).scrollTop() >= navTop){
    		body.css("padding-top", nav.outerHeight() + "px");
    		body.addClass("fixedNav");
    	}else{
    		body.removeClass("fixedNav");
    		body.css("padding-top", 0);
    	}
    }

});
console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var portfolioAPI = (function(options) {
	var shared = {},
		options = options || {}
	
	// JS MEDIA QUERY
	// var mq = window.matchMedia('@media all and (max-width: 700px)');
	// if(mq.matches) {
	//     // the width of browser is more then 700px
	// } else {
	//     // the width of browser is less then 700px
	// }

	// JS MEDIA QUERY + LISTENER
	// mq.addListener(function(changed) {
	//     if(changed.matches) {
	//         // the width of browser is more then 700px
	//     } else {
	//         // the width of browser is less then 700px
	//     }
	// });

	// PRELOADER UTILITY
	// var AceLoadImages = AceLoadImages || function(a, d, z) {
	// 	a instanceof Array || (a = [a]);
	// 	for (var e = a.length, f = 0, g = e; g--;) {
	// 		var b = document.createElement("img");
	// 		b.onload = function() {
	// 			f++; 
	// 			f >= e && isFunction(d) && d(z)
	// 		};
	// 		b.src = a[g]; 
	// 	}
	// }

	// var isFunction = isFunction || function(functionToCheck) {
	// 	var getType = {};
	// 	return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	// }

	
	// // USE
	// AceLoadImages([
	// 	// yourArrayOfImages.jpg,
	// 	// keepEmComming.jpg,
	// 	// calls imagesAreLoaded() function at end
	// ], imagesAreLoaded);

	// // USE A PRELOADING IMAGE/TWEENMAX AFTER LOADS
	// function imagesAreLoaded() {
	// 	// do whatever it is that cant happen before the images are ready
	// 	TweenMax.to("#splash-overlay" , 0.75, {
	//   		scale: 0,
	//   		autoAlpha: 0,
	//   		ease: Back.easeInOut
	//   	});
	// }
	// END PRELOAD UTILITY

	var menuAnimation = new TimelineMax({paused: true});
	menuAnimation.to(".mobile-nav-menu", 0.75, { autoAlpha: 1, left: 0, ease: Back.easeInOut});

	// MOBILE ICON - HAMBURGER
	$(".mobile-nav-btn").on("click", function(){
		$(this).toggleClass("open");

  		if ($(this).hasClass("played")) {
  			menuAnimation.reverse();	
  		} else {
  			menuAnimation.play();
  		}	
  		$(this).toggleClass("played");
	});


	// MOBILE SUB NAV DROP DOWN FUNCTIONALITY
	$(".drop-icon").on("click", function(){
		if ($(".sub-nav").is(":visible")) {
			$(".sub-nav").slideUp("slow");
		} else {
			$(".sub-nav").slideDown("slow");
		};
	})

	// MIXITUP
	$(".l-works-section").mixItUp({
		animation: {
			duration: 400,
			reverseOut: true,
			effects: 'fade translateZ(-360px) stagger(34s)',
			easing: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
			//easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
		}
	});

	$(".controls li a").on("click", function(e){
		e.preventDefault();
	})

	// init
	var init = function() {

		$(".sub-nav").slideUp("slow");

	}; // end init

	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	portfolioAPI.init();

});

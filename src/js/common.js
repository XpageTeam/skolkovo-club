import $ from "jquery"
// import is from "is_js"
// import stringEffect from "./stringAnimate.js"
import "./faq.js"
import "./mobile-menu.js"
import "./lc.js"



// import { TimelineLite, TweenLite, Linear } from 'gsap';
// import ScrollMagic from 'scrollmagic';
//import ScrollToPlugin from "gsap/ScrollToPlugin.js"

// import animation from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';

// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

import {Swiper, Navigation, EffectFade, Pagination} from "swiper/dist/js/swiper.esm.js";
Swiper.use([Navigation, EffectFade, Pagination])

import "./stock-slider.js"


window.$ = $;
window.jQuery = $;
// window.is = is;

require("./countTo.js");
// window.is = is

window.get$ = (element) => {
	return $(element)
}


require("./jquery.fancybox.js")
require("../css/jquery.fancybox.css")



document.addEventListener("DOMContentLoaded", function(){


	$('.tags__list').click(function(){
		var $this = $(this);

		$this.toggleClass('js__open');
	})


	var contactsSwiper = new Swiper('.contacts__slider .swiper-list', {
			slidesPerView: 1,
			spaceBetween: 40,
			// loop: true,
			navigation: {
				prevEl: (".contacts__slider-cont .swiper-button-prev"),
				nextEl: (".contacts__slider-cont .swiper-button-next")
			},
			pagination: {
			    el: '.swiper-pagination',
			    type: 'bullets',
			    clickable: true,
			  },
			
		});



	//TweenLite.to(window, 2, {scrollTo:"body"});

	// if($('.task path').length){

	// 	$('.task path').each(function(i, el){
	// 		var $this = $(el);

	// 		$this.css({
	// 			'stroke-dasharray': this.getTotalLength()+', '+ this.getTotalLength(),
	// 			'stroke-dashoffset': this.getTotalLength(),
	// 		})

		

	// 	})
	// }


	// $('.task__item').each(function(i,el){
	// 	var $this = $(el);

	// 	setTransitionDelay(i,$this);

	// });


	// function setTransitionDelay(i,$this){
	// 	setTimeout(function(){
	// 		$this.addClass('js__animated');
	// 	}, 200*i);

	// }



	// var controller = new ScrollMagic.Controller();




	// if($('#statistics').length){
	//  	new ScrollMagic.Scene({
	// 	                    triggerElement: "#statistics",
	// 	                   //triggerHook: 0.9,
	//     					//duration: "20%",
	// 	                   	//offset: 50
	// 	                })
	// 	                // /.triggerHook("onCenter")
	// 	                .setClassToggle(".statistics__item", "active") // add class toggle
	// 	                .addTo(controller)


	// }

	// if($('#supports').length){

	//     new ScrollMagic.Scene({
	//     				triggerElement: "#supports",
	//     				triggerHook: 0.5,
	//     				duration: "80%",
	//     				offset: 50,
	//     			})
	// 				// .triggerHook("onLeave")
	// 				.setClassToggle(".supports-top, .supports__list ", "active") // add class toggle
	// 				//.setTween("#supports > div", {y: "80%", ease: Linear.easeNone}) // паралакс
	// 				//.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);
	// }



	// if($('.partners__item')){

	// 	var partnersItems = document.querySelectorAll(".partners__item");

	// 	for (var i=0; i < partnersItems.length; i++) {

	// 		// partnersItems[i].style.transform = "translate3d(0,20px,0)";

	// 	 	new ScrollMagic.Scene({
	// 	                    triggerElement: partnersItems[i],
	// 	                    triggerHook: 0.8,
	// 	                    duration: 500,
	// 	                   	//offset: 0
	// 	                })
	// 	                .addTo(controller)
	// 	                .setClassToggle(partnersItems[i], "visible") // add class toggle
	// 	                //.addIndicators({name: ".partners__item " + (i+1) }) // add indicators (requires plugin)
	// 	                .setTween(
	// 		                   new TimelineLite()
	// 								.from(partnersItems[i], 1.5, {y: 30, opacity: 0})
	// 								.to(partnersItems[i], 1.5, {y: 0, opacity: 1, delay: 7})
	// 	                );
	// 	}
	// }



	// if($('.main .news__list').length){

	// 	var newsItems = document.querySelectorAll(".news__list .news__item");

	// 	for (var i=0; i < newsItems.length; i++) {

	// 		// partnersItems[i].style.transform = "translate3d(0,20px,0)";

	// 	 	new ScrollMagic.Scene({
	// 	                    triggerElement: newsItems[i],
	// 	                    triggerHook: 0.8,
	// 	                    duration: 100,
	// 	                   	//offset: 0
	// 	                })
	// 	                .addTo(controller)
	// 	                .setClassToggle(newsItems[i], "visible") // add class toggle
	// 	                //.addIndicators({name: ".news__item " + (i+1) }) // add indicators (requires plugin)
	// 	                .setTween(
	// 		                   new TimelineLite()
	// 		                   .fromTo(newsItems[i], 1, {y : 30 * i, opacity: 0}, {y : 0,  opacity: 1})
	// 								//.from(newsItems[i], 1.5, {y: 30, opacity: 0})
	// 								//.to(newsItems[i], 1.5, {y: 0, opacity: 1, delay: 7})
	// 	                );
	// 	}
	// }





	$('input[type="file"]').change(function(){
		var value = $(this)[0].files[0].name;
		$(this).closest('.default-input').find('.default-input__input[type="text"]').val(value);
	});




	// $('.questions__btn').click(function(){

	// 	var $this = $(this);

	// 	$this.siblings('.questions__item-bot').slideToggle();
	// 	$this.closest('.questions__item').toggleClass('js__open');

	// 	if (!$(this).data('status')) {
	// 	  	$(this).html('Свернуть');
	// 	    $(this).data('status', true);
	// 	  } else {
	// 	  	$(this).html('Развернуть');
	// 	    $(this).data('status', false);
	// 	  }
	// })



	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		loop: true,
		buttons: ["fullscreen", "slideShow", "close"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	})

	// $(".ms-text__text, .log-item__text").each((i, el) => {
	// 	new stringEffect({
	// 		selector: el,
	// 	});

	// 	el.classList.add("js__ready")
	// });

	var newsSwiper = new Swiper('.news-slider', {
		slidesPerView: 3,
		loop: true,
		roundLengths: true,
		a11y: false,
		spaceBetween: 60,
		navigation: {
			nextEl: '.news-slider .swiper-button-next',
			prevEl: '.news-slider .swiper-button-prev',
		},
		breakpoints: {
		    1200: {
		      spaceBetween: 20
		    },
		    1000: {
		    	slidesPerView: 2,
		    },
		    667: {
		    	slidesPerView: 1,
		    }
		  }
	});



})

$(window).on('scroll load', function(){
	if ($(".statistics__item-num").length)
		if ($(".statistics__item-num").offset().top + 50 <=
			$(window).scrollTop() + $(window).height()){
				$(".statistics__item-num:not(.countered)").each((i, el) => {
					let $this = $(el),
						speed = 0;

					switch (i){
						case 0:
							speed = 4000;
						break;
						case 1:
							speed = 2000;
						break;

						default:
							speed = 3000;
					}

					$this.width($this.width())

					$this.countTo({
						speed: speed,
						onComplete(){
							$this.width("auto")
						}
					});

					$this.addClass("countered");
				});
		}

})


$(window).on("load", e => {
	var $video = $('video');

	if(!$video.length){
		return
	}

	var dataSrc = $video.attr('data-src');
	$video.attr('src', dataSrc);
	
	$video[0].play();

	// let video = document.querySelector("video");
	// let canvas = document.querySelector("canvas");
	// let ctx = canvas.getContext("2d");
	// ctx.drawImage(video, 0, 0, width, height);
 //  	let screen = this.ctx1.getImageData(0, 0, this.width, this.height);
 //  	console.log(screen)
		

});



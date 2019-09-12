import $ from "jquery";
import {Swiper, Navigation, Autoplay, Pagination} from "swiper/dist/js/swiper.esm.js";

Swiper.use([
	Navigation,
	Autoplay,
	Pagination,
]);

const autoplayToggle = _ => {
	$(".stock-slider:not(.active) .swiper-list")[0].swiper.autoplay.stop();
	$(".stock-slider.active .swiper-list")[0].swiper.autoplay.start();
}, slidersToggle = sliderId => {

	$(".stock-slider").removeClass("active");
	$(".stock-slider#"+sliderId).addClass("active");

	autoplayToggle();
};

$(_ => {
	let sliders = document.querySelectorAll(".stock-slider .swiper-list");

	if (!sliders.length)
		return

	for (let slider of sliders){
		const sliderObject = slider.closest(".stock-slider");


		new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 40,
			// loop: true,
			navigation: {
				prevEl: sliderObject.querySelector(".swiper-button-prev"),
				nextEl: sliderObject.querySelector(".swiper-button-next")
			},
			pagination: {
			    el: '.swiper-pagination',
			    type: 'bullets',
			    clickable: true,
			  },
			autoHeight: true,
			autoplay: sliderObject.classList.contains("active"),
			
		});
	}


	$(".main-sliders__btn").click(function(){
		let $this = $(this);

		if ($this.hasClass("active"))
			return

		let id = $this.data("id");

		$(".main-sliders__btn").removeClass("active")
		$this.addClass("active");

		slidersToggle(id);
	});

	let btns = document.querySelectorAll(".main-sliders__btn");

	

	if (!btns)
		return

	let btnsContainer = document.querySelectorAll(".main-sliders__btns")

	if (!btnsContainer.length)
		return

	for (let cont of btnsContainer)
		cont.addEventListener("click", function() {
			if (this.classList.contains("js__opened"))
				this.classList.remove("js__opened")
			else
				this.classList.add("js__opened")
		})

	for (let btn of btns)
		btn.addEventListener("click", e => {
			if (btn.classList.contains("active"))
				return

			let targetID = btn.getAttribute("data-id");

			if (!targetID)
				return

			e.preventDefault()

			for (let btn of btns)
				btn.classList.remove("active")

			for (let brand of brands){
				brand.classList.remove("active")

				if (brand.getAttribute("data-id") == targetID){
					brand.classList.add("active")
					brand.querySelector(".swiper-list").swiper.update()
				}
			}

			btn.classList.add("active")
		})


});
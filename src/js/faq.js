import $ from "jquery"

document.addEventListener("DOMContentLoaded", function(){

	$('.faq__item-top').click(function() {
		var $this = $(this);

		$this.closest('.faq__item').toggleClass('js__open');
		$this.closest('.faq__item').find('.faq__item-info').slideToggle();


	})

})
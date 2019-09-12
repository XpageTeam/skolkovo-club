import $ from "jquery"

document.addEventListener("DOMContentLoaded", e => {
	if($('body').hasClass('page-lc')){


		var list = document.querySelector('#filial__list');

		if(list){
			window.observer = new MutationObserver(function(mutations) {
			    mutations.forEach(function(mutation) {
			     let input = mutation.addedNodes[0].querySelector(".forms-input-cont--file:first-child:nth-last-child(2) .forms__input--file");

			     console.log(mutation, input)

			     if (input)
			     	input.addEventListener("change", InputFileChange);
			    });
			});
			  
			observer.observe(list, {
			  	attributes: false, 
			  	childList: true, 
			  	characterData: false
			})
		  	
		}

		$("body").on("change", ".forms__input--file", function(e){

			var value = $(this)[0].files[0].name;
			// console.log(value);
			var inputHasFile = $(this).next('input[type="text"]').val(value);

			if(inputHasFile.length){
				$(this).nextAll('label').remove();
				// $(this).nextAll(".js__input-del").addClass('close-input');
			}

		});




		$("body").on("click", ".filial__item-el .add-input", function(){

			var time = +new Date(),
				$this = $(this),
				getName = $(this).closest('.forms__input-cont--multiple').find('.forms__input-cont:first-child input').attr("name");


			var inputBlock = $this.closest(".forms__input-cont--multiple").append('<div class="forms__input-cont">\
					<input type="text" id="'+time+'" name="'+getName+'"  class="forms__input">\
					<span class="js__input-del" title="Удалить"></span>\
				</div>');

		});



		$("body").on("click", ".filial__item-el--photo .add-input", function(){

			var time = +new Date();
			var $this = $(this);
			var getName = $(this).closest('.forms__input-cont--multiple').find('.forms__input-cont:first-child input').attr("name");


			var inputBlock = $this.closest(".forms__input-cont--multiple").append('<div class="forms__input-cont forms-input-cont--file">\
					<input class="forms__input forms__input--file" name="'+getName+'" type="file" id="'+time+'" accept="image">\
					<input class="forms__input forms__input--file-support" readonly="" type="text">\
					<label class="forms__label--file" for="'+time+'"></label>\
					<span class="js__input-del" title="Удалить"></span>\
				</div>');

			let newInput = inputBlock.find(".forms-input-cont--file:last-child input[type='file']")[0]

			newInput.addEventListener("change", InputFileChange);

		});



		window.InputFileChange = function () {
		  if (this.files[0]) {

		    var fr = new FileReader(),
		    	$shopBlock = $(this).closest("div[data-id]");

		    console.log($shopBlock)

		    fr.addEventListener("load", e => {
				let $photos = $shopBlock.find('.filial-load-photo');

	    		$photos.append("<img src='"+fr.result+"' />")
		    }, false);

		    fr.readAsDataURL(this.files[0]);
		  }
		};


		if($(".filial__item-el--photo input[type='file']").length)
			document.querySelector(".filial__item-el--photo input[type='file']").addEventListener("change", InputFileChange);



			$("body").on("click", ".filial__item-el--photo .input-del", function(){
				let $this = $(this).closest(".forms-input-cont--file"),
					$cont = $(this).closest(".filial__item-el--photo"),
					index = $this.index();

				console.log(index, $this)
				console.log($cont)

				$cont.nextAll(".filial-load-photo").find("img:eq("+index+")").remove()
			})



		$("body").on("click", ".js__input-del, .input-del", function(){

			var $this = $(this);

			$this.closest('.forms__input-cont').remove();
			
		})

	};

});
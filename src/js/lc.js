import $ from "jquery"

document.addEventListener("DOMContentLoaded", e => {
	if($('body').hasClass('page-lc')){


		var list = document.querySelectorAll('.filial__list');

		if(list.length){

			window.observer = new Array();

			for (const ls of list){
				window.observer.push(new MutationObserver(function(mutations) {
				    mutations.forEach(function(mutation) {
				     let input = mutation.addedNodes[0].querySelector(".forms-input-cont--file .forms__input--file");

				     console.log(mutation, input)

				     if (input)
				     	input.addEventListener("change", InputFileChange);
				    });
				}));
				  
				window.observer[window.observer.length -1].observe(ls, {
				  	attributes: false, 
				  	childList: true, 
				  	subtree: true,
				  	characterData: false
				})
			}
		  	
		}


		if(!$('div').hasClass('lc-gallery')){
			$("body").on("change", ".forms__input--file", function(e){

				var value = $(this)[0].files[0].name,
					inputHasFile = $(this).next('input[type="text"]').val(value);

				if(inputHasFile.length){
					$(this).nextAll('.default-input__label-img').remove();
				}
			});

		}





		var time = +new Date();

		$("body").on("change", ".lc-gallery .forms__input--file", function(e){
			var $this = $(this);
			var getName = $(this).closest('.forms__input-cont--multiple').find('.default-input__img').siblings('.imagesFoto').attr("name");

			var value = $(this)[0].files[0].name,
				inputHasFile = $(this).next('input[type="text"]').val(value);

			if(inputHasFile.length){

				$('.lc-gallery .forms__input-cont--multiple').prepend('<div class="forms__input-cont forms-input-cont--file" data-el-id="'+time+'">\
						<input class="forms__input forms__input--file" name="'+getName+'" type="file" id="'+time+'" accept="image">\
						<input class="forms__input forms__input--file-support" readonly="" type="text">\
						<label class="forms__label--file default-input__label-img" for="'+time+'">Загрузить фото</label>\
						<span class="js__input-del" title="Удалить"></span>\
					</div>');


			}

			
		});





		$('.lc-links').click(function(){
			$(this).closest('.lc-row').next('.filial__list').find('.lc-company__data').toggleClass('readonly');


		})




		window.InputFileChange = function () {
		  if (this.files[0]) {

		    var fr = new FileReader(),
		    	$shopBlock = $(this).closest("div[data-id]");

		    console.log($shopBlock)

		    fr.addEventListener("load", e => {
				let $photos = $shopBlock.find('.filial-load-photo');

	    		$photos.prepend("<div class='img_block photo' data-el-id='"+time+"'>\
	    			<div class='del_block photo-del'></div>\
	    			<img src='"+fr.result+"' />\
	    			</div>")
		    }, false);

		    fr.readAsDataURL(this.files[0]);
		  }
		};

		$('body').on('click', ".photo-del", function(){

			var $this = $(this);

			var elId = $this.closest('.photo').attr("data-el-id");

			$this.closest('.filial-load-photo').find('.forms-input-cont--file[data-el-id="'+elId+'"]').remove();
			

			$(this).closest('.lc-company__img').find('.photo').remove();





		})



		if(!$(".filial__item-el--photo input[type='file']").length)
			return 

			const fileInputs = document.querySelectorAll(".filial__item-el--photo input[type='file']");

			for (const fileInput of fileInputs)
				fileInput.addEventListener("change", InputFileChange);



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
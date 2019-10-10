
var DocWidth = $(window).width()
var DocHeight = $('.row').height() 
$(document).ready(() => {
			
		
			$(window).load(() => {
				// $('#center-preload').delay(2000).fadeOut('slow',"linear",function(){ clearInterval(timerId) })
					
					console.log(DocHeight)
					if(DocWidth>=768){
					$('.jharokha_img').attr("src","elmt/jharokha1old.png")
					$('.jharokha').addClass("jharoka-back")
					$('.pillar').addClass("inactive")
					$('.pillar').attr('height',"100%")
					$('.jharokha_img').removeClass('inactive')
				}
				else
				{	
					$('.jharokha_img').removeClass('inactive')
					$('.jharokha_img').attr("src","elmt/jarokha_gate_final.png")
					$('.pillar').removeClass('inactive')
					$('.jharokha').addClass("jharoka-back")
					if(DocWidth<576){
						$('.pillar').css('height',DocHeight)
						
					}
					$('.pillar').css('top',"34.86%")
				}

			})
		})

			$(window).resize(() =>{
					var DocWidth = $(window).width()
					var DocHeight = $('.row').height() 
					console.log(DocHeight)
					if(DocWidth>=768){
					$('.jharokha_img').attr("src","elmt/jharokha1old.png")
					$('.pillar').addClass('inactive')
					$('.jharokha_img').removeClass('inactive')
					$('.pillar').attr('height',"100%")
					
				}
				else{
					$('.jharokha_img').attr("src","elmt/jarokha_gate_final.png")
					$('.pillar').removeClass('inactive')
					$('.jharokha').addClass("jharoka-back")
					$('.jharokha_img').removeClass('inactive')
					if(DocWidth<576){
						$('.pillar').css('height',DocHeight)
						// $('.pillar').css('top',"34.86%")
					}
						$('.pillar').css('top',"34.86%")
				}
					
				
		})

			 $('.owl-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        768:{
            items:3,
            
        },
    }
})

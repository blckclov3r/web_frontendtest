
$(document).ready(function(){

	let slideIndex = 0;
	const showSlides = ()=>{
		const slides = document.getElementsByClassName("mySlides");
		const dots = document.getElementsByClassName("dot");

		for(let i=0;i<slides.length;i++){
			slides[i].style.display = "none";
		}

		slideIndex++;

		if(slideIndex > slides.length){
			slideIndex = 1;
		}

		for(let i=0;i<dots.length;i++){
			dots[i].className = dots[i].className.replace(" active","");
			dots[i].style.background = "#fff";
		}


		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
		dots[slideIndex-1].style.background = "#777";

		setTimeout(showSlides,3000);
	}
	showSlides();

	$('.menu-toggle').on('click',function(){
		$('.nav').toggleClass('showing');
	});


	// slick
	$('.post-wrapper').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	   centerPadding: '30px',
	   adaptiveHeight: true,
	
	  autoplaySpeed: 2800,
	  nextArrow: $('.next'),
	  prevArrow: $('.prev'),
	   responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});


	
	
		
});
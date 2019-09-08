

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

	


$(document).ready(function(){
		showSlides();
		$('.menu-toggle').on('click',function(){
			$('.nav').toggleClass('showing');
		});

		
});
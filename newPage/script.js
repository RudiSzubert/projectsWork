$(function(){	

	
});

$(document).on('click','.mySlide',function(){
	console.log((this.id));
	$("<div class='greyBack'></div>").insertBefore($('.header'));
	$("<div class='imageFull'><img src='cars/" + this.id +".jpg' /></div>").insertBefore($('.header'));
});

$(document).on('click','.imageFull',function(){
	$('.greyBack').remove();
	$('.imageFull').remove();
});
$(function(){	

	
});

$(document).on('click','.mySlide',function(){
	console.log((this.id));
	$("<div class='greyBack'></div>").insertBefore($('.header'));
	$("<div class='imageFull'><img class='imgFull' src='cars/" + this.id +".jpg' /></div>").insertBefore($('.header'));
	$('.imgFull').animate({
		width: '80%'}, 300);
});

$(document).on('click','.imageFull',function(){
	$('.greyBack').remove();
	$('.imageFull').remove();
});
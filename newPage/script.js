$(document).ready(function() {
	$(this).scrollTop(0);
});





var myApp = angular.module("myApp", ['ngAnimate']);
   
myApp.controller("my-ctrl", function($scope, $window, $anchorScroll) {
	$scope.transVar = true;
	$scope.func = function(id){			
		$scope.img=id;
		setTimeout(function() {
			var x = document.getElementById('imageTest');
			x.className += ' imgFullbig';
		}, 30);
	};		
	$scope.hideFullscreenImage = function (){
		$scope.img = false;
	};
	angular.element($window).bind("scroll", function(e) {
	   //console.log('scroll')
	  // console.log($window.pageYOffset)
	   if($window.pageYOffset >900){
		   $('.currentPage').removeClass('currentPage');
		   console.log($('.paginator').children(['#secondPage']));
		   $('.paginator').children(['#secondPage']).addClass('currentPage');
		  // $('.currentPage').removeClass('currentPage'); 
	   	//$anchorScroll(['#tech']);
	   	}
   })


});

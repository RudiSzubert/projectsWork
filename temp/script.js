$(function(){	

	
});

var myApp = angular.module("myApp", []);
   
   myApp.controller("my-ctrl", function($scope) {
	   
	  $scope.func = function(id){
	   		$scope.img=id;
	   }
	    $scope.hideFullscreenImage = function (){
	  	$scope.img = false;
	  };
   });
var app = angular.module('myApp', []);

	app.controller('myCtrl', function($scope) {
		$scope.types = [{
			value: 'full movie',
			label: 'full movie'
			}, {
			value: 'series',
			label: 'series'
			}]; 
		
		$(document).on('click','.addMovieBtn',function(){
		var mTitle = $scope.mTitle;
		var mDesc = $scope.mDesc;
		if(parseInt($scope.mYear) >1900 && parseInt($scope.mYear) < 2018)
			var mYear = $scope.mYear;
		else
		{
			alert('You should check what the word "year" means, before using this');
			return;
		}
		var dur = $scope.mDur;
		var mType = $scope.mType.label;
		ajaxCallstr({action:'add',id:'new',title:mTitle,description:mDesc,year:mYear,duration:dur,type:mType},function(response){
		console.log(response);
		});		
	});	
		
    
});

$(function() {
	ajaxCall({action:'getAll'}, writeMoviesToArray);	
	$( document ).ajaxComplete(function() {
		getMovieList();
		countPages();
		hidePosts();
		});		
});

$(document).on('click','.pagNum',function(){
        $('.pagNum').removeClass('current');
        $(this).addClass('current');
        hidePosts();        
    });

$(document).on('click','.movie',function(){
	var fTitle = $(this).children('.title').text();
	var fDesc = $(this).children('.description').text();
	ajaxCallstr({action:'getPic',title:fTitle},function(data){
		$('#myMoviePoster').attr("src", data);
		$('#visibleTitle').html(fTitle);
		$('.oneMovie p').html(fDesc);
		console.log(data);
	})
})

$(document).on('click','.sortBy',function(){	
	for(var i=0;i<6;i++)
	{
		if(($(this).hasClass('btnsort' + i)))
			window['sort' + i]();
	}
	getMovieList();
	hidePosts();	
	});


	
function sort0(){  //by year
	myMovies.sort(function (a, b) {
	return b.year - a.year;
});
}

function sort1(){ //by year desc
	myMovies.sort(function (a, b) {
	return a.year - b.year;
});
}
	
function sort2(){ //by duration
	myMovies.sort(function (a, b) {
	return b.duration - a.duration;
});
}

function sort3(){ //by duration desc
	myMovies.sort(function (a, b) {
	return a.duration - b.duration;
});
}
	
function sort4(){ //movies first
	myMovies.sort(function(a, b) {
	var nameA = a.type.toUpperCase();
	var nameB = b.type.toUpperCase();
	if (nameA < nameB) {
    return -1;
	}
	if (nameA > nameB) {
    return 1;
	}
	return 0;
});
}

function sort5(){ //series first
	myMovies.sort(function(a, b) {
	var nameA = b.type.toUpperCase();
	var nameB = a.type.toUpperCase();
	if (nameA < nameB) {
    return -1;
	}
	if (nameA > nameB) {
    return 1;
	}
	return 0;
});
}


function getMovieList(){
	removeList();	
	for(var i=0;i<myMovies.length;i++){
		$(getHTML(myMovies[i])).insertAfter($('.movieList ul .void'));
	}
	
}

var myMovies = [];

function movie(newTitle, desc, time, newYear, newType){
	this.title=newTitle;
	this.description=desc;
	this.duration=time;
	this.year=newYear;
	this.type=newType;	
}


function removeList(){
	$('.movieList ul .void').siblings().remove();
}

function getHTML(movie){
	var myString = "<li class='movie'><div class='title'>";
	myString+=movie.title + "</div><div class='year'>";
	myString+=movie.year + "</div><div class='description'><p>";
	myString+=movie.description + "</p></div><div class='type'>";
	myString+=movie.type + "</div><div class='duration'>";
	myString+=movie.duration + " min.</div></li>";
	return myString;
}



function writeMoviesToArray(array){
	for(var i=0;i<array.length;i++)
	{
		var myMovie = new movie(array[i].title, array[i].description,array[i].duration,array[i].year,array[i].type);
		myMovies[i] = myMovie;		
	}
}


function ajaxCall(dataObject,successHandler){
		$.ajax({
			url: 'movies.php',
			data: dataObject,
			dataType: 'json',
			success: successHandler,
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                        }
		});
}
	
function ajaxCallstr(dataObject,successHandler){
		$.ajax({
			url: 'movies.php',
			data: dataObject,
			success: successHandler,
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                        }
		});
}
	
	
function countPages(){
    var number=$('.movie').length - 5*$('.pagNum').length +5;
    while(number>5)
    {
       var numToAdd=parseInt($('.pagNum').last().text())+1;
       $('.pagNum').last().after('-'+'<div class="pagNum">'+ numToAdd + '</div>');
        number-=5;
    }
}

function hidePosts(){
	 $('.notActive').show();
    var cur = parseInt($('.current').text());
    cur=cur*5 -1;
    var cur2=cur-4;
    $(".movie").removeClass('notActive');
     $(".movie:gt("+ cur +")").addClass('notActive');
     if(cur2>=1)
         $(".movie:lt("+ cur2 +")").addClass('notActive');
	 $('.notActive').hide();
}
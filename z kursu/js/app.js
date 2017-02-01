$(document).ready(function() { 

	$('button[type=submit]').click(function() {
		var startInputValue = $('#startValue').val();
		var stopInputValue = $('#stopValue').val();
		console.log( 'Ilosc liczb spelniajacych warunek: ' + getTimeByNumbers( startInputValue, stopInputValue ) );
	});
	
	function getTimeByNumbers( startTime, stopTime ) {
		startTime = parseInt( startTime.split(':').join('') );
		stopTime = parseInt( stopTime.split(':').join('') );
		var sum = 0;
		console.log(startTime, stopTime);
		for(var i = startTime; i <= stopTime; i++) {
			if( !isProperTime( i ) ) continue;			
			if( countUniqueValues( i ) <= 2 ) sum++
		}
		return sum;
	}
	
	function countUniqueValues( timestamp ) {
		timestamp = convertIntToStringWithZeros( timestamp );
		var numberArray = timestamp.toString().split('');
		var myRet = [];
		for(var i in numberArray) {
			if( myRet.indexOf( numberArray[i] ) == -1 ) {
				myRet.push( numberArray[i] );
			}
		}
		return myRet.length;
	}
	
	function isProperTime( time ) {
		time = convertIntToStringWithZeros( time );
		var hours = parseInt( time.substring(0, 2) );
		var minutes = parseInt( time.substring(2, 4) );
		var seconds = parseInt( time.substring(4) );
		
		return ( hours > 24 || minutes > 59 || seconds > 59 ) ? false : true;
		
	}
	
	function convertIntToStringWithZeros( arg ) {
		arg = arg.toString();
		var missedLen = 6 - arg.length;
		return ( missedLen ) ? '0'.repeat( missedLen ) + arg : arg;
	}
	
	isProperTime(253031);
	
	console.log( countUniqueValues( 11 ) );
});
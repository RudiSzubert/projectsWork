$(function(){	
	var a = '45-200';
	var b = '84-134';
	
	var res=giveCodes(a,b);
	console.log(res);
	$(res).insertAfter('#something');
	
});
function giveCodes(start, stop){
	var range = 350;
	var result= '';
	var startAr = start.split('-');
	var stopAr = stop.split('-');
	console.log(startAr[0]);
	console.log(startAr[1]);
	console.log(stopAr[0]);
	console.log(stopAr[1]);
	if (stopAr[0]<=startAr[0] 
		|| stopAr[1]>350 || startAr[1]>350 
		||  stopAr[0]>85 ||  startAr[0]>85 
		|| stopAr[0]<10 || startAr[0]<10 
		|| stopAr[1]<100 || startAr[1]<100){
		alert('Valid codes, maybe? Check you js console');
		console.log('code 1 must be smaller than code 2. codes range 10-100 -> 85-350');
		return false;
		}
		result+='<ul>';
	for(var i=parseInt(startAr[0]);i<parseInt(stopAr[0]) +1 ;i++)
	{
		if(i==startAr[0])
		{
			for(var j=startAr[1]; j<range;j++)
			{
				result+='<li>'+ i + '-' + j + '</li>';
			}			
		}
		else if(i==stopAr[0])
		{
			for(var j=100; j<parseInt(stopAr[1])+1;j++)
			{
				result+='<li>'+ i + '-' + j + '</li>';
			}
		}
		else{
			for(var j=100; j<range;j++)
			{
				result+='<li>'+ i + '-' + j + '</li>';
			}		
		}
			
	}
	result+='</ul>';
	return result;	
}

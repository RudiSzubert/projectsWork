$(function(){	
	var a = '10:00:00';
	var b = '23:00:00';
	console.log(giveHours(a,b).unique());

		
});

function mixNums(a,b)
{
	var arr = [];
	if(parseInt(a+a) <60 )
		arr.push(a + a);
	if(parseInt(a+b) <60 )
		arr.push(a + b);
	if(parseInt(b+a) <60 )
		arr.push(b + a);
	if(parseInt(b+b) <60 )
		arr.push(b + b);
	return arr.unique();
}

function checkIfSmaller(a,b){
	arr1 = a.split(':');
	arr2 = b.split(':');
	if(arr1[0]>=arr2[0]) { 
	console.log('shit');
	return false
	};
	return true;
}

function giveHours(str1,str2){
	if(!checkIfSmaller(str1,str2))
	{
		alert('Time is not valid. Check console');
		console.log('H1 must be smaller than h2');
		return false;
	}
	var uniques = [];
	var top = parseInt(str2.replace(':','').replace(':',''));
	var bottom = parseInt(str1.replace(':','').replace(':',''));
	arr1 = str1.split(':');
	arr2 = str2.split(':');
	for(var i=arr1[0];i<=arr2[0];i++)
	{
		var hour = (i<10 ? '0'+ i : i.toString());
		var nums = [];
		nums.push(hour[0]);
		if(hour[0] !=hour[1])
			nums.push(hour[1]);
		if(nums.length==2)
		{
			var myArr=mixNums(nums[0],nums[1]);
			for(var j=0;j<myArr.length;j++)
			{
				for(var k=0;k<myArr.length;k++)
				{
					if( top>=parseInt(hour+myArr[j]+myArr[k])&& parseInt(hour+myArr[j]+myArr[k]) >=bottom)
						uniques.push(hour + ':' + myArr[j] + ':' + myArr[k]);
				}
			}
		}
		else
		{
			for(var z=0;z<10;z++)
			{
				if(z!=nums[0])
				{
					var myArr=mixNums(nums[0],z.toString());
					for(var j=0;j<myArr.length;j++)
					{
						for(var k=0;k<myArr.length;k++)
						{
							if( top>=parseInt(hour+myArr[j]+myArr[k]) && parseInt(hour+myArr[j]+myArr[k]) >=bottom)
								uniques.push(hour + ':' + myArr[j] + ':' + myArr[k]);
						}
					}
				}
			}
		}
	}	
	return uniques;
}
Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}
Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};


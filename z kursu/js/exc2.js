$(function(){	
	var a = '12:22:22';
	var b = '20:20:20';
	console.log(giveHours(a,b));
		
});
function checkIfMinutesValid(string){
	var str = ((typeof(string) == String ? string : string.toString()).replace(':', '')).toString();
	var arr = [];
	arr.push(str[0]);
		for(var i=1;i<4;i++)
		{
			if(arr[0]!=str[i])
			{
				if(arr.length ==1)
				{
					arr.push(str[i]);
				}
				else if(arr.length ==2)
				{
					if(arr[1]!=str[i])						
						return false;
				}
			}
		}		
	return true;
}

function checkIfValidTime(string){
	var str = (typeof(string) == String ? string : string.toString()).replace(':', '').replace(':', '');
	var arr = [];
	arr.push(str[0]);
		for(var i=1;i<6;i++)
		{
			if(arr[0]!=str[i])
			{
				if(arr.length ==1)
				{
					arr.push(str[i]);
				}
				else if(arr.length ==2)
				{
					if(arr[1]!=str[i])						
						return false;
				}
			}
		}		
	return true;
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
	
	arr1 = str1.split(':');
	arr2 = str2.split(':');
	for(var i=arr1[0];i<=arr2[0];i++)
	{
		if(i==arr1[0]){
			for(var j=arr1[1];j<60;j++)
			{
				if(checkIfMinutesValid( (i<10 ? '0' + i : i).toString() + (j<10 ? '0' + j : j).toString()))
				{
					if(j==arr1[1])
					{
						for(k=arr1[2];k<60;k++)
						{
							if(checkIfValidTime( (i<10 ? '0' + i : i).toString() + (j<10 ? '0' + j : j).toString() + (k<10 ? '0' + k : k).toString()))
								uniques.push((i<10 ? '0' + i : i) + ':' + (j<10 ? '0' + j : j) + ':' + (k<10 ? '0' + k : k));
						}								
					}
					else
					{
						for(k=0;k<60;k++)
							{
								if(checkIfValidTime( (i<10 ? '0' + i : i).toString() + (j<10 ? '0' + j : j).toString() + (k<10 ? '0' + k : k).toString()))
									uniques.push((i<10 ? '0' + i : i) +':' +(j<10 ? '0' + j : j) +':' + (k<10 ? '0' + k : k));
							}	
					}
				}
			}
		}
		else if(i==arr2[0]){
			for(var j=0;j<arr2[1];j++)
			{
				if(checkIfMinutesValid( (i<10 ? '0' + i : i).toString() + (j<10 ? '0' + j : j).toString()))
				{
					if(j==arr2[1])
					{
						for(k=0;k<arr2[2];k++)
						{
							if(checkIfValidTime( (i<10 ? '0' + i : i).toString() + (j<10 ? '0' + j : j).toString() + (k<10 ? '0' + k : k).toString()))
								uniques.push((i<10 ? '0' + i : i) +':' +(j<10 ? '0' + j : j) +':' + (k<10 ? '0' + k : k));
						}								
					}
					else
					{
						for(k=0;k<60;k++)
							{
								if(checkIfValidTime( (i<10 ? '0' + i : i).toString() + (j<10 ? '0' + j : j).toString() + (k<10 ? '0' + k : k).toString()))
									uniques.push((i<10 ? '0' + i : i) +':' +(j<10 ? '0' + j : j) +':' + (k<10 ? '0' + k : k));
							}	
					}
				}
				
			}
		}
		else{
			for(var j=0;j<60;j++)
			{
				if(checkIfMinutesValid( (i<10 ? '0' + i : i).toString() + (j<10 ? '0' + j : j).toString()))
				{
					for(k=0;k<60;k++)
						{
							if(checkIfValidTime( (i<10 ? '0' + i : i).toString() + (j<10 ? '0' + j : j).toString() + (k<10 ? '0' + k : k).toString()))
								uniques.push((i<10 ? '0' + i : i) +':' +(j<10 ? '0' + j : j) +':' + (k<10 ? '0' + k : k));
						}					
				}				
			}
		}
	}

	return uniques;	
}
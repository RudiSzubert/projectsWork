$(function(){
	function ajaxCall(dataObject,successHandler){
		$.ajax({
			url: 'json.php',
			dataType: 'json',
			data: dataObject,
			success: successHandler,
		});
	}
	$('#sgnBtn').click(function(){
		var mail = $('#emailInp').val(),
			pass = $('#passInp').val();
		var myDataObject = {action: 'login', email:mail, password:pass};
		var mySuccHandler = function(data){
			if(data.status==='ok'){
				$('<h4 style="color:red">Hello, ' + data.login + '</h4>').insertAfter($('.form-group').last());
				$('.form-group').hide();
				$('#sgnBtn').hide();
			}else {
				alert(data.message);
			}
		}
		ajaxCall(myDataObject,mySuccHandler);
		return false;
	});
	
	$('.btn-default').on('click',function(){
		
	});
	
	
});
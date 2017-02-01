$(function(){
    
    $(document).on('click','#addToBase', function(){
		var qData = $('#addToBase').parent().parent();
                if(parseInt($(qData.find('#correct')).val())<5 && parseInt($(qData.find('#correct')).val())>0
                        && parseInt($(qData.find('#level')).val()) >0 && parseInt($(qData.find('#level')).val())< 15)
                {
                var myDataObject = {action:'add',id:'new', qval: ($(qData.find('#qval')).val()),
                    level:parseInt($(qData.find('#level')).val()), ans1:($(qData.find('#ans1')).val()), 
                    ans2:($(qData.find('#ans2')).val()), ans3:($(qData.find('#ans3')).val()), 
                    ans4:($(qData.find('#ans4')).val()), correct:parseInt($(qData.find('#correct')).val())};
                ajaxCall(myDataObject, function(data){
                   alert(data);
                });
                
                var toInsert = '<li class="Item"><div class="Cell id">new</div>';
                                for(var i =1;i<8;i++)
                                {
                                    toInsert+= '<div class="Cell ' +QDatas[i]+ '">' + $(qData.find('#' + QDatas[i])).val() + '</div>';
                                }
                                toInsert+= '<div class="Cell Edit"><a class="EditItem Button ShortBtn">E</a><a class="SaveItem Button ShortBtn">Z</a><a class="RemoveItem Button ShortBtn">X</a></div></li>';
                                $(toInsert).insertAfter($('.ItemList .Head'));

                }
                else{
                    alert('wrong data');
                }                
    });

    
    $(document).on('click','#getAll', function(){
             $('.ItemList .Head').siblings().remove();
             var myDataObject = {action:'getAll'};
                     $.ajax({
			url: 'Questions-sql.php',
			data: myDataObject,
                        dataType:'json',
			success: function(data){
                            
                            for(var i=1;i<Object.keys(data).length + 1;i++)
                            {
                                var toInsert = '<li class="Item">';
                                for(var j=0;j<8;j++)
                                {
                                     toInsert+='<div class="Cell '+QDatas[j]+'">' +data['Question ' + i][QDatas[j]] +'</div>';
                                }
                                toInsert+='<div class="Cell Edit"><a class="EditItem Button ShortBtn">E</a><a class="SaveItem Button ShortBtn">Z</a><a class="RemoveItem Button ShortBtn">X</a></div></li>'
                                console.log(toInsert);
                                $(toInsert).insertAfter($('.ItemList .Head'));
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                        }
		});           
    });
    
    $(document).on('click','.Edit .RemoveItem', function(){
       console.log($(this).parent().parent().children('.id').text());
        
       var rowToDelete = {action:'deleteRow',id:$(this).parent().parent().children('.id').text()};
       if (confirm('Are you sure you want to delete this row from the database?')) {
           ajaxCall(rowToDelete,function(data){
           console.log(data);
            });
            $(this).parent().parent().remove();
            } else {
                alert('omfg make up ur mind');
            }
    });
      
    $(document).on('click', '.EditItem', function(){
        var itemID = $(this).parent().parent().children('.Nr').text();
        var myNewInputs = '<li class="editInputs" id="forId'+itemID +'"><input type="text" name="Level" id="qlevel"><input type="text" name="Qval" id="qqval"><input type="text" name="Answer1" id="qans1"><input type="text" name="Answer2" id="qans2"><input type="text" name="Answer3" id="qans3"><input type="text" name="Answer4" id="qans4"><input type="text" name="Correct" id="qcorrect"></li>';
        $(myNewInputs).insertAfter($(this).parent().parent());
        
        if ($(this).hasClass('Active')) {
            $(this).removeClass('Active').next('.SaveItem').hide();          
        }
        else {            
            $(this).addClass('Active').next('.SaveItem').css('display', 'inline-block');
        }
    });   
    $(document).on('click', '.SaveItem', function(){
        var myCache = $('#forId'); 
        var id = $(this).parent().parent().children('.id').text();         
        var level = ($(myCache).children('#qlevel').val() === "" ? $(myCache).prev().children('.level').text() : $(myCache).children('#qlevel').val());
        var qval = ($(myCache).children('#qqval').val() === "" ? $(myCache).prev().children('.qval').text() : $(myCache).children('#qqval').val());
        var ans1 = ($(myCache).children('#qans1').val() === "" ? $(myCache).prev().children('.ans1').text() : $(myCache).children('#qans1').val());
        var ans2 = ($(myCache).children('#qans2').val() === "" ? $(myCache).prev().children('.ans2').text() : $(myCache).children('#qans2').val());
        var ans3 = ($(myCache).children('#qans3').val() === "" ? $(myCache).prev().children('.ans3').text() : $(myCache).children('#qans3').val());
        var ans4 = ($(myCache).children('#qans4').val() === "" ? $(myCache).prev().children('.ans4').text() : $(myCache).children('#qans4').val());
        var correct = ($(myCache).children('#qcorrect').val() === "" ? $(myCache).prev().children('.correct').text() : $(myCache).children('#qcorrect').val());
        var myQData= {action:'modify',id:id,qval: qval,
                    level:level, ans1:ans1, 
                    ans2:ans2, ans3:ans3, 
                    ans4:ans4, correct:correct};
        ajaxCall(myQData,function(answer){
        });
        $(myCache).prev().children('.level').text(level);
        $(myCache).prev().children('.qval').text(qval);
        $(myCache).prev().children('.ans1').text(ans1);
        $(myCache).prev().children('.ans2').text(ans2);
        $(myCache).prev().children('.ans3').text(ans3);
        $(myCache).prev().children('.ans4').text(ans4);
        $(myCache).prev().children('.correct').text(correct);
        $(myCache).remove();
        alert('Changes saved!');
        $(this).hide().prev('.EditItem').removeClass('Active').parents('li.Item').children().find('input').addClass('Disabled').attr('disabled', 'disabled');
            });
 $(document).on('click', '.Edit .Active', function(){
        var itemID = '#forId'+$(this).parent().parent().children('.Nr').text();
        $(itemID).remove();
        $(itemID).remove();
        alert('Changes have not been saved!');
    });
});

var QDatas =['id','level', 'qval', 'ans1', 'ans2', 'ans3', 'ans4', 'correct'];


function ajaxCall(dataObject,successHandler){
		$.ajax({
			url: 'Questions-sql.php',
			data: dataObject,
			success: successHandler,
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                        }
		});
	}
	




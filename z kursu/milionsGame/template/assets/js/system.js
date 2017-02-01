$(function(){
    $(document).on('click','#addToBase', function(){
		var qData = $('#addToBase').parent().parent();
                if(parseInt($(qData.find('#QuestionCorrect')).val())<5 && parseInt($(qData.find('#QuestionCorrect')).val())>0
                        && parseInt($(qData.find('#QuestionLevel')).val()) >0 && parseInt($(qData.find('#QuestionLevel')).val())< 15)
                {
                var myDataObject = {action:'add',id:'new', qval: ($(qData.find('#QuestionValue')).val()),
                    level:parseInt($(qData.find('#QuestionLevel')).val()), ans1:($(qData.find('#QuestionAnswer1')).val()), 
                    ans2:($(qData.find('#QuestionAnswer2')).val()), ans3:($(qData.find('#QuestionAnswer3')).val()), 
                    ans4:($(qData.find('#QuestionAnswer4')).val()), correct:parseInt($(qData.find('#QuestionCorrect')).val())};
                ajaxCall(myDataObject, function(data){
                   alert(data);
                });
                
                var toInsert = '<li class="Item"><div class="Cell Nr">new</div><div class="Cell Level">';
                                toInsert+= $(qData.find('#QuestionLevel')).val() + '</div><div class="Cell Value">';
                                toInsert+= $(qData.find('#QuestionValue')).val() + '</div><div class="Cell Answers Ans1">';
                                toInsert+= $(qData.find('#QuestionAnswer1')).val() + '</div><div class="Cell Answers Ans2">';
                                toInsert+= $(qData.find('#QuestionAnswer2')).val() + '</div><div class="Cell Answers Ans3">';
                                toInsert+= $(qData.find('#QuestionAnswer3')).val() + '</div><div class="Cell Answers Ans4">';
                                toInsert+= $(qData.find('#QuestionAnswer4')).val() + '</div><div class="Cell Correct">';
                                toInsert+= $(qData.find('#QuestionCorrect')).val() +'</div><div class="Cell Edit"><a class="EditItem Button ShortBtn">E</a><a class="SaveItem Button ShortBtn">Z</a><a class="RemoveItem Button ShortBtn">X</a></div></li>';
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
                            console.log(data);
                           
                            
                            for(var i=1;i<Object.keys(data).length + 1;i++)
                            {
                                var toInsert = '<li class="Item"><div class="Cell Nr">';
                                toInsert+= data['Question ' + i]['id'] + '</div><div class="Cell Level">';
                                toInsert+= data['Question ' + i]['level'] + '</div><div class="Cell Value">';
                                toInsert+= data['Question ' + i]['qval'] + '</div><div class="Cell Answers Ans1">';
                                toInsert+= data['Question ' + i]['ans1'] + '</div><div class="Cell Answers Ans2">';
                                toInsert+= data['Question ' + i]['ans2'] + '</div><div class="Cell Answers Ans3">';
                                toInsert+= data['Question ' + i]['ans3'] + '</div><div class="Cell Answers Ans4">';
                                toInsert+= data['Question ' + i]['ans4'] + '</div><div class="Cell Correct">';
                                toInsert+= data['Question ' + i]['correct'] +'</div><div class="Cell Edit"><a class="EditItem Button ShortBtn">E</a><a class="SaveItem Button ShortBtn">Z</a><a class="RemoveItem Button ShortBtn">X</a></div></li>';
                                $(toInsert).insertAfter($('.ItemList .Head'));
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                        }
		});           
    });
    
    $(document).on('click','.Edit .RemoveItem', function(){
       var rowToDelete = {action:'deleteRow',id:$(this).parent().parent().children('.Nr').text()};
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
        var myNewInputs = '<li class="editInputs" id="forId'+itemID +'"><input type="text" name="Level" id="Level"><input type="text" name="Qval" id="Qval"><input type="text" name="Answer1" id="Answer1"><input type="text" name="Answer2" id="Answer2"><input type="text" name="Answer3" id="Answer3"><input type="text" name="Answer4" id="Answer4"><input type="text" name="Correct" id="Correct"></li>';
        $(myNewInputs).insertAfter($(this).parent().parent());
        
        if ($(this).hasClass('Active')) {
            $(this).removeClass('Active').next('.SaveItem').hide();          
        }
        else {            
            $(this).addClass('Active').next('.SaveItem').css('display', 'inline-block');
        }
    });   
    $(document).on('click', '.SaveItem', function(){
        var itemID = $(this).parent().parent().children('.Nr').text();
        var myCache = $('#forId' + itemID);        
        var QLevel = ($(myCache).children('#Level').val() === "" ? $(myCache).prev().children('.Level').text() : $(myCache).children('#Level').val());
        var Qvalue = ($(myCache).children('#Qval').val() === "" ? $(myCache).prev().children('.Value').text() : $(myCache).children('#Qval').val());
        var QAns1 = ($(myCache).children('#Answer1').val() === "" ? $(myCache).prev().children('.Ans1').text() : $(myCache).children('#Answer1').val());
        var QAns2 = ($(myCache).children('#Answer2').val() === "" ? $(myCache).prev().children('.Ans2').text() : $(myCache).children('#Answer2').val());
        var QAns3 = ($(myCache).children('#Answer3').val() === "" ? $(myCache).prev().children('.Ans3').text() : $(myCache).children('#Answer3').val());
        var QAns4 = ($(myCache).children('#Answer4').val() === "" ? $(myCache).prev().children('.Ans4').text() : $(myCache).children('#Answer4').val());
        var QCorrect = ($(myCache).children('#Correct').val() === "" ? $(myCache).prev().children('.Correct').text() : $(myCache).children('#Correct').val());
        var myQData= {action:'modify',id:itemID,qval: Qvalue,
                    level:QLevel, ans1:QAns1, 
                    ans2:QAns2, ans3:QAns3, 
                    ans4:QAns4, correct:QCorrect};
        ajaxCall(myQData,function(answer){
            console.log(answer);
        });
        $(myCache).prev().children('.Level').text(QLevel);
        $(myCache).prev().children('.Value').text(Qvalue);
        $(myCache).prev().children('.Ans1').text(QAns1);
        $(myCache).prev().children('.Ans2').text(QAns2);
        $(myCache).prev().children('.Ans3').text(QAns3);
        $(myCache).prev().children('.Ans4').text(QAns4);
        $(myCache).prev().children('.Correct').text(QCorrect);
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
	




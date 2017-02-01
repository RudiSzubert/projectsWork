$(function(){
    countPages();
    hidePosts();;
    $(document).on('click','.ajaxButton',function(){
        var str = this.id;
        $.ajax({
                url: "ajaxtest.php",
                data: {'data':str},
                success:function(response){
                   $('.somePost').first().before(response);
                   countPages();
                     hidePosts();
                },
                fail:function(){
                }
                });
    });
    $(document).on('click','.pagNum',function(){
        $('.pagNum').removeClass('current');
        $(this).addClass('current');
        hidePosts();        
    });
    $(document).on('click','#subPost',function(){
        var dt = new Date($.now());
        var newPost='<div class="somePost"><h3>';                
        newPost+=$('#titleArea').val();
        newPost+= '</h3><span>'+ dt.getHours() + ":" + dt.getMinutes() +'</span><img src="avatar.jpg"/><p>';
        newPost+=$('#postArea').val();
        newPost+='</p></div>';
        $('.somePost').first().before(newPost);
                   countPages();
                     hidePosts();
        
    });
});
function hidePosts(){
    var cur = parseInt($('.current').text());
    cur=cur*5 -1;
    var cur2=cur-4;
    $(".somePost").removeClass('notActive');
     $(".somePost:gt("+ cur +")").addClass('notActive');
     if(cur2>=1)
         $(".somePost:lt("+ cur2 +")").addClass('notActive');
}
function countPages(){
    var number=$('.somePost').length - 5*$('.pagNum').length +5;
    while(number>5)
    {
       var numToAdd=parseInt($('.pagNum').last().text())+1;
       $('.pagNum').last().after('-'+'<div class="pagNum">'+ numToAdd + '</div>');
        number-=5;
    }
}

$(document).ready(function(){
    

    var height_now = 0;
    var header = $('.landing').offset().top;
    var guide = $('.guide').offset().top;
    var shop = $('.shop').offset().top;
    var message = $('.message').offset().top;
    $(window).scroll(function(){
        height_now = $('html,body').scrollTop();
        if(height_now != 0) {
            $('.navBar').addClass('show');
        }else {
            $('.navBar').removeClass('show');
        }
    });

    $('.navBar img').click(function(){
        $('html,body').animate({scrollTop:guide},1000);
    });
    $('.navBar ul li#list_first').click(function(){
        $('html,body').animate({scrollTop:header},1000);
    });
    $('.navBar ul li#list_second').click(function(){
        $('html,body').animate({scrollTop:shop},1000);
    });
    $('.navBar ul li#list_third').click(function(){
        $('html,body').animate({scrollTop:message},1000);
    });

    $('.landing .btn').click(function(){
        $('html,body').animate({scrollTop:guide},1000);
    });

    $('.message #submit').click(function(){
        alert('已提交表單');
    });

})
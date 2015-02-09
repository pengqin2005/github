$(document).ready(function(){
    $(".pay_time").each(function(){
        $(this).click(function(){
            $(this).addClass("checked");
            $(this).siblings().removeClass("checked");
            $(this).find(".check_subnail img").css("visibility","visible");
            $(this).siblings().find(".check_subnail img").css("visibility","hidden");
        });
    });

    $("#ths_pay_choice li").eq(0).trigger("click");
});

$(document).ready(function(){

    $("#one_star").click(function(){
        $("#one_star_privilege").show();
        $("#two_star_privilege").hide();
        $("#three_star_privilege").hide();
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");
    });

    $("#two_star").click(function(){
        $("#two_star_privilege").show();
        $("#one_star_privilege").hide();
        $("#three_star_privilege").hide();
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");
    });

    $("#three_star").click(function(){
        $("#three_star_privilege").show();
        $("#two_star_privilege").hide();
        $("#one_pay_list").hide();
        $("#tws_pay_list").hide();
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");
    });

    $("#one_star").trigger("click");
});

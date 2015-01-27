/**
 * Created by Administrator on 2014/12/9.
 */
$(document).ready(function(){
    setInterval(function(){
        var seconds = new Date().getSeconds();
        var sdeg = seconds * 6;
        var srotate = "rotate("+ sdeg +"deg)";
        $("#sec").css("transform", srotate);
    }, 1000);

    setInterval(function(){
        var mins = new Date().getMinutes();
        var mdeg = mins * 6;
        var mrotate = "rotate("+ mdeg +"deg)";
        $("#min").css("transform", mrotate);
    }, 1000);

    setInterval(function(){
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var hdeg = hours * 30 + mins / 2;
        var hrotate = "rotate("+ hdeg +"deg)";
        $("#hour").css("transform", hrotate);
    }, 1000);
});
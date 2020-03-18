$(document).ready(function(){
    var lang = $("#timer").attr("data-lang")
    if ($("#timer")) {
        var getCountdown = function getCountdown() {
    
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;
    
            days = pad(parseInt(seconds_left / 86400));
            seconds_left = seconds_left % 86400;
    
            hours = pad(parseInt(seconds_left / 3600));
            seconds_left = seconds_left % 3600;
    
            minutes = pad(parseInt(seconds_left / 60));
            seconds = pad(parseInt(seconds_left % 60));
            console.log(lang)
            if(lang == "ru"){
                 if (target_date > current_date) {
                countdown.html(`<span>${days}<b>дней</b></span><span>${hours}<b>часов</b></span><span>${minutes}<b>минут</b></span>`);
            } else {
                countdown.html(`<span>0<b>дней</b></span><span>0<b>часов</b></span><span>0<b>минут</b></span>`);
            }
            }
           else if (lang == "en"){
            if (target_date > current_date) {
                countdown.html(`<span>${days}<b>days</b></span><span>${hours}<b>hours</b></span><span>${minutes}<b>minutes</b></span>`);
            } else {
                countdown.html(`<span>0<b>days</b></span><span>0<b>hours</b></span><span>0<b>minutes</b></span>`);
            }
           }
           else if (lang == "cn"){
            if (target_date > current_date) {
                countdown.html(`<span>${days}<b>天</b></span><span>${hours}<b>小時</b></span><span>${minutes}<b>分鐘</b></span>`);
            } else {
                countdown.html(`<span>0<b>天</b></span><span>0<b>小時</b></span><span>0<b>分鐘</b></span>`);
            }
           }
           else if (lang == "tr"){
            if (target_date > current_date) {
                countdown.html(`<span>${days}<b>günler</b></span><span>${hours}<b>saat</b></span><span>${minutes}<b>dakika</b></span>`);
            } else {
                countdown.html(`<span>0<b>günler</b></span><span>0<b>saat</b></span><span>0<b>dakika</b></span>`);
            }
           }
           else if (lang == "id"){
            if (target_date > current_date) {
                countdown.html(`<span>${days}<b>hari</b></span><span>${hours}<b>jam</b></span><span>${minutes}<b>menit</b></span>`);
            } else {
                countdown.html(`<span>0<b>hari</b></span><span>0<b>jam</b></span><span>0<b>menit</b></span>`);
            }
           }
           else if (lang == "sp"){
            if (target_date > current_date) {
                countdown.html(`<span>${days}<b>dias</b></span><span>${hours}<b>horas</b></span><span>${minutes}<b>minutos</b></span>`);
            } else {
                countdown.html(`<span>0<b>dias</b></span><span>0<b>horas</b></span><span>0<b>minutos</b></span>`);
            }
           }
        };
    
        var pad = function pad(n) {
            return (n < 10 ? '0' : '') + n;
        };
    
        var target_date = 1589235720000;
        var days, hours, minutes, seconds;
    
        var countdown = $("#timer");
        getCountdown();
    
        setInterval(function () {
            getCountdown();
        }, 1000);
    }
})


function fadeIn(){
    if($(window).innerWidth() > 992){
        if($(".fade-block").length){
		var currentPosition = $(window).scrollTop() + $(window).innerHeight();
	$(".fade-block").each(function(){
        if($(this).hasClass("footer")){
            if($(this).offset().top < currentPosition - 50){
                $(this).addClass("active")
            }
        }
        else{
            if($(this).offset().top < currentPosition - 300){
			$(this).addClass("active")
		}
        }
	
	})
	}
    }
	
	
}


$(document).scroll(function(){
	fadeIn();
})
$(document).ready(function(){
	fadeIn();
})

$(".coockies-wr .button").click(function(){
    $(".coockies-wr").addClass("hidden-block")
})
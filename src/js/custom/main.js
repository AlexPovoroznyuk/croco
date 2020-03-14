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
        if (target_date > current_date) {
            countdown.html(`<span>${days}<b>days</b></span><span>${hours}<b>hours</b></span><span>${minutes}<b>minutes</b></span>`);
        } else {
            countdown.html(`<span>0<b>days</b></span><span>0<b>hours</b></span><span>0<b>minutes</b></span>`);
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


$(".modal .close-trigger").click(function(){
	$(".thk-modal").removeClass("active");
	$(".err-modal").removeClass("active");
	$(".subscr-modal").removeClass("active");
	$("body").removeClass("modal-open");
})


$('.subscribe-wr form').on('submit', function (e) {
	e.preventDefault()
	
	if (!/^[A-Za-z0-9][A-Za-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test($(this).find("input").val())) {
		$(this).find("input").closest(".input-item").addClass("validation-error");
	}
	else{
		$(this).find("input").closest(".input-item").removeClass("validation-error");
		var emailData = new FormData();
		emailData.append("email", "" + $(this).find("input").val());
		$.ajax({
			url: $(this).attr('action'),
			type: 'POST',
			contentType: false,
			processData: false,
			data: emailData,

			success: function success(data) {
				$(".overlay").addClass("hide")
				$(".thk-modal").addClass("active");
					$("body").addClass("modal-open");
			},
			error: function error(xhr, err, data) {
				$(".err-modal").addClass("active");
					$("body").addClass("modal-open");
					$(".overlay").addClass("hide")
			}
		});
	}

	
	
	
});


var phone = function(val){
		return /^(\s*)?(\+)?([-()]?\d[-()]?){10,14}(\s*)?$/.test(val);
}


var sendForm;
$(".subscribe-form").on("submit", function(e){
	e.preventDefault();
	var thisForm = $(this);
	sendForm=true;
	$(this).find(".reqiered-field").each(function(){

		if($(this).val() ==""){
			$(this).closest(".input-item").addClass("validation-error");
			$(this).closest(".input-item").find(".error span").html(EmptyError);
			sendForm=false;
		}
		else if($(this).attr("name") == "email"){
			if($(this).val() ==""){
				$(this).closest(".input-item").addClass("validation-error");
				$(this).closest(".input-item").find(".error span").html(EmptyError);
				sendForm=false;
			}
			else if(!(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test($(this).val()))){
				$(this).closest(".input-item").addClass("validation-error");
				$(this).closest(".input-item").find(".error span").html(EmailError);
				sendForm=false;
			}
			else{
				$(this).closest(".input-item").removeClass("validation-error");
			}
		}
		else if($(this).attr("data-name") == "tg"){

			if(!tgValidation($(this).val())){
				$(this).closest(".input-item").addClass("validation-error");
				$(this).closest(".input-item").find(".error span").html(TgError);
				sendForm=false;
			}
			else{
				$(this).closest(".input-item").removeClass("validation-error");
			}
		}
		else if($(this).attr("data-name") == "link"){
			
			if(!urlValidation($(this).val())){
				$(this).closest(".input-item").addClass("validation-error");
				$(this).closest(".input-item").find(".error span").html(UrlError);
				sendForm=false;
			}
			else{
				$(this).closest(".input-item").removeClass("validation-error");
			}
		}
		else{
			$(this).closest(".input-item").removeClass("validation-error");
		}
	});
	if(sendForm){
		var that = $(this);
		var formData = new FormData(that.get(0));
		$.ajax({
			url: $(this).attr('action'),
			type:'POST',
			contentType: false,
			processData: false,
			data: formData,
			
			success : function( data ) {
					$(".subscr-modal").removeClass("active");
					$(".thk-modal").addClass("active");
					$("body").addClass("modal-open");	
			},
			error   : function( xhr, err , data ) {
					$(".subscr-modal").removeClass("active");
					$(".err-modal").addClass("active");
					$("body").addClass("modal-open");

				
			}
		});
	}
});
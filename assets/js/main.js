$(document).ready(function() {

	var navHeight = $('nav').height();
	var windowHeight = $(window).height();

	$('.intro-section').css('padding-top', navHeight)
	$('.jumbotron').css('height', windowHeight);

	$(window).scroll(function() {

		if($(window).width() > 600) {
			var height = $(window).scrollTop();
			if(height > 500) {
				$('.back-to-top i').fadeIn();
			} else {
				$('.back-to-top i').fadeOut();
			}
		}
	});

	$('nav a').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});

	if($('.back-to-top i').css('display') !== 'none') {
		$('[data-toggle="tooltip"]').tooltip();
	}

	// http://api.openweathermap.org/data/2.5/forecast/daily?q=Geneva&mode=json&units=metric&cnt=7&appid=931c6d7de465d9508cd249f5eb74b3ae

	var api = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Geneva,CH&mode=json&units=metric&cnt=7&appid=931c6d7de465d9508cd249f5eb74b3ae';
	$.getJSON(api, function(response){
		console.log(response);
		console.log(response.list);
		response.list.forEach(function(day) {
			console.log(day.temp.day);
			console.log("id", day.weather[0].id);
			var weekDay = moment().weekday();
			var currentDayIndex = response.list.indexOf(day);
			var currentDayInt;
			var currentDayString;
			switch(currentDayIndex) {
				case 0:
					currentDayInt = weekDay;
					break;
				case 1:
					currentDayInt = weekDay+1;
					break;
				case 2:
					currentDayInt = weekDay+2;
					break;
				case 3:
					currentDayInt = weekDay+3;
					break;
				case 4:
					currentDayInt = weekDay+4;
					break;
				case 5:
					currentDayInt = weekDay+5;
					break;
				case 6:
					currentDayInt = weekDay+6;
					break;
			}

			if(currentDayInt > 7) {
				currentDayInt -= 7;
			}

			switch(currentDayInt) {
				case 1:
					currentDayString = "Måndag";
					break;
				case 2:
					currentDayString = "Tisdag";
					break;
				case 3:
					currentDayString = "Onsdag";
					break;
				case 4:
					currentDayString = "Torsdag";
					break;
				case 5:
					currentDayString = "Fredag";
					break;
				case 6:
					currentDayString = "Lördag";
					break;
				case 7:
					currentDayString = "Söndag";
					break;
			}

			$(".temp").append("<div class='weather-day' style='display:inline-block;'>"+"<p class='weather-dayname'>"+currentDayString+"</p>"+"<i class='weather-icon wi wi-owm-"+day.weather[0].id+"'></i>"+"<p class='temperature'>"+day.temp.day+" &deg;C</p>"+"</div>");
		});



	});


});

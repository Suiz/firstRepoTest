// JavaScript Document

var backgroundChange = false;

function openTimer()
{
	if ( document.getElementById('timer-content').style.height != 'auto' )
		document.getElementById('timer-content').style.height = 'auto';
	else
		document.getElementById('timer-content').style.height = '0';
		
	displayDate();
}

function displayDate()
{
	var todaysDate= new Date();
    document.getElementById('timer-content').innerHTML = "Today's Date is: " + todaysDate;
	
	countDownTimer();
}

function changeArticleBackground()
{
	if (backgroundChange == false)
	{
		document.body.style.background= "#FFF url(../Images/hardingLayer_0013_background.png) left top repeat-x";
		document.getElementById('content').style.backgroundColor = "#000";
		backgroundChange = true;
	}
	else
	{
		document.body.style.background= "#d0cf9f url(../Images/hardingLayer_0013_background.png) left top repeat-x";
		document.getElementById('content').style.backgroundColor = "#FFF";
		backgroundChange = false;
	}
}

function askQuestion()
{
	var url = location.href;
	window.alert(url.substr(url.lastIndexOf('/') + 1));
}

function countDownTimer()
{
	var worldCupDate = new Date('06/12/2014 12:01 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
	var _year = _day * 365;
    var timer;

    function showRemaining() {
        var todaysDate = new Date();
        var distance = worldCupDate - todaysDate;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('timer-content').innerHTML = 'JUEGUEN MUCHACHOS!';

            return;
        }
        var years = Math.floor(distance / _year);
		var days = Math.floor((distance % _year) / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

		document.getElementById('timer-content').innerHTML = "Today's Date is: " + todaysDate;
        document.getElementById('timer-content').innerHTML += " and we're " + years + "years ";
        document.getElementById('timer-content').innerHTML += days + "days ";
        document.getElementById('timer-content').innerHTML += hours + "hrs ";
        document.getElementById('timer-content').innerHTML += minutes + "mins ";
        document.getElementById('timer-content').innerHTML += seconds + "secs from the 2014 World Cup in Brazil";
    }

    timer = setInterval(showRemaining, 1000);
}
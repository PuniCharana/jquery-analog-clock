$(document).ready(function(){
	function start(){
		var date = new Date();
		var second = date.getSeconds()*6;
		var minute = date.getMinutes()*6;
		var hour = date.getHours()*30;
		if(second >= 300){
			minute = (date.getMinutes()*6)+6;
		}else if(second >= 240){
			minute = (date.getMinutes()*6)+5;
		}else if(second >= 180){
			minute = (date.getMinutes()*6)+4;
		}else if(second >= 120){
			minute = (date.getMinutes()*6)+3;
		}else if(second >= 60){
			minute = (date.getMinutes()*6)+2;
		}else{
			minute = (date.getMinutes()*6)+1;
		}

		if(minute >= 180){
			hour = (date.getHours()*30)+15;
		}
		$('#foo-second').css({ 
			'-webkit-transform' : 'rotate('+ second + 'deg)',
		       '-moz-transform' : 'rotate('+ second +'deg)',  
		        '-ms-transform' : 'rotate('+ second +'deg)',  
		         '-o-transform' : 'rotate('+ second +'deg)',  
		            'transform' : 'rotate('+ second +'deg)' 
		});

		$('#foo-minute').css({ 
			'-webkit-transform' : 'rotate('+ minute + 'deg)',
		       '-moz-transform' : 'rotate('+ minute +'deg)',  
		        '-ms-transform' : 'rotate('+ minute +'deg)',  
		         '-o-transform' : 'rotate('+ minute +'deg)',  
		            'transform' : 'rotate('+ minute +'deg)' 
		});

		$('#foo-hour').css({ 
			'-webkit-transform' : 'rotate('+ hour + 'deg)',
		       '-moz-transform' : 'rotate('+ hour +'deg)',  
		        '-ms-transform' : 'rotate('+ hour +'deg)',  
		         '-o-transform' : 'rotate('+ hour +'deg)',  
		            'transform' : 'rotate('+ hour +'deg)' 
		});
		setTimeout(function() { start(second+6); },1000);
	}
	start();
})
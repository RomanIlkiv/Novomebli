$(document).ready(function () {
	var photos = ['img/slide_1.jpg', 'img/slide_7.jpg', 'img/slide_2.jpg',
	'img/slide_8.jpg', 'img/slide_3.jpg', 'img/slide_9.jpg','img/slide_4.jpg',
	'img/slide_5.jpg','img/slide_6.jpg']; 
	var len = photos.length;
	var spans = '';
	var j = 0;

	for(i=0; i < len; i++) {
		var circle = '<span class="circle" data-number="'+i+'"></span>';
		spans += circle;
	}

	$('#all_circles').html(spans);
	$('#photo img').attr('src', photos[0]);
	
	function rightClick() {
		j++;
		if (j == len) {
			j = 0;
		}
		$('#all_circles span').css('background', '#ff481c');
		$('#all_circles span:nth-child('+(j+1)+')').css('background', 'black');
		$('#photo img').attr('src', photos[j-1]).hide();
		$('#photo img').attr('src', photos[j]);
		$("#photo img").fadeIn(500);	
	}

	$('.arrow-right').click(function() {
		rightClick();
	});
	
	setInterval(rightClick, 5000);

	$('.arrow-left').click(function() {		
		if (j == 0) {
			j = len;
		}
		j--;
		$('#all_circles span').css('background', '#ff481c');
		$('#all_circles span:nth-child('+(j+1)+')').css('background', 'black');
		$('#photo img').attr('src', photos[j+1]).hide();
		$('#photo img').attr('src', photos[j]);
		$("#photo img").fadeIn(500);
	});
	
	$('.circle').click(function() {
		var number = $(this).attr('data-number');
		number = parseInt(number);
		j = number;
		$('#photo img').hide();
		$('#photo img').attr('src', photos[number]);
		$("#photo img").fadeIn(500);
		$('#all_circles span').css('background', '#ff481c');
		$('#all_circles span:nth-child('+(number+1)+')').css('background', 'black');
	});
});
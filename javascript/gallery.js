$(document).ready(function () {
	var photos = ['img/sklo/1.jpg', 'img/sklo/2.jpg',
	'img/sklo/3.jpg','img/sklo/4.jpg',
	'img/sklo/5.jpg','img/sklo/6.jpg','img/sklo/7.jpg'];
	var galleryLen = photos.length;
	var images = '';

	for(i=0; i < galleryLen; i++) {
		var gallery = '<img src="'+ photos[i] +'" class="gallery_img" data-number="'+i+'">';
		images += gallery;
	}
	
	$('#all_photos').html(images);
	
	$('#fartuhi_gallery #all_photos img').click(function() {
		$(".open_photo img").attr("src", $(this).attr("src"));
		$(".open_photo img").attr("data-number", $(this).attr("data-number"));
		var width = $(".open_photo").width();
		$(".open_photo").fadeIn(500);
		$(".after").fadeIn(500);
	});
	
	$(".after, .open_photo").click(function() {
		$(".after").fadeOut(500);
		$(".open_photo").fadeOut(500);
	});
	
	$(".open_photo img").click(function() {
		var j = parseInt($(this).attr("data-number"));
		j++;
		if(j == galleryLen) {
			j = 0;
		}
		$(this).attr("data-number", j);
		$(".open_photo img").attr("src", photos[j]);
		return false;
	});
});
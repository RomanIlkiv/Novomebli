$(document).ready(function () {
	/*____________________GALLERY FRONT_________________________*/
	var kitchen_photos1 = ["img/kitchen%20gallery/1.jpg","img/kitchen%20gallery/2.jpg","img/kitchen%20gallery/3.jpg","img/kitchen%20gallery/4.jpg","img/kitchen%20gallery/5.jpg","img/kitchen%20gallery/6.jpg","img/kitchen%20gallery/7.jpg","img/kitchen%20gallery/8.jpg","img/kitchen%20gallery/9.jpg","img/kitchen%20gallery/10.jpg","img/kitchen%20gallery/11.jpg","img/kitchen%20gallery/12.jpg","img/kitchen%20gallery/13.jpg","img/kitchen%20gallery/14.jpg","img/kitchen%20gallery/15.jpg","img/kitchen%20gallery/17.jpg","img/kitchen%20gallery/18.jpg","img/kitchen%20gallery/19.jpg","img/kitchen%20gallery/20.jpg","img/kitchen%20gallery/21.jpg","img/kitchen%20gallery/22.jpg","img/kitchen%20gallery/23.jpg","img/kitchen%20gallery/24.jpg","img/kitchen%20gallery/25.jpg","img/kitchen%20gallery/26.jpg","img/kitchen%20gallery/27.jpg","img/kitchen%20gallery/28.jpg","img/kitchen%20gallery/29.jpg","img/kitchen%20gallery/30.jpg","img/kitchen%20gallery/31.jpg","img/kitchen%20gallery/32.jpg","img/kitchen%20gallery/33.jpg","img/kitchen%20gallery/34.jpg","img/kitchen%20gallery/35.jpg","img/kitchen%20gallery/36.jpg","img/kitchen%20gallery/37.jpg","img/kitchen%20gallery/38.jpg","img/kitchen%20gallery/39.jpg","img/kitchen%20gallery/40.jpg","img/kitchen%20gallery/41.jpg","img/kitchen%20gallery/42.jpg","img/kitchen%20gallery/43.jpg","img/kitchen%20gallery/44.jpg","img/kitchen%20gallery/45.jpg","img/kitchen%20gallery/46.jpg","img/kitchen%20gallery/47.jpg","img/kitchen%20gallery/48.jpg","img/kitchen%20gallery/49.jpg","img/kitchen%20gallery/50.jpg","img/kitchen%20gallery/52.jpg","img/kitchen%20gallery/53.jpg","img/kitchen%20gallery/54.jpg","img/kitchen%20gallery/55.jpg","img/kitchen%20gallery/56.jpg","img/kitchen%20gallery/57.jpg","img/kitchen%20gallery/58.jpg","img/kitchen%20gallery/59.jpg","img/kitchen%20gallery/60.jpg","img/kitchen%20gallery/61.jpg","img/kitchen%20gallery/62.jpg","img/kitchen%20gallery/63.jpg","img/kitchen%20gallery/64.jpg","img/kitchen%20gallery/65.jpg","img/kitchen%20gallery/66.jpg","img/kitchen%20gallery/67.jpg","img/kitchen%20gallery/68.jpg","img/kitchen%20gallery/69.jpg","img/kitchen%20gallery/70.jpg","img/kitchen%20gallery/71.jpg","img/kitchen%20gallery/72.jpg","img/kitchen%20gallery/73.jpg","img/kitchen%20gallery/74.jpg","img/kitchen%20gallery/75.jpg","img/kitchen%20gallery/76.jpg","img/kitchen%20gallery/77.jpg","img/kitchen%20gallery/78.jpg","img/kitchen%20gallery/79.jpg","img/kitchen%20gallery/80.jpg","img/kitchen%20gallery/81.jpg","img/kitchen%20gallery/82.jpg","img/kitchen%20gallery/83.jpg"];
	var kitchen1Len = kitchen_photos1.length;
	var kitchen1 = '';
	var arr_kitchen = [];
	
	for(i=0; i < kitchen1Len; i++) {
		var gallery1 = '<img src="'+ kitchen_photos1[i] +'" class="kitchen_img1" data-number="'+i+'">';
		kitchen1 += gallery1;
		var title = kitchen_photos1[i].substr(16, kitchen_photos1[i].length);
		title = title.substr(0, title.length - 4);
		arr_kitchen.push(title.replace(/%20/g, " "));
	}
	
	$('#kitchen_photos').html(kitchen1);
	
	$('#kitchen_photos img').click(function() {
		$("#kitchen .open_photo img").attr("src", $(this).attr("src"));
		$("#kitchen .open_photo img").attr("data-number", $(this).attr("data-number"));
		$("#kitchen .open_photo p").html(arr_kitchen[$(this).attr("data-number")]);
		$("#kitchen .open_photo").fadeIn(500);
		$(".after").fadeIn(500);
	});
	
	$("#kitchen .after, #kitchen .open_photo").click(function() {
		$(".after").fadeOut(500);
		$("#kitchen .open_photo").fadeOut(500);
	});
	
	$("#kitchen .open_photo img").click(function() {
		var k = parseInt($(this).attr("data-number"));
		k++;
		if(k == kitchen1Len) {
			k = 0;
		}
		$(this).attr("data-number", k);
		$("#kitchen .open_photo img").attr("src", kitchen_photos1[k]);
		$("#kitchen .open_photo p").html(arr_kitchen[k]);
		return false;
	});
});
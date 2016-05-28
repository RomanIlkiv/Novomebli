$(document).ready(function () {
	/*____________________GALLERY FRONT_________________________*/
	var front_photos1 = ["img/BRW%20Front/32nd%20Malbec%20Avenue.jpg", "img/BRW%20Front/33rd%20Saperavi%20Avenue%20fornir.jpg", "img/BRW%20Front/33rd%20Saperavi%20Avenue%20lakier.jpg", "img/BRW%20Front/34th%20Park%20Avenue.jpg", "img/BRW%20Front/35th%20Park%20Avenue.jpg", "img/BRW%20Front/36th%20Avenue.jpg", "img/BRW%20Front/36th%20Norde%20Avenue%20z%20uchwytem%20L0.jpg", "img/BRW%20Front/36th%20Norde Avenue%20z%20uchwytem%20L146.jpg", "img/BRW%20Front/36th%20Norde%20Avenue.jpg", "img/BRW%20Front/37th%20Savana%20Avenue.jpg", "img/BRW%20Front/38th%20Elysee%20Avenue%20z%20uchwytem%20L0.jpg", "img/BRW%20Front/38th%20Elysee%20Avenue.jpg", "img/BRW%20Front/39th%20Candia%20Avenue.jpg", "img/BRW%20Front/43th%20Luvak%20Avenue.jpg", "img/BRW%20Front/45th%20Bevely%20Avenue.jpg", "img/BRW%20Front/77th%20Simple%20Street.jpg", "img/BRW%20Front/81st%20Diona%20Street.jpg", "img/BRW%20Front/84th%20Board%20Street.jpg", "img/BRW%20Front/85th%20Play%20Street%20z%20aplikacją.jpg", "img/BRW%20Front/85th%20Play%20Street.jpg", "img/BRW%20Front/86th%20Secret%20Street.jpg", "img/BRW%20Front/87th%20Smooth%20Street.jpg", "img/BRW%20Front/88th%20Twin%20Street.jpg", "img/BRW%20Front/91st%20Court%20Street.jpg", "img/BRW%20Front/98th%20Elysee%20Street%20z%20uchwytem%20L0.jpg", "img/BRW%20Front/98th%20Elysee%20Street.jpg", "img/BRW%20Front/99th%20Mile%20Street.jpg", "img/BRW%20Front/Ambries.jpg", "img/BRW%20Front/Artycja.jpg", "img/BRW%20Front/Camello.jpg", "img/BRW%20Front/Cztery%20Pory%20Roku.jpg", "img/BRW%20Front/Diadema.jpg", "img/BRW%20Front/Draggo.jpg", "img/BRW%20Front/Dwa%20Szczęścia.jpg", "img/BRW%20Front/Dziewiąta%20Symfonia.jpg", "img/BRW%20Front/Dziewiętnasty%20Wiek.jpg", "img/BRW%20Front/Frigg.jpg", "img/BRW%20Front/Gladio.jpg", "img/BRW%20Front/Imperor.jpg", "img/BRW%20Front/Insygnata.jpg", "img/BRW%20Front/Kantata.jpg", "img/BRW%20Front/Kasetta.jpg", "img/BRW%20Front/Nessa.jpg", "img/BRW%20Front/Ósma%20Pokusa.jpg", "img/BRW%20Front/Pasjonata.jpg", "img/BRW%20Front/Pierwsza%20Miłość.jpg", "img/BRW%20Front/Rubia.jpg", "img/BRW%20Front/Saga.jpg", "img/BRW%20Front/Siódme%20Niebo.jpg", "img/BRW%20Front/Troniusz.jpg", "img/BRW%20Front/Trzy%20Życzenia.jpg", "img/BRW%20Front/Tuzin%20Róż.jpg"];
	var front1Len = front_photos1.length;
	var front1 = '';
	var arr_front = [];
	
	for(i=0; i < front1Len; i++) {
		var gallery1 = '<img src="'+ front_photos1[i] +'" class="front_img1" data-number="'+i+'">';
		front1 += gallery1;
		var title = front_photos1[i].substr(16, front_photos1[i].length);
		title = title.substr(0, title.length - 4);
		arr_front.push(title.replace(/%20/g, " "));
	}
	
	$('#front_photos').html(front1);
	
	$('#front_photos img').click(function() {
		$("#BRW .open_photo img").attr("src", $(this).attr("src"));
		$("#BRW .open_photo img").attr("data-number", $(this).attr("data-number"));
		$("#BRW .open_photo p").html(arr_front[$(this).attr("data-number")]);
		$("#BRW .open_photo").fadeIn(500);
		$(".after").fadeIn(500);
	});
	
	$("#BRW .after, #BRW .open_photo").click(function() {
		$(".after").fadeOut(500);
		$("#BRW .open_photo").fadeOut(500);
	});
	
	$("#BRW .open_photo img").click(function() {
		var k = parseInt($(this).attr("data-number"));
		k++;
		if(k == front1Len) {
			k = 0;
		}
		$(this).attr("data-number", k);
		$("#BRW .open_photo img").attr("src", front_photos1[k]);
		$("#BRW .open_photo p").html(arr_front[k]);
		return false;
	});
	/*________________________Drepol gallery_____________________*/
	var front_photos2 = ["img/drewpol%20Front/Ateny.jpg","img/drewpol%20Front/Bach.jpg","img/drewpol%20Front/Barcelona.jpg","img/drewpol%20Front/Beethoven.jpg","img/drewpol%20Front/Bellini.jpg","img/drewpol%20Front/Berlin.jpg","img/drewpol%20Front/Bizet.jpg","img/drewpol%20Front/Bruksela.jpg","img/drewpol%20Front/Budapeszt.jpg","img/drewpol%20Front/Chopin.jpg","img/drewpol%20Front/Czajkowski.jpg","img/drewpol%20Front/Dworzak.jpg","img/drewpol%20Front/Florencja.jpg","img/drewpol%20Front/Gershwin.jpg","img/drewpol%20Front/Haendel.jpg","img/drewpol%20Front/Helsinki.jpg","img/drewpol%20Front/Kopenhaga.jpg","img/drewpol%20Front/Liszt.jpg","img/drewpol%20Front/Lizbona.jpg","img/drewpol%20Front/Londyn.jpg","img/drewpol%20Front/Lutosławski.jpg","img/drewpol%20Front/Malaga.jpg","img/drewpol%20Front/Moniuszko.jpg","img/drewpol%20Front/Mozart.jpg","img/drewpol%20Front/Oslo.jpg","img/drewpol%20Front/Puccini.jpg","img/drewpol%20Front/Ravel.jpg","img/drewpol%20Front/Rossini.jpg","img/drewpol%20Front/Saloniki.jpg","img/drewpol%20Front/Saragossa.jpg","img/drewpol%20Front/Schumann.jpg","img/drewpol%20Front/Sofia.jpg","img/drewpol%20Front/Strauss.jpg","img/drewpol%20Front/Stravinsky.jpg","img/drewpol%20Front/Tokio.jpg","img/drewpol%20Front/Vivaldi.jpg","img/drewpol%20Front/Wagner.jpg","img/drewpol%20Front/Warszawa.jpg","img/drewpol%20Front/Weber.jpg","img/drewpol%20Front/Wieniawski.jpg"];
	var front2Len = front_photos2.length;
	var front2 = '';
	var arr_front2 = [];
	
	for(i=0; i < front2Len; i++) {
		var gallery2 = '<img src="'+ front_photos2[i] +'" class="front_img2" data-number="'+i+'">';
		front2 += gallery2;
		var title = front_photos2[i].substr(20, front_photos2[i].length);
		title = title.substr(0, title.length - 4);
		arr_front2.push(title.replace(/%20/g, " "));
	}
	
	$('#front_photos2').html(front2);
	
	$('#front_photos2 img').click(function() {
		$("#Drewpol .open_photo img").attr("src", $(this).attr("src"));
		$("#Drewpol .open_photo img").attr("data-number", $(this).attr("data-number"));
		$("#Drewpol .open_photo p").html(arr_front2[$(this).attr("data-number")]);
		$("#Drewpol .open_photo").fadeIn(500);
		$(".after").fadeIn(500);
	});
	
	$("#Drewpol .after, #Drewpol .open_photo").click(function() {
		$(".after").fadeOut(500);
		$("#Drewpol .open_photo").fadeOut(500);
	});
	
	$("#Drewpol .open_photo img").click(function() {
		var j = parseInt($(this).attr("data-number"));
		j++;
		if(j == front2Len) {
			j = 0;
		}
		$(this).attr("data-number", j);
		$("#Drewpol .open_photo img").attr("src", front_photos2[j]);
		$("#Drewpol .open_photo p").html(arr_front2[j]);
		return false;
	});
		/*________________________KRONO gallery_____________________*/
	var front_photos3 = ["img/KRONO%20Front/БАКУРІ.jpg","img/KRONO%20Front/ГАВАНА.jpg","img/KRONO%20Front/ГОА.jpg","img/KRONO%20Front/ГОРІХ%20ТРЕВІЗО.jpg","img/KRONO%20Front/ДУБ%20ГРЮНВАЛЬД.jpg","img/KRONO%20Front/КАБРЕРА.jpg","img/KRONO%20Front/КАРАМБОЛЬ.jpg","img/KRONO%20Front/КОКОА.jpg","img/KRONO%20Front/ЛІЧІ.jpg","img/KRONO%20Front/МЕЛАКО.jpg","img/KRONO%20Front/ПАТТАЯ.jpg","img/KRONO%20Front/ТАМАРИНД.jpg"];
	var front3Len = front_photos3.length;
	var front3 = '';
	var arr_front3 = [];
	
	for(i=0; i < front3Len; i++) {
		var gallery3 = '<img src="'+ front_photos3[i] +'" class="front_img3" data-number="'+i+'">';
		front3 += gallery3;
		var title = front_photos3[i].substr(18, front_photos3[i].length);
		title = title.substr(0, title.length - 4);
		arr_front3.push(title.replace(/%20/g, " "));
	}
	
	$('#front_photos3').html(front3);
	
	$('#front_photos3 img').click(function() {
		$("#Krono .open_photo img").attr("src", $(this).attr("src"));
		$("#Krono .open_photo img").attr("data-number", $(this).attr("data-number"));
		$("#Krono .open_photo p").html(arr_front3[$(this).attr("data-number")]);
		$("#Krono .open_photo").fadeIn(500);
		$(".after").fadeIn(500);
	});
	
	$("#Krono .after, #Krono .open_photo").click(function() {
		$(".after").fadeOut(500);
		$("#Krono .open_photo").fadeOut(500);
	});
	
	$("#Krono .open_photo img").click(function() {
		var l = parseInt($(this).attr("data-number"));
		l++;
		if(l == front3Len) {
			l = 0;
		}
		$(this).attr("data-number", l);
		$("#Krono .open_photo img").attr("src", front_photos3[l]);
		$("#Krono .open_photo p").html(arr_front3[l]);
		return false;
	});
});
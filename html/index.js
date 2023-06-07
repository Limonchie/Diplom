function resizeImage(files) {
	var img = document.createElement("img");
	var reader = new FileReader();
	reader.onload = function(e) { 
		img.src = e.target.result;
		img.onload = function() {
			var canvas = document.createElement("canvas");
	        var ctx = canvas.getContext("2d");
	        ctx.drawImage(img, 0, 0);

	        var MAX_WIDTH = 800;
	        var MAX_HEIGHT = 800;
	        var width = img.width;
	        var height = img.height;

	        if (width > height) {
	          if (width > MAX_WIDTH) {
	            height *= MAX_WIDTH / width;
	            width = MAX_WIDTH;
	          }
	        } else {
	          if (height > MAX_HEIGHT) {
	            width *= MAX_HEIGHT / height;
	            height = MAX_HEIGHT;
	          }
	        }
	        canvas.width = width;
	        canvas.height = height;
	        var ctx = canvas.getContext("2d");
	        ctx.drawImage(img, 0, 0, width, height);
	        var dataurl = canvas.toDataURL("image/png");   
	        document.getElementById('image').src = dataurl; 
         
        };

	};
	reader.readAsDataURL(files[0]);
}	

async function init(files) {
	p = document.getElementById('result');
	p.innerHTML = "Работаем...";
	const URL = "model/";
	const modelURL = URL + "model.json";
	const metadataURL = URL + "metadata.json";
	resizeImage(files);

    model = await tmImage.load(modelURL, metadataURL);
    predict();
}

async function predict() {
	
    const predictions = await model.predict(document.getElementById('image'));
	p.innerHTML = "";
	p.innerHTML += '\
	<div class="alert alert-success" role="alert">\
  	Птица определена!\
	</div>';
	
	for (let prediction of predictions) {
		let predict = Math.round(prediction.probability*100);
		if(predict >= 90) {
			switch (prediction.className) {
				
				case "Ястреб тетеревятник":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Yastreb_tetervyatnik).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Ястребиная славка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Yastrebinaya_slavka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Щур":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Shur).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Щегол":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Shegol).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Чиж":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Chij).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Чибис":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Chibis).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Чечётка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Chechetka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Чечевица":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Chechevica).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Чёрный стриж":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Cherny_strij).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Чёрный коршун":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Cherny_korshun).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Чёрный дрозд":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Cherny_drozd).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Чёрная крачка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Chernaya_krachka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Чеглок":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Cheglok).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Чайка чернохвостая":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Chayka_chernoxvostaya).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Хохлатая синица":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Hohlataya_sinica).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Ушастая сова":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Ushastaya_Sova).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Утка мандаринка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Utka_mandarinka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Тетерев":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Teterev).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Сорока":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Soroka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Обыкновенный соловей":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Solovey_obiknoveniy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Соловей красношейка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Solovey_krasnosheyka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Сойка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Soyka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Снегирь обыкновенный":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Snegir).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Скворец обыкновенный":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Skvorec_obiknoveniy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Синяя птица":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Sinyya_ptica).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Синяя мухоловка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Sinyya_muxolovka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Синица большая":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Sinica_bolshaya).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Синехвостка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Sinexvostka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Серая славка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Seraya_slavka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Серая ворона":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Seraya_vorona).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Свиристель":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Sviristil).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Сапсан":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Sapsan).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Рябчик":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Ryabchik).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Рогатый жаворонок":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Rogatiy_javoronok).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Райская мухоловка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Rayskaya_muxolovka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Пустельга обыкновенная":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Pustelga_obiknovennaya).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Пуночка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Punochka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Поползень":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Popolzen).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Перепел обыкновенный":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Perepel_obiknoveniy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Пеночка-теньковка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Penochka_tenkovka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Певчий дрозд":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Pevchiy_drozd).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Орлан-белохвост":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Orlan_beloxvost).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Орёл степной":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Orel_stepnoy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Овсянка обыкновенная":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Ovsyanka_obiknovenaya).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Овсянка дубровник":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Ovsyanka_dubrovnik).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Обыкновенная майна":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Obiknovenaya_mayna).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Мухоловка-пеструшка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Muxolovka_pestruska).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Московка синица":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Moskovka_sinica).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Лысуха":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Lisuxa).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Луговой чекан":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Lugovoy_chekan).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Луговой лунь":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Lugovoy_lun).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Лесной конёк":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Lesnoy_konek).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Лебедь-шипун":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Lebed_shipun).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Лазоревка синица":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Lazorevka_sinica).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Кукушка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Kukushka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Крапивник":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Krapivnik).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Коноплянка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Konoplyanka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Козодой":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Kozodoy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Кобчик":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Kobchik).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Клёст еловик":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Klest_yelovik).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Канюк":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Kanyuk).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Иволга обыкновенная":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Ivolga_obiknovenaya).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Зяблик":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Zyablik).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Золотистая щурка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Zolotistaya_shurka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Зимородок обыкновенный":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Zimorodok_obiknoveniy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Зеленушка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Zelenushka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Зелёная пересмешка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Zelenaya_peresmeshka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Зарянка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Zaryanka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Журавль серый":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Juravl_seriy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Жулан обыкновенный":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Julan_obiknoveniy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Желчная овсянка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Jelchnaya_ovsyanka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Желтогорлая овсянка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Jeltogorlaya_ovsyanka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Жёлтая трясогузка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Jeltaya_tryasoguzka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Жаворонок полевой":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Javoronok_polevoy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Дятел пёстрый":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Dyatel_pestriy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Дубонос обыкновенный":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Dubonos_obiknoveniy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Дрозд-рябинник":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Drozd_ryabinnik).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Дрозд-белобровик":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Drozd_belobrovik).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Домовой сыч":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Domovoy_sich).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Длиннохвостый снегирь":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Dlinoxvostiy_snegir).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Длиннохвостая синица":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Dlinoxvostaya_sinica).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Дергач":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Dergach).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Жаворонок полевой":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Javoronok_polevoy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Грач":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Grach).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Горихвостка обыкновенная":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Gorixvostka_obiknovenaya).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Голубь обыкновенный":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Golub_obiknoveniy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Глухарь":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Gluhar).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Галка обыкновенная":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Galka_obiknovenaya).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Вяхирь":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Vyahir).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Вьюрок":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Vyurok).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Выпь":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Vip).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Ворон":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Voron).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Воробей домовой":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Vorobey_domovoy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Варакушка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Varakushka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Бородатая неясыть":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Borodataya_neyasit).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Беркут":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Berkut).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Белокрылый клест":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Belokriliy_klest).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Белая трясогузка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Belaya_tryasoguzka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Белая лазоревка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Belaya_lazorevka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Белая куропатка":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Belaya_kuropatka).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Бекас":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Bekas).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Аист чёрный":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Aist_cherniy).text+'\
				   </div>\
				  </div>\
				';
				break;
				case "Аист белый":
					p.innerHTML +=
					'\
					<div class="media border py-3 border-primary rounded">\
					<div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вероятности)"+'</h5>\
				    '+JSON.parse(Aist_beliy).text+'\
				   </div>\
				  </div>\
				';
				break;
			}

		}
    }
    if(!p.innerHTML.match(/% вероятности/))
    	p.innerHTML = "Птица не определена";
}
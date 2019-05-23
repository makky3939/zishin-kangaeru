/*-------------------------------------------------------------------------
			Photo.js	
	
	Copyright (C) 2012 震災について考えるサイト All Rights Reserved. by Makky
----------------------------------------------------------------------------*/



/*
search:keyを元にjson.list上での番地を検索
---------------------------------------*/
function search(key){
	var i = 0;
	while(key != json.list[i].name){
		i++;
	}
	//document.write('ok!!' + i);
	return i;
}

/*
writehead:Header情報を出力
---------------------------------------*/
function writehead(){
	/*document.write('<h1>'+json.list[keyNumber].jname+'</h1>');
	document.write('<div class="left">画像提供：計'+eval("json."+key+".spots.length")+'枚<br>');
	for(var i=0; i<eval("json."+key+".data.length");i++){
		document.write('<li>'+eval("json."+key+".data[i].donor")+'</li>');
	}
	if( json.list[keyNumber].by != 'none'){
	document.write('<br><div class="face">取材者の感想：('+json.list[keyNumber].byj+')<table><tr>');
	document.write('<td><img src="img/face/'+json.list[keyNumber].by+'.jpg" width="120" height="170" ></td><td>');
	document.write('<p>'+eval("json."+key+".comment")+'</p>');
	document.write('</td></tr></table></div>');
	}else{
	document.write('<br><br><br><p>この地区の震災状況ですが、地元の方々に当時の事など聞きましたが，やはり、街の人々は驚くほど苦労<br>されたようです。この地区も，私達が考えていた以上に地震の被害は大きく，再発したときに冷静に行動できるよ<br>う心掛けるべきだと思いました。</p>');
	}
	document.write('</div><div class="right"><img src="img/photo/'+json.list[keyNumber].name+'/'+json.list[keyNumber].name+'.jpg"/></div>');
	document.write('<br><br>');
	$("title").text(json.list[keyNumber].jname + "-Photo:震災について考えるサイト");*/
	
	document.write('<a href="photo.html">back</a><h1>'+json.list[keyNumber].jname+'</h1>');
	document.write('<div class="left">画像提供：計'+eval("json."+key+".spots.length")+'枚<br>');
	for(var i=0; i<eval("json."+key+".data.length");i++){
		document.write('<li>'+eval("json."+key+".data[i].donor")+'</li>');
	}
	if( json.list[keyNumber].by != 'none'){
	document.write('<br><div class="face">取材者の感想：('+json.list[keyNumber].byj+')<table><tr>');
	//document.write('<td><img src="img/face/'+json.list[keyNumber].by+'.jpg" width="120" height="170" ></td>');
	document.write('<td><p>'+eval("json."+key+".comment")+'</p>');
	document.write('</td></tr></table></div>');
	}else{
	document.write('<br><br><br><p>この地区の震災状況ですが、地元の方々に当時の事など聞きましたが，やはり、街の人々は驚くほど苦労<br>されたようです。この地区も，私達が考えていた以上に地震の被害は大きく，再発したときに冷静に行動できるよ<br>う心掛けるべきだと思いました。</p>');
	}
	//document.write('</div><div class="right"><img src="img/photo/'+json.list[keyNumber].name+'/'+json.list[keyNumber].name+'.jpg"/></div>');
	document.write('<br><br>');
}

/*
writeImggrid:画像Gridを出力
---------------------------------------*/
function writeImggrid(){
	var status;

	/*for(var j=1; j<=eval("json."+key+".spots.length"); j++){
		var spot = eval("json."+key+".spots[j-1]");
			if(spot.status == 1){
				status = '震災当時';
			}else{
				status = '現在';
			}
	document.write('<a class="fancy" data-fancybox-type="image" data-fancybox-group="'+spot.group+'" href="img/photo/'+json.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'　'+spot.name+' '+status+'の様子">');
	document.write('<div class="photgrid">');
	document.write('<div class="cap">');
	document.write('<img src="img/photo/'+json.list[keyNumber].name+'/' + spot.id + '.jpg" width="239" height="210"/>');
	document.write('<span class="status'+spot.status+'">'+status+'</span>');
	document.write('</div><p>'+spot.name+'</p>');
	document.write('</div></a>');
	}*/
	
	for(var j=1; j<=eval("json."+key+".spots.length"); j++){
		var spot = eval("json."+key+".spots[j-1]");
			if(spot.status == 1){
				status = '震災当時';
			}else{
				status = '現在';
			}
	document.write('<a class="fancy" data-fancybox-type="image" data-fancybox-group="'+spot.group+'" href="img/photo/'+json.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'　'+spot.name+' '+status+'の様子">');
	document.write('<div class="photgrid">');
	document.write('<div class="cap">');
	document.write('<img src="img/photo/'+json.list[keyNumber].name+'/' + spot.id + '.jpg" width="239" height="210"/>');
	document.write('<span class="status'+spot.status+'">'+status+'</span>');
	document.write('</div><p>'+spot.name+'</p>');
	document.write('</div></a>');
	}
}

/*
writelist:市町村リストを出力
---------------------------------------*/
function writelist(){
	var count_img = 0;
	for(var i=0; i<json.list.length; i++){
	
		if(json.list[i].name == 'ami'){
		document.write('<br><div class="point">その他の画像</div><br>');
		}
		document.write('<a href="photo_'+json.list[i].name+'.html"><div class="content_menu">');
		document.write('<h2>'+json.list[i].jname+'</h2><div>');
		//if(i <  20 ){
		//document.write('取材者：'+json.list[i].byj+'　');
		//}
		document.write('画像：'+eval("json."+json.list[i].name+".spots.length")+'枚</div>');
		document.write('</div>');
		document.write('</a><hr>');
		count_img = count_img + eval("json."+json.list[i].name+".spots.length");
	}
	document.getElementById('imgcounter').innerHTML= '画像総数：'+count_img+'枚';
	document.getElementById('imgcontent').innerHTML= '取材地域：'+json.list.length+'箇所';
}

/*
		document.write('<a href="photo_'+json.list[i].name+'.html"><div class="listgrid"><div class="cap">');
		document.write('<img src="img/photo/'+json.list[i].name+'/'+eval("json."+json.list[i].name+".spots[0].id")+'.jpg" width="490" height="380" class="imgcap"><br>');	
		document.write('<h1>'+json.list[i].jname+'</h1><br>');
		document.write('<div>取材者：'+json.list[i].byj+'　');
		document.write('画像：'+eval("json."+json.list[i].name+".spots.length")+'枚</div><br>');
		document.write('</div></div>');
		document.write('</a>');
*/



/*
writeGoogleMap (list
---------------------------------------*/

function initialize() {
	var mc=[];
	var position = new google.maps.LatLng(36.498557,140.371908);
	var op = {zoom: 8,center: position,mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), op);
	for (var i=0;i<=json.list.length;i++) {attachInfoWindow(i);}
function attachInfoWindow(num) {

	var infowindow = new google.maps.InfoWindow();
	var spot = json.list[num];
	var lat = json.list[num].lat;
	var lng = json.list[num].lng;
	var obj = {position: new google.maps.LatLng(lat,lng),map: map};

	var marker = new google.maps.Marker(obj);
	mc.push(marker);
	google.maps.event.addListener(marker, 'click', function (e) {
    infowindow.open(map, marker);
	infowindow.content = 'ここは<a href="photo_'+spot.name+'.html">'+spot.jname+'</a>です';
	});
	}
}

/*
writeGoogleMap (grid
---------------------------------------*/

function initializegrid() {
	var mc=[];
	var position = new google.maps.LatLng(json.list[keyNumber].lat,json.list[keyNumber].lng);
	var op = {zoom: 12,center: position,mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), op);
	for (var i=0;i<=eval("json."+key+".spots.length");i++) {attachInfoWindow(i);}
function attachInfoWindow(num) {

	var infowindow = new google.maps.InfoWindow();
	var spot = eval("json."+key+".spots[num]");
	var lat = spot.lat;
	var lng = spot.lng;
	var obj = {position: new google.maps.LatLng(lat,lng),map: map};

	var marker = new google.maps.Marker(obj);
	mc.push(marker);
	//google.maps.event.addListener(marker, 'click', function (e) {
    //infowindow.open(map, marker);
	//infowindow.content = 'ここは<a href="photo_'+spot.name+'.html">'+spot.jname+'</a>です';
	//});
	}
}






////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


/*--------------------画像資料DataBase---------------------------------------------
var json = 
{
	"list":
		[
		{"jname":"市町村名","name":"市町村名","by":"担当者名","byj":"担当者名"},
		{"jname":"市町村名","name":"市町村名","by":"担当者名","byj":"担当者名"}
		],
	"市町村名":{
		"spots": [
			{"id":"1","name":"名前","code":"住所","status":"1","group":"a"},
			{"id":"2","name":"名前","code":"住所","status":"0","group":"b"}
		],	
		"data":[
			{"donor":"提供者"},
			{"donor":"提供者"}
		],
		"comment":"テキスト"
	}
};
--------------------------------------------------------------------------------*/


var json = 
{
	"list":
		[
		//{"jname":"南三陸町","name":"minamisanriku","by":"3_kobayashi","byj":"Masaki.K."},
		//{"jname":"気仙沼市","name":"kesennuma","by":"3_kobayashi","byj":"Masaki.K."},
		//{"jname":"仙台市","name":"sendai","by":"3_kobayashi","byj":"Masaki.K."},
		
		{"jname":"稲敷市","name":"inasiki","by":"1_kamihara","byj":"Takumi.K.","lat":"35.956568","lng":"140.323918"},
		//{"jname":"茨城町","name":"ibarakimati","by":"2_suzuki","byj":"Yumi.S."},
		{"jname":"大洗町","name":"oarai","by":"3_kobayashi","byj":"Masaki.K.","lat":"36.313186","lng":"140.575021"},
		{"jname":"笠間市","name":"kasama","by":"2_suzuki","byj":"Yumi.S.","lat":"36.348038","lng":"140.297419"},
		//{"jname":"かすみがうら市","name":"kasumigaura","by":"2_suzuki","byj":"Yumi.S."},
		{"jname":"北茨城市","name":"kitaibaraki","by":"1_minami","byj":"Kaori.M.","lat":"36.801867","lng":"140.751048"},
		{"jname":"桜川市","name":"sakuragawa","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.327296","lng":"140.090397"},
		{"jname":"下妻市","name":"simotuma","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.191646","lng":"139.967485"},
		{"jname":"常総市","name":"jyoso","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.032998","lng":"139.99799"},
		{"jname":"城里町","name":"shirosato","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.479293","lng":"140.376195"},
		{"jname":"高萩市","name":"takahagi","by":"1_minami","byj":"Kaori.M.","lat":"36.713747","lng":"140.709546"},
		{"jname":"筑西市","name":"tikusei","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.320658","lng":"139.98151"},
		{"jname":"土浦市","name":"tutiura","by":"1_kamihara","byj":"Takumi.K.","lat":"36.071827","lng":"140.195968"},
		{"jname":"坂東市","name":"bandou","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.057981","lng":"139.886753"},
		//{"jname":"日立市","name":"hitati","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"常陸太田市","name":"hitachioota","by":"1_minami","byj":"Kaori.M.","lat":"36.538295","lng":"140.530951"},
		{"jname":"常陸大宮市","name":"hitatioomiya","by":"1_minami","byj":"Kaori.M.","lat":"36.542555","lng":"140.410968"},
		{"jname":"ひたちなか市","name":"hitachinaka","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.396553","lng":"140.534607"},
		{"jname":"鉾田市","name":"hokota","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.158606","lng":"140.516547"},
		{"jname":"水戸市","name":"mito","by":"2_suzuki","byj":"Yumi.S.","lat":"36.365869","lng":"140.471203"}

		//{"jname":"阿見町","name":"ami","by":"none","byj":"none"},
		//{"jname":"鹿嶋市","name":"kasima","by":"none","byj":"none"},
		//{"jname":"河内町","name":"kawauti","by":"none","byj":"none"},
		//{"jname":"つくばみらい市","name":"tukubamirai","by":"none","byj":"none"},
		//{"jname":"行方市","name":"namegata","by":"none","byj":"none"},	
		//{"jname":"守谷市","name":"moriya","by":"none","byj":"none"}
		],


	"oarai":{
		"spots": [
			{"id":"9","name":"大洗町 航空写真","code":"大洗町 航空写真","status":"1","group":"0","lat":"36.322041","lng":"140.578111"},
			{"id":"5","name":"フェリーターミナル付近","code":"茨城県東茨城郡大洗町港中央2","status":"1","group":"0","lat":"36.332828","lng":"140.565236"},
			/*{"id":"6","name":"大洗マリンタワー","code":"茨城県東茨城郡大洗町港中央10番地","status":"1","group":"a"},
			{"id":"3","name":"大洗マリンタワー","code":"茨城県東茨城郡大洗町港中央10番地","status":"1","group":"a"},
			{"id":"38","name":"大洗マリンタワー","code":"茨城県東茨城郡大洗町港中央10番地","status":"0","group":"a"},
			{"id":"29","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b"},
			{"id":"30","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b"},
			{"id":"31","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b"},
			{"id":"32","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b"},
			{"id":"33","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b"},
			{"id":"34","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b"},
			{"id":"4","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"1","group":"c"},
			{"id":"7","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"1","group":"c"},
			{"id":"8","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"1","group":"c"},
			{"id":"35","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"0","group":"c"},
			{"id":"36","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"0","group":"c"},
			{"id":"37","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"0","group":"c"},
			{"id":"2","name":"文化センター","code":"大洗町磯浜町6881-88","status":"1","group":"d"},
			{"id":"10","name":"漁港の様子","code":"大洗町漁港","status":"1","group":"e"},
			{"id":"11","name":"漁港の様子","code":"大洗町漁港","status":"1","group":"e"},
			{"id":"12","name":"漁港の様子","code":"大洗町漁港","status":"1","group":"e"},
			{"id":"13","name":"漁港の様子","code":"大洗町漁港","status":"1","group":"e"},
			{"id":"20","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e"},
			{"id":"21","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e"},
			{"id":"22","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e"},
			{"id":"23","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e"},
			{"id":"24","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e"},
			{"id":"18","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e"},
			{"id":"40","name":"大洗わくわく科学館 ","code":"茨城県東茨城郡大洗町港中央１２番地","status":"0","group":"f"},
			{"id":"41","name":"大洗わくわく科学館 ","code":"茨城県東茨城郡大洗町港中央１２番地","status":"0","group":"f"},
			{"id":"16","name":"魚市場","code":"大洗町魚市場内","status":"1","group":"g"},
			{"id":"19","name":"魚市場","code":"大洗町魚市場内","status":"0","group":"g"},
			{"id":"14","name":"大洗リゾートアウトレット","code":"茨城県東茨城郡大洗町港中央１１-２","status":"1","group":"h"},
			{"id":"15","name":"大洗リゾートアウトレット","code":"茨城県東茨城郡大洗町港中央１１-２","status":"1","group":"h"},
			{"id":"17","name":"大洗リゾートアウトレット","code":"茨城県東茨城郡大洗町港中央１１-２","status":"1","group":"h"},
			{"id":"27","name":"セブンイレブン大洗海岸店","code":"茨城県東茨城郡大洗町磯浜町８２５３-３９","status":"0","group":"i"},
			{"id":"44","name":"セブンイレブン大洗海岸店","code":"茨城県東茨城郡大洗町磯浜町８２５３-３９","status":"1","group":"i"},
			{"id":"1","name":"県道2号線沿いの様子","code":"県道2号線沿い","status":"1","group":"j"},
			{"id":"25","name":"県道2号線沿いの様子","code":"県道2号線沿い","status":"0","group":"j"},
			{"id":"26","name":"県道2号線沿いの様子","code":"県道2号線沿い","status":"0","group":"j"},
			{"id":"28","name":"県道2号線沿いの様子","code":"県道2号線沿い","status":"0","group":"j"},
			{"id":"39","name":"大洗サンビーチ","code":"に設置された避難標識","status":"0","group":"k"},*/
			{"id":"42","name":"平太郎浜","code":"海岸清掃の様子","status":"0","group":"l","lat":"36.322871","lng":"140.546697"},
			{"id":"43","name":"平太郎浜","code":"海岸清掃の様子","status":"0","group":"l","lat":"36.303367","lng":"140.548242"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"},
			{"donor":"大洗町役場"}
		],
		"comment":"取材を行うにあたり、撮影の許可や震災直後の画像資料の提供して頂き感謝しています。大洗町は太平洋に面しているので津波による被害、また、高速増殖炉が存在することもあり、よりあらゆる状況において冷静な対応が求められる町であると思います。震災直後、瓦礫などが集められていた海岸付近は整備され、津波が発生した際に避難経路へ誘導するための看板が設置されました。また、崩れた建物や道路などの復旧も急速に行われています。"
	},

	"ami":{
		"spots": [
		{"id":"1","name":"阿見町1","code":"阿見町1","status":"1","group":"a"},
		{"id":"2","name":"阿見町2","code":"阿見町2","status":"1","group":"a"},
		{"id":"3","name":"阿見町3","code":"阿見町3","status":"1","group":"a"},
		{"id":"4","name":"阿見町4","code":"阿見町4","status":"1","group":"a"},
		{"id":"5","name":"阿見町5","code":"阿見町5","status":"1","group":"a"},
		{"id":"6","name":"阿見町6","code":"阿見町6","status":"1","group":"a"},
		{"id":"7","name":"阿見町7","code":"阿見町7","status":"1","group":"a"},
		{"id":"8","name":"阿見町8","code":"阿見町8","status":"1","group":"a"},
		{"id":"9","name":"阿見町9","code":"阿見町9","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"ここにテキスト"
	},
	
	
	"bandou":{
		"spots": [
		{"id":"1","name":"坂東市矢作道路沿い","code":"茨城県坂東市矢作3004-177付近","status":"1","group":"a"},
		{"id":"1a","name":"坂東市矢作道路沿い","code":"茨城県坂東市矢作3004-177付近","status":"0","group":"a"},
		{"id":"2","name":"岩井7号橋","code":"茨城県坂東市借宿1056-1付近","status":"1","group":"b"},
		{"id":"2a","name":"岩井7号橋","code":"茨城県坂東市借宿1056-1付近","status":"0","group":"b"},
		{"id":"3","name":"岩井8号橋","code":"茨城県坂東市借宿1001付近","status":"1","group":"b"},
		{"id":"3a","name":"岩井8号橋","code":"茨城県坂東市借宿1001付近","status":"0","group":"b"},
		{"id":"4","name":"坂東市役所岩井庁舎","code":"茨城県坂東市岩井4365","status":"1","group":"c"},
		{"id":"4a","name":"坂東市役所岩井庁舎","code":"茨城県坂東市岩井4365","status":"0","group":"c"},
		{"id":"5","name":"坂東市役所岩井庁舎","code":"茨城県坂東市岩井4365","status":"1","group":"c"},
		{"id":"5a","name":"坂東市役所岩井庁舎","code":"茨城県坂東市岩井4365","status":"0","group":"c"},
		{"id":"6","name":"坂東市役所岩井庁舎","code":"茨城県坂東市岩井4365","status":"1","group":"c"},
		{"id":"7","name":"坂東消防署","code":"茨城県坂東市辺田644-2","status":"1","group":"c"},
		{"id":"7a","name":"坂東消防署","code":"茨城県坂東市辺田644-2","status":"0","group":"c"},
		{"id":"8","name":"西仁連川沿","code":"茨城県坂東市生子新田1183付近","status":"1","group":"d"},
		{"id":"8a","name":"西仁連川沿","code":"茨城県坂東市生子新田1183付近","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"私は，8月19日に坂東市に行って取材をしてきました。坂東市は特に震災の被害が大きかったようで，震災前と違う建物が建てられているところもあり，撤去している所が多いなという印象を受けました。震災で被害を受けた道路は綺麗に舗装され、復興は進んでいるように感じました。"
	},
	
	
	"hitachinaka":{
		"spots": [
		{"id":"01","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a"},
		{"id":"02","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a"},
		{"id":"03","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a"},
		{"id":"001","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a"},
		{"id":"000","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"0","group":"a"},
		{"id":"003","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a"},
		{"id":"002","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"0","group":"a"},
		{"id":"005","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a"},
		{"id":"006","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"0","group":"a"},
		{"id":"007","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a"},
		{"id":"017","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"0","group":"a"},
		{"id":"04","name":"さかえ食堂","code":"湊本町22-3","status":"1","group":"b"},
		{"id":"05","name":"さかえ食堂","code":"湊本町22-3","status":"1","group":"b"},
		{"id":"06","name":"和田町民家","code":"和田町1丁目1-5","status":"1","group":"c"},
		{"id":"07","name":"和田町民家","code":"和田町1丁目1-5","status":"1","group":"c"},
		{"id":"014","name":"殿山町道路","code":"殿山町1丁目1-1","status":"1","group":"d"},
		{"id":"015","name":"殿山町道路","code":"殿山町1丁目1-1","status":"1","group":"d"},
		{"id":"0001","name":"殿山町道路","code":"殿山町1丁目1-1","status":"0","group":"d"},
		{"id":"0002","name":"殿山町道路","code":"殿山町1丁目1-1","status":"0","group":"d"},
		{"id":"0003","name":"漁協倉庫","code":"牛久保1丁目11-34","status":"1","group":"e"},
		{"id":"013","name":"漁協倉庫","code":"牛久保1丁目11-34","status":"0","group":"e"},
		{"id":"0004","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"1","group":"f"},
		{"id":"010","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"0","group":"f"},
		{"id":"0005","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"1","group":"f"},
		{"id":"011","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"0","group":"f"},
		{"id":"0006","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"1","group":"f"},
		{"id":"012","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"0","group":"f"}
		],	
		"data":[
			{"donor":"個人撮影"}
		],
		"comment":"ひたちなか市では津波の被害も見られ、海沿いでは大きな被害があったようです。地震が発生した際、海の付近に住んでいる人は津波の情報をすぐ把握する必要があると感じました。また、避難経路を日頃確認するべきだと感じました。"
	},
	
	
	"hitachioota":{
		"spots": [
		{"id":"1","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a"},
		{"id":"2","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a"},
		{"id":"3","name":"西山研修所","code":"茨茨城県常陸太田市稲木町1699-イ","status":"1","group":"a"},
		{"id":"4","name":"西山研修所","code":"茨茨城県常陸太田市稲木町1699-イ","status":"1","group":"a"},
		{"id":"5","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a"},
		{"id":"6","name":"道路の様子","code":"茨城県常陸太田市小沢町","status":"0","group":"a"},
		{"id":"7","name":"道路の様子","code":"茨城県常陸太田市小沢町","status":"0","group":"a"},
		{"id":"8","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a"},
		{"id":"9","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a"},
		{"id":"10","name":"道路の様子","code":"茨城県常陸太田市小沢町","status":"0","group":"a"},
		{"id":"11","name":"道路の様子","code":"茨城県常陸太田市小沢町","status":"0","group":"a"},
		{"id":"12","name":"道路の様子","code":"茨城県常陸太田市小沢町","status":"0","group":"a"},
		{"id":"13","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a"},
		{"id":"14","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a"},
		{"id":"15","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a"},
		{"id":"16","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a"},
		{"id":"17","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a"},
		{"id":"18","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a"},
		{"id":"19","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a"},
		{"id":"20","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a"},
		{"id":"21","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a"},
		{"id":"22","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"常陸太田市立峰山中学校"}
		],
		"comment":"震災当初は液状化している地域が多かったのですが、現在は復旧しており、ぼこぼこになっていた道路も今は元の状態に戻っています。地震があった日はみんな、何が起こったか分からず、混乱していました。避難するときには冷静になって落ち着いて避難することが大切だと思いました。"
	},
	
	
	
	"hitati":{
		"spots": [
		{"id":"1","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"1","group":"a"},
		{"id":"1a","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"0","group":"a"},
		{"id":"2","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"1","group":"a"},
		{"id":"2a","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"0","group":"a"},
		{"id":"3","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"1","group":"a"},
		{"id":"3a","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"0","group":"a"},
		{"id":"4","name":"茨城県日立市諏訪町1丁目2","code":"茨城県日立市諏訪町1丁目2","status":"1","group":"b"},
		{"id":"4a","name":"茨城県日立市諏訪町1丁目2","code":"茨城県日立市諏訪町1丁目2","status":"0","group":"b"},
		{"id":"5","name":"茨城県日立市諏訪町1丁目12","code":"茨城県日立市諏訪町1丁目12","status":"1","group":"b"},
		{"id":"5aa","name":"茨城県日立市諏訪町1丁目12","code":"茨城県日立市諏訪町1丁目12","status":"0","group":"b"},
		{"id":"6","name":"茨城県日立市会瀬町1丁目11","code":"茨城県日立市会瀬町1丁目11","status":"1","group":"b"},
		{"id":"6aa","name":"茨城県日立市会瀬町1丁目11","code":"茨城県日立市会瀬町1丁目11","status":"0","group":"b"},
		{"id":"21","name":"国分機器エンジニアリング","code":"茨城県日立市国分町1","status":"1","group":"b"},
		{"id":"21a","name":"国分機器エンジニアリング","code":"茨城県日立市国分町1","status":"0","group":"b"},
		{"id":"7","name":"茨城県日立市川尻海水浴場","code":"茨城県日立市川尻海水浴場","status":"1","group":"c"},
		{"id":"7a","name":"茨城県日立市川尻海水浴場","code":"茨城県日立市川尻海水浴場","status":"0","group":"c"},
		{"id":"14","name":"法鷲院","code":"茨城県日立市十王町友部1990法鷲院","status":"1","group":"c"},
		{"id":"14a","name":"法鷲院","code":"茨城県日立市十王町友部1990法鷲院","status":"0","group":"c"},
		{"id":"15","name":"おさかなセンター入り口付近","code":"茨城県日立市久慈町おさかなセンター入り口付近","status":"1","group":"d"},
		{"id":"15a","name":"おさかなセンター入り口付近","code":"茨城県日立市久慈町おさかなセンター入り口付近","status":"0","group":"d"},
		{"id":"16","name":"久慈漁港","code":"茨城県日立市久慈町漁港","status":"1","group":"d"},
		{"id":"16a","name":"久慈漁港","code":"茨城県日立市久慈町漁港","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"6月17日に訪れました。津波の影響で休業をしていたお店などは元通りの営業をしていました。しかし、家や一部のお店はだれも住んでいなかったり撤去されていたりしたところも多く、地震や津波の被害は大きかったのだと思いました。ほとんどの道路が元通りになっていました。"
	},
	
	
	
	"hitatioomiya":{
		"spots": [
		{"id":"1","name":"御前山小学校","code":"茨城県常陸大宮市野口3217","status":"1","group":"a"},
		{"id":"2","name":"甲神社","code":"茨城県常陸大宮市下町219","status":"1","group":"a"},
		{"id":"3","name":"ロゼホール","code":"茨城県常陸大宮市中富町3135-6","status":"1","group":"a"},
		{"id":"4","name":"ロゼホール","code":"茨城県常陸大宮市中富町3135-6","status":"1","group":"a"},
		{"id":"5","name":"消防本部","code":"茨城県常陸大宮市姥賀町621","status":"1","group":"a"},
		{"id":"6","name":"道路の様子","code":"茨城県常陸大宮市小野地内","status":"1","group":"a"},
		{"id":"7","name":"道路の様子","code":"茨城県常陸大宮市小場地内","status":"1","group":"a"},
		{"id":"8","name":"道路の様子","code":"茨城県常陸大宮市下岩瀬地内","status":"1","group":"a"},
		{"id":"9","name":"道路の様子","code":"茨城県常陸大宮市下岩瀬内","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"常陸大宮市には8月21日に訪れましたが、かなり復旧している様子でした。市役所の方から提供してもらった画像には建物の被害が多く目立ちました。"
	},
	
	"hokota":{
		"spots": [
		{"id":"014","name":"総合公園体育館","code":"当間2331","status":"1","group":"a"},
		{"id":"001","name":"総合公園体育館","code":"当間2331","status":"0","group":"a"},
		{"id":"015","name":"旭北小学校","code":"田崎3852","status":"1","group":"b"},
		{"id":"007","name":"旭北小学校","code":"田崎3852","status":"0","group":"b"},
		{"id":"016","name":"市立図書館","code":"鉾田1444-1","status":"1","group":"c"},
		{"id":"004","name":"市立図書館","code":"鉾田1444-1","status":"0","group":"c"},
		{"id":"012","name":"市立第二保育所","code":"鉾田148","status":"1","group":"c"},
		{"id":"017","name":"市立第二保育所","code":"鉾田148","status":"1","group":"c"},
		{"id":"006","name":"市立第二保育所","code":"鉾田148","status":"0","group":"c"},
		{"id":"005","name":"市立第二保育所","code":"鉾田148","status":"0","group":"c"},
		{"id":"018","name":"富士橋周辺","code":"鉾田2299","status":"1","group":"c"},
		{"id":"013","name":"富士橋周辺","code":"鉾田2299","status":"1","group":"c"},
		{"id":"002","name":"富士橋周辺","code":"鉾田2299","status":"0","group":"c"},
		{"id":"003","name":"富士橋周辺","code":"鉾田2299","status":"0","group":"c"},
		{"id":"019","name":"鹿行大橋周辺","code":"札地区","status":"1","group":"d"},
		{"id":"010","name":"鹿行大橋周辺","code":"札地区","status":"0","group":"d"},
		{"id":"000","name":"雷神社","code":"柏熊689","status":"1","group":"e"},
		{"id":"008","name":"雷神社","code":"柏熊689","status":"0","group":"e"},
		{"id":"011","name":"大和田小学校","code":"大和田1018-3","status":"1","group":"f"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"},
			{"donor":"鉾田市役所"}
		],
		"comment":"鉾田市では地割れなど被害の大きい場所も多く見られましたが、公共の施設は殆どの場所で修復が完了していました。体育館などでは天井板が落ちる被害があり、地震が起こった時には頭部をすぐに保護するべきだと感じました。"
	},
	
	"ibarakimati":{
		"spots": [
		{"id":"1","name":"高橋","code":"県道18号付近","status":"1","group":"a"},
		{"id":"12","name":"高橋","code":"県道18号付近","status":"0","group":"a"},
		{"id":"4","name":"総合福祉センターゆうゆう館","code":"茨城県東茨城郡茨城町小堤1037?1","status":"1","group":"a"},
		{"id":"11","name":"総合福祉センターゆうゆう館","code":"茨城県東茨城郡茨城町小堤1037?1","status":"0","group":"a"},
		{"id":"6","name":"茨城町消防本部","code":"茨城県東茨城郡茨城町大字小堤1037-1","status":"1","group":"a"},
		{"id":"8","name":"涸沼自然公園","code":"茨城県東茨城郡茨城町中石崎2263","status":"1","group":"b"},
		{"id":"2","name":"涸沼自然公園","code":"茨城県東茨城郡茨城町中石崎2263","status":"1","group":"b"},
		{"id":"7","name":"前谷公民館付近","code":"茨城県東茨城郡茨城町下石崎","status":"1","group":"b"},
		{"id":"9","name":"広浦公園駐車場","code":"茨城県東茨城郡茨城町下石崎1651","status":"1","group":"b"},
		{"id":"5","name":"桜丘中学校　体育館","code":"茨城県東茨城郡茨城町奥谷862","status":"1","group":"c"},
		{"id":"3","name":"長岡立体","code":"茨城県水戸市小吹町","status":"1","group":"c"},
		{"id":"13","name":"長岡立体","code":"茨城県水戸市小吹町","status":"0","group":"c"},
		{"id":"10","name":"サイクリングロード","code":"茨城県東茨城郡茨城町長岡","status":"1","group":"c"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"8月下旬に訪問しましたが、道路や橋など、人々の生活環境は殆ど復旧済みでした。取材をする時にも移動に困ることはありませんでした。"
	},
	
	"inasiki":{
		"spots": [
		{"id":"01","name":"山新駐車場","code":"稲敷市西代1403番地 付近","status":"0","group":"a"},
		{"id":"1","name":"山新駐車場","code":"稲敷市西代1403番地 付近","status":"1","group":"a"},
		{"id":"02","name":"鹿島神社","code":"稲敷市本新309番地 付近","status":"0","group":"b"},
		{"id":"2","name":"鹿島神社","code":"稲敷市本新309番地 付近","status":"1","group":"b"},
		{"id":"04","name":"水郷大橋際","code":"稲敷市西代1661番地1 付近","status":"0","group":"c"},
		{"id":"4","name":"水郷大橋際","code":"稲敷市西代1661番地1 付近","status":"1","group":"c"},
		{"id":"06","name":"新利根川河口 右岸","code":"稲敷市本新52番地8 付近","status":"0","group":"d"},
		{"id":"6","name":"新利根川河口 右岸","code":"稲敷市本新52番地8 付近","status":"1","group":"d"},
		{"id":"08","name":"新利根川河口 左岸","code":"稲敷市浮島8322番地 付近","status":"0","group":"e"},
		{"id":"12","name":"新利根川河口 左岸","code":"稲敷市浮島8322番地 付近","status":"1","group":"e"},
		{"id":"9","name":"新利根川河口 右岸","code":"稲敷市本新52番地10 付近","status":"1","group":"f"},
		{"id":"09","name":"新利根川河口 右岸","code":"稲敷市本新52番地10 付近","status":"0","group":"f"},
		{"id":"10","name":"新利根川河口 右岸","code":"稲敷市本新52番地10 付近","status":"0","group":"f"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"この地区の震災状況ですが、地元の方々に当時の事など聞きましたが，やはり、街の人々は驚くほど苦労されたようです。この地区も，僕が考えていた以上に地震の被害は大きく，再発したときに冷静に行動できるよう心掛けるべきだと思いました。"
	},
	
	
	"jyoso":{
		"spots": [
		{"id":"1","name":"総合福祉センター","code":"茨城県常総市新石下4365","status":"1","group":"a"},
		{"id":"1a","name":"総合福祉センター","code":"茨城県常総市新石下4365","status":"0","group":"a"},
		{"id":"2","name":"総合福祉センター","code":"茨城県常総市新石下4365","status":"1","group":"a"},
		{"id":"2a","name":"総合福祉センター","code":"茨城県常総市新石下4365","status":"0","group":"a"},
		{"id":"5","name":"県道24号線沿い","code":"茨城県常総市向石下299","status":"1","group":"a"},
		{"id":"5a","name":"県道24号線沿い","code":"茨城県常総市向石下299","status":"0","group":"a"},
		{"id":"5aa","name":"県道24号線沿い","code":"茨城県常総市向石下299","status":"0","group":"a"},
		{"id":"9","name":"常総市役所石下庁舎（旧役場）","code":"茨城県新石下576-2","status":"1","group":"a"},
		{"id":"9a","name":"常総市役所石下庁舎（旧役場）","code":"茨城県新石下576-2","status":"0","group":"a"},
		{"id":"3","name":"常光寺","code":"茨城県常総市若宮戸1053","status":"1","group":"b"},
		{"id":"3a","name":"常光寺","code":"茨城県常総市若宮戸1053","status":"0","group":"b"},
		{"id":"4","name":"常総市役所","code":"茨城県常総市水海道諏訪町3222-3","status":"1","group":"c"},
		{"id":"4a","name":"常総市役所","code":"茨城県常総市水海道諏訪町3222-3","status":"0","group":"c"},
		{"id":"6","name":"市立石下西中学校","code":"茨城県常総市杉山910-1","status":"1","group":"d"},
		{"id":"7","name":"市立石下西中学校","code":"茨城県常総市杉山910-1","status":"1","group":"d"},
		{"id":"8","name":"市立石下西中学校","code":"茨城県常総市杉山910-1","status":"1","group":"d"},
		{"id":"8a","name":"市立石下西中学校","code":"茨城県常総市杉山910-1","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"私は，8月19日に常総市に行って取材をしてきました。常総市の中学校は校舎がすべて撤去され立て直されていました。壊れてしまった橋も撤去され新しい橋になっており、元の町並みとは大きく変わるところが多いと感じました。まだ中学校などは完成していなく完全には復興していない様子でした。海沿いだけではなく震災から比較的遠い場所でも震災の被害は及んでいる現実を知りました。"
	},
	
	
	"kasama":{
		"spots": [
		/*{"id":"1","name":"笠間市役所　笠間市所","code":"茨城県笠間市石井717","status":"1","group":"a"},
		{"id":"6","name":"ケーズデンキ笠間店付近","code":"茨城県笠間市石井2090","status":"1","group":"a"},
		{"id":"3","name":"笠間図書館","code":"茨城県笠間市石井2023?1","status":"1","group":"a"},
		{"id":"10","name":"笠間図書館","code":"茨城県笠間市石井2023?1","status":"0","group":"a"},
		{"id":"2","name":"笠間市役所　本所二階","code":"茨城県笠間市中央3丁目2-1","status":"1","group":"b"},
		{"id":"11","name":"笠間市役所 本所二階","code":"茨城県笠間市中央3丁目2-1","status":"0","group":"b"},*/
		{"id":"4","name":"友部二中","code":"茨城県笠間市旭町510?1","status":"1","group":"c","lat":"36.376791","lng":"140.286776"},
		{"id":"5","name":"工芸の丘","code":"茨城県笠間市笠間2388?1","status":"1","group":"d","lat":"36.348315","lng":"140.334497"},
		{"id":"7","name":"笠間小グラウンド","code":"茨城県笠間市笠間2688","status":"1","group":"d","lat":"36.359928","lng":"140.252443"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"お盆期間に、画像を取りに訪問しました。笠間市役所・笠間市所は特に建物の損傷がひどく、取り壊して更地になっていました。本所の方でも工事中の箇所があり、現在、市役所の方が勤務をしている建物の天井も配管むき出しの状態でした。駅付近は比較的復旧しているものの、工事中の道路や、取り壊し・倒壊などで建物がなくなった後の更地なども見受けられ、まだまだ復興途中である印象を受けました。"
	},
	
	
	"kasima":{
		"spots": [
		{"id":"1","name":"海岸沿いの住居内","code":"海岸沿いの住居内","status":"1","group":"a"},
		{"id":"2","name":"鹿嶋市小宮作地区","code":"鹿嶋市小宮作地区","status":"1","group":"a"},
		{"id":"3","name":"鹿嶋市長栖地区","code":"鹿嶋市長栖地区","status":"1","group":"a"},
		{"id":"4","name":"鹿嶋市国末地区","code":"鹿嶋市国末地区","status":"1","group":"a"},
		{"id":"5","name":"農道の状況","code":"農道の状況","status":"1","group":"a"},
		{"id":"6","name":"下津海水浴場付近","code":"下津海水浴場付近","status":"1","group":"a"},
		{"id":"7","name":"海沿いの住居の状態","code":"海沿いの住居の状態","status":"1","group":"a"},
		{"id":"8","name":"平井海岸付近","code":"平井海岸付近","status":"1","group":"a"},
		{"id":"9","name":"鹿嶋市小宮作地区","code":"鹿嶋市小宮作地区","status":"1","group":"a"},
		{"id":"10","name":"鹿嶋市鉢形台からの風景","code":"鹿嶋市鉢形台からの風景","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"ここにテキスト"
	},
	
	"kasumigaura":{
		"spots": [
		{"id":"1","name":"千代田庁舎付近","code":"千代田庁舎付近","status":"1","group":"a"},
		{"id":"2","name":"あじさい館","code":"茨城県かすみがうら市深谷3719-1","status":"1","group":"b"},
		{"id":"9","name":"あじさい館","code":"茨城県かすみがうら市深谷3719-1","status":"0","group":"b"},
		{"id":"3","name":"かすみがうら市役所　千代田庁舎","code":"茨城県かすみがうら市上土田461","status":"1","group":"a"},
		{"id":"4","name":"かすみがうら市役所　千代田庁舎","code":"茨城県かすみがうら市上土田461","status":"1","group":"a"},
		{"id":"5","name":"かすみがうら市役所　千代田庁舎","code":"茨城県かすみがうら市上土田461","status":"1","group":"a"},
		{"id":"6","name":"かすみがうら市役所　千代田庁舎","code":"茨城県かすみがうら市上土田461","status":"1","group":"a"},
		{"id":"7","name":"かすみがうら市役所　千代田庁舎","code":"茨城県かすみがうら市上土田461","status":"1","group":"a"},
		{"id":"8","name":"霞ヶ浦　堤防","code":"霞ヶ浦　堤防","status":"1","group":"c"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"お盆期間に、画像を取りに訪問しました。市役所の千代田庁舎は工事中で殆ど機能していない状況でした。多くの業務は公民館で行っているということで当時の震災の爪痕がみられました。大きな道路などは普通に通行できましたが、細い歩道などは完全に直りきっていないところも見受けられ、当時の被害の大きさを物語っていました。"
	},
	
	"kawauti":{
		"spots": [
		{"id":"1","name":"河内町1","code":"河内町1","status":"1","group":"a"},
		{"id":"2","name":"河内町2","code":"河内町2","status":"1","group":"a"},
		{"id":"3","name":"河内町3","code":"河内町3","status":"1","group":"a"},
		{"id":"4","name":"河内町4","code":"河内町4","status":"1","group":"a"},
		{"id":"5","name":"河内町5","code":"河内町5","status":"1","group":"a"},
		{"id":"6","name":"河内町6","code":"河内町6","status":"1","group":"a"},
		{"id":"7","name":"河内町7","code":"河内町7","status":"1","group":"a"},
		{"id":"8","name":"河内町8","code":"河内町8","status":"1","group":"a"},
		{"id":"9","name":"河内町9","code":"河内町9","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"ここにテキスト"
	},
	
	"kitaibaraki":{
		"spots": [
		{"id":"1","name":"北茨城市役所","code":"茨城県北茨城市磯原町磯原1630","status":"1","group":"a"},
		{"id":"2","name":"北茨城市役所","code":"茨城県北茨城市磯原町磯原1630","status":"1","group":"a"},
		{"id":"3","name":"海岸沿いの様子","code":"茨城県北茨城市平潟町","status":"1","group":"a"},
		{"id":"4","name":"大津漁業協同組合","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"5","name":"線路の様子","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"6","name":"北茨城市防災コミュニティセンター","code":"茨城県北茨城市磯原町磯原","status":"1","group":"a"},
		{"id":"7","name":"線路の様子","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"8","name":"海岸の様子","code":"茨城県北茨城市平潟町","status":"1","group":"a"},
		{"id":"9","name":"漁港の様子","code":"茨城県北茨城市平潟町","status":"1","group":"a"},
		{"id":"10","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"11","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"12","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"13","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"14","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"15","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"16","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"17","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"18","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"19","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"20","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"21","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"22","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"23","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"北茨城市には8月20日に訪れましたが，震災当初よりかなり復旧していました。しかし，その爪痕は至る所にありました。市役所の裏の方では，道路の復旧工事に作業員の方が一生懸命働いていました。市役所の担当者に震災当時の写真を見せてもらいましたが、津波の被害が酷く、同じことが起きたら一刻も早く避難することに心がける必要があると思いました。"
	},
	
	
	"mito":{
		"spots": [
		{"id":"1","name":"東台・国道51号線付近","code":"東台1丁目","status":"1","group":"a"},
		{"id":"8","name":"東台・国道51号付近","code":"東台1丁目","status":"0","group":"a"},
		{"id":"16","name":"渡辺整形外科(閉院)","code":"茨城県水戸市東台1丁目6-1","status":"0","group":"a"},
		{"id":"2","name":"東照宮","code":"茨城県水戸市宮町2丁目5-13 ","status":"1","group":"b"},
		{"id":"3","name":"東照宮","code":"茨城県水戸市宮町2丁目5-13","status":"1","group":"b"},
		{"id":"6","name":"水戸駅北口 バス乗り場","code":"水戸駅","status":"1","group":"b"},
		{"id":"7","name":"水戸駅北口 バス乗り場","code":"水戸駅","status":"0","group":"b"},
		{"id":"4","name":"水戸市役所","code":"茨城県水戸市中央1丁目4-1 ","status":"1","group":"c"},
		{"id":"5","name":"水戸市役所","code":"茨城県水戸市中央1丁目4-1","status":"1","group":"c"},
		{"id":"9","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d"},
		{"id":"10","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d"},
		{"id":"11","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d"},
		{"id":"12","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d"},
		{"id":"13","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d"},
		{"id":"14","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d"},
		{"id":"15","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d"},
		{"id":"17","name":"水戸市50号ヤマダ電機","code":"水戸市笠原町209","status":"1","group":"e"},
		{"id":"18","name":"水戸市50号ヤマダ電機","code":"水戸市笠原町209","status":"1","group":"e"},
		{"id":"22","name":"水戸工業高校A棟","code":"水戸市元吉田町1101","status":"1","group":"f"},
		{"id":"25","name":"水戸工業高校A棟","code":"水戸市元吉田町1101","status":"1","group":"f"},
		{"id":"26","name":"水戸工業高校A棟","code":"水戸市元吉田町1101","status":"1","group":"f"},
		{"id":"28","name":"水戸工業高校A棟","code":"水戸市元吉田町1101","status":"1","group":"f"},
		{"id":"29","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g"},
		{"id":"30","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g"},
		{"id":"31","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g"},
		{"id":"36","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g"},
		{"id":"43","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g"},
		{"id":"45","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g"},
		{"id":"50","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g"},
		{"id":"52","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g"},
		{"id":"60","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g"},
		{"id":"61","name":"水戸市立三の丸小","code":"水戸市三の丸1丁目6-51","status":"1","group":"h"},
		{"id":"62","name":"水戸市立三の丸小","code":"水戸市三の丸1丁目6-51","status":"1","group":"h"},
		{"id":"63","name":"水戸市立三の丸小","code":"水戸市三の丸1丁目6-51","status":"1","group":"h"},
		{"id":"64","name":"水戸市立三の丸小","code":"水戸市三の丸1丁目6-51","status":"1","group":"h"},
		{"id":"71","name":"水戸二高","code":"水戸市大町2丁目2-14","status":"1","group":"h"},
		{"id":"72","name":"水戸二高","code":"水戸市大町2丁目2-14","status":"1","group":"h"},
		{"id":"74","name":"水戸二高","code":"水戸市大町2丁目2-14","status":"1","group":"h"},
		{"id":"76","name":"水戸二高","code":"水戸市大町2丁目2-14","status":"1","group":"h"},
		{"id":"77","name":"水戸二高","code":"水戸市大町2丁目2-14","status":"1","group":"h"},
		{"id":"65","name":"水戸生涯学習センター","code":"水戸市愛宕町4-1","status":"1","group":"i"},
		{"id":"66","name":"水戸生涯学習センター","code":"水戸市愛宕町4-1","status":"1","group":"i"},
		{"id":"67","name":"水戸生涯学習センター","code":"水戸市愛宕町4-1","status":"1","group":"i"},
		{"id":"69","name":"水戸生涯学習センター","code":"水戸市愛宕町4-1","status":"1","group":"i"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県立水戸工業高等学校 情報技術科"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"当時は駅の水道管が破裂し、構内が水浸しになるなどの被害がありましたが早々に復旧し、夏休みには震災前と変わりない運行をしていました。民家の屋根やブロック塀、住宅街の細い道などは直っていないところも見られました。しかし、ほとんどの被害箇所では工事や修復の措置が取られています。ブロックタイルの舗装が黒いアスファルトの道になっているところを見ると、震災当時のことを思い出します。"
	},
	
	
	"moriya":{
		"spots": [
		{"id":"1","name":"守谷市1","code":"守谷市1","status":"1","group":"a"},
		{"id":"2","name":"守谷市2","code":"守谷市2","status":"1","group":"a"},
		{"id":"3","name":"守谷市3","code":"守谷市3","status":"1","group":"a"},
		{"id":"4","name":"守谷市4","code":"守谷市4","status":"1","group":"a"},
		{"id":"5","name":"守谷市5","code":"守谷市5","status":"1","group":"a"},
		{"id":"6","name":"守谷市6","code":"守谷市6","status":"1","group":"a"},
		{"id":"7","name":"守谷市7","code":"守谷市7","status":"1","group":"a"},
		{"id":"8","name":"守谷市8","code":"守谷市8","status":"1","group":"a"},
		{"id":"9","name":"守谷市9","code":"守谷市9","status":"1","group":"a"},
		{"id":"10","name":"守谷市10","code":"守谷市10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"ここにテキスト"
	},
	
	"namegata":{
		"spots": [
		{"id":"1","name":"行方市1","code":"行方市1","status":"1","group":"a"},
		{"id":"2","name":"行方市2","code":"行方市2","status":"1","group":"a"},
		{"id":"3","name":"行方市3","code":"行方市3","status":"1","group":"a"},
		{"id":"4","name":"行方市4","code":"行方市4","status":"1","group":"a"},
		{"id":"5","name":"行方市5","code":"行方市5","status":"1","group":"a"},
		{"id":"6","name":"行方市6","code":"行方市6","status":"1","group":"a"},
		{"id":"7","name":"行方市7","code":"行方市7","status":"1","group":"a"},
		{"id":"8","name":"行方市8","code":"行方市8","status":"1","group":"a"},
		{"id":"9","name":"行方市9","code":"行方市9","status":"1","group":"a"},
		{"id":"10","name":"行方市10","code":"行方市10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"ここにテキスト"
	},
	
	"shirosato":{
		"spots": [
		{"id":"005","name":"下圷地区道路","code":"下圷地区","status":"1","group":"a"},
		{"id":"009","name":"下圷地区道路","code":"下圷地区","status":"0","group":"a"},
		{"id":"006","name":"阿波山地区道路","code":"阿波山2277","status":"1","group":"b"},
		{"id":"010","name":"阿波山地区道路","code":"阿波山2277","status":"0","group":"b"},
		{"id":"007","name":"道木橋地区","code":"道木橋地区","status":"1","group":"c"},
		{"id":"011","name":"道木橋地区","code":"道木橋地区","status":"0","group":"c"},
		{"id":"008","name":"藤井川ダム橋","code":"城里町下古内182","status":"1","group":"d"},
		{"id":"012","name":"藤井川ダム橋","code":"城里町下古内182","status":"0","group":"d"},
		{"id":"013","name":"コミュニティセンター","code":"城里町石塚","status":"1","group":"e"},
		{"id":"003","name":"役場望楼","code":"城里町石塚","status":"1","group":"e"},
		{"id":"002","name":"役場望楼撤去作業","code":"城里町石塚","status":"1","group":"e"},
		{"id":"004","name":"役場周辺道路","code":"城里町石塚","status":"1","group":"e"},
		{"id":"000","name":"役場駐車場","code":"城里町石塚","status":"1","group":"e"},
		{"id":"001","name":"避難所掲示板","code":"避難所","status":"1","group":"f"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"城里町役場"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"城里町では町役場が大きな被害を受け、8月に訪れた際は仮の施設で職務を行なっていました。復旧はかなり進んでいると感じました。役場の担当者の方は「防災意識を高めて欲しい」とおっしゃっていました。"
	},
	
	"simotuma":{
		"spots": [
		{"id":"1","name":"千代川庁舎","code":"茨城県下妻市鬼怒230","status":"0","group":"a"},
		{"id":"1a","name":"千代川庁舎","code":"茨城県下妻市鬼怒230","status":"1","group":"a"},
		{"id":"2","name":"鎌庭道路沿い","code":"茨城県下妻市鎌庭139-2","status":"0","group":"a"},
		{"id":"2a","name":"鎌庭道路沿い","code":"茨城県下妻市鎌庭139-2","status":"1","group":"a"},
		{"id":"3","name":"きぬアクアステーション前","code":"茨城県下妻市中居指933-1","status":"0","group":"a"},
		{"id":"3a","name":"きぬアクアステーション前","code":"茨城県下妻市中居指933-1","status":"1","group":"a"},
		{"id":"7","name":"鎌庭道路沿い","code":"茨城県下妻市鎌庭139-2","status":"0","group":"a"},
		{"id":"7a","name":"鎌庭道路沿い","code":"茨城県下妻市鎌庭139-2","status":"1","group":"a"},
		{"id":"4","name":"道の駅しもつま","code":"茨城県下妻市数須140","status":"0","group":"b"},
		{"id":"4a","name":"道の駅しもつま","code":"茨城県下妻市数須140","status":"1","group":"b"},
		{"id":"5","name":"小貝川ふれあい公園近く","code":"茨城県下妻市堀篭1650-1","status":"0","group":"c"},
		{"id":"5a","name":"小貝川ふれあい公園近く","code":"茨城県下妻市堀篭1650-1","status":"1","group":"c"},
		{"id":"6","name":"坂東市役所岩井庁舎","code":"茨城県下妻市半谷724-1","status":"0","group":"d"},
		{"id":"6a","name":"坂東市役所岩井庁舎","code":"茨城県下妻市半谷724-1","status":"1","group":"d"},
		{"id":"8","name":"山尻道路沿い","code":"茨城県下妻市山尻47","status":"0","group":"e"},
		{"id":"8a","name":"山尻道路沿い","code":"茨城県下妻市山尻47","status":"1","group":"e"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"私は，8月19日に下妻市に行って取材をしてきました。下妻市の震災時の写真を見たとき道路などの地割れの被害が大きいと思いましたが，殆どの場所が治っており，どこが壊れていたのか分からないくらい元通りの綺麗な状態になっていました。一部立ち入り禁止となっているところも若干ありました。"
	},
	
	
	"takahagi":{
		"spots": [
		{"id":"1","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"2","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"3","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"4","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"5","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"6","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"7","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"8","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"9","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"10","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"11","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"12","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"13","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"14","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"15","name":"旧磯原付近","code":"茨城県北茨城市","status":"1","group":"a"},
		{"id":"16","name":"旧磯原付近","code":"茨城県北茨城市","status":"1","group":"a"},
		{"id":"17","name":"旧磯原付近","code":"茨城県北茨城市","status":"1","group":"a"},
		{"id":"18","name":"月浜の湯前","code":"茨城県北茨城市磯原町磯原200-3","status":"1","group":"a"},
		{"id":"19","name":"月浜の湯前","code":"茨城県北茨城市磯原町磯原200-3","status":"1","group":"a"},
		{"id":"20","name":"月浜の湯前","code":"茨城県北茨城市磯原町磯原200-3","status":"1","group":"a"},
		{"id":"21","name":"月浜の湯前","code":"茨城県北茨城市磯原町磯原200-3","status":"1","group":"a"},
		{"id":"22","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"23","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"24","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"25","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"26","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"27","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"28","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"29","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"30","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"31","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"32","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"33","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a"},
		{"id":"34","name":"中郷駅付近","code":"茨城県北茨城市中郷町","status":"1","group":"a"},
		{"id":"35","name":"美鳳前","code":"茨城県北茨城市中郷町足洗海岸375","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"高萩市には8月20日に訪れました。市役所の建物は地震の影響で使えなくなっており、職員の方はプレハブの中で仕事をしていました。その周辺はかなり復旧しており、早く住民の方々が安心して生活できる環境になればいいなと思いました。"
	},
	
	"tikusei":{
		"spots": [
		{"id":"1","name":"第3光伸ビル","code":"茨城県筑西市乙965","status":"1","group":"a"},
		{"id":"1a","name":"第3光伸ビル","code":"茨城県筑西市乙965","status":"0","group":"a"},
		{"id":"2","name":"357号線沿い","code":"茨城県筑西市梶内357号線沿い","status":"1","group":"b"},
		{"id":"2a","name":"357号線沿い","code":"茨城県筑西市梶内357号線沿い","status":"0","group":"b"},
		{"id":"3","name":"関城支所南","code":"茨城県筑西市関本下1943-1付近道路","status":"1","group":"c"},
		{"id":"3a","name":"関城支所南","code":"茨城県筑西市関本下1943-1付近道路","status":"0","group":"c"},
		{"id":"5","name":"筑西市民病院","code":"茨城県筑西市玉戸1658","status":"1","group":"d"},
		{"id":"5a","name":"筑西市民病院","code":"茨城県筑西市玉戸1658","status":"0","group":"d"},
		{"id":"6","name":"筑西市民病院","code":"茨城県筑西市玉戸1658","status":"1","group":"d"},
		{"id":"7","name":"筑西市民病院","code":"茨城県筑西市玉戸1658","status":"1","group":"d"},
		{"id":"8","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"1","group":"e"},
		{"id":"8a","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"0","group":"e"},
		{"id":"9","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"1","group":"e"},
		{"id":"9a","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"0","group":"e"},
		{"id":"10","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"1","group":"e"},
		{"id":"10a","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"0","group":"e"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"私は，8月19日に筑西市に行って取材をしてきました。筑西市では，病院などの建物が被害が大きかったらしく，当時5階建てだったものが2階建てになっていました。他にも被害が大きかった道路などは綺麗に舗装され、筑西市では復興もほぼ完了して元通りの生活を送っているように感じました。"
	},
	
	
	"tukubamirai":{
		"spots": [
		{"id":"1","name":"つくばみらい市1","code":"つくばみらい市1","status":"1","group":"a"},
		{"id":"2","name":"つくばみらい市2","code":"つくばみらい市2","status":"1","group":"a"},
		{"id":"3","name":"つくばみらい市3","code":"つくばみらい市3","status":"1","group":"a"},
		{"id":"4","name":"つくばみらい市4","code":"つくばみらい市4","status":"1","group":"a"},
		{"id":"5","name":"つくばみらい市5","code":"つくばみらい市5","status":"1","group":"a"},
		{"id":"6","name":"つくばみらい市6","code":"つくばみらい市6","status":"1","group":"a"},
		{"id":"7","name":"つくばみらい市7","code":"つくばみらい市7","status":"1","group":"a"},
		{"id":"8","name":"つくばみらい市8","code":"つくばみらい市8","status":"1","group":"a"},
		{"id":"9","name":"つくばみらい市9","code":"つくばみらい市9","status":"1","group":"a"},
		{"id":"10","name":"つくばみらい市10","code":"つくばみらい市10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"ここにテキスト"
	},
	
	"tutiura":{
		"spots": [
		{"id":"3","name":"亀城公園","code":"茨城県土浦市中央１丁目１３−４８","status":"1","group":"a"},
		{"id":"7","name":"亀城公園","code":"茨城県土浦市中央１丁目１３−４８","status":"1","group":"a"},
		{"id":"11","name":"亀城公園","code":"茨城県土浦市中央１丁目１３−４８","status":"1","group":"b"},
		{"id":"1","name":"土浦市立土浦第一中学校","code":"土浦市文京町3-8","status":"1","group":"a"},
		{"id":"2","name":"乙戸沼公園","code":"土浦市乙戸南２丁目","status":"1","group":"a"},
		{"id":"4","name":"国道125号線桜川橋北","code":"土浦市桜町１丁目","status":"1","group":"a"},
		{"id":"5","name":"鹿島神社","code":"真鍋4丁目3-6 ","status":"1","group":"a"},
		{"id":"6","name":"水郷体育館","code":"土浦市大岩田1651","status":"1","group":"a"},
		{"id":"8","name":"県道小野土浦線藤沢団地脇","code":"土浦市藤沢","status":"1","group":"a"},
		{"id":"9","name":"鹿島神社","code":"真鍋4丁目3-6 鹿島神社","status":"1","group":"b"},
		{"id":"10","name":"亀城公園付近","code":"茨城県土浦市中央","status":"1","group":"b"},
		{"id":"12","name":"亀城公園付近","code":"茨城県土浦市中央","status":"1","group":"b"},
		{"id":"13","name":"亀城公園付近","code":"茨城県土浦市中央","status":"1","group":"b"},
		{"id":"14","name":"亀城公園付近","code":"中央１丁目 中城通り","status":"1","group":"b"},
		{"id":"15","name":"藤沢 県道小野土浦線藤沢団地脇","code":"土浦市藤沢","status":"1","group":"b"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"この地区の震災状況ですが、地元の方々に当時の事など聞きましたが，やはり、街の人々は驚くほど苦労されたようです。この地区も，僕が考えていた以上に地震の被害は大きく，再発したときに冷静に行動できるよう心掛けるべきだと思いました。"
	},
	
	"sakuragawa":{
		"spots": [
		{"id":"008","name":"真壁の歴史的建造物","code":"真壁213-1","status":"1","group":"a"},
		{"id":"017","name":"真壁の歴史的建造物","code":"真壁213-1","status":"0","group":"a"},
		{"id":"013","name":"真壁の建造物","code":"真壁232","status":"1","group":"a"},
		{"id":"016","name":"真壁の建造物","code":"真壁232","status":"0","group":"a"},
		{"id":"015","name":"真壁の歴史的建造物","code":"真壁189","status":"1","group":"a"},
		{"id":"020","name":"真壁の歴史的建造物","code":"真壁189","status":"0","group":"a"},
		{"id":"009","name":"真壁の歴史的建造物","code":"真壁200","status":"1","group":"a"},
		{"id":"019","name":"真壁の歴史的建造物","code":"真壁200","status":"0","group":"a"},
		{"id":"011","name":"市道","code":"東矢貝318-3","status":"1","group":"a"},
		{"id":"000","name":"市道","code":"東矢貝318-3","status":"0","group":"a"},
		{"id":"007","name":"大和駅","code":"高森地区","status":"1","group":"b"},
		{"id":"001","name":"大和駅","code":"高森地区","status":"0","group":"b"},
		{"id":"014","name":"高森地区ブロック塀","code":"高森717","status":"1","group":"b"},
		{"id":"002","name":"高森地区ブロック塀","code":"高森717","status":"0","group":"b"},
		{"id":"012","name":"桜川公園","code":"磯部667","status":"1","group":"c"},
		{"id":"003","name":"桜川公園","code":"磯部667","status":"0","group":"c"},
		{"id":"006","name":"西小塙地区住宅","code":"西小塙683","status":"1","group":"d"},
		{"id":"004","name":"西小塙地区住宅","code":"西小塙683","status":"0","group":"d"},
		{"id":"005","name":"西小塙地区道路","code":"西小塙683","status":"1","group":"d"},
		{"id":"010","name":"西小塙地区道路","code":"西小塙683","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"桜川市では歴史的な建造物が多く被害を受けたようですが、それらはまだ修復が完了していないものが殆どでした。建物のブロックなどの倒壊が多く見られ、地震が起こった際には倒壊しそうなものからすぐに離れるべきだと感じました。"
	},
	
	"minamisanriku":{
		"spots": [
		{"id":"1","name":"南三陸町1","code":"南三陸町1","status":"1","group":"a"},
		{"id":"2","name":"南三陸町2","code":"南三陸町2","status":"1","group":"a"},
		{"id":"3","name":"南三陸町3","code":"南三陸町3","status":"1","group":"a"},
		{"id":"4","name":"南三陸町4","code":"南三陸町4","status":"1","group":"a"},
		{"id":"5","name":"南三陸町5","code":"南三陸町5","status":"1","group":"a"},
		{"id":"6","name":"南三陸町6","code":"南三陸町6","status":"1","group":"a"},
		{"id":"7","name":"南三陸町7","code":"南三陸町7","status":"1","group":"a"},
		{"id":"8","name":"南三陸町8","code":"南三陸町8","status":"1","group":"a"},
		{"id":"9","name":"南三陸町9","code":"南三陸町9","status":"1","group":"a"},
		{"id":"10","name":"南三陸町10","code":"南三陸町10","status":"1","group":"a"},
		{"id":"11","name":"南三陸町11","code":"南三陸町11","status":"1","group":"a"},
		{"id":"12","name":"南三陸町12","code":"南三陸町12","status":"1","group":"a"},
		{"id":"13","name":"南三陸町13","code":"南三陸町13","status":"1","group":"a"},
		{"id":"14","name":"南三陸町14","code":"南三陸町14","status":"1","group":"a"},
		{"id":"15","name":"南三陸町11","code":"南三陸町11","status":"1","group":"a"},
		{"id":"16","name":"南三陸町12","code":"南三陸町12","status":"1","group":"a"},
		{"id":"17","name":"南三陸町13","code":"南三陸町13","status":"1","group":"a"},
		{"id":"18","name":"南三陸町14","code":"南三陸町14","status":"1","group":"a"},
		{"id":"19","name":"南三陸町11","code":"南三陸町11","status":"1","group":"a"},
		{"id":"20","name":"南三陸町12","code":"南三陸町12","status":"1","group":"a"},
		{"id":"21","name":"南三陸町13","code":"南三陸町13","status":"1","group":"a"},
		{"id":"22","name":"南三陸町14","code":"南三陸町14","status":"1","group":"a"},
		{"id":"23","name":"南三陸町10","code":"南三陸町10","status":"1","group":"a"},
		{"id":"24","name":"南三陸町11","code":"南三陸町11","status":"1","group":"a"},
		{"id":"25","name":"南三陸町12","code":"南三陸町12","status":"1","group":"a"},
		{"id":"26","name":"南三陸町13","code":"南三陸町13","status":"1","group":"a"},
		{"id":"27","name":"南三陸町14","code":"南三陸町14","status":"1","group":"a"},
		{"id":"28","name":"南三陸町11","code":"南三陸町11","status":"1","group":"a"},
		{"id":"29","name":"南三陸町12","code":"南三陸町12","status":"1","group":"a"},
		{"id":"30","name":"南三陸町13","code":"南三陸町13","status":"1","group":"a"},
		{"id":"31","name":"南三陸町14","code":"南三陸町14","status":"1","group":"a"},
		{"id":"32","name":"南三陸町11","code":"南三陸町11","status":"1","group":"a"},
		{"id":"33","name":"南三陸町12","code":"南三陸町12","status":"1","group":"a"},
		{"id":"34","name":"南三陸町13","code":"南三陸町13","status":"1","group":"a"},
		{"id":"35","name":"南三陸町14","code":"南三陸町14","status":"1","group":"a"},
		{"id":"36","name":"南三陸町10","code":"南三陸町10","status":"1","group":"a"},
		{"id":"37","name":"南三陸町11","code":"南三陸町11","status":"1","group":"a"},
		{"id":"38","name":"南三陸町12","code":"南三陸町12","status":"1","group":"a"},
		{"id":"39","name":"南三陸町13","code":"南三陸町13","status":"1","group":"a"},
		{"id":"40","name":"南三陸町14","code":"南三陸町14","status":"1","group":"a"},
		{"id":"41","name":"南三陸町11","code":"南三陸町11","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"横山電工"}
		],
		"comment":"ここにテキスト"
	},
	
	"sendai":{
		"spots": [
		{"id":"1","name":"仙台市1","code":"仙台市1","status":"1","group":"b"},
		{"id":"2","name":"仙台市2","code":"仙台市2","status":"1","group":"b"},
		{"id":"3","name":"仙台市3","code":"仙台市3","status":"1","group":"b"},
		{"id":"4","name":"仙台市4","code":"仙台市4","status":"1","group":"b"},
		{"id":"5","name":"仙台市5","code":"仙台市5","status":"1","group":"b"},
		{"id":"6","name":"仙台市6","code":"仙台市6","status":"1","group":"b"},
		{"id":"7","name":"仙台市7","code":"仙台市7","status":"1","group":"b"},
		{"id":"8","name":"仙台市8","code":"仙台市8","status":"1","group":"b"},
		{"id":"9","name":"仙台市9","code":"仙台市9","status":"1","group":"b"},
		{"id":"10","name":"仙台市10","code":"仙台市10","status":"1","group":"b"},
		{"id":"11","name":"仙台市11","code":"仙台市11","status":"1","group":"b"},
		{"id":"12","name":"仙台市12","code":"仙台市12","status":"1","group":"b"},
		{"id":"13","name":"仙台市13","code":"仙台市13","status":"1","group":"b"},
		{"id":"14","name":"仙台市14","code":"仙台市14","status":"1","group":"b"},
		{"id":"15","name":"仙台市11","code":"仙台市11","status":"1","group":"b"},
		{"id":"16","name":"仙台市12","code":"仙台市12","status":"1","group":"b"},
		{"id":"17","name":"仙台市13","code":"仙台市13","status":"1","group":"b"},
		{"id":"18","name":"仙台市14","code":"仙台市14","status":"1","group":"b"},
		{"id":"19","name":"仙台市11","code":"仙台市11","status":"1","group":"b"},
		{"id":"20","name":"仙台市12","code":"仙台市12","status":"1","group":"b"},
		{"id":"21","name":"仙台市13","code":"仙台市13","status":"1","group":"b"},
		{"id":"22","name":"仙台市14","code":"仙台市14","status":"1","group":"b"},
		{"id":"23","name":"仙台市10","code":"仙台市10","status":"1","group":"b"},
		{"id":"24","name":"仙台市11","code":"仙台市11","status":"1","group":"b"},
		{"id":"25","name":"仙台市12","code":"仙台市12","status":"1","group":"b"},
		{"id":"26","name":"仙台市13","code":"仙台市13","status":"1","group":"b"}
		],	
		"data":[
			{"donor":"横山電工"}
		],
		"comment":"ここにテキスト"
	},
	
	"kesennuma":{
		"spots": [
		{"id":"1","name":"気仙沼市1","code":"気仙沼市1","status":"1","group":"c"},
		{"id":"2","name":"気仙沼市2","code":"気仙沼市2","status":"1","group":"c"},
		{"id":"3","name":"気仙沼市3","code":"気仙沼市3","status":"1","group":"c"},
		{"id":"4","name":"気仙沼市4","code":"気仙沼市4","status":"1","group":"c"},
		{"id":"5","name":"気仙沼市5","code":"気仙沼市5","status":"1","group":"c"},
		{"id":"6","name":"気仙沼市6","code":"気仙沼市6","status":"1","group":"c"},
		{"id":"7","name":"気仙沼市7","code":"気仙沼市7","status":"1","group":"c"},
		{"id":"8","name":"気仙沼市8","code":"気仙沼市8","status":"1","group":"c"},
		{"id":"9","name":"気仙沼市9","code":"気仙沼市9","status":"1","group":"c"},
		{"id":"10","name":"気仙沼市10","code":"気仙沼市10","status":"1","group":"c"},
		{"id":"11","name":"気仙沼市11","code":"気仙沼市11","status":"1","group":"c"},
		{"id":"12","name":"気仙沼市12","code":"気仙沼市12","status":"1","group":"c"},
		{"id":"13","name":"気仙沼市13","code":"気仙沼市13","status":"1","group":"c"},
		{"id":"14","name":"気仙沼市14","code":"気仙沼市14","status":"1","group":"c"},
		{"id":"15","name":"気仙沼市10","code":"気仙沼市10","status":"1","group":"c"},
		{"id":"16","name":"気仙沼市11","code":"気仙沼市11","status":"1","group":"c"},
		{"id":"17","name":"気仙沼市12","code":"気仙沼市12","status":"1","group":"c"},
		{"id":"18","name":"気仙沼市13","code":"気仙沼市13","status":"1","group":"c"},
		{"id":"19","name":"気仙沼市14","code":"気仙沼市14","status":"1","group":"c"},
		{"id":"20","name":"気仙沼市10","code":"気仙沼市10","status":"1","group":"c"},
		{"id":"21","name":"気仙沼市11","code":"気仙沼市11","status":"1","group":"c"}
		],	
		"data":[
			{"donor":"横山電工"}
		],
		"comment":"ここにテキスト"
	}
	
};












////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//				ver.engrish
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/*
enwritehead:Header情報を出力
---------------------------------------*/
function enwritehead(){
keyNumber=keyNumber-3;
	document.write('<h1>'+enjson.list[keyNumber].jname+'</h1><br>');
	document.write('<div class="left">');
	if( enjson.list[keyNumber].by != 'none'){
	document.write('<br><div class="face">Reporter：('+enjson.list[keyNumber].byj+')<table><tr>');
	document.write('<td><img src="img/face/'+enjson.list[keyNumber].by+'.jpg" width="120" height="170" ></td><td>');
		document.write('Image courtesy of：Quantity '+eval("enjson."+key+".spots.length")+'<br>');
	for(var i=0; i<eval("enjson."+key+".data.length");i++){
		document.write('<li>'+eval("enjson."+key+".data[i].donor")+'</li>');
	}
	document.write('</td></tr></table></div>');}
	document.write('</div><div class="right"><img src="img/photo/'+enjson.list[keyNumber].name+'/'+enjson.list[keyNumber].name+'.jpg"/></div>');
	$("title").text(enjson.list[keyNumber].jname + "-Photo:Think about the Earthquake Disaster");
}

/*
enwriteImggrid:画像Gridを出力
---------------------------------------*/
function enwriteImggrid(){
	var status;

	for(var j=1; j<=eval("enjson."+key+".spots.length"); j++){
		var spot = eval("enjson."+key+".spots[j-1]");
			if(spot.status == 1){
				status = 'At the time the earthquake';
			}else{
				status = 'Current';
			}
	document.write('<a class="fancy" data-fancybox-type="image" data-fancybox-group="'+spot.group+'" href="img/photo/'+enjson.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'　'+spot.name+' '+status+'">');
	document.write('<div class="photgrid">');
	document.write('<div class="cap">');
	document.write('<img src="img/photo/'+enjson.list[keyNumber].name+'/' + spot.id + '.jpg" width="239" height="210"/>');
	document.write('<span class="status'+spot.status+'">'+status+'</span>');
	document.write('</div><p>'+spot.name+'</p>');
	document.write('</div></a>');
	}

}

/*
enwritelist:市町村リストを出力
---------------------------------------*/
function enwritelist(){
	var count_img = 0;
	for(var i=0; i<enjson.list.length; i++){
		if(enjson.list[i].name == 'ami'){
		document.write('<br><div class="point">Other</div><br>');
		}
		document.write('<a href="en_photo_'+enjson.list[i].name+'.html"><div class="content_menu">');
		document.write('<h2>'+enjson.list[i].jname+'</h2><div>');
		if(i <  20 ){
		document.write('Reporters：'+enjson.list[i].byj+'　');
		}
		document.write('Pictures ：'+eval("enjson."+enjson.list[i].name+".spots.length")+'</div>');
		document.write('</div>');
		document.write('</a><hr>');
		count_img = count_img + eval("enjson."+enjson.list[i].name+".spots.length");
	}
	document.getElementById('imgcounter').innerHTML= 'Total number of images ：'+count_img;
	document.getElementById('imgcontent').innerHTML= 'Regions ：'+json.list.length;
}




var enjson = 
{
	"list":
		[
		
		{"jname":"Inashiki　City","name":"inasiki","by":"1_kamihara","byj":"Takumi.K."},
		{"jname":"Ibaraki　Town","name":"ibarakimati","by":"2_suzuki","byj":"Yumi.S."},
		{"jname":"Oarai　Town","name":"oarai","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"Kasama　　City","name":"kasama","by":"2_suzuki","byj":"Yumi.S."},
		{"jname":"Kasumigaura　City","name":"kasumigaura","by":"2_suzuki","byj":"Yumi.S."},
		{"jname":"Kitaibaraki　　City","name":"kitaibaraki","by":"1_minami","byj":"Kaori.M."},
		{"jname":"Sakuragawa　City","name":"sakuragawa","by":"1_kobayashi","byj":"Masamune.K."},
		{"jname":"Shimotsuma　City","name":"simotuma","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"Joso　City","name":"jyoso","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"Shirosato　Town","name":"shirosato","by":"1_kobayashi","byj":"Masamune.K."},
		{"jname":"Takahagi　City","name":"takahagi","by":"1_minami","byj":"Kaori.M."},
		{"jname":"Chikusei　City","name":"tikusei","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"Tsuchiura　City","name":"tutiura","by":"1_kamihara","byj":"Takumi.K."},
		{"jname":"Bando　City","name":"bandou","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"Hitachi　City","name":"hitati","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"Hitachiota　City","name":"hitachioota","by":"1_minami","byj":"Kaori.M."},
		{"jname":"Hitachi Omiya　City","name":"hitatioomiya","by":"1_minami","byj":"Kaori.M."},
		{"jname":"Hitachinaka　City","name":"hitachinaka","by":"1_kobayashi","byj":"Masamune.K."},
		{"jname":"Hokota　City","name":"hokota","by":"1_kobayashi","byj":"Masamune.K."},
		{"jname":"Mito　City","name":"mito","by":"2_suzuki","byj":"Yumi.S."},
		
		{"jname":"Ami　Town","name":"ami","by":"none","byj":"none"},
		{"jname":"Kashima　City","name":"kasima","by":"none","byj":"none"},
		{"jname":"Kawauti　Town","name":"kawauti","by":"none","byj":"none"},
		{"jname":"Tukubamirai　City","name":"tukubamirai","by":"none","byj":"none"},
		{"jname":"Namegata　City","name":"namegata","by":"none","byj":"none"},	
		{"jname":"Moriya　City","name":"moriya","by":"none","byj":"none"}
		],


	"oarai":{
		"spots": [
			{"id":"9","name":"Aerial photo","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"0"},
			{"id":"5","name":"Ferry Terminal","code":"2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"0"},
			{"id":"6","name":"Oarai Marine Tower","code":"10,Minatochuo,Oarai-machi Higashiibaraki-gun, Ibaraki","status":"1","group":"a"},
			{"id":"3","name":"Oarai Marine Tower","code":"10,Minatochuo,Oarai-machi Higashiibaraki-gun, Ibaraki","status":"1","group":"a"},
			{"id":"38","name":"Oarai Marine Tower","code":"10,Minatochuo,Oarai-machi Higashiibaraki-gun, Ibaraki","status":"0","group":"a"},
			{"id":"29","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b"},
			{"id":"30","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b"},
			{"id":"31","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b"},
			{"id":"32","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b"},
			{"id":"33","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b"},
			{"id":"34","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b"},
			{"id":"4","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"c"},
			{"id":"7","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"c"},
			{"id":"8","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"c"},
			{"id":"35","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"c"},
			{"id":"36","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"c"},
			{"id":"37","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"c"},
			{"id":"2","name":"Cultural center","code":"6881-88,Isohamacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"d"},
			{"id":"10","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e"},
			{"id":"11","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e"},
			{"id":"12","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e"},
			{"id":"13","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e"},
			{"id":"20","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e"},
			{"id":"21","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e"},
			{"id":"22","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e"},
			{"id":"23","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e"},
			{"id":"24","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e"},
			{"id":"18","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e"},
			{"id":"40","name":"Science Museum ","code":"11-2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"f"},
			{"id":"41","name":"Science Museum ","code":"11-2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"f"},
			{"id":"16","name":"Fish market","code":"Isohamacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"g"},
			{"id":"19","name":"Fish market","code":"Isohamacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"g"},
			{"id":"14","name":"Resort Outlets","code":"11-2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"h"},
			{"id":"15","name":"Resort Outlets","code":"11-2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"h"},
			{"id":"17","name":"Resort Outlets","code":"11-2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"h"},
			{"id":"27","name":"Convenience store","code":"8253-39,Isohamacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"i"},
			{"id":"44","name":"Convenience store","code":"8253-39,Isohamacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"i"},
			{"id":"1","name":"Line 2 prefectural","code":"Line 2 prefectural","status":"1","group":"j"},
			{"id":"25","name":"Line 2 prefectural","code":"Line 2 prefectural","status":"0","group":"j"},
			{"id":"26","name":"Line 2 prefectural","code":"Line 2 prefectural","status":"0","group":"j"},
			{"id":"28","name":"Line 2 prefectural","code":"Line 2 prefectural","status":"0","group":"j"},
			{"id":"39","name":"Oarai Sun Beach","code":"Oarai Sun Beach","status":"0","group":"k"},
			{"id":"42","name":"Heitaro beach","code":"Heitaro beach","status":"0","group":"l"},
			{"id":"43","name":"Heitaro beach","code":"Heitaro beach","status":"0","group":"l"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"},
			{"donor":"Oarai town hall"}
		]
	},

	"ami":{
		"spots": [
		{"id":"1","name":"Ami　Town　1","code":"Ami　Town　1","status":"1","group":"a"},
		{"id":"2","name":"Ami　Town　2","code":"Ami　Town　2","status":"1","group":"a"},
		{"id":"3","name":"Ami　Town　3","code":"Ami　Town　3","status":"1","group":"a"},
		{"id":"4","name":"Ami　Town　4","code":"Ami　Town　4","status":"1","group":"a"},
		{"id":"5","name":"Ami　Town　5","code":"Ami　Town　5","status":"1","group":"a"},
		{"id":"6","name":"Ami　Town　6","code":"Ami　Town　6","status":"1","group":"a"},
		{"id":"7","name":"Ami　Town　7","code":"Ami　Town　7","status":"1","group":"a"},
		{"id":"8","name":"Ami　Town　8","code":"Ami　Town　8","status":"1","group":"a"},
		{"id":"9","name":"Ami　Town　9","code":"Ami　Town　9","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"bandou":{
		"spots": [
		{"id":"1","name":"Yahagi road","code":"177-3004,Yahagi,Bando-shi,Ibaraki","status":"1","group":"a"},
		{"id":"1a","name":"Yahagi road","code":"177-3004,Yahagi,Bando-shi,Ibaraki","status":"0","group":"a"},
		{"id":"2","name":"Bridge No. 7","code":"1056-1,Kariyado,Bando-shi,Ibaraki","status":"1","group":"b"},
		{"id":"2a","name":"Bridge No. 7","code":"1056-1,Kariyado,Bando-shi,Ibaraki","status":"0","group":"b"},
		{"id":"3","name":"Bridge No. 8","code":"1001,Kariyado,Bando-shi,Ibaraki","status":"1","group":"b"},
		{"id":"3a","name":"Bridge No. 8","code":"1001,Kariyado,Bando-shi,Ibaraki","status":"0","group":"b"},
		{"id":"4","name":"Bando City Hall Buildings Iwai","code":"4365,Iwai,Bando-shi,Ibaraki","status":"1","group":"c"},
		{"id":"4a","name":"Bando City Hall Buildings Iwai","code":"4365,Iwai,Bando-shi,Ibaraki","status":"0","group":"c"},
		{"id":"5","name":"Bando City Hall Buildings Iwai","code":"4365,Iwai,Bando-shi,Ibaraki","status":"1","group":"c"},
		{"id":"5a","name":"Bando City Hall Buildings Iwai","code":"4365,Iwai,Bando-shi,Ibaraki","status":"0","group":"c"},
		{"id":"6","name":"Bando City Hall Buildings Iwai","code":"4365,Iwai,Bando-shi,Ibaraki","status":"1","group":"c"},
		{"id":"7","name":"Bando fire department","code":"644-2,Heta,Bando-shi,Ibaraki","status":"1","group":"c"},
		{"id":"7a","name":"Bando fire department","code":"644-2,Heta,Bando-shi,Ibaraki","status":"0","group":"c"},
		{"id":"8","name":"Kawazoe west elm","code":"1183,Oigoshinden,Bando-shi,Ibaraki","status":"1","group":"d"},
		{"id":"8a","name":"Kawazoe west elm","code":"1183,Oigoshinden,Bando-shi,Ibaraki","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"hitachinaka":{
		"spots": [
		{"id":"01","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a"},
		{"id":"02","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a"},
		{"id":"03","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a"},
		{"id":"001","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a"},
		{"id":"000","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"0","group":"a"},
		{"id":"003","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a"},
		{"id":"002","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"0","group":"a"},
		{"id":"005","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a"},
		{"id":"006","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"0","group":"a"},
		{"id":"007","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a"},
		{"id":"017","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"0","group":"a"},
		{"id":"04","name":"Sakae cafeteria","code":"22-3,Minatohoncho,Hitachinaka-shi,Ibaraki","status":"1","group":"b"},
		{"id":"05","name":"Sakae cafeteria","code":"22-3,Minatohoncho,Hitachinaka-shi,Ibaraki","status":"1","group":"b"},
		{"id":"06","name":"Private house","code":"1-1-5,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"c"},
		{"id":"07","name":"Private house","code":"1-1-5,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"c"},
		{"id":"014","name":"Town road Tonoyama","code":"1-1-1,Tonoyamacho,Hitachinaka-shi,Ibaraki","status":"1","group":"d"},
		{"id":"015","name":"Town road Tonoyama","code":"1-1-1,Tonoyamacho,Hitachinaka-shi,Ibaraki","status":"1","group":"d"},
		{"id":"0001","name":"Town road Tonoyama","code":"1-1-1,Tonoyamacho,Hitachinaka-shi,Ibaraki","status":"0","group":"d"},
		{"id":"0002","name":"Town road Tonoyama","code":"1-1-1,Tonoyamacho,Hitachinaka-shi,Ibaraki","status":"0","group":"d"},
		{"id":"0003","name":"Warehouse fishery","code":"1-11-34,Ushikubocho,Hitachinaka-shi,Ibaraki","status":"1","group":"e"},
		{"id":"013","name":"Warehouse fishery","code":"1-11-34,Ushikubocho,Hitachinaka-shi,Ibaraki","status":"0","group":"e"},
		{"id":"0004","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"1","group":"f"},
		{"id":"010","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"0","group":"f"},
		{"id":"0005","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"1","group":"f"},
		{"id":"011","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"0","group":"f"},
		{"id":"0006","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"1","group":"f"},
		{"id":"012","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"0","group":"f"}
		],	
		"data":[
			{"donor":"Individual shooting"}
		]
	},
	
	
	"hitachioota":{
		"spots": [
		{"id":"1","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"2","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"3","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"4","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"5","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"6","name":"Road","code":"Ozawacho,Hitachiota-shi,Ibaraki","status":"0","group":"a"},
		{"id":"7","name":"Road","code":"Ozawacho,Hitachiota-shi,Ibaraki","status":"0","group":"a"},
		{"id":"8","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"9","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"10","name":"Road","code":"Ozawacho,Hitachiota-shi,Ibaraki","status":"0","group":"a"},
		{"id":"11","name":"Road","code":"Ozawacho,Hitachiota-shi,Ibaraki","status":"0","group":"a"},
		{"id":"12","name":"Road","code":"Ozawacho,Hitachiota-shi,Ibaraki","status":"0","group":"a"},
		{"id":"13","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"14","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"15","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"16","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"17","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"18","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"19","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"20","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"21","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"22","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"Mineyama junior high school"}
		]
	},
	
	
	
	"hitati":{
		"spots": [
		{"id":"1","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"1","group":"a"},
		{"id":"1a","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"0","group":"a"},
		{"id":"2","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"1","group":"a"},
		{"id":"2a","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"0","group":"a"},
		{"id":"3","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"1","group":"a"},
		{"id":"3a","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"0","group":"a"},
		{"id":"4","name":"1-2,Suwacho,Hitachi-shi,Ibaraki","code":"1-2,Suwacho,Hitachi-shi,Ibaraki","status":"1","group":"b"},
		{"id":"4a","name":"1-2,Suwacho,Hitachi-shi,Ibaraki","code":"1-2,Suwacho,Hitachi-shi,Ibaraki","status":"0","group":"b"},
		{"id":"5","name":"12,Suwacho,Hitachi-shi,Ibaraki","code":"12,Suwacho,Hitachi-shi,Ibaraki","status":"1","group":"b"},
		{"id":"5aa","name":"12,Suwacho,Hitachi-shi,Ibaraki","code":"12,Suwacho,Hitachi-shi,Ibaraki","status":"0","group":"b"},
		{"id":"6","name":"1-11,Ousecho,Hitachi-shi,Ibaraki","code":"1-11,Ousecho,Hitachi-shi,Ibaraki","status":"1","group":"b"},
		{"id":"6aa","name":"1-11,Ousecho,Hitachi-shi,Ibaraki","code":"1-11,Ousecho,Hitachi-shi,Ibaraki","status":"0","group":"b"},
		{"id":"21","name":"Kokubu engineering equipment","code":"1,Kokubucho,Hitachi-shi,Ibaraki","status":"1","group":"b"},
		{"id":"21a","name":"Kokubu engineering equipment","code":"1,Kokubucho,Hitachi-shi,Ibaraki","status":"0","group":"b"},
		{"id":"7","name":"Bathing beach","code":"1,Kawajiricho,Hitachi-shi,Ibaraki","status":"1","group":"c"},
		{"id":"7a","name":"Bathing beach","code":"1,Kawajiricho,Hitachi-shi,Ibaraki","status":"0","group":"c"},
		{"id":"14","name":"Houjyuin","code":"1990,Juocho Tomobe,Hitachi-shi,Ibaraki","status":"1","group":"c"},
		{"id":"14a","name":"Houjyuin","code":"1990,Juocho Tomobe,Hitachi-shi,Ibaraki","status":"0","group":"c"},
		{"id":"15","name":"Fish Center","code":"5779-24,Minatocho,Hitachi-shi,Ibaraki","status":"1","group":"d"},
		{"id":"15a","name":"Fish Center","code":"5779-24,Minatocho,Hitachi-shi,Ibaraki","status":"0","group":"d"},
		{"id":"16","name":"Fishing port","code":"1,Kujicho,Hitachi-shi,Ibaraki","status":"1","group":"d"},
		{"id":"16a","name":"Fishing port","code":"1,Kujicho,Hitachi-shi,Ibaraki","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"Individual shooting"}
		]
	},
	
	
	
	"hitatioomiya":{
		"spots": [
		{"id":"1","name":"Gozenyama elementary school","code":"3217,Noguchi,Hitachiomiya-shi,Ibaraki","status":"1","group":"a"},
		{"id":"2","name":"Jia shrine","code":"219,Shimocho,Hitachiomiya-shi,Ibaraki","status":"1","group":"a"},
		{"id":"3","name":"Rozehoru","code":"3135-6,Nakatomicho,Hitachiomiya-shi,Ibaraki","status":"1","group":"a"},
		{"id":"4","name":"Rozehoru","code":"3135-6,Nakatomicho,Hitachiomiya-shi,Ibaraki","status":"1","group":"a"},
		{"id":"5","name":"Fire Department","code":"621,Ubagacho,Hitachiomiya-shi,Ibaraki","status":"1","group":"a"},
		{"id":"6","name":"Road","code":"Ono,Hitachiomiya-shi,Ibaraki","status":"1","group":"a"},
		{"id":"7","name":"Road","code":"Oba,Hitachiomiya-shi,Ibaraki","status":"1","group":"a"},
		{"id":"8","name":"Road","code":"Shimoiwase,Hitachiomiya-shi,Ibaraki","status":"1","group":"a"},
		{"id":"9","name":"Road","code":"Shimoiwase,Hitachiomiya-shi,Ibaraki","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"hokota":{
		"spots": [
		{"id":"014","name":"General Park gymnasium","code":"2331,Toma,Hokota-shi,Ibaraki","status":"1","group":"a"},
		{"id":"001","name":"General Park gymnasium","code":"2331,Toma,Hokota-shi,Ibaraki","status":"0","group":"a"},
		{"id":"015","name":"Asahikita elementary school","code":"3852,Tasaki,Hokota-shi,Ibaraki","status":"1","group":"b"},
		{"id":"007","name":"Asahikita elementary school","code":"3852,Tasaki,Hokota-shi,Ibaraki","status":"0","group":"b"},
		{"id":"016","name":"City library","code":"1444-1,Hokota,Hokota-shi,Ibaraki","status":"1","group":"c"},
		{"id":"004","name":"City library","code":"1444-1,Hokota,Hokota-shi,Ibaraki","status":"0","group":"c"},
		{"id":"012","name":"Second nursery","code":"148,Hokota,Hokota-shi,Ibaraki","status":"1","group":"c"},
		{"id":"017","name":"Second nursery","code":"148,Hokota,Hokota-shi,Ibaraki","status":"1","group":"c"},
		{"id":"006","name":"Second nursery","code":"148,Hokota,Hokota-shi,Ibaraki","status":"0","group":"c"},
		{"id":"005","name":"Second nursery","code":"148,Hokota,Hokota-shi,Ibaraki","status":"0","group":"c"},
		{"id":"018","name":"Fuji bridge","code":"2299,Hokota,Hokota-shi,Ibaraki","status":"1","group":"c"},
		{"id":"013","name":"Fuji bridge","code":"2299,Hokota,Hokota-shi,Ibaraki","status":"1","group":"c"},
		{"id":"002","name":"Fuji bridge","code":"2299,Hokota,Hokota-shi,Ibaraki","status":"0","group":"c"},
		{"id":"003","name":"Fuji bridge","code":"2299,Hokota,Hokota-shi,Ibaraki","status":"0","group":"c"},
		{"id":"019","name":"Ohashi line around deer","code":"Fuda,Hokota-shi,Ibaraki","status":"1","group":"d"},
		{"id":"010","name":"Ohashi line around deer","code":"Fuda,Hokota-shi,Ibaraki","status":"0","group":"d"},
		{"id":"000","name":"Thunder shrine","code":"689,Kashiwakuma,Hokota-shi,Ibaraki","status":"1","group":"e"},
		{"id":"008","name":"Thunder shrine","code":"689,Kashiwakuma,Hokota-shi,Ibaraki","status":"0","group":"e"},
		{"id":"011","name":"Owada elementary school","code":"1018-3,Owada,Hokota-shi,Ibaraki","status":"1","group":"f"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"},
			{"donor":"City Hall Hokota"}
		]
	},
	
	"ibarakimati":{
		"spots": [
		{"id":"1","name":"Takahashi","code":"Road No. 18","status":"1","group":"a"},
		{"id":"12","name":"Takahashi","code":"Road No. 18","status":"0","group":"a"},
		{"id":"4","name":"General Welfare Center","code":"1037-1,Odutumi,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"a"},
		{"id":"11","name":"General Welfare Center","code":"1037-1,Odutumi,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"a"},
		{"id":"6","name":"Fire Department Town, Ibaraki","code":"1037-1,Odutumi,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"a"},

		{"id":"8","name":"Nature park","code":"2263,Nkaishizaki,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"b"},
		{"id":"2","name":"Nature park","code":"2263,Nkaishizaki,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"b"},
		{"id":"7","name":"Community center","code":"Shimoishizaki,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"b"},
		{"id":"9","name":"Parking park","code":"1651,Shimoishizaki,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"b"},
		
		{"id":"5","name":"Gymnasium","code":"862,Okunoya,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"c"},
		{"id":"3","name":"Nagaoka solid","code":"Kobukicho,Mito-shi,Ibaraki","status":"1","group":"c"},
		{"id":"13","name":"Nagaoka solid","code":"Kobukicho,Mito-shi,Ibaraki","status":"0","group":"c"},
		{"id":"10","name":"Cycling Road","code":"Nagaoka,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"c"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"inasiki":{
		"spots": [
		{"id":"01","name":"Parking","code":"1403,Nshishiro,Inashiki-shi,Ibaraki","status":"0","group":"a"},
		{"id":"1","name":"Parking","code":"1403,Nshishiro,Inashiki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"02","name":"Kashima Shrine","code":"309,Motoshin,Inashiki-shi,Ibaraki","status":"0","group":"b"},
		{"id":"2","name":"Kashima Shrine","code":"309,Motoshin,Inashiki-shi,Ibaraki","status":"1","group":"b"},
		{"id":"04","name":"Ohashi Suigo","code":"1661-1,Nishishiro,Inashiki,Ibaraki","status":"0","group":"c"},
		{"id":"4","name":"Ohashi Suigo","code":"1661-1,Nishishiro,Inashiki,Ibaraki","status":"1","group":"c"},
		{"id":"06","name":"Shintonegawa","code":"52-8,Motoshin,Inashiki,Ibaraki","status":"0","group":"d"},
		{"id":"6","name":"Shintonegawa","code":"52-8,Motoshin,Inashiki,Ibaraki","status":"1","group":"d"},
		{"id":"08","name":"Shintonegawa","code":"8322,Ukishima,Inashiki,Ibaraki","status":"0","group":"e"},
		{"id":"12","name":"Shintonegawa","code":"8322,Ukishima,Inashiki,Ibaraki","status":"1","group":"e"},
		{"id":"9","name":"Shintonegawa","code":"52-10,Motoshin,Inashiki,Ibaraki","status":"1","group":"f"},
		{"id":"09","name":"Shintonegawa","code":"52-10,Motoshin,Inashiki,Ibaraki","status":"0","group":"f"},
		{"id":"10","name":"Shintonegawa","code":"52-10,Motoshin,Inashiki,Ibaraki","status":"0","group":"f"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"jyoso":{
		"spots": [
		{"id":"1","name":"General Welfare Center","code":"4365,Shin'ishige,Joso-shi,Ibaraki","status":"1","group":"a"},
		{"id":"1a","name":"General Welfare Center","code":"4365,Shin'ishige,Joso-shi,Ibaraki","status":"0","group":"a"},
		{"id":"2","name":"General Welfare Center","code":"4365,Shin'ishige,Joso-shi,Ibaraki","status":"1","group":"a"},
		{"id":"2a","name":"General Welfare Center","code":"4365,Shin'ishige,Joso-shi,Ibaraki","status":"0","group":"a"},
		{"id":"5","name":"County Road No. 24","code":"299,Mukoishige,Joso-shi,Ibaraki","status":"1","group":"a"},
		{"id":"5a","name":"County Road No. 24","code":"299,Mukoishige,Joso-shi,Ibaraki","status":"0","group":"a"},
		{"id":"5aa","name":"County Road No. 24","code":"299,Mukoishige,Joso-shi,Ibaraki","status":"0","group":"a"},
		{"id":"9","name":"Joso City Hall","code":"576-2,Shin'ishige,Joso-shi,Ibaraki","status":"1","group":"a"},
		{"id":"9a","name":"Joso City Hall","code":"576-2,Shin'ishige,Joso-shi,Ibaraki","status":"0","group":"a"},
		{"id":"3","name":"Jokoji","code":"1053,Wakamiyado,Joso-shi,Ibaraki","status":"1","group":"b"},
		{"id":"3a","name":"Jokoji","code":"1053,Wakamiyado,Joso-shi,Ibaraki","status":"0","group":"b"},
		{"id":"4","name":"Joso City Hall","code":"3222-3,Mitukaido Suwamachi,Joso-shi,Ibaraki","status":"1","group":"c"},
		{"id":"4a","name":"Joso City Hall","code":"3222-3,Mitukaido Suwamachi,Joso-shi,Ibaraki","status":"0","group":"c"},
		{"id":"6","name":"West junior high school Ishige","code":"910-1,Sugiyama,Joso-shi,Ibaraki","status":"1","group":"d"},
		{"id":"7","name":"West junior high school Ishige","code":"910-1,Sugiyama,Joso-shi,Ibaraki","status":"1","group":"d"},
		{"id":"8","name":"West junior high school Ishige","code":"910-1,Sugiyama,Joso-shi,Ibaraki","status":"1","group":"d"},
		{"id":"8a","name":"West junior high school Ishige","code":"910-1,Sugiyama,Joso-shi,Ibaraki","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"kasama":{
		"spots": [
		{"id":"1","name":"Kasama City Hall","code":"717,Ishii,Kasama-shi,Ibaraki","status":"1","group":"a"},
		{"id":"6","name":"Kasama K's Denki store","code":"2090,Ishii,Kasama-shi,Ibaraki","status":"1","group":"a"},
		{"id":"3","name":"Kasama library","code":"2023-1,Ishii,Kasama-shi,Ibaraki","status":"1","group":"a"},
		{"id":"10","name":"Kasama library","code":"2023-1,Ishii,Kasama-shi,Ibaraki","status":"0","group":"a"},
		{"id":"2","name":"Kasama City Hall","code":"3-2-1,Chuo,Kasama-shi,Ibaraki","status":"1","group":"b"},
		{"id":"11","name":"Kasama City Hall","code":"3-2-1,Chuo,Kasama-shi,Ibaraki","status":"0","group":"b"},
		{"id":"4","name":"Junior high school second Tomobe","code":"510-1,Asahicho,Ksama-shi,Ibaraki","status":"1","group":"c"},
		{"id":"5","name":"Hill crafts","code":"2388-1,Kasama,Kasama-shi,Ibaraki","status":"1","group":"d"},
		{"id":"7","name":"Ground school Kasama","code":"2688,Kasama,Kasama-shi,Ibaraki","status":"1","group":"d"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"kasima":{
		"spots": [
		{"id":"1","name":"Along the coast","code":"Along the coast","status":"1","group":"a"},
		{"id":"2","name":"Kashima district Komiyasaku","code":"Kashima district Komiyasaku","status":"1","group":"a"},
		{"id":"3","name":"Kashima district shedding","code":"Kashima district shedding","status":"1","group":"a"},
		{"id":"4","name":"Kashima district Kunisue","code":"Kashima district Kunisue","status":"1","group":"a"},
		{"id":"5","name":"Situation of farm road","code":"Situation of farm road","status":"1","group":"a"},
		{"id":"6","name":"Bathing beach","code":"Bathing beach","status":"1","group":"a"},
		{"id":"7","name":"Along the coast","code":"Along the coast","status":"1","group":"a"},
		{"id":"8","name":"Hirai coast","code":"Hirai coast","status":"1","group":"a"},
		{"id":"9","name":"Kashima district Komiyasaku","code":"Kashima district Komiyasaku","status":"1","group":"a"},
		{"id":"10","name":"Kashima Hachigatadai","code":"Kashima Hachigatadai","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"kasumigaura":{
		"spots": [
		{"id":"1","name":"Buildings Chiyoda","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"2","name":"Hall Azisai","code":"3719-1,Fukaya,Kasumigaura-shi,Ibaraki","status":"1","group":"b"},
		{"id":"9","name":"Hall Azisai","code":"3719-1,Fukaya,Kasumigaura-shi,Ibaraki","status":"0","group":"b"},
		{"id":"3","name":"Kasumigaura City Hall","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"4","name":"Kasumigaura City Hall","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"5","name":"Kasumigaura City Hall","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"6","name":"Kasumigaura City Hall","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"7","name":"Kasumigaura City Hall","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"8","name":"Kasumigaura embankment","code":"Kasumigaura-shi,Ibaraki","status":"1","group":"c"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"kawauti":{
		"spots": [
		{"id":"1","name":"Kawachi　1","code":"Kawachi　1","status":"1","group":"a"},
		{"id":"2","name":"Kawachi　2","code":"Kawachi　2","status":"1","group":"a"},
		{"id":"3","name":"Kawachi　3","code":"Kawachi　3","status":"1","group":"a"},
		{"id":"4","name":"Kawachi　4","code":"Kawachi　4","status":"1","group":"a"},
		{"id":"5","name":"Kawachi　5","code":"Kawachi　5","status":"1","group":"a"},
		{"id":"6","name":"Kawachi　6","code":"Kawachi　6","status":"1","group":"a"},
		{"id":"7","name":"Kawachi　7","code":"Kawachi　7","status":"1","group":"a"},
		{"id":"8","name":"Kawachi　8","code":"Kawachi　8","status":"1","group":"a"},
		{"id":"9","name":"Kawachi　9","code":"Kawachi　9","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"kitaibaraki":{
		"spots": [
		{"id":"1","name":"Kitaibaraki City Hall","code":"1630,isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"2","name":"Kitaibaraki City Hall","code":"1630,isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"3","name":"Along the coast","code":"Hirakatacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"4","name":"Otsu fishing cooperative","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"5","name":"Line","code":"Hirakatacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"6","name":"Community Center Disaster","code":"198-1,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"7","name":"Line","code":"Hirakatacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"8","name":"Along the coast","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"9","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"10","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"11","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"12","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"13","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"14","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"15","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"16","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"17","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"18","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"19","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"20","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"21","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"22","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"23","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"mito":{
		"spots": [
		{"id":"1","name":"Road No. 51","code":"1,Higashidai,Mito-shi,Ibaraki","status":"1","group":"a"},
		{"id":"8","name":"Road No. 51","code":"1,Higashidai,Mito-shi,Ibaraki","status":"0","group":"a"},
		{"id":"16","name":"Watanabe orthopedic","code":"1-6-1,Higashidai,Mito-shi,Ibaraki","status":"0","group":"a"},
		{"id":"2","name":"Toshogu","code":"2-5-13,Miyamachi,Mito-shi,Ibaraki","status":"1","group":"b"},
		{"id":"3","name":"Toshogu","code":"2-5-13,Miyamachi,Mito-shi,Ibaraki","status":"1","group":"b"},
		{"id":"6","name":"Mito Station North Exit","code":"1,Miyamachi,Mito-shi,Ibaraki","status":"1","group":"b"},
		{"id":"7","name":"Mito Station North Exit","code":"1,Miyamachi,Mito-shi,Ibaraki","status":"0","group":"b"},
		{"id":"4","name":"Mito City Hall","code":"1-4-1,Chuo,Mito-shi,Ibaraki","status":"1","group":"c"},
		{"id":"5","name":"Mito City Hall","code":"1-4-1,Chuo,Mito-shi,Ibaraki","status":"1","group":"c"},
		{"id":"9","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d"},
		{"id":"10","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d"},
		{"id":"11","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d"},
		{"id":"12","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d"},
		{"id":"13","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d"},
		{"id":"14","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d"},
		{"id":"15","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d"},
		{"id":"17","name":"Yamada Denki Co., Ltd.","code":"209,Kasaharacho,Mito-shi,Ibaraki","status":"1","group":"e"},
		{"id":"18","name":"Yamada Denki Co., Ltd.","code":"209,Kasaharacho,Mito-shi,Ibaraki","status":"1","group":"e"},
		{"id":"22","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"f"},
		{"id":"25","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"f"},
		{"id":"26","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"f"},
		{"id":"28","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"f"},
		{"id":"29","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g"},
		{"id":"30","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g"},
		{"id":"31","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g"},
		{"id":"36","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g"},
		{"id":"43","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g"},
		{"id":"45","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g"},
		{"id":"50","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g"},
		{"id":"52","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g"},
		{"id":"60","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g"},
		{"id":"61","name":"Sannomaru elementary school","code":"1-6-51,San'nomaru,Mito-shi,Ibaraki","status":"1","group":"h"},
		{"id":"62","name":"Sannomaru elementary school","code":"1-6-51,San'nomaru,Mito-shi,Ibaraki","status":"1","group":"h"},
		{"id":"63","name":"Sannomaru elementary school","code":"1-6-51,San'nomaru,Mito-shi,Ibaraki","status":"1","group":"h"},
		{"id":"64","name":"Sannomaru elementary school","code":"1-6-51,San'nomaru,Mito-shi,Ibaraki","status":"1","group":"h"},
		{"id":"71","name":"Second high school Mito","code":"2-2-14,Omachi,Mito-shi,Ibaraki","status":"1","group":"h"},
		{"id":"72","name":"Second high school Mito","code":"2-2-14,Omachi,Mito-shi,Ibaraki","status":"1","group":"h"},
		{"id":"74","name":"Second high school Mito","code":"2-2-14,Omachi,Mito-shi,Ibaraki","status":"1","group":"h"},
		{"id":"76","name":"Second high school Mito","code":"2-2-14,Omachi,Mito-shi,Ibaraki","status":"1","group":"h"},
		{"id":"77","name":"Second high school Mito","code":"2-2-14,Omachi,Mito-shi,Ibaraki","status":"1","group":"h"},
		{"id":"65","name":"Center for Lifelong Learning","code":"4-1,Atagocho,Mito-shi,Ibaraki","status":"1","group":"i"},
		{"id":"66","name":"Center for Lifelong Learning","code":"4-1,Atagocho,Mito-shi,Ibaraki","status":"1","group":"i"},
		{"id":"67","name":"Center for Lifelong Learning","code":"4-1,Atagocho,Mito-shi,Ibaraki","status":"1","group":"i"},
		{"id":"69","name":"Center for Lifelong Learning","code":"4-1,Atagocho,Mito-shi,Ibaraki","status":"1","group":"i"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"Mito Technical High School"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"moriya":{
		"spots": [
		{"id":"1","name":"Moriya　City　1","code":"Moriya　City　1","status":"1","group":"a"},
		{"id":"2","name":"Moriya　City　2","code":"Moriya　City　2","status":"1","group":"a"},
		{"id":"3","name":"Moriya　City　3","code":"Moriya　City　3","status":"1","group":"a"},
		{"id":"4","name":"Moriya　City　4","code":"Moriya　City　4","status":"1","group":"a"},
		{"id":"5","name":"Moriya　City　5","code":"Moriya　City　5","status":"1","group":"a"},
		{"id":"6","name":"Moriya　City　6","code":"Moriya　City　6","status":"1","group":"a"},
		{"id":"7","name":"Moriya　City　7","code":"Moriya　City　7","status":"1","group":"a"},
		{"id":"8","name":"Moriya　City　8","code":"Moriya　City　8","status":"1","group":"a"},
		{"id":"9","name":"Moriya　City　9","code":"Moriya　City　9","status":"1","group":"a"},
		{"id":"10","name":"Moriya　City　10","code":"Moriya　City　10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"namegata":{
		"spots": [
		{"id":"1","name":"Namegata City　1","code":"Namegata City 1","status":"1","group":"a"},
		{"id":"2","name":"Namegata City 2","code":"Namegata City 2","status":"1","group":"a"},
		{"id":"3","name":"Namegata City 3","code":"Namegata City 3","status":"1","group":"a"},
		{"id":"4","name":"Namegata City 4","code":"Namegata City 4","status":"1","group":"a"},
		{"id":"5","name":"Namegata City 5","code":"Namegata City 5","status":"1","group":"a"},
		{"id":"6","name":"Namegata City 6","code":"Namegata City 6","status":"1","group":"a"},
		{"id":"7","name":"Namegata City 7","code":"Namegata City 7","status":"1","group":"a"},
		{"id":"8","name":"Namegata City 8","code":"Namegata City 8","status":"1","group":"a"},
		{"id":"9","name":"Namegata City 9","code":"Namegata City 9","status":"1","group":"a"},
		{"id":"10","name":"Namegata City 10","code":"Namegata City 10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"shirosato":{
		"spots": [
		{"id":"005","name":"District road Shimoakutsu","code":"Shimoskutu,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"a"},
		{"id":"009","name":"District road Shimoakutsu","code":"Shimoskutu,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"a"},
		{"id":"006","name":"Awa mountain","code":"2277,Awayama,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"b"},
		{"id":"010","name":"Awa mountain","code":"2277,Awayama,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"b"},
		{"id":"007","name":"Wooden bridge district road","code":"Wooden bridge district road","status":"1","group":"c"},
		{"id":"011","name":"Wooden bridge district road","code":"Wooden bridge district road","status":"0","group":"c"},
		{"id":"008","name":"Dam","code":"Shimofuruuchi,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"d"},
		{"id":"012","name":"Dam","code":"Shimofuruuchi,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"d"},
		{"id":"013","name":"Community center","code":"Ishituka,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e"},
		{"id":"003","name":"Town hall","code":"Ishituka,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e"},
		{"id":"002","name":"Town hall","code":"Ishituka,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e"},
		{"id":"004","name":"Town hall","code":"Ishituka,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e"},
		{"id":"000","name":"Town hall","code":"Ishituka,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e"},
		{"id":"001","name":"Shelter","code":"Ishituka,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"f"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"Town hall　Shirosato"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"simotuma":{
		"spots": [
		{"id":"1","name":"Buildings Sendaigawa","code":"230,Kinu,Shimotuma-shi,Ibaraki","status":"0","group":"a"},
		{"id":"1a","name":"Buildings Sendaigawa","code":"230,Kinu,Shimotuma-shi,Ibaraki","status":"1","group":"a"},
		{"id":"2","name":"Kamaniwa road","code":"139-2,Kamaniwa,Shimotuma-shi,Ibaraki","status":"0","group":"a"},
		{"id":"2a","name":"Kamaniwa road","code":"139-2,Kamaniwa,Shimotuma-shi,Ibaraki","status":"1","group":"a"},
		{"id":"3","name":"Aqua station","code":"933-1,Makaizashi,Shimotuma-shi,Ibaraki","status":"0","group":"a"},
		{"id":"3a","name":"Aqua station","code":"933-1,Makaizashi,Shimotuma-shi,Ibaraki","status":"1","group":"a"},
		{"id":"7","name":"Kamaniwa road","code":"933-1,Makaizashi,Shimotuma-shi,Ibaraki","status":"0","group":"a"},
		{"id":"7a","name":"Kamaniwa road","code":"933-1,Makaizashi,Shimotuma-shi,Ibaraki","status":"1","group":"a"},
		{"id":"4","name":"Roadside station","code":"140,Kazusu,Shimotuma-shi,Ibaraki","status":"0","group":"b"},
		{"id":"4a","name":"Roadside station","code":"140,Kazusu,Shimotuma-shi,Ibaraki","status":"1","group":"b"},
		{"id":"5","name":"Friendship Park","code":"1650-1,Horigome,Shimotuma-shi,Ibaraki","status":"0","group":"c"},
		{"id":"5a","name":"Friendship Park","code":"1650-1,Horigome,Shimotuma-shi,Ibaraki","status":"1","group":"c"},
		{"id":"6","name":"Iwai Buildings","code":"724-1,Han'ya,Shimotuma-shi,Ibaraki","status":"0","group":"d"},
		{"id":"6a","name":"Iwai Buildings","code":"724-1,Han'ya,Shimotuma-shi,Ibaraki","status":"1","group":"d"},
		{"id":"8","name":"Yamajiri road","code":"47,Yamajiri,Shimotuma-shi,Ibaraki","status":"0","group":"e"},
		{"id":"8a","name":"Yamajiri road","code":"47,Yamajiri,Shimotuma-shi,Ibaraki","status":"1","group":"e"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"takahagi":{
		"spots": [
		{"id":"1","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"2","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"3","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"4","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"5","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"6","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"7","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"8","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"9","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"10","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"11","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"12","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"13","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"14","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"15","name":"Isohara","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"16","name":"Isohara","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"17","name":"Isohara","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"18","name":"Yu Tsukihama","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"19","name":"Yu Tsukihama","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"20","name":"Yu Tsukihama","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"21","name":"Yu Tsukihama","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"22","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"23","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"24","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"25","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"26","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"27","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"28","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"29","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"30","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"31","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"32","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"33","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"},
		{"id":"34","name":"Nakago station","code":"Nakagocho,Kitaibaraki,Ibaraki","status":"1","group":"a"},
		{"id":"35","name":"Feng before beauty","code":"375,Nakagocho Ashiarai,Kitaibaraki-shi,Ibaraki","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"tikusei":{
		"spots": [
		{"id":"1","name":"Bill","code":"965,Otsu,Chikusei-shi,Ibaraki","status":"1","group":"a"},
		{"id":"1a","name":"Bill","code":"965,Otsu,Chikusei-shi,Ibaraki","status":"0","group":"a"},
		{"id":"2","name":"No. 357","code":"Kajiuchi,Chikusei-shi,Ibaraki","status":"1","group":"b"},
		{"id":"2a","name":"No. 357","code":"Kajiuchi,Chikusei-shi,Ibaraki","status":"0","group":"b"},
		{"id":"3","name":"Branch Sekijo","code":"1943-1,Sekimotoshimo,Chikusei-shi,Ibaraki","status":"1","group":"c"},
		{"id":"3a","name":"Branch Sekijo","code":"1943-1,Sekimotoshimo,Chikusei-shi,Ibaraki","status":"0","group":"c"},
		{"id":"5","name":"Civilian hospital","code":"1658,Tamado,Chikusei-shi,Ibaraki","status":"1","group":"d"},
		{"id":"5a","name":"Civilian hospital","code":"1658,Tamado,Chikusei-shi,Ibaraki","status":"0","group":"d"},
		{"id":"6","name":"Civilian hospital","code":"1658,Tamado,Chikusei-shi,Ibaraki","status":"1","group":"d"},
		{"id":"7","name":"Civilian hospital","code":"1658,Tamado,Chikusei-shi,Ibaraki","status":"1","group":"d"},
		{"id":"8","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"1","group":"e"},
		{"id":"8a","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"0","group":"e"},
		{"id":"9","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"1","group":"e"},
		{"id":"9a","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"0","group":"e"},
		{"id":"10","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"1","group":"e"},
		{"id":"10a","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"0","group":"e"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"tukubamirai":{
		"spots": [
		{"id":"1","name":"Tukubamirai City 1","code":"Tukubamirai City 1","status":"1","group":"a"},
		{"id":"2","name":"Tukubamirai City 2","code":"Tukubamirai City 2","status":"1","group":"a"},
		{"id":"3","name":"Tukubamirai City 3","code":"Tukubamirai City 3","status":"1","group":"a"},
		{"id":"4","name":"Tukubamirai City 4","code":"Tukubamirai City 4","status":"1","group":"a"},
		{"id":"5","name":"Tukubamirai City 5","code":"Tukubamirai City 5","status":"1","group":"a"},
		{"id":"6","name":"Tukubamirai City 6","code":"Tukubamirai City 6","status":"1","group":"a"},
		{"id":"7","name":"Tukubamirai City 7","code":"Tukubamirai City 7","status":"1","group":"a"},
		{"id":"8","name":"Tukubamirai City 8","code":"Tukubamirai City 8","status":"1","group":"a"},
		{"id":"9","name":"Tukubamirai City 9","code":"Tukubamirai City 9","status":"1","group":"a"},
		{"id":"10","name":"Tukubamirai City 10","code":"Tukubamirai City 10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"tutiura":{
		"spots": [
		{"id":"3","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"7","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"11","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"b"},
		{"id":"1","name":"First Municipal Junior High School Tsuchiura, Tsuchiura","code":"3-8,Bunkyocho,Tsuchiura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"2","name":"Husband swamp park","code":"2,Ottominami,Tsuchiura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"4","name":"National Highway No. 125","code":"1,Sakuramachi,Tsuchiura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"5","name":"Kashima Shrine","code":"4-3-6,Manabe,Tsuchiurashi,Ibaraki","status":"1","group":"a"},
		{"id":"6","name":"Suigo gymnasium","code":"1651,Oiwata,Tsuchiura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"8","name":"Tsuchiurasen","code":"Fujisawa,Tsuchiura-shi,Ibaraki","status":"1","group":"a"},
		{"id":"9","name":"Kashima Shrine","code":"4-3-6,Manabe,Tsuchiurashi,Ibaraki","status":"1","group":"b"},
		{"id":"10","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"b"},
		{"id":"12","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"b"},
		{"id":"13","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"b"},
		{"id":"14","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"b"},
		{"id":"15","name":"Tsuchiurasen","code":"Fujisawa,Tsuchiura-shi,Ibaraki","status":"1","group":"b"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"sakuragawa":{
		"spots": [
		{"id":"008","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"1","group":"a"},
		{"id":"017","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"0","group":"a"},
		{"id":"013","name":"Building","code":"232,Mkabe,Sakuragawa-shi,Ibaraki","status":"1","group":"a"},
		{"id":"016","name":"Building","code":"232,Mkabe,Sakuragawa-shi,Ibaraki","status":"0","group":"a"},
		{"id":"015","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"1","group":"a"},
		{"id":"020","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"0","group":"a"},
		{"id":"009","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"1","group":"a"},
		{"id":"019","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"0","group":"a"},
		{"id":"011","name":"City road","code":"Tkamori,Sakuragawa-shi,Ibaraki","status":"1","group":"a"},
		{"id":"000","name":"City road","code":"Tkamori,Sakuragawa-shi,Ibaraki","status":"0","group":"a"},
		{"id":"007","name":"Yamato Station","code":"Tkamori,Sakuragawa-shi,Ibaraki","status":"1","group":"b"},
		{"id":"001","name":"Yamato Station","code":"Tkamori,Sakuragawa-shi,Ibaraki","status":"0","group":"b"},
		{"id":"014","name":"Takamori district","code":"717,Tkamori,SakuraGawa-shi,Ibaraki","status":"1","group":"b"},
		{"id":"002","name":"Takamori district","code":"717,Tkamori,SakuraGawa-shi,Ibaraki","status":"0","group":"b"},
		{"id":"012","name":"Sakuragawa Park","code":"667,Isobe,Sakuragawa-shi,Ibaraki","status":"1","group":"c"},
		{"id":"003","name":"Sakuragawa Park","code":"667,Isobe,Sakuragawa-shi,Ibaraki","status":"0","group":"c"},
		{"id":"006","name":"Residential district Nishikobanawa","code":"683,Nishikobanawa,Sakuragawa-shi,Ibaraki","status":"1","group":"d"},
		{"id":"004","name":"Residential district Nishikobanawa","code":"683,Nishikobanawa,Sakuragawa-shi,Ibaraki","status":"0","group":"d"},
		{"id":"005","name":"Residential district Nishikobanawa","code":"683,Nishikobanawa,Sakuragawa-shi,Ibaraki","status":"1","group":"d"},
		{"id":"010","name":"Residential district Nishikobanawa","code":"683,Nishikobanawa,Sakuragawa-shi,Ibaraki","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	}
	
};

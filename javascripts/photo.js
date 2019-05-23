/*----------------------------------------------------------------------------

		Photo.js	
	
	Copyright (C) 2012 地震について考えるサイト All Rights Reserved.	by Makky
------------------------------------------------------------------------------*/


function GetFileName(file_url){

	file_url = file_url.substring(file_url.lastIndexOf("/")+1,file_url.length);
	file_url = file_url.substring(0,file_url.indexOf("."));
	
	if(file_url.search("en_") != -1){file_url = file_url.slice(3);}
	if(file_url.search("photo_") != -1){file_url = file_url.slice(6);}
	return file_url;
}

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
	
	document.write('<h2>'+json.list[keyNumber].jname+'</h2>');
	document.write('<div class="left">画像提供：計'+eval("json."+key+".spots.length")+'枚<br>');
	for(var i=0; i<eval("json."+key+".data.length");i++){
		document.write('<li>'+eval("json."+key+".data[i].donor")+'</li>');
	}
	if( json.list[keyNumber].by != 'none'){
	document.write('<br><div class="face">取材者の感想：('+json.list[keyNumber].byj+')<table><tr>');
	document.write('<td width="200" height="200"><img class="face" src="img/face/'+json.list[keyNumber].by+'.jpg" width="200" height="200" ></td>');
	document.write('<td><p>'+eval("json."+key+".comment")+'</p>');
	document.write('</td></tr></table></div>');
	}else{
	document.write('<br><br><br><p>この地区の震災状況ですが、地元の方々に当時の事など聞きましたが，やはり、街の人々は驚くほど苦労<br>されたようです。この地区も，私達が考えていた以上に地震の被害は大きく，再発したときに冷静に行動できるよ<br>う心掛けるべきだと思いました。</p>');
	}
	//document.write('<div class="right"><img src="img/photo/'+json.list[keyNumber].name+'/'+json.list[keyNumber].name+'.jpg"/></div>');

		
		document.write('</div>');
	$("title").text(json.list[keyNumber].jname + "-の被害状況 | 地震について考えるサイト");
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
	document.write('<div class="point">\
		<table>\
			<tr><td><img src="img/marker/blue-dot.png">or　<span class="status0">現在</span></td><td>この箇所は、現在(2012年7月-11月までに撮影)の画像が掲載されています。</td></tr>\
			<tr><td><img src="img/marker/red-dot.png">or　<span class="status1">震災当時</span></td><td>この箇所は、震災直後の画像が掲載されています。</td></tr>\
		</table>\
	</div>');
	for(var j=1; j<=eval("json."+key+".spots.length"); j++){
		var spot = eval("json."+key+".spots[j-1]");
			if(spot.status == 1){
				status = '震災当時';
			}else{
				status = '現在';
			}
	document.write('<a class="fancy" data-fancybox-type="image" data-fancybox-group="'+spot.group+'" href="img/photo/'+json.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'　'+spot.name+' '+status+'の様子">');
	document.write('<div class="four columns photocolumns ">');
	document.write('<div class=" cap">');
	document.write('<img src="img/photo/'+json.list[keyNumber].name+'/' + spot.id + '.jpg" height="90%"/>');
	//document.write('');
	document.write('<span class="status'+spot.status+'">'+status+'</span><p>'+spot.name+'</p></div>');
	document.write('</div></a>');
	}
}

/*
writelist:市町村リストを出力
---------------------------------------*/

function writelist(){
	var count_img = 0;
	for(var i=4; i<json.list.length; i++){
		if(json.list[i].name == 'ami'){
		document.write('</div><div class="twelve columns panel row">その他の画像<br>');
		}
		document.write('<a href="photo_'+json.list[i].name+'.html"><div class="four columns photo">');
		document.write('<h3  id="'+json.list[i].name+'">'+json.list[i].jname+'</h3><div>　');
		if(i <  24 ){
		document.write('取材者：'+json.list[i].byj+'　');
		}
		document.write('画像：'+eval("json."+json.list[i].name+".spots.length")+'枚</div>');
		document.write('</div>');
		document.write('</a>');
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
	var currentInfoWindow = null;
	var position = new google.maps.LatLng(36.348038,140.297419);
	var op = {zoom: 9,center: position,mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), op);
	
	for(var i=0; i<json.list.length; i++){
		attachInfoWindow(i);
	}

	function attachInfoWindow(num) {
	var iconcolor;
	if( json.list[num].by != 'none'){
			iconcolor = 'img/marker/blue-dot.png';
			}else{
				iconcolor = 'img/marker/red-dot.png';
			}
	var ContentStr = 'ここは<a href="photo_'+json.list[num].name+'.html">'+json.list[num].jname+'</a>です';
	var infowindow = new google.maps.InfoWindow({content:ContentStr});
	var marker = new google.maps.Marker({
					position: new google.maps.LatLng(json.list[num].lat,json.list[num].lng),
					map: map,icon:iconcolor});		
	google.maps.event.addListener(marker, 'click', function() {
		if (currentInfoWindow) {
			currentInfoWindow.close();
		}
		infowindow.open(map,marker);
		currentInfoWindow = infowindow;
	});
	
	$("h3#"+json.list[num].name).mouseover(function(){
	if (currentInfoWindow) {
			currentInfoWindow.close();
		}
		infowindow.open(map,marker);
		currentInfoWindow = infowindow;
});
	}
	
}

/*
writeGoogleMap (grid
---------------------------------------*/

function initializegrid() {
	var currentInfoWindow = null;
	var position = new google.maps.LatLng(json.list[keyNumber].lat,json.list[keyNumber].lng);
	var op = {zoom: 14,center: position,mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), op);
	for (var i=0;i<eval("json."+key+".spots.length");i++) {attachInfoWindow(i);}
	
	function attachInfoWindow(num) {
	var spot = eval("json."+key+".spots[num]");
	var iconcolor;
				if(spot.status == 1){
				iconcolor = 'img/marker/red-dot.png';
			}else{
				iconcolor = 'img/marker/blue-dot.png';
			}
	
	var ContentStr = '<a class="fancy" href="img/photo/'+json.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'　'+spot.name+' '+status+'の様子"  data-fancybox-type="image" data-fancybox-group="1">'+spot.name+'</a>';
	var infowindow = new google.maps.InfoWindow({content:ContentStr});
	var marker = new google.maps.Marker({
					position: new google.maps.LatLng(spot.lat,spot.lng),
					map: map,icon:iconcolor});		
	google.maps.event.addListener(marker, 'click', function() {
		if (currentInfoWindow) {
			currentInfoWindow.close();
		}
		infowindow.open(map,marker);
		currentInfoWindow = infowindow;
		$.fancybox.open($('.fancy'));
	});
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
		{"jname":"ウォルトディニー展","name":"disney","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"南三陸町","name":"minamisanriku","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"気仙沼市","name":"kesennuma","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"仙台市","name":"sendai","by":"3_kobayashi","byj":"Masaki.K."},
		
		{"jname":"稲敷市","name":"inasiki","by":"1_kamihara","byj":"Takumi.K.","lat":"35.956568","lng":"140.323918"},
		{"jname":"茨城町","name":"ibarakimati","by":"2_suzuki","byj":"Yumi.S.","lat":"36.287456","lng":"140.424585"},
		{"jname":"大洗町","name":"oarai","by":"3_kobayashi","byj":"Masaki.K.","lat":"36.313186","lng":"140.575021"},
		{"jname":"笠間市","name":"kasama","by":"2_suzuki","byj":"Yumi.S.","lat":"36.354398","lng":"140.30365"},
		{"jname":"かすみがうら市","name":"kasumigaura","by":"2_suzuki","byj":"Yumi.S.","lat":"36.158944","lng":"140.237045"},
		{"jname":"北茨城市","name":"kitaibaraki","by":"1_minami","byj":"Kaori.M.","lat":"36.801867","lng":"140.751048"},
		{"jname":"桜川市","name":"sakuragawa","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.327296","lng":"140.090397"},
		{"jname":"下妻市","name":"simotuma","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.191646","lng":"139.967485"},
		{"jname":"常総市","name":"jyoso","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.032998","lng":"139.99799"},
		{"jname":"城里町","name":"shirosato","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.479293","lng":"140.376195"},
		{"jname":"高萩市","name":"takahagi","by":"1_minami","byj":"Kaori.M.","lat":"36.713747","lng":"140.709546"},
		{"jname":"筑西市","name":"tikusei","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.320658","lng":"139.98151"},
		{"jname":"土浦市","name":"tutiura","by":"1_kamihara","byj":"Takumi.K.","lat":"36.071827","lng":"140.195968"},
		{"jname":"坂東市","name":"bandou","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.057981","lng":"139.886753"},
		{"jname":"日立市","name":"hitati","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.598992","lng":"140.65226"},
		{"jname":"常陸太田市","name":"hitachioota","by":"1_minami","byj":"Kaori.M.","lat":"36.538295","lng":"140.530951"},
		{"jname":"常陸大宮市","name":"hitatioomiya","by":"1_minami","byj":"Kaori.M.","lat":"36.542555","lng":"140.410968"},
		{"jname":"ひたちなか市","name":"hitachinaka","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.396553","lng":"140.534607"},
		{"jname":"鉾田市","name":"hokota","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.158606","lng":"140.516547"},
		{"jname":"水戸市","name":"mito","by":"2_suzuki","byj":"Yumi.S.","lat":"36.365837","lng":"140.471191"},

		{"jname":"阿見町","name":"ami","by":"none","byj":"none","lat":"36.037995","lng":"140.214334"},
		{"jname":"鹿嶋市","name":"kasima","by":"none","byj":"none","lat":"35.979117","lng":"140.644123"},
		{"jname":"河内町","name":"kawauti","by":"none","byj":"none","lat":"35.896281","lng":"140.243809"},
		{"jname":"つくばみらい市","name":"tukubamirai","by":"none","byj":"none","lat":"35.967448","lng":"140.035463"},
		{"jname":"行方市","name":"namegata","by":"none","byj":"none","lat":"35.994119","lng":"140.491001"},
		{"jname":"守谷市","name":"moriya","by":"none","byj":"none","lat":"35.951052","lng":"139.975725"}
		],


	"oarai":{
		"spots": [
			{"id":"9","name":"大洗町 航空写真","code":"大洗町 航空写真","status":"1","group":"0","lat":"36.305753","lng":"140.574311"},
			{"id":"5","name":"フェリーターミナル付近","code":"茨城県東茨城郡大洗町港中央2","status":"1","group":"0","lat":"36.309558","lng":"140.574439"},
			{"id":"6","name":"大洗マリンタワー","code":"茨城県東茨城郡大洗町港中央10番地","status":"1","group":"a","lat":"36.310284","lng":"140.572551"},
			{"id":"3","name":"大洗マリンタワー","code":"茨城県東茨城郡大洗町港中央10番地","status":"1","group":"a","lat":"36.303194","lng":"140.567315"},
			{"id":"38","name":"大洗マリンタワー","code":"茨城県東茨城郡大洗町港中央10番地","status":"0","group":"a","lat":"36.310491","lng":"140.570191"},
			{"id":"29","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b","lat":"36.335041","lng":"140.59152"},
			{"id":"30","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b","lat":"36.335248","lng":"140.591734"},
			{"id":"31","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b","lat":"36.335283","lng":"140.592077"},
			{"id":"32","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b","lat":"36.334937","lng":"140.592243"},
			{"id":"33","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b","lat":"36.334755","lng":"140.592748"},
			{"id":"34","name":"海門橋","code":"　ひたちなか市海門町-大洗町磯浜町　路線　県道108号","status":"0","group":"b","lat":"36.334712","lng":"140.591589"},
			
			{"id":"4","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"1","group":"c","lat":"36.313353","lng":"140.575178"},
			{"id":"7","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"1","group":"c","lat":"36.313292","lng":"140.57481"},
			
			{"id":"8","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"1","group":"c","lat":"36.313282","lng":"140.575105"},
			{"id":"35","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"0","group":"c","lat":"36.313416","lng":"140.57525"},
			
			{"id":"36","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"0","group":"c","lat":"36.31329","lng":"140.575263"},
			{"id":"37","name":"大洗町役場","code":"茨城県東茨城郡大洗町磯浜町 6881-275","status":"0","group":"c","lat":"36.313264","lng":"140.575242"},
			
			{"id":"2","name":"文化センター","code":"大洗町磯浜町6881-88","status":"1","group":"d","lat":"36.312776","lng":"140.575076"},
			{"id":"10","name":"漁港の様子","code":"大洗町漁港","status":"1","group":"e","lat":"36.309886","lng":"140.581075"},
			
			{"id":"11","name":"漁港の様子","code":"大洗町漁港","status":"1","group":"e","lat":"36.310336","lng":"140.581064"},
			{"id":"12","name":"漁港の様子","code":"大洗町漁港","status":"1","group":"e","lat":"36.310906","lng":"140.581268"},
			
			{"id":"13","name":"漁港の様子","code":"大洗町漁港","status":"1","group":"e","lat":"36.310967","lng":"140.580431"},
			{"id":"20","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e","lat":"36.309272","lng":"140.584744"},
			
			{"id":"21","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e","lat":"36.309359","lng":"140.584905"},
			{"id":"22","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e","lat":"36.309549","lng":"140.584722"},
			
			{"id":"23","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e","lat":"36.309143","lng":"140.584175"},
			{"id":"24","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e","lat":"36.31012","lng":"140.584701"},
			{"id":"18","name":"漁港の様子","code":"大洗町漁港","status":"0","group":"e","lat":"36.310733","lng":"140.582995"},
			
			{"id":"40","name":"大洗わくわく科学館 ","code":"茨城県東茨城郡大洗町港中央１２番地","status":"0","group":"f","lat":"36.309558","lng":"140.574439"},
			{"id":"41","name":"大洗わくわく科学館 ","code":"茨城県東茨城郡大洗町港中央１２番地","status":"0","group":"f","lat":"36.309558","lng":"140.574439"},
			
			{"id":"16","name":"魚市場","code":"大洗町魚市場内","status":"1","group":"g","lat":"36.310863","lng":"140.581997"},
			{"id":"19","name":"魚市場","code":"大洗町魚市場内","status":"0","group":"g","lat":"36.310768","lng":"140.581836"},
			
			{"id":"14","name":"大洗リゾートアウトレット","code":"茨城県東茨城郡大洗町港中央１１-２","status":"1","group":"h","lat":"36.310612","lng":"140.569498"},
			{"id":"15","name":"大洗リゾートアウトレット","code":"茨城県東茨城郡大洗町港中央１１-２","status":"1","group":"h","lat":"36.30935","lng":"140.56879"},
			{"id":"17","name":"大洗リゾートアウトレット","code":"茨城県東茨城郡大洗町港中央１１-２","status":"1","group":"h","lat":"36.308304","lng":"140.567406"},
			
			{"id":"27","name":"セブンイレブン大洗海岸店","code":"茨城県東茨城郡大洗町磯浜町８２５３-３９","status":"0","group":"i","lat":"36.311529","lng":"140.584776"},
			{"id":"44","name":"セブンイレブン大洗海岸店","code":"茨城県東茨城郡大洗町磯浜町８２５３-３９","status":"1","group":"i","lat":"36.311511","lng":"140.584604"},
			
			{"id":"1","name":"県道2号線沿いの様子","code":"県道2号線沿い","status":"1","group":"j","lat":"36.311805","lng":"140.585559"},
			{"id":"25","name":"県道2号線沿いの様子","code":"県道2号線沿い","status":"0","group":"j","lat":"36.312566","lng":"140.586257"},
			{"id":"26","name":"県道2号線沿いの様子","code":"県道2号線沿い","status":"0","group":"j","lat":"36.311926","lng":"140.586299"},
			{"id":"28","name":"県道2号線沿いの様子","code":"県道2号線沿い","status":"0","group":"j","lat":"36.329682","lng":"140.593883"},
			
			{"id":"39","name":"大洗サンビーチ","code":"に設置された避難標識","status":"0","group":"k","lat":"36.30392","lng":"140.566033"},
			{"id":"42","name":"平太郎浜","code":"海岸清掃の様子","status":"0","group":"l","lat":"36.317234","lng":"140.590194"},
			{"id":"43","name":"平太郎浜","code":"海岸清掃の様子","status":"0","group":"l","lat":"36.312877","lng":"140.587211"}
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
		{"id":"1","name":"坂東市矢作道路沿い","code":"茨城県坂東市矢作3004-177付近","status":"1","group":"a","lat":"35.99674","lng":"139.897539"},

		{"id":"1a","name":"坂東市矢作道路沿い","code":"茨城県坂東市矢作3004-177付近","status":"0","group":"a","lat":"35.99674","lng":"139.897539"},

		{"id":"2","name":"岩井7号橋","code":"茨城県坂東市借宿1056-1付近","status":"1","group":"b","lat":"36.091245","lng":"139.863547"},

		{"id":"2a","name":"岩井7号橋","code":"茨城県坂東市借宿1056-1付近","status":"0","group":"b","lat":"36.091245","lng":"139.863547"},

		{"id":"3","name":"岩井8号橋","code":"茨城県坂東市借宿1001付近","status":"1","group":"b","lat":"36.091349","lng":"139.863326"},

		{"id":"3a","name":"岩井8号橋","code":"茨城県坂東市借宿1001付近","status":"0","group":"b","lat":"36.091349","lng":"139.863326"},

		{"id":"4","name":"坂東市役所岩井庁舎","code":"茨城県坂東市岩井4365","status":"1","group":"c","lat":"36.048752","lng":"139.888741"},

		{"id":"4a","name":"坂東市役所岩井庁舎","code":"茨城県坂東市岩井4365","status":"0","group":"c","lat":"36.048752","lng":"139.888741"},

		{"id":"5","name":"坂東市役所岩井庁舎","code":"茨城県坂東市岩井4365","status":"1","group":"c","lat":"36.048752","lng":"139.888741"},

		{"id":"5a","name":"坂東市役所岩井庁舎","code":"茨城県坂東市岩井4365","status":"0","group":"c","lat":"36.048752","lng":"139.888741"},
		{"id":"6","name":"坂東市役所岩井庁舎","code":"茨城県坂東市岩井4365","status":"1","group":"c","lat":"36.048752","lng":"139.888741"},
		{"id":"7","name":"坂東消防署","code":"茨城県坂東市辺田644-2","status":"1","group":"c","lat":"36.036902","lng":"139.89417"},
		{"id":"7a","name":"坂東消防署","code":"茨城県坂東市辺田644-2","status":"0","group":"c","lat":"36.036902","lng":"139.89417"},
		{"id":"8","name":"西仁連川沿","code":"茨城県坂東市生子新田1183付近","status":"1","group":"d","lat":"36.118325","lng":"139.872411"},
		{"id":"8a","name":"西仁連川沿","code":"茨城県坂東市生子新田1183付近","status":"0","group":"d","lat":"36.118325","lng":"139.872411"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"私は，8月19日に坂東市に行って取材をしてきました。坂東市は特に震災の被害が大きかったようで，震災前と違う建物が建てられているところもあり，撤去している所が多いなという印象を受けました。震災で被害を受けた道路は綺麗に舗装され、復興は進んでいるように感じました。"
	},
	
	
"hitachinaka":{
		"spots": [
		{"id":"01","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"02","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"03","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"001","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"000","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"003","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"002","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"005","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"006","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"007","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"017","name":"地方卸売市場付近","code":"和田町3丁目11-11","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"04","name":"さかえ食堂","code":"湊本町22-3","status":"1","group":"b","lat":"36.341836","lng":"140.595962"},
		{"id":"05","name":"さかえ食堂","code":"湊本町22-3","status":"1","group":"b","lat":"36.341836","lng":"140.595962"},
		{"id":"06","name":"和田町民家","code":"和田町1丁目1-5","status":"1","group":"c","lat":"36.34262","lng":"140.596297"},
		{"id":"07","name":"和田町民家","code":"和田町1丁目1-5","status":"1","group":"c","lat":"36.34262","lng":"140.596297"},
		{"id":"014","name":"殿山町道路","code":"殿山町1丁目1-1","status":"1","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"015","name":"殿山町道路","code":"殿山町1丁目1-1","status":"1","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"0001","name":"殿山町道路","code":"殿山町1丁目1-1","status":"0","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"0002","name":"殿山町道路","code":"殿山町1丁目1-1","status":"0","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"0003","name":"漁協倉庫","code":"牛久保1丁目11-34","status":"1","group":"e","lat":"36.344759","lng":"140.604357"},
		{"id":"013","name":"漁協倉庫","code":"牛久保1丁目11-34","status":"0","group":"e","lat":"36.344759","lng":"140.604357"},
		{"id":"0004","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"1","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"010","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"0","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"0005","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"1","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"011","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"0","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"0006","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"1","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"012","name":"海門町ふれあい公園付近","code":"海門町1丁目16-16","status":"0","group":"f","lat":"36.3374","lng":"140.593993"}
		],	
		"data":[
			{"donor":"個人撮影"}
		],
		"comment":"ひたちなか市では津波の被害も見られ、海沿いでは大きな被害があったようです。地震が発生した際、海の付近に住んでいる人は津波の情報をすぐ把握する必要があると感じました。また、避難経路を日頃確認するべきだと感じました。"
	},
	
	
	"hitachioota":{
		"spots": [
		{"id":"1","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"2","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"3","name":"西山研修所","code":"茨茨城県常陸太田市稲木町1699-イ","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"4","name":"西山研修所","code":"茨茨城県常陸太田市稲木町1699-イ","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"5","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"6","name":"道路の様子","code":"茨城県常陸太田市小沢町","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"7","name":"道路の様子","code":"茨城県常陸太田市小沢町","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"8","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"9","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"10","name":"道路の様子","code":"茨城県常陸太田市小沢町","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"11","name":"道路の様子","code":"茨城県常陸太田市小沢町","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"12","name":"道路の様子","code":"茨城県常陸太田市小沢町","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"13","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"14","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"15","name":"峰山中学校","code":"茨城県常陸太田市磯部町1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"16","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"17","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"18","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"19","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"20","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"21","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"22","name":"西山研修所","code":"茨城県常陸太田市稲木町1699-イ","status":"1","group":"a","lat":"36.53561","lng":"140.516244"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"常陸太田市立峰山中学校"}
		],
		"comment":"震災当初は液状化している地域が多かったのですが、現在は復旧しており、ぼこぼこになっていた道路も今は元の状態に戻っています。地震があった日はみんな、何が起こったか分からず、混乱していました。避難するときには冷静になって落ち着いて避難することが大切だと思いました。"
	},
	
	
	
	"hitati":{
		"spots": [
		{"id":"1","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"1","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"1a","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"0","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"2","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"1","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"2a","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"0","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"3","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"1","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"3a","name":"茨城県日立市河原子町3丁目28","code":"茨城県日立市河原子町3丁目28","status":"0","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"4","name":"茨城県日立市諏訪町1丁目2","code":"茨城県日立市諏訪町1丁目2","status":"1","group":"b","lat":"36.565668","lng":"140.63598"},
		{"id":"4a","name":"茨城県日立市諏訪町1丁目2","code":"茨城県日立市諏訪町1丁目2","status":"0","group":"b","lat":"36.565668","lng":"140.63598"},
		{"id":"5","name":"茨城県日立市諏訪町1丁目12","code":"茨城県日立市諏訪町1丁目12","status":"1","group":"b","lat":"36.563841","lng":"140.634692"},
		{"id":"5aa","name":"茨城県日立市諏訪町1丁目12","code":"茨城県日立市諏訪町1丁目12","status":"0","group":"b","lat":"36.563841","lng":"140.634692"},
		{"id":"6","name":"茨城県日立市会瀬町1丁目11","code":"茨城県日立市会瀬町1丁目11","status":"1","group":"b","lat":"36.577283","lng":"140.653704"},
		{"id":"6aa","name":"茨城県日立市会瀬町1丁目11","code":"茨城県日立市会瀬町1丁目11","status":"0","group":"b","lat":"36.577283","lng":"140.653704"},
		{"id":"21","name":"国分機器エンジニアリング","code":"茨城県日立市国分町1","status":"1","group":"b","lat":"36.56522","lng":"140.646101"},
		{"id":"21a","name":"国分機器エンジニアリング","code":"茨城県日立市国分町1","status":"0","group":"b","lat":"36.56522","lng":"140.646101"},
		{"id":"7","name":"茨城県日立市川尻海水浴場","code":"茨城県日立市川尻海水浴場","status":"1","group":"c","lat":"36.651619","lng":"140.699495"},
		{"id":"7a","name":"茨城県日立市川尻海水浴場","code":"茨城県日立市川尻海水浴場","status":"0","group":"c","lat":"36.651619","lng":"140.699495"},
		{"id":"14","name":"法鷲院","code":"茨城県日立市十王町友部1990法鷲院","status":"1","group":"c","lat":"36.677609","lng":"140.680784"},
		{"id":"14a","name":"法鷲院","code":"茨城県日立市十王町友部1990法鷲院","status":"0","group":"c","lat":"36.677609","lng":"140.680784"},
		{"id":"15","name":"おさかなセンター入り口付近","code":"茨城県日立市久慈町おさかなセンター入り口付近","status":"1","group":"d","lat":"36.677609","lng":"140.680784"},
		{"id":"15a","name":"おさかなセンター入り口付近","code":"茨城県日立市久慈町おさかなセンター入り口付近","status":"0","group":"d","lat":"36.677609","lng":"140.680784"},
		{"id":"16","name":"久慈漁港","code":"茨城県日立市久慈町漁港","status":"1","group":"d","lat":"36.484383","lng":"140.612334"},
		{"id":"16a","name":"久慈漁港","code":"茨城県日立市久慈町漁港","status":"0","group":"d","lat":"36.484383","lng":"140.612334"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"6月17日に訪れました。津波の影響で休業をしていたお店などは元通りの営業をしていました。しかし、家や一部のお店はだれも住んでいなかったり撤去されていたりしたところも多く、地震や津波の被害は大きかったのだと思いました。ほとんどの道路が元通りになっていました。"
	},
	
	
	
	"hitatioomiya":{
		"spots": [
		{"id":"1","name":"御前山小学校","code":"茨城県常陸大宮市野口3217","status":"1","group":"a","lat":"36.563753","lng":"140.313807"},
		{"id":"2","name":"甲神社","code":"茨城県常陸大宮市下町219","status":"1","group":"a","lat":"36.551347","lng":"140.417701"},
		{"id":"3","name":"ロゼホール","code":"茨城県常陸大宮市中富町3135-6","status":"1","group":"a","lat":"36.543549","lng":"140.411281"},
		{"id":"4","name":"ロゼホール","code":"茨城県常陸大宮市中富町3135-6","status":"1","group":"a","lat":"36.543549","lng":"140.411281"},
		{"id":"5","name":"消防本部","code":"茨城県常陸大宮市姥賀町621","status":"1","group":"a","lat":"36.562915","lng":"140.405206"},
		{"id":"6","name":"道路の様子","code":"茨城県常陸大宮市小野地内","status":"1","group":"a","lat":"36.54026","lng":"140.36562"},
		{"id":"7","name":"道路の様子","code":"茨城県常陸大宮市小場地内","status":"1","group":"a","lat":"36.512878","lng":"140.392828"},
		{"id":"8","name":"道路の様子","code":"茨城県常陸大宮市下岩瀬地内","status":"1","group":"a","lat":"36.520406","lng":"140.452357"},
		{"id":"9","name":"道路の様子","code":"茨城県常陸大宮市下岩瀬内","status":"1","group":"a","lat":"36.520406","lng":"140.452357"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"常陸大宮市には8月21日に訪れましたが、かなり復旧している様子でした。市役所の方から提供してもらった画像には建物の被害が多く目立ちました。"
	},
	
	"hokota":{
		"spots": [
		{"id":"014","name":"総合公園体育館","code":"当間2331","status":"1","group":"a","lat":"36.15933","lng":"140.491098"},
		{"id":"001","name":"総合公園体育館","code":"当間2331","status":"0","group":"a","lat":"36.15933","lng":"140.491098"},
		{"id":"015","name":"旭北小学校","code":"田崎3852","status":"1","group":"b","lat":"36.254085","lng":"140.521573"},
		{"id":"007","name":"旭北小学校","code":"田崎3852","status":"0","group":"b","lat":"36.254085","lng":"140.521573"},
		{"id":"016","name":"市立図書館","code":"鉾田1444-1","status":"1","group":"c","lat":"36.159455","lng":"140.516037"},
		{"id":"004","name":"市立図書館","code":"鉾田1444-1","status":"0","group":"c","lat":"36.159455","lng":"140.516037"},
		{"id":"012","name":"市立第二保育所","code":"鉾田148","status":"1","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"017","name":"市立第二保育所","code":"鉾田148","status":"1","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"006","name":"市立第二保育所","code":"鉾田148","status":"0","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"005","name":"市立第二保育所","code":"鉾田148","status":"0","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"018","name":"富士橋周辺","code":"鉾田2299","status":"1","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"013","name":"富士橋周辺","code":"鉾田2299","status":"1","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"002","name":"富士橋周辺","code":"鉾田2299","status":"0","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"003","name":"富士橋周辺","code":"鉾田2299","status":"0","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"019","name":"鹿行大橋周辺","code":"札地区","status":"1","group":"d","lat":"36.085735","lng":"140.542945"},
		{"id":"010","name":"鹿行大橋周辺","code":"札地区","status":"0","group":"d","lat":"36.085735","lng":"140.542945"},
		{"id":"000","name":"雷神社","code":"柏熊689","status":"1","group":"e","lat":"36.177226","lng":"140.571007"},
		{"id":"008","name":"雷神社","code":"柏熊689","status":"0","group":"e","lat":"36.177226","lng":"140.571007"},
		{"id":"011","name":"大和田小学校","code":"大和田1018-3","status":"1","group":"f","lat":"36.206512","lng":"140.440882"}
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
		{"id":"1","name":"高橋","code":"県道18号付近","status":"1","group":"a","lat":"36.290111","lng":"140.423039"},
		{"id":"12","name":"高橋","code":"県道18号付近","status":"0","group":"a","lat":"36.290000","lng":"140.422939"},
		{"id":"4","name":"総合福祉センターゆうゆう館","code":"茨城県東茨城郡茨城町小堤1037?1","status":"1","group":"a","lat":"36.278762","lng":"140.425600"},
		{"id":"11","name":"総合福祉センターゆうゆう館","code":"茨城県東茨城郡茨城町小堤1037?1","status":"0","group":"a","lat":"36.288762","lng":"140.425615"},
		{"id":"6","name":"茨城町消防本部","code":"茨城県東茨城郡茨城町大字小堤1037-1","status":"1","group":"a","lat":"36.288961","lng":"140.42568"},
		{"id":"8","name":"涸沼自然公園","code":"茨城県東茨城郡茨城町中石崎2263","status":"1","group":"b","lat":"36.294098","lng":"140.504494"},
		{"id":"2","name":"涸沼自然公園","code":"茨城県東茨城郡茨城町中石崎2263","status":"1","group":"b","lat":"36.294000","lng":"140.504400"},
		{"id":"7","name":"前谷公民館付近","code":"茨城県東茨城郡茨城町下石崎","status":"1","group":"b","lat":"36.295807","lng":"140.523367"},
		{"id":"9","name":"広浦公園駐車場","code":"茨城県東茨城郡茨城町下石崎1651","status":"1","group":"b","lat":"36.28884","lng":"140.521145"},
		{"id":"5","name":"桜丘中学校　体育館","code":"茨城県東茨城郡茨城町奥谷862","status":"1","group":"c","lat":"36.287802","lng":"140.415316"},
		{"id":"3","name":"長岡立体","code":"茨城県水戸市小吹町","status":"1","group":"c","lat":"36.308849","lng":"140.429971"},
		{"id":"13","name":"長岡立体","code":"茨城県水戸市小吹町","status":"0","group":"c","lat":"36.308849","lng":"140.429971"},
		{"id":"10","name":"サイクリングロード","code":"茨城県東茨城郡茨城町長岡","status":"1","group":"c","lat":"36.299424","lng":"140.430121"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"8月下旬に訪問しましたが、道路や橋など、人々の生活環境は殆ど復旧済みでした。取材をする時にも移動に困ることはありませんでした。"
	},
	
	"inasiki":{
		"spots": [
		{"id":"01","name":"山新駐車場","code":"稲敷市西代1403番地 付近","status":"0","group":"a","lat":"35.924953","lng":"140.484794"},
		{"id":"1","name":"山新駐車場","code":"稲敷市西代1403番地 付近","status":"1","group":"a","lat":"35.924953","lng":"140.484794"},
		{"id":"02","name":"鹿島神社","code":"稲敷市本新309番地 付近","status":"0","group":"b","lat":"35.938882","lng":"140.470503"},
		{"id":"2","name":"鹿島神社","code":"稲敷市本新309番地 付近","status":"1","group":"b","lat":"35.938882","lng":"140.470503"},
		{"id":"04","name":"水郷大橋際","code":"稲敷市西代1661番地1 付近","status":"0","group":"c","lat":"35.924953","lng":"140.484794"},
		{"id":"4","name":"水郷大橋際","code":"稲敷市西代1661番地1 付近","status":"1","group":"c","lat":"35.924953","lng":"140.484794"},
		{"id":"06","name":"新利根川河口 右岸","code":"稲敷市本新52番地8 付近","status":"0","group":"d","lat":"35.938882","lng":"140.470503"},
		{"id":"6","name":"新利根川河口 右岸","code":"稲敷市本新52番地8 付近","status":"1","group":"d","lat":"35.938882","lng":"140.470503"},
		{"id":"08","name":"新利根川河口 左岸","code":"稲敷市浮島8322番地 付近","status":"0","group":"e","lat":"35.970005","lng":"140.43097"},
		{"id":"12","name":"新利根川河口 左岸","code":"稲敷市浮島8322番地 付近","status":"1","group":"e","lat":"35.970005","lng":"140.43097"},
		{"id":"9","name":"新利根川河口 右岸","code":"稲敷市本新52番地10 付近","status":"1","group":"f","lat":"35.938882","lng":"140.470503"},
		{"id":"09","name":"新利根川河口 右岸","code":"稲敷市本新52番地10 付近","status":"0","group":"f","lat":"35.938882","lng":"140.470503"},
		{"id":"10","name":"新利根川河口 右岸","code":"稲敷市本新52番地10 付近","status":"0","group":"f","lat":"35.938882","lng":"140.470503"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"この地区の震災状況ですが、地元の方々に当時の事など聞きましたが，やはり、街の人々は驚くほど苦労されたようです。この地区も，僕が考えていた以上に地震の被害は大きく，再発したときに冷静に行動できるよう心掛けるべきだと思いました。"
	},
	
	
	"jyoso":{
		"spots": [
		{"id":"1","name":"総合福祉センター","code":"茨城県常総市新石下4365","status":"1","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"1a","name":"総合福祉センター","code":"茨城県常総市新石下4365","status":"0","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"2","name":"総合福祉センター","code":"茨城県常総市新石下4365","status":"1","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"2a","name":"総合福祉センター","code":"茨城県常総市新石下4365","status":"0","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"5","name":"県道24号線沿い","code":"茨城県常総市向石下299","status":"1","group":"a","lat":"36.117441","lng":"139.965688"},
		{"id":"5a","name":"県道24号線沿い","code":"茨城県常総市向石下299","status":"0","group":"a","lat":"36.117441","lng":"139.965688"},
		{"id":"5aa","name":"県道24号線沿い","code":"茨城県常総市向石下299","status":"0","group":"a","lat":"36.117441","lng":"139.965688"},
		{"id":"9","name":"常総市役所石下庁舎（旧役場）","code":"茨城県新石下576-2","status":"1","group":"a","lat":"36.115708","lng":"139.973477"},
		{"id":"9a","name":"常総市役所石下庁舎（旧役場）","code":"茨城県新石下576-2","status":"0","group":"a","lat":"36.115708","lng":"139.973477"},
		{"id":"3","name":"常光寺","code":"茨城県常総市若宮戸1053","status":"1","group":"b","lat":"36.14387","lng":"139.958393"},
		{"id":"3a","name":"常光寺","code":"茨城県常総市若宮戸1053","status":"0","group":"b","lat":"36.14387","lng":"139.958393"},
		{"id":"4","name":"常総市役所","code":"茨城県常総市水海道諏訪町3222-3","status":"1","group":"c","lat":"36.02354","lng":"139.993905"},
		{"id":"4a","name":"常総市役所","code":"茨城県常総市水海道諏訪町3222-3","status":"0","group":"c","lat":"36.02354","lng":"139.993905"},
		{"id":"6","name":"市立石下西中学校","code":"茨城県常総市杉山910-1","status":"1","group":"d","lat":"36.117441","lng":"139.946291"},
		{"id":"7","name":"市立石下西中学校","code":"茨城県常総市杉山910-1","status":"1","group":"d","lat":"36.117441","lng":"139.946291"},
		{"id":"8","name":"市立石下西中学校","code":"茨城県常総市杉山910-1","status":"1","group":"d","lat":"36.117441","lng":"139.946291"},
		{"id":"8a","name":"市立石下西中学校","code":"茨城県常総市杉山910-1","status":"0","group":"d","lat":"36.117441","lng":"139.946291"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"私は，8月19日に常総市に行って取材をしてきました。常総市の中学校は校舎がすべて撤去され立て直されていました。壊れてしまった橋も撤去され新しい橋になっており、元の町並みとは大きく変わるところが多いと感じました。まだ中学校などは完成していなく完全には復興していない様子でした。海沿いだけではなく震災から比較的遠い場所でも震災の被害は及んでいる現実を知りました。"
	},
	
	
	"kasama":{
		"spots": [
		{"id":"1","name":"笠間市役所　笠間市所","code":"茨城県笠間市石井717","status":"1","group":"a","lat":"36.393099","lng":"140.237732"},
		{"id":"6","name":"ケーズデンキ笠間店付近","code":"茨城県笠間市石井2090","status":"1","group":"a","lat":"36.416586","lng":"140.247688"},
		{"id":"3","name":"笠間図書館","code":"茨城県笠間市石井2023?1","status":"1","group":"a","lat":"36.395862","lng":"140.248375"},
		{"id":"10","name":"笠間図書館","code":"茨城県笠間市石井2023?1","status":"0","group":"a","lat":"36.395862","lng":"140.248375"},
		{"id":"2","name":"笠間市役所　本所二階","code":"茨城県笠間市中央3丁目2-1","status":"1","group":"b","lat":"36.33531","lng":"140.304108"},
		{"id":"11","name":"笠間市役所 本所二階","code":"茨城県笠間市中央3丁目2-1","status":"0","group":"b","lat":"36.34631","lng":"140.304208"},
		{"id":"4","name":"友部二中","code":"茨城県笠間市旭町510?1","status":"1","group":"c","lat":"36.326985","lng":"140.330558"},
		{"id":"5","name":"工芸の丘","code":"茨城県笠間市笠間2388?1","status":"1","group":"d","lat":"36.390335","lng":"140.262451"},
		{"id":"7","name":"笠間小グラウンド","code":"茨城県笠間市笠間2688","status":"1","group":"d","lat":"36.401389","lng":"140.257645"}
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
		{"id":"1","name":"千代田庁舎付近","code":"千代田庁舎付近","status":"1","group":"a","lat":"36.150351","lng":"140.243912"},
		{"id":"2","name":"あじさい館","code":"茨城県かすみがうら市深谷3719-1","status":"1","group":"b","lat":"36.087014","lng":"140.313027"},
		{"id":"9","name":"あじさい館","code":"茨城県かすみがうら市深谷3719-1","status":"0","group":"b","lat":"36.087050","lng":"140.313040"},
		{"id":"3","name":"かすみがうら市役所　千代田庁舎","code":"茨城県かすみがうら市上土田461","status":"1","group":"a","lat":"36.151893","lng":"140.262451"},
		{"id":"4","name":"かすみがうら市役所　千代田庁舎","code":"茨城県かすみがうら市上土田461","status":"1","group":"a","lat":"36.151683","lng":"140.237265"},
		{"id":"5","name":"かすみがうら市役所　千代田庁舎","code":"茨城県かすみがうら市上土田461","status":"1","group":"a","lat":"36.151862","lng":"140.236976"},
		{"id":"6","name":"かすみがうら市役所　千代田庁舎","code":"茨城県かすみがうら市上土田461","status":"1","group":"a","lat":"36.152105","lng":"140.237045"},
		{"id":"7","name":"かすみがうら市役所　千代田庁舎","code":"茨城県かすみがうら市上土田461","status":"1","group":"a","lat":"36.151564","lng":"140.236911"},
		{"id":"8","name":"霞ヶ浦　堤防","code":"霞ヶ浦　堤防","status":"1","group":"c","lat":"36.040771,","lng":"140.238333"}
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
		{"id":"1","name":"北茨城市役所","code":"茨城県北茨城市磯原町磯原1630","status":"1","group":"a","lat":"36.801867","lng":"140.751048"},
		{"id":"2","name":"北茨城市役所","code":"茨城県北茨城市磯原町磯原1630","status":"1","group":"a","lat":"36.801867","lng":"140.751048"},
		{"id":"3","name":"海岸沿いの様子","code":"茨城県北茨城市平潟町","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"4","name":"大津漁業協同組合","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"5","name":"線路の様子","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"6","name":"北茨城市防災コミュニティセンター","code":"茨城県北茨城市磯原町磯原","status":"1","group":"a","lat":"36.795634","lng":"140.75617"},
		{"id":"7","name":"線路の様子","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"8","name":"海岸の様子","code":"茨城県北茨城市平潟町","status":"1","group":"a","lat":"36.858291","lng":"140.793945"},
		{"id":"9","name":"漁港の様子","code":"茨城県北茨城市平潟町","status":"1","group":"a","lat":"36.858291","lng":"140.793945"},
		{"id":"10","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"11","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"12","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"13","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"14","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"15","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"16","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"17","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"18","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"19","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"20","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"21","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"22","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"23","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.828455","lng":"140.788377"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"北茨城市には8月20日に訪れましたが，震災当初よりかなり復旧していました。しかし，その爪痕は至る所にありました。市役所の裏の方では，道路の復旧工事に作業員の方が一生懸命働いていました。市役所の担当者に震災当時の写真を見せてもらいましたが、津波の被害が酷く、同じことが起きたら一刻も早く避難することに心がける必要があると思いました。"
	},
	
	
	"mito":{
		"spots": [
		{"id":"1","name":"東台・国道51号線付近","code":"東台1丁目","status":"1","group":"a","lat":"36.366254","lng":"140.494309"},
		{"id":"8","name":"東台・国道51号付近","code":"東台1丁目","status":"0","group":"a","lat":"36.366233","lng":"140.494288"},
		{"id":"16","name":"渡辺整形外科(閉院)","code":"茨城県水戸市東台1丁目6-1","status":"0","group":"a","lat":"36.367298","lng":"140.494052"},
		{"id":"2","name":"東照宮","code":"茨城県水戸市宮町2丁目5-13 ","status":"1","group":"b","lat":"36.372636","lng":"140.473407"},
		{"id":"3","name":"東照宮","code":"茨城県水戸市宮町2丁目5-13","status":"1","group":"b","lat":"36.372621","lng":"140.473377"},
		{"id":"6","name":"水戸駅北口 バス乗り場","code":"水戸駅","status":"1","group":"b","lat":"36.371375","lng":"140.476105"},
		{"id":"4","name":"水戸市役所","code":"茨城県水戸市中央1丁目4-1 ","status":"1","group":"c","lat":"36.365844","lng":"140.471124"},
		{"id":"5","name":"水戸市役所","code":"茨城県水戸市中央1丁目4-1","status":"1","group":"c","lat":"36.365771","lng":"140.471264"},
		{"id":"9","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d","lat":"36.366842","lng":"140.496973"},
		{"id":"10","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d","lat":"36.366816","lng":"140.496994"},
		{"id":"11","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d","lat":"36.366917","lng":"140.49697"},
		{"id":"12","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d","lat":"36.366792","lng":"140.497024"},
		{"id":"13","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d","lat":"36.366753","lng":"140.497037"},
		{"id":"14","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d","lat":"36.365978","lng":"140.497407"},
		{"id":"15","name":"浜田3丁目","code":"浜田3丁目","status":"0","group":"d","lat":"36.365928","lng":"140.497426"},
		{"id":"17","name":"水戸市50号ヤマダ電機","code":"水戸市笠原町209","status":"1","group":"e","lat":"36.347701","lng":"140.494288"},
		{"id":"18","name":"水戸市50号ヤマダ電機","code":"水戸市笠原町209","status":"1","group":"e","lat":"36.347781,","lng":"140.458786"},
		{"id":"22","name":"水戸工業高校A棟","code":"水戸市元吉田町1101","status":"1","group":"f","lat":"36.347984","lng":"140.468077"},
		{"id":"25","name":"水戸工業高校A棟","code":"水戸市元吉田町1101","status":"1","group":"f","lat":"36.34801","lng":"140.468016"},
		{"id":"26","name":"水戸工業高校A棟","code":"水戸市元吉田町1101","status":"1","group":"f","lat":"36.348017","lng":"140.467965"},
		{"id":"28","name":"水戸工業高校A棟","code":"水戸市元吉田町1101","status":"1","group":"f","lat":"36.347935","lng":"140.468402"},
		{"id":"29","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g","lat":"36.348877","lng":"140.467171"},
		{"id":"30","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g","lat":"36.34889","lng":"140.467206"},
		{"id":"31","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g","lat":"36.34884","lng":"140.46764"},
		{"id":"36","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g","lat":"36.348859","lng":"140.467471"},
		{"id":"43","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g","lat":"36.348892","lng":"140.467332"},
		{"id":"45","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g","lat":"36.348829","lng":"140.467452"},
		{"id":"50","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g","lat":"36.348792","lng":"140.467605"},
		{"id":"52","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g","lat":"36.348827","lng":"140.467688"},
		{"id":"60","name":"水戸工業高校E棟","code":"水戸市元吉田町1101","status":"1","group":"g","lat":"36.348848","lng":"140.467192"},
		{"id":"61","name":"水戸市立三の丸小","code":"水戸市三の丸1丁目6-51","status":"1","group":"h","lat":"36.374777","lng":"140.476998"},
		{"id":"62","name":"水戸市立三の丸小","code":"水戸市三の丸1丁目6-51","status":"1","group":"h","lat":"36.374785","lng":"140.476094"},
		{"id":"63","name":"水戸市立三の丸小","code":"水戸市三の丸1丁目6-51","status":"1","group":"h","lat":"36.374923","lng":"140.476272"},
		{"id":"64","name":"水戸市立三の丸小","code":"水戸市三の丸1丁目6-51","status":"1","group":"h","lat":"36.374736","lng":"140.47643"},
		{"id":"71","name":"水戸二高","code":"水戸市大町2丁目2-14","status":"1","group":"h","lat":"36.378217","lng":"140.472136"},
		{"id":"72","name":"水戸二高","code":"水戸市大町2丁目2-14","status":"1","group":"h","lat":"36.378428","lng":"140.47172"},
		{"id":"74","name":"水戸二高","code":"水戸市大町2丁目2-14","status":"1","group":"h","lat":"36.378195","lng":"140.4725"},
		{"id":"76","name":"水戸二高","code":"水戸市大町2丁目2-14","status":"1","group":"h","lat":"36.378502","lng":"140.472414"},
		{"id":"77","name":"水戸二高","code":"水戸市大町2丁目2-14","status":"1","group":"h","lat":"36.37842","lng":"140.472892"},
		{"id":"65","name":"水戸生涯学習センター","code":"水戸市愛宕町4-1","status":"1","group":"i","lat":"36.394601","lng":"140.453162"},
		{"id":"66","name":"水戸生涯学習センター","code":"水戸市愛宕町4-1","status":"1","group":"i","lat":"36.394647","lng":"140.453414"},
		{"id":"67","name":"水戸生涯学習センター","code":"水戸市愛宕町4-1","status":"1","group":"i","lat":"36.394813","lng":"140.453835"},
		{"id":"69","name":"水戸生涯学習センター","code":"水戸市愛宕町4-1","status":"1","group":"i","lat":"36.394839","lng":"140.454028"}
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
		{"id":"005","name":"下圷地区道路","code":"下圷地区","status":"1","group":"a","lat":"36.494824","lng":"140.380157"},
		{"id":"009","name":"下圷地区道路","code":"下圷地区","status":"0","group":"a","lat":"36.494824","lng":"140.380157"},
		{"id":"006","name":"阿波山地区道路","code":"阿波山2277","status":"1","group":"b","lat":"36.51384","lng":"140.363836"},
		{"id":"010","name":"阿波山地区道路","code":"阿波山2277","status":"0","group":"b","lat":"36.51384","lng":"140.363836"},
		{"id":"007","name":"道木橋地区","code":"道木橋地区","status":"1","group":"c","lat":"36.51625","lng":"140.257172"},
		{"id":"011","name":"道木橋地区","code":"道木橋地区","status":"0","group":"c","lat":"36.51625","lng":"140.257172"},
		{"id":"008","name":"藤井川ダム橋","code":"城里町下古内182","status":"1","group":"d","lat":"36.435543","lng":"140.35415"},
		{"id":"012","name":"藤井川ダム橋","code":"城里町下古内182","status":"0","group":"d","lat":"36.435543","lng":"140.35415"},
		{"id":"013","name":"コミュニティセンター","code":"城里町石塚","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"003","name":"役場望楼","code":"城里町石塚","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"002","name":"役場望楼撤去作業","code":"城里町石塚","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"004","name":"役場周辺道路","code":"城里町石塚","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"000","name":"役場駐車場","code":"城里町石塚","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
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

		{"id":"1","name":"千代川庁舎","code":"茨城県下妻市鬼怒230","status":"0","group":"a","lat":"36.156536","lng":"139.963822"},
		{"id":"1a","name":"千代川庁舎","code":"茨城県下妻市鬼怒230","status":"1","group":"a","lat":"36.156536","lng":"139.963822"},
		{"id":"2","name":"鎌庭道路沿い","code":"茨城県下妻市鎌庭139-2","status":"0","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"2a","name":"鎌庭道路沿い","code":"茨城県下妻市鎌庭139-2","status":"1","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"3","name":"きぬアクアステーション前","code":"茨城県下妻市中居指933-1","status":"0","group":"a","lat":"36.162548","lng":"139.956526"},
		{"id":"3a","name":"きぬアクアステーション前","code":"茨城県下妻市中居指933-1","status":"1","group":"a","lat":"36.162548","lng":"139.956526"},
		{"id":"7","name":"鎌庭道路沿い","code":"茨城県下妻市鎌庭139-2","status":"0","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"7a","name":"鎌庭道路沿い","code":"茨城県下妻市鎌庭139-2","status":"1","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"4","name":"道の駅しもつま","code":"茨城県下妻市数須140","status":"0","group":"b","lat":"36.217549","lng":"139.986180"},
		{"id":"4a","name":"道の駅しもつま","code":"茨城県下妻市数須140","status":"1","group":"b","lat":"36.217549","lng":"139.986180"},
		{"id":"5","name":"小貝川ふれあい公園近く","code":"茨城県下妻市堀篭1650-1","status":"0","group":"c","lat":"36.192547","lng":"139.993154"},
		{"id":"5a","name":"小貝川ふれあい公園近く","code":"茨城県下妻市堀篭1650-1","status":"1","group":"c","lat":"36.192547","lng":"139.993154"},
		{"id":"6","name":"坂東市役所岩井庁舎","code":"茨城県下妻市半谷724-1","status":"0","group":"d","lat":"36.19911","lng":"139.948479"},
		{"id":"6a","name":"坂東市役所岩井庁舎","code":"茨城県下妻市半谷724-1","status":"1","group":"d","lat":"36.19911","lng":"139.948479"},
		{"id":"8","name":"山尻道路沿い","code":"茨城県下妻市山尻47","status":"0","group":"e","lat":"36.179263","lng":"139.994249"},
		{"id":"8a","name":"山尻道路沿い","code":"茨城県下妻市山尻47","status":"1","group":"e","lat":"36.179263","lng":"139.994249"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"私は，8月19日に下妻市に行って取材をしてきました。下妻市の震災時の写真を見たとき道路などの地割れの被害が大きいと思いましたが，殆どの場所が治っており，どこが壊れていたのか分からないくらい元通りの綺麗な状態になっていました。一部立ち入り禁止となっているところも若干ありました。"
	},
	
	
	"takahagi":{
		"spots": [
		{"id":"1","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"2","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"3","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"4","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"5","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"6","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"7","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"8","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"9","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"10","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"11","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"12","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"13","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"14","name":"大津港付近","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"15","name":"旧磯原付近","code":"茨城県北茨城市","status":"1","group":"a","lat":"36.796182","lng":"140.755588"},
		{"id":"16","name":"旧磯原付近","code":"茨城県北茨城市","status":"1","group":"a","lat":"36.796182","lng":"140.755588"},
		{"id":"17","name":"旧磯原付近","code":"茨城県北茨城市","status":"1","group":"a","lat":"36.796182","lng":"140.755588"},
		{"id":"18","name":"月浜の湯前","code":"茨城県北茨城市磯原町磯原200-3","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"19","name":"月浜の湯前","code":"茨城県北茨城市磯原町磯原200-3","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"20","name":"月浜の湯前","code":"茨城県北茨城市磯原町磯原200-3","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"21","name":"月浜の湯前","code":"茨城県北茨城市磯原町磯原200-3","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"22","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"23","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"24","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"25","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"26","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"27","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"28","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"29","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"30","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"31","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"32","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"33","name":"月浜の湯脇路地から太平洋への道","code":"茨城県北茨城市磯原町","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"34","name":"中郷駅付近","code":"茨城県北茨城市中郷町","status":"1","group":"a","lat":"36.753146","lng":"140.729112"},
		{"id":"35","name":"美鳳前","code":"茨城県北茨城市中郷町足洗海岸375","status":"1","group":"a","lat":"36.759675","lng":"140.736107"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"高萩市には8月20日に訪れました。市役所の建物は地震の影響で使えなくなっており、職員の方はプレハブの中で仕事をしていました。その周辺はかなり復旧しており、早く住民の方々が安心して生活できる環境になればいいなと思いました。"
	},
	
	"tikusei":{
		"spots": [
		{"id":"1","name":"第3光伸ビル","code":"茨城県筑西市乙965","status":"1","group":"a","lat":"36.301586","lng":"139.978348"},
		{"id":"1a","name":"第3光伸ビル","code":"茨城県筑西市乙965","status":"0","group":"a","lat":"36.301586","lng":"139.978348"},
		{"id":"2","name":"357号線沿い","code":"茨城県筑西市梶内357号線沿い","status":"1","group":"b","lat":"36.236312","lng":"139.976794"},
		{"id":"2a","name":"357号線沿い","code":"茨城県筑西市梶内357号線沿い","status":"0","group":"b","lat":"36.236312","lng":"139.976794"},
		{"id":"3","name":"関城支所南","code":"茨城県筑西市関本下1943-1付近道路","status":"1","group":"c","lat":"36.25187","lng":"139.926657"},
		{"id":"3a","name":"関城支所南","code":"茨城県筑西市関本下1943-1付近道路","status":"0","group":"c","lat":"36.25187","lng":"139.926657"},
		{"id":"5","name":"筑西市民病院","code":"茨城県筑西市玉戸1658","status":"1","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"5a","name":"筑西市民病院","code":"茨城県筑西市玉戸1658","status":"0","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"6","name":"筑西市民病院","code":"茨城県筑西市玉戸1658","status":"1","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"7","name":"筑西市民病院","code":"茨城県筑西市玉戸1658","status":"1","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"8","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"1","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"8a","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"0","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"9","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"1","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"9a","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"0","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"10","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"1","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"10a","name":"筑西市立明野図書館","code":"茨城県筑西市海老ヶ島2120-7","status":"0","group":"e","lat":"36.249171","lng":"140.028903"}
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
		{"id":"3","name":"亀城公園","code":"茨城県土浦市中央1丁目13-48","status":"1","group":"a","lat":"36.084679","lng":"140.198553"},
		{"id":"7","name":"亀城公園","code":"茨城県土浦市中央1丁目13-48","status":"1","group":"a","lat":"36.084679","lng":"140.198553"},
		{"id":"11","name":"亀城公園","code":"茨城県土浦市中央1丁目13-48","status":"1","group":"b","lat":"36.084679","lng":"140.198553"},
		{"id":"1","name":"土浦市立土浦第一中学校","code":"土浦市文京町3-8","status":"1","group":"a","lat":"36.084584","lng":"140.194"},
		{"id":"2","name":"乙戸沼公園","code":"土浦市乙戸南２丁目","status":"1","group":"a","lat":"36.031438","lng":"140.147539"},
		{"id":"4","name":"国道125号線桜川橋北","code":"土浦市桜町1丁目","status":"1","group":"a","lat":"36.07719","lng":"140.203308"},
		{"id":"5","name":"鹿島神社","code":"土浦市真鍋4丁目3-6 ","status":"1","group":"a","lat":"36.096992","lng":"140.203052"},
		{"id":"6","name":"水郷体育館","code":"土浦市大岩田1651","status":"1","group":"a","lat":"36.054942","lng":"140.208895"},
		{"id":"8","name":"県道小野土浦線藤沢団地脇","code":"土浦市藤沢","status":"1","group":"a","lat":"36.125981","lng":"140.153576"},
		{"id":"9","name":"鹿島神社","code":"真鍋4丁目3-6 鹿島神社","status":"1","group":"b","lat":"36.096992","lng":"140.203052"},
		{"id":"10","name":"亀城公園付近","code":"土浦市中央","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"12","name":"亀城公園付近","code":"土浦市中央","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"13","name":"亀城公園付近","code":"土浦市中央","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"14","name":"亀城公園付近","code":"土浦市中央1丁目 中城通り","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"15","name":"藤沢 県道小野土浦線藤沢団地脇","code":"土浦市藤沢","status":"1","group":"b","lat":"36.125981","lng":"140.153576"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"この地区の震災状況ですが、地元の方々に当時の事など聞きましたが，やはり、街の人々は驚くほど苦労されたようです。この地区も，僕が考えていた以上に地震の被害は大きく，再発したときに冷静に行動できるよう心掛けるべきだと思いました。"
	},
	
	"sakuragawa":{
		"spots": [
		{"id":"008","name":"真壁の歴史的建造物","code":"真壁213-1","status":"1","group":"a","lat":"36.277221","lng":"140.099141"},
		{"id":"017","name":"真壁の歴史的建造物","code":"真壁213-1","status":"0","group":"a","lat":"36.277221","lng":"140.099141"},
		{"id":"013","name":"真壁の建造物","code":"真壁232","status":"1","group":"a","lat":"36.278049","lng":"140.097841"},
		{"id":"016","name":"真壁の建造物","code":"真壁232","status":"0","group":"a","lat":"36.278049","lng":"140.097841"},
		{"id":"015","name":"真壁の歴史的建造物","code":"真壁189","status":"1","group":"a","lat":"36.277142","lng":"140.099092"},
		{"id":"020","name":"真壁の歴史的建造物","code":"真壁189","status":"0","group":"a","lat":"36.277142","lng":"140.099092"},
		{"id":"009","name":"真壁の歴史的建造物","code":"真壁200","status":"1","group":"a","lat":"36.276721","lng":"140.100301"},
		{"id":"019","name":"真壁の歴史的建造物","code":"真壁200","status":"0","group":"a","lat":"36.276721","lng":"140.100301"},
		{"id":"011","name":"市道","code":"東矢貝318-3","status":"1","group":"a","lat":"36.298","lng":"140.073655"},
		{"id":"000","name":"市道","code":"東矢貝318-3","status":"0","group":"a","lat":"36.298","lng":"140.073655"},
		{"id":"007","name":"大和駅","code":"高森地区","status":"1","group":"b","lat":"36.345476","lng":"140.073385"},
		{"id":"001","name":"大和駅","code":"高森地区","status":"0","group":"b","lat":"36.345476","lng":"140.073385"},
		{"id":"014","name":"高森地区ブロック塀","code":"高森717","status":"1","group":"b","lat":"36.343547","lng":"140.074486"},
		{"id":"002","name":"高森地区ブロック塀","code":"高森717","status":"0","group":"b","lat":"36.343547","lng":"140.074486"},
		{"id":"012","name":"桜川公園","code":"磯部667","status":"1","group":"c","lat":"36.366191","lng":"140.137907"},
		{"id":"003","name":"桜川公園","code":"磯部667","status":"0","group":"c","lat":"36.366191","lng":"140.137907"},
		{"id":"006","name":"西小塙地区住宅","code":"西小塙683","status":"1","group":"d","lat":"36.359172","lng":"140.153317"},
		{"id":"004","name":"西小塙地区住宅","code":"西小塙683","status":"0","group":"d","lat":"36.359172","lng":"140.153317"},
		{"id":"005","name":"西小塙地区道路","code":"西小塙683","status":"1","group":"d","lat":"36.359172","lng":"140.153317"},
		{"id":"010","name":"西小塙地区道路","code":"西小塙683","status":"0","group":"d","lat":"36.359172","lng":"140.153317"}
		],	
		"data":[
			{"donor":"個人撮影"},
			{"donor":"茨城県教育庁総務課"}
		],
		"comment":"桜川市では歴史的な建造物が多く被害を受けたようですが、それらはまだ修復が完了していないものが殆どでした。建物のブロックなどの倒壊が多く見られ、地震が起こった際には倒壊しそうなものからすぐに離れるべきだと感じました。"
	},
	
	"disney":{
		"spots": [
		{"id":"3","name":"ウォルトディズニー展 3","code":"","status":"0","group":"a"},
		{"id":"4","name":"ウォルトディズニー展 4","code":"","status":"0","group":"a"},
		{"id":"5","name":"ウォルトディズニー展 5","code":"","status":"0","group":"a"},
		{"id":"6","name":"ウォルトディズニー展 6","code":"","status":"0","group":"a"},
		{"id":"7","name":"ウォルトディズニー展 7","code":"","status":"0","group":"a"},
		{"id":"8","name":"ウォルトディズニー展 8","code":"","status":"0","group":"a"},
		{"id":"9","name":"ウォルトディズニー展 9","code":"","status":"0","group":"a"},
		{"id":"10","name":"ウォルトディズニー展 10","code":"","status":"0","group":"a"},
		{"id":"11","name":"ウォルトディズニー展 11","code":"","status":"0","group":"a"},
		{"id":"12","name":"ウォルトディズニー展 12","code":"","status":"0","group":"a"},
		{"id":"13","name":"ウォルトディズニー展 13","code":"","status":"0","group":"a"},
		{"id":"14","name":"ウォルトディズニー展 14","code":"","status":"0","group":"a"},
		{"id":"15","name":"ウォルトディズニー展 15","code":"","status":"0","group":"a"},
		{"id":"16","name":"ウォルトディズニー展 16","code":"","status":"0","group":"a"},
		{"id":"17","name":"ウォルトディズニー展 17","code":"","status":"0","group":"a"},
		{"id":"18","name":"ウォルトディズニー展 18","code":"","status":"0","group":"a"},
		{"id":"19","name":"ウォルトディズニー展 19","code":"","status":"0","group":"a"},
		{"id":"20","name":"ウォルトディズニー展 20","code":"","status":"0","group":"a"},
		{"id":"21","name":"ウォルトディズニー展 21","code":"","status":"0","group":"a"},
		{"id":"22","name":"ウォルトディズニー展 22","code":"","status":"0","group":"a"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
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
ensearch:keyを元にjson.list上での番地を検索
---------------------------------------*/

function ensearch(key){
	var i = 0;
	while(key != enjson.list[i].name){
		i++;
	}
	//document.write('ok!!' + i);
	return i;
}

/*
enwritehead:Header情報を出力
---------------------------------------*/

function enwritehead(){

document.write('<h2>'+enjson.list[keyNumber].jname+'</h2>');
	document.write('<div class="left">Total Image courtesy ：'+eval("enjson."+key+".spots.length")+'<br>');
	for(var i=0; i<eval("enjson."+key+".data.length");i++){
		document.write('<li>'+eval("enjson."+key+".data[i].donor")+'</li>');
	}
	if( enjson.list[keyNumber].by != 'none'){
	document.write('<br><div class="face">Impression of an interview：('+enjson.list[keyNumber].byj+')<table><tr>');
	document.write('<td width="200" height="200"><img class="face" src="img/face/'+enjson.list[keyNumber].by+'.jpg" width="200" height="200" ></td>');
	document.write('<td><p>Are published in Japanese pages only comment.</p>');
	document.write('</td></tr></table></div>');
	}else{
	document.write('<br><br><br><p>Are published in Japanese pages only comment.</p>');
	}
	//document.write('<div class="right"><img src="img/photo/'+json.list[keyNumber].name+'/'+json.list[keyNumber].name+'.jpg"/></div>');

		
		document.write('</div>');
	$("title").text(enjson.list[keyNumber].jname + "-Damage situation in Ibaraki Prefecture | Think about earthquakes");
}

/*
enwriteImggrid:画像Gridを出力
---------------------------------------*/

function enwriteImggrid(){
var status;

	document.write('<div class="point">\
		<table>\
			<tr><td><img src="img/marker/blue-dot.png">or　<span class="status0">Current</span></td><td>This point, the image has been published (taken before July - November 2012) now.</td></tr>\
			<tr><td><img src="img/marker/red-dot.png">or　<span class="status1">At the time the earthquake</span></td><td>This point, the image has been published immediately after the earthquake.</td></tr>\
		</table>\
	</div>');
	for(var j=1; j<=eval("enjson."+key+".spots.length"); j++){
		var spot = eval("enjson."+key+".spots[j-1]");
			if(spot.status == 1){
				
					status = 'At the time the earthquake';
			}else{
			status = 'Current';
			}
	document.write('<a class="fancy" data-fancybox-type="image" data-fancybox-group="'+spot.group+'" href="img/photo/'+enjson.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'　'+spot.name+' '+status+'の様子">');
	document.write('<div class="four columns photocolumns ">');
	document.write('<div class=" cap">');
	document.write('<img src="img/photo/'+enjson.list[keyNumber].name+'/' + spot.id + '.jpg" height="90%"/>');
	//document.write('');
	document.write('<span class="status'+spot.status+'">'+status+'</span><p>'+spot.name+'</p></div>');
	document.write('</div></a>');}

}

/*
enwritelist:市町村リストを出力
---------------------------------------*/

function enwritelist(){

	var count_img = 0;
	for(var i=4; i<enjson.list.length; i++){
		if(enjson.list[i].name == 'ami'){
		document.write('</div><div class="twelve columns panel row">Other<br>');
		}
		document.write('<a href="en_photo_'+enjson.list[i].name+'.html"><div class="four columns photo">');
		document.write('<h3  id="'+enjson.list[i].name+'">'+enjson.list[i].jname+'</h3><div>　');
		if(i <  24 ){
		document.write('Reporters：'+enjson.list[i].byj+'　');
		}
		document.write('Pictures ：'+eval("enjson."+enjson.list[i].name+".spots.length")+'</div>');
		document.write('</div>');
		document.write('</a>');
		count_img = count_img + eval("enjson."+enjson.list[i].name+".spots.length");
	}
	count_img = count_img-6;
	document.getElementById('imgcounter').innerHTML= 'Total number of images ：'+count_img+'';
	document.getElementById('imgcontent').innerHTML= 'Regions ：'+enjson.list.length+'';



	
}


/*
writeGoogleMap (list
---------------------------------------*/

function eninitialize() {


var currentInfoWindow = null;
	var position = new google.maps.LatLng(36.348038,140.297419);
	var op = {zoom: 9,center: position,mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), op);
	
	for(var i=0; i<enjson.list.length; i++){
		attachInfoWindow(i);
	}

	function attachInfoWindow(num) {
	var iconcolor;
	if( enjson.list[num].by != 'none'){
			iconcolor = 'img/marker/blue-dot.png';
			}else{
				iconcolor = 'img/marker/red-dot.png';
			}
	var ContentStr = '<a href="en_photo_'+enjson.list[num].name+'.html">'+enjson.list[num].jname+'</a>';
	var infowindow = new google.maps.InfoWindow({content:ContentStr});
	var marker = new google.maps.Marker({
					position: new google.maps.LatLng(enjson.list[num].lat,enjson.list[num].lng),
					map: map,icon:iconcolor});		
	google.maps.event.addListener(marker, 'click', function() {
		if (currentInfoWindow) {
			currentInfoWindow.close();
		}
		infowindow.open(map,marker);
		currentInfoWindow = infowindow;
	});
	
	$("h3#"+enjson.list[num].name).mouseover(function(){
	if (currentInfoWindow) {
			currentInfoWindow.close();
		}
		infowindow.open(map,marker);
		currentInfoWindow = infowindow;
});
	}
	
}

/*
writeGoogleMap (grid
---------------------------------------*/

function eninitializegrid() {
var currentInfoWindow = null;
	var position = new google.maps.LatLng(enjson.list[keyNumber].lat,enjson.list[keyNumber].lng);
	var op = {zoom: 14,center: position,mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), op);
	for (var i=0;i<eval("enjson."+key+".spots.length");i++) {attachInfoWindow(i);}
	
	function attachInfoWindow(num) {
	var spot = eval("enjson."+key+".spots[num]");
	var iconcolor;
				if(spot.status == 1){
				iconcolor = 'img/marker/red-dot.png';
			}else{
				iconcolor = 'img/marker/blue-dot.png';
			}
	
	var ContentStr = '<a class="fancy" href="img/photo/'+enjson.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'　'+spot.name+' '+status+'"  data-fancybox-type="image" data-fancybox-group="1">'+spot.name+'</a>';
	var infowindow = new google.maps.InfoWindow({content:ContentStr});
	var marker = new google.maps.Marker({
					position: new google.maps.LatLng(spot.lat,spot.lng),
					map: map,icon:iconcolor});		
	google.maps.event.addListener(marker, 'click', function() {
		if (currentInfoWindow) {
			currentInfoWindow.close();
		}
		infowindow.open(map,marker);
		currentInfoWindow = infowindow;
		$.fancybox.open($('.fancy'));
	});
	}
}

var enjson = 
{
	"list":
		[
		{"jname":"ウォルトディニー展","name":"disney","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"南三陸町","name":"minamisanriku","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"気仙沼市","name":"kesennuma","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"仙台市","name":"sendai","by":"3_kobayashi","byj":"Masaki.K."},
		
		{"jname":"Inashiki　City","name":"inasiki","by":"1_kamihara","byj":"Takumi.K.","lat":"35.956568","lng":"140.323918"},
		{"jname":"Ibaraki　Town","name":"ibarakimati","by":"2_suzuki","byj":"Yumi.S.","lat":"36.287456","lng":"140.424585"},
		{"jname":"Oarai　Town","name":"oarai","by":"3_kobayashi","byj":"Masaki.K.","lat":"36.313186","lng":"140.575021"},
		{"jname":"Kasama　　City","name":"kasama","by":"2_suzuki","byj":"Yumi.S.","lat":"36.354398","lng":"140.30365"},
		{"jname":"Kasumigaura　City","name":"kasumigaura","by":"2_suzuki","byj":"Yumi.S.","lat":"36.158944","lng":"140.237045"},
		{"jname":"Kitaibaraki　　City","name":"kitaibaraki","by":"1_minami","byj":"Kaori.M.","lat":"36.801867","lng":"140.751048"},
		{"jname":"Sakuragawa　City","name":"sakuragawa","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.327296","lng":"140.090397"},
		{"jname":"Shimotsuma　City","name":"simotuma","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.191646","lng":"139.967485"},
		{"jname":"Joso　City","name":"jyoso","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.032998","lng":"139.99799"},
		{"jname":"Shirosato　Town","name":"shirosato","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.479293","lng":"140.376195"},
		{"jname":"Takahagi　City","name":"takahagi","by":"1_minami","byj":"Kaori.M.","lat":"36.713747","lng":"140.709546"},
		{"jname":"Chikusei　City","name":"tikusei","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.320658","lng":"139.98151"},
		{"jname":"Tsuchiura　City","name":"tutiura","by":"1_kamihara","byj":"Takumi.K.","lat":"36.071827","lng":"140.195968"},
		{"jname":"Bando　City","name":"bandou","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.057981","lng":"139.886753"},
		{"jname":"Hitachi　City","name":"hitati","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.598992","lng":"140.65226"},
		{"jname":"Hitachiota　City","name":"hitachioota","by":"1_minami","byj":"Kaori.M.","lat":"36.538295","lng":"140.530951"},
		{"jname":"Hitachi Omiya　City","name":"hitatioomiya","by":"1_minami","byj":"Kaori.M.","lat":"36.542555","lng":"140.410968"},
		{"jname":"Hitachinaka　City","name":"hitachinaka","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.396553","lng":"140.534607"},
		{"jname":"Hokota　City","name":"hokota","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.158606","lng":"140.516547"},
		{"jname":"Mito　City","name":"mito","by":"2_suzuki","byj":"Yumi.S.","lat":"36.365837","lng":"140.471191"},
		
		{"jname":"Ami　Town","name":"ami","by":"none","byj":"none","lat":"36.037995","lng":"140.214334"},
		{"jname":"Kashima　City","name":"kasima","by":"none","byj":"none","lat":"35.979117","lng":"140.644123"},
		{"jname":"Kawauti　Town","name":"kawauti","by":"none","byj":"none","lat":"35.896281","lng":"140.243809"},
		{"jname":"Tukubamirai　City","name":"tukubamirai","by":"none","byj":"none","lat":"35.967448","lng":"140.035463"},
		{"jname":"Namegata　City","name":"namegata","by":"none","byj":"none","lat":"35.994119","lng":"140.491001"},	
		{"jname":"Moriya　City","name":"moriya","by":"none","byj":"none","lat":"35.951052","lng":"139.975725"}
		],


	"oarai":{
		"spots": [
			{"id":"9","name":"Aerial photo","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"0","lat":"36.305753","lng":"140.574311"},
			{"id":"5","name":"Ferry Terminal","code":"2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"0","lat":"36.309558","lng":"140.574439"},
			{"id":"6","name":"Oarai Marine Tower","code":"10,Minatochuo,Oarai-machi Higashiibaraki-gun, Ibaraki","status":"1","group":"a","lat":"36.310284","lng":"140.572551"},
			{"id":"3","name":"Oarai Marine Tower","code":"10,Minatochuo,Oarai-machi Higashiibaraki-gun, Ibaraki","status":"1","group":"a","lat":"36.303194","lng":"140.567315"},
			{"id":"38","name":"Oarai Marine Tower","code":"10,Minatochuo,Oarai-machi Higashiibaraki-gun, Ibaraki","status":"0","group":"a","lat":"36.310491","lng":"140.570191"},
			{"id":"29","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b","lat":"36.335041","lng":"140.59152"},
			{"id":"30","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b","lat":"36.335248","lng":"140.591734"},
			{"id":"31","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b","lat":"36.335283","lng":"140.592077"},
			{"id":"32","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b","lat":"36.334937","lng":"140.592243"},
			{"id":"33","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b","lat":"36.334755","lng":"140.592748"},
			{"id":"34","name":"Kaimon Bridge","code":"County Road No. 108","status":"0","group":"b","lat":"36.334712","lng":"140.591589"},
			{"id":"4","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"c","lat":"36.313353","lng":"140.575178"},
			{"id":"7","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"c","lat":"36.313292","lng":"140.57481"},
			{"id":"8","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"c","lat":"36.313282","lng":"140.575105"},
			{"id":"35","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"c","lat":"36.313416","lng":"140.57525"},
			{"id":"36","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"c","lat":"36.31329","lng":"140.575263"},
			{"id":"37","name":"Oarai town hall","code":"6881-275,Isoharacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"c","lat":"36.313264","lng":"140.575242"},
			{"id":"2","name":"Cultural center","code":"6881-88,Isohamacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"d","lat":"36.312776","lng":"140.575076"},
			{"id":"10","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e","lat":"36.309886","lng":"140.581075"},
			{"id":"11","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e","lat":"36.310336","lng":"140.581064"},
			{"id":"12","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e","lat":"36.310906","lng":"140.581268"},
			{"id":"13","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e","lat":"36.310967","lng":"140.580431"},
			{"id":"20","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e","lat":"36.309272","lng":"140.584744"},
			{"id":"21","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e","lat":"36.309359","lng":"140.584905"},
			{"id":"22","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e","lat":"36.309549","lng":"140.584722"},
			{"id":"23","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e","lat":"36.309143","lng":"140.584175"},
			{"id":"24","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e","lat":"36.31012","lng":"140.584701"},
			{"id":"18","name":"Fishing port","code":"Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"e","lat":"36.310733","lng":"140.582995"},
			{"id":"40","name":"Science Museum ","code":"11-2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"f","lat":"36.309558","lng":"140.574439"},
			{"id":"41","name":"Science Museum ","code":"11-2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"f","lat":"36.309558","lng":"140.574439"},
			{"id":"16","name":"Fish market","code":"Isohamacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"g","lat":"36.310863","lng":"140.581997"},
			{"id":"19","name":"Fish market","code":"Isohamacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"g","lat":"36.310768","lng":"140.581836"},
			{"id":"14","name":"Resort Outlets","code":"11-2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"h","lat":"36.310612","lng":"140.569498"},
			{"id":"15","name":"Resort Outlets","code":"11-2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"h","lat":"36.30935","lng":"140.56879"},
			{"id":"17","name":"Resort Outlets","code":"11-2,Minatochuo,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"h","lat":"36.308304","lng":"140.567406"},
			{"id":"27","name":"Convenience store","code":"8253-39,Isohamacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"i","lat":"36.311529","lng":"140.584776"},
			{"id":"44","name":"Convenience store","code":"8253-39,Isohamacho,Oarai-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"i","lat":"36.311511","lng":"140.584604"},
			{"id":"1","name":"Line 2 prefectural","code":"Line 2 prefectural","status":"1","group":"j","lat":"36.311805","lng":"140.585559"},
			{"id":"25","name":"Line 2 prefectural","code":"Line 2 prefectural","status":"0","group":"j","lat":"36.312566","lng":"140.586257"},
			{"id":"26","name":"Line 2 prefectural","code":"Line 2 prefectural","status":"0","group":"j","lat":"36.311926","lng":"140.586299"},
			{"id":"28","name":"Line 2 prefectural","code":"Line 2 prefectural","status":"0","group":"j","lat":"36.329682","lng":"140.593883"},
			{"id":"39","name":"Oarai Sun Beach","code":"Oarai Sun Beach","status":"0","group":"k","lat":"36.30392","lng":"140.566033"},
			{"id":"42","name":"Heitaro beach","code":"Heitaro beach","status":"0","group":"l","lat":"36.317234","lng":"140.590194"},
			{"id":"43","name":"Heitaro beach","code":"Heitaro beach","status":"0","group":"l","lat":"36.312877","lng":"140.587211"}
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
		{"id":"1","name":"Yahagi road","code":"177-3004,Yahagi,Bando-shi,Ibaraki","status":"1","group":"a","lat":"35.99674","lng":"139.897539"},
		{"id":"1a","name":"Yahagi road","code":"177-3004,Yahagi,Bando-shi,Ibaraki","status":"0","group":"a","lat":"35.99674","lng":"139.897539"},
		{"id":"2","name":"Bridge No. 7","code":"1056-1,Kariyado,Bando-shi,Ibaraki","status":"1","group":"b","lat":"36.091245","lng":"139.863547"},
		{"id":"2a","name":"Bridge No. 7","code":"1056-1,Kariyado,Bando-shi,Ibaraki","status":"0","group":"b","lat":"36.091245","lng":"139.863547"},
		{"id":"3","name":"Bridge No. 8","code":"1001,Kariyado,Bando-shi,Ibaraki","status":"1","group":"b","lat":"36.091349","lng":"139.863326"},
		{"id":"3a","name":"Bridge No. 8","code":"1001,Kariyado,Bando-shi,Ibaraki","status":"0","group":"b","lat":"36.091349","lng":"139.863326"},
		{"id":"4","name":"Bando City Hall Buildings Iwai","code":"4365,Iwai,Bando-shi,Ibaraki","status":"1","group":"c","lat":"36.048752","lng":"139.888741"},
		{"id":"4a","name":"Bando City Hall Buildings Iwai","code":"4365,Iwai,Bando-shi,Ibaraki","status":"0","group":"c","lat":"36.048752","lng":"139.888741"},
		{"id":"5","name":"Bando City Hall Buildings Iwai","code":"4365,Iwai,Bando-shi,Ibaraki","status":"1","group":"c","lat":"36.048752","lng":"139.888741"},
		{"id":"5a","name":"Bando City Hall Buildings Iwai","code":"4365,Iwai,Bando-shi,Ibaraki","status":"0","group":"c","lat":"36.048752","lng":"139.888741"},
		{"id":"6","name":"Bando City Hall Buildings Iwai","code":"4365,Iwai,Bando-shi,Ibaraki","status":"1","group":"c","lat":"36.048752","lng":"139.888741"},
		{"id":"7","name":"Bando fire department","code":"644-2,Heta,Bando-shi,Ibaraki","status":"1","group":"c","lat":"36.036902","lng":"139.89417"},
		{"id":"7a","name":"Bando fire department","code":"644-2,Heta,Bando-shi,Ibaraki","status":"0","group":"c","lat":"36.036902","lng":"139.89417"},
		{"id":"8","name":"Kawazoe west elm","code":"1183,Oigoshinden,Bando-shi,Ibaraki","status":"1","group":"d","lat":"36.118325","lng":"139.872411"},
		{"id":"8a","name":"Kawazoe west elm","code":"1183,Oigoshinden,Bando-shi,Ibaraki","status":"0","group":"d","lat":"36.118325","lng":"139.872411"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"hitachinaka":{
		"spots": [
		{"id":"01","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"02","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"03","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"001","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"000","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"003","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"002","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"005","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"006","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"007","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"017","name":"Wholesale market","code":"3-11-11,Wadacho,Hitachinaka-shi,Ibaraki","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"04","name":"Sakae cafeteria","code":"22-3,Minatohoncho,Hitachinaka-shi,Ibaraki","status":"1","group":"b","lat":"36.341836","lng":"140.595962"},
		{"id":"05","name":"Sakae cafeteria","code":"22-3,Minatohoncho,Hitachinaka-shi,Ibaraki","status":"1","group":"b","lat":"36.341836","lng":"140.595962"},
		{"id":"06","name":"Private house","code":"1-1-5,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"c","lat":"36.34262","lng":"140.596297"},
		{"id":"07","name":"Private house","code":"1-1-5,Wadacho,Hitachinaka-shi,Ibaraki","status":"1","group":"c","lat":"36.34262","lng":"140.596297"},
		{"id":"014","name":"Town road Tonoyama","code":"1-1-1,Tonoyamacho,Hitachinaka-shi,Ibaraki","status":"1","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"015","name":"Town road Tonoyama","code":"1-1-1,Tonoyamacho,Hitachinaka-shi,Ibaraki","status":"1","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"0001","name":"Town road Tonoyama","code":"1-1-1,Tonoyamacho,Hitachinaka-shi,Ibaraki","status":"0","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"0002","name":"Town road Tonoyama","code":"1-1-1,Tonoyamacho,Hitachinaka-shi,Ibaraki","status":"0","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"0003","name":"Warehouse fishery","code":"1-11-34,Ushikubocho,Hitachinaka-shi,Ibaraki","status":"1","group":"e","lat":"36.344759","lng":"140.604357"},
		{"id":"013","name":"Warehouse fishery","code":"1-11-34,Ushikubocho,Hitachinaka-shi,Ibaraki","status":"0","group":"e","lat":"36.344759","lng":"140.604357"},
		{"id":"0004","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"1","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"010","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"0","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"0005","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"1","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"011","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"0","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"0006","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"1","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"012","name":"Friendship Park","code":"1-16-16,Kaimoncho,Hitachinaka-shi,Ibaraki","status":"0","group":"f","lat":"36.3374","lng":"140.593993"}
		],	
		"data":[
			{"donor":"Individual shooting"}
		]
	},
	
	
	"hitachioota":{
		"spots": [
		{"id":"1","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"2","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"3","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"4","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"5","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"6","name":"Road","code":"Ozawacho,Hitachiota-shi,Ibaraki","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"7","name":"Road","code":"Ozawacho,Hitachiota-shi,Ibaraki","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"8","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"9","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"10","name":"Road","code":"Ozawacho,Hitachiota-shi,Ibaraki","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"11","name":"Road","code":"Ozawacho,Hitachiota-shi,Ibaraki","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"12","name":"Road","code":"Ozawacho,Hitachiota-shi,Ibaraki","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"13","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"14","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"15","name":"Mineyama junior high school","code":"1620,Isobecho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"16","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"17","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"18","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"19","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"20","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"21","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"22","name":"Nishiyama Training Institute","code":"1699,Inagicho,Hitachiota-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.516244"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"Mineyama junior high school"}
		]
	},
	
	
	
	"hitati":{
		"spots": [
		{"id":"1","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"1","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"1a","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"0","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"2","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"1","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"2a","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"0","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"3","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"1","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"3a","name":"3-28,Kawagocho,Hitachi-shi,Ibaraki","code":"3-28,Kawagocho,Hitachi-shi,Ibaraki","status":"0","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"4","name":"1-2,Suwacho,Hitachi-shi,Ibaraki","code":"1-2,Suwacho,Hitachi-shi,Ibaraki","status":"1","group":"b","lat":"36.565668","lng":"140.63598"},
		{"id":"4a","name":"1-2,Suwacho,Hitachi-shi,Ibaraki","code":"1-2,Suwacho,Hitachi-shi,Ibaraki","status":"0","group":"b","lat":"36.565668","lng":"140.63598"},
		{"id":"5","name":"12,Suwacho,Hitachi-shi,Ibaraki","code":"12,Suwacho,Hitachi-shi,Ibaraki","status":"1","group":"b","lat":"36.563841","lng":"140.634692"},
		{"id":"5aa","name":"12,Suwacho,Hitachi-shi,Ibaraki","code":"12,Suwacho,Hitachi-shi,Ibaraki","status":"0","group":"b","lat":"36.563841","lng":"140.634692"},
		{"id":"6","name":"1-11,Ousecho,Hitachi-shi,Ibaraki","code":"1-11,Ousecho,Hitachi-shi,Ibaraki","status":"1","group":"b","lat":"36.577283","lng":"140.653704"},
		{"id":"6aa","name":"1-11,Ousecho,Hitachi-shi,Ibaraki","code":"1-11,Ousecho,Hitachi-shi,Ibaraki","status":"0","group":"b","lat":"36.577283","lng":"140.653704"},
		{"id":"21","name":"Kokubu engineering equipment","code":"1,Kokubucho,Hitachi-shi,Ibaraki","status":"1","group":"b","lat":"36.56522","lng":"140.646101"},
		{"id":"21a","name":"Kokubu engineering equipment","code":"1,Kokubucho,Hitachi-shi,Ibaraki","status":"0","group":"b","lat":"36.56522","lng":"140.646101"},
		{"id":"7","name":"Bathing beach","code":"1,Kawajiricho,Hitachi-shi,Ibaraki","status":"1","group":"c","lat":"36.651619","lng":"140.699495"},
		{"id":"7a","name":"Bathing beach","code":"1,Kawajiricho,Hitachi-shi,Ibaraki","status":"0","group":"c","lat":"36.651619","lng":"140.699495"},
		{"id":"14","name":"Houjyuin","code":"1990,Juocho Tomobe,Hitachi-shi,Ibaraki","status":"1","group":"c","lat":"36.677609","lng":"140.680784"},
		{"id":"14a","name":"Houjyuin","code":"1990,Juocho Tomobe,Hitachi-shi,Ibaraki","status":"0","group":"c","lat":"36.677609","lng":"140.680784"},
		{"id":"15","name":"Fish Center","code":"5779-24,Minatocho,Hitachi-shi,Ibaraki","status":"1","group":"d","lat":"36.677609","lng":"140.680784"},
		{"id":"15a","name":"Fish Center","code":"5779-24,Minatocho,Hitachi-shi,Ibaraki","status":"0","group":"d","lat":"36.677609","lng":"140.680784"},
		{"id":"16","name":"Fishing port","code":"1,Kujicho,Hitachi-shi,Ibaraki","status":"1","group":"d","lat":"36.484383","lng":"140.612334"},
		{"id":"16a","name":"Fishing port","code":"1,Kujicho,Hitachi-shi,Ibaraki","status":"0","group":"d","lat":"36.484383","lng":"140.612334"}
		],	
		"data":[
			{"donor":"Individual shooting"}
		]
	},
	
	
	
	"hitatioomiya":{
		"spots": [
		{"id":"1","name":"Gozenyama elementary school","code":"3217,Noguchi,Hitachiomiya-shi,Ibaraki","status":"1","group":"a","lat":"36.563753","lng":"140.313807"},
		{"id":"2","name":"Jia shrine","code":"219,Shimocho,Hitachiomiya-shi,Ibaraki","status":"1","group":"a","lat":"36.551347","lng":"140.417701"},
		{"id":"3","name":"Rozehoru","code":"3135-6,Nakatomicho,Hitachiomiya-shi,Ibaraki","status":"1","group":"a","lat":"36.543549","lng":"140.411281"},
		{"id":"4","name":"Rozehoru","code":"3135-6,Nakatomicho,Hitachiomiya-shi,Ibaraki","status":"1","group":"a","lat":"36.543549","lng":"140.411281"},
		{"id":"5","name":"Fire Department","code":"621,Ubagacho,Hitachiomiya-shi,Ibaraki","status":"1","group":"a","lat":"36.562915","lng":"140.405206"},
		{"id":"6","name":"Road","code":"Ono,Hitachiomiya-shi,Ibaraki","status":"1","group":"a","lat":"36.54026","lng":"140.36562"},
		{"id":"7","name":"Road","code":"Oba,Hitachiomiya-shi,Ibaraki","status":"1","group":"a","lat":"36.512878","lng":"140.392828"},
		{"id":"8","name":"Road","code":"Shimoiwase,Hitachiomiya-shi,Ibaraki","status":"1","group":"a","lat":"36.520406","lng":"140.452357"},
		{"id":"9","name":"Road","code":"Shimoiwase,Hitachiomiya-shi,Ibaraki","status":"1","group":"a","lat":"36.520406","lng":"140.452357"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"hokota":{
		"spots": [
		{"id":"014","name":"General Park gymnasium","code":"2331,Toma,Hokota-shi,Ibaraki","status":"1","group":"a","lat":"36.15933","lng":"140.491098"},
		{"id":"001","name":"General Park gymnasium","code":"2331,Toma,Hokota-shi,Ibaraki","status":"0","group":"a","lat":"36.15933","lng":"140.491098"},
		{"id":"015","name":"Asahikita elementary school","code":"3852,Tasaki,Hokota-shi,Ibaraki","status":"1","group":"b","lat":"36.254085","lng":"140.521573"},
		{"id":"007","name":"Asahikita elementary school","code":"3852,Tasaki,Hokota-shi,Ibaraki","status":"0","group":"b","lat":"36.254085","lng":"140.521573"},
		{"id":"016","name":"City library","code":"1444-1,Hokota,Hokota-shi,Ibaraki","status":"1","group":"c","lat":"36.159455","lng":"140.516037"},
		{"id":"004","name":"City library","code":"1444-1,Hokota,Hokota-shi,Ibaraki","status":"0","group":"c","lat":"36.159455","lng":"140.516037"},
		{"id":"012","name":"Second nursery","code":"148,Hokota,Hokota-shi,Ibaraki","status":"1","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"017","name":"Second nursery","code":"148,Hokota,Hokota-shi,Ibaraki","status":"1","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"006","name":"Second nursery","code":"148,Hokota,Hokota-shi,Ibaraki","status":"0","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"005","name":"Second nursery","code":"148,Hokota,Hokota-shi,Ibaraki","status":"0","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"018","name":"Fuji bridge","code":"2299,Hokota,Hokota-shi,Ibaraki","status":"1","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"013","name":"Fuji bridge","code":"2299,Hokota,Hokota-shi,Ibaraki","status":"1","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"002","name":"Fuji bridge","code":"2299,Hokota,Hokota-shi,Ibaraki","status":"0","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"003","name":"Fuji bridge","code":"2299,Hokota,Hokota-shi,Ibaraki","status":"0","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"019","name":"Ohashi line around deer","code":"Fuda,Hokota-shi,Ibaraki","status":"1","group":"d","lat":"36.085735","lng":"140.542945"},
		{"id":"010","name":"Ohashi line around deer","code":"Fuda,Hokota-shi,Ibaraki","status":"0","group":"d","lat":"36.085735","lng":"140.542945"},
		{"id":"000","name":"Thunder shrine","code":"689,Kashiwakuma,Hokota-shi,Ibaraki","status":"1","group":"e","lat":"36.177226","lng":"140.571007"},
		{"id":"008","name":"Thunder shrine","code":"689,Kashiwakuma,Hokota-shi,Ibaraki","status":"0","group":"e","lat":"36.177226","lng":"140.571007"},
		{"id":"011","name":"Owada elementary school","code":"1018-3,Owada,Hokota-shi,Ibaraki","status":"1","group":"f","lat":"36.206512","lng":"140.440882"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"},
			{"donor":"City Hall Hokota"}
		]
	},
	
	"ibarakimati":{
		"spots": [
		{"id":"1","name":"Takahashi","code":"Road No. 18","status":"1","group":"a","lat":"36.290111","lng":"140.423039"},
		{"id":"12","name":"Takahashi","code":"Road No. 18","status":"0","group":"a","lat":"36.290000","lng":"140.422939"},
		{"id":"4","name":"General Welfare Center","code":"1037-1,Odutumi,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"a","lat":"36.278762","lng":"140.425600"},
		{"id":"11","name":"General Welfare Center","code":"1037-1,Odutumi,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"a","lat":"36.288762","lng":"140.425615"},
		{"id":"6","name":"Fire Department Town, Ibaraki","code":"1037-1,Odutumi,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"a","lat":"36.288961","lng":"140.42568"},

		{"id":"8","name":"Nature park","code":"2263,Nkaishizaki,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"b","lat":"36.294098","lng":"140.504494"},
		{"id":"2","name":"Nature park","code":"2263,Nkaishizaki,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"b","lat":"36.294000","lng":"140.504400"},
		{"id":"7","name":"Community center","code":"Shimoishizaki,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"b","lat":"36.295807","lng":"140.523367"},
		{"id":"9","name":"Parking park","code":"1651,Shimoishizaki,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"b","lat":"36.28884","lng":"140.521145"},
		
		{"id":"5","name":"Gymnasium","code":"862,Okunoya,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"c","lat":"36.287802","lng":"140.415316"},
		{"id":"3","name":"Nagaoka solid","code":"Kobukicho,Mito-shi,Ibaraki","status":"1","group":"c","lat":"36.308849","lng":"140.429971"},
		{"id":"13","name":"Nagaoka solid","code":"Kobukicho,Mito-shi,Ibaraki","status":"0","group":"c","lat":"36.308849","lng":"140.429971"},
		{"id":"10","name":"Cycling Road","code":"Nagaoka,Ibaraki-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"c","lat":"36.299424","lng":"140.430121"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"inasiki":{
		"spots": [
		{"id":"01","name":"Parking","code":"1403,Nshishiro,Inashiki-shi,Ibaraki","status":"0","group":"a","lat":"35.924953","lng":"140.484794"},
		{"id":"1","name":"Parking","code":"1403,Nshishiro,Inashiki-shi,Ibaraki","status":"1","group":"a","lat":"35.924953","lng":"140.484794"},
		{"id":"02","name":"Kashima Shrine","code":"309,Motoshin,Inashiki-shi,Ibaraki","status":"0","group":"b","lat":"35.938882","lng":"140.470503"},
		{"id":"2","name":"Kashima Shrine","code":"309,Motoshin,Inashiki-shi,Ibaraki","status":"1","group":"b","lat":"35.938882","lng":"140.470503"},
		{"id":"04","name":"Ohashi Suigo","code":"1661-1,Nishishiro,Inashiki,Ibaraki","status":"0","group":"c","lat":"35.924953","lng":"140.484794"},
		{"id":"4","name":"Ohashi Suigo","code":"1661-1,Nishishiro,Inashiki,Ibaraki","status":"1","group":"c","lat":"35.924953","lng":"140.484794"},
		{"id":"06","name":"Shintonegawa","code":"52-8,Motoshin,Inashiki,Ibaraki","status":"0","group":"d","lat":"35.938882","lng":"140.470503"},
		{"id":"6","name":"Shintonegawa","code":"52-8,Motoshin,Inashiki,Ibaraki","status":"1","group":"d","lat":"35.938882","lng":"140.470503"},
		{"id":"08","name":"Shintonegawa","code":"8322,Ukishima,Inashiki,Ibaraki","status":"0","group":"e","lat":"35.970005","lng":"140.43097"},
		{"id":"12","name":"Shintonegawa","code":"8322,Ukishima,Inashiki,Ibaraki","status":"1","group":"e","lat":"35.970005","lng":"140.43097"},
		{"id":"9","name":"Shintonegawa","code":"52-10,Motoshin,Inashiki,Ibaraki","status":"1","group":"f","lat":"35.938882","lng":"140.470503"},
		{"id":"09","name":"Shintonegawa","code":"52-10,Motoshin,Inashiki,Ibaraki","status":"0","group":"f","lat":"35.938882","lng":"140.470503"},
		{"id":"10","name":"Shintonegawa","code":"52-10,Motoshin,Inashiki,Ibaraki","status":"0","group":"f","lat":"35.938882","lng":"140.470503"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"jyoso":{
		"spots": [
		{"id":"1","name":"General Welfare Center","code":"4365,Shin'ishige,Joso-shi,Ibaraki","status":"1","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"1a","name":"General Welfare Center","code":"4365,Shin'ishige,Joso-shi,Ibaraki","status":"0","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"2","name":"General Welfare Center","code":"4365,Shin'ishige,Joso-shi,Ibaraki","status":"1","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"2a","name":"General Welfare Center","code":"4365,Shin'ishige,Joso-shi,Ibaraki","status":"0","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"5","name":"County Road No. 24","code":"299,Mukoishige,Joso-shi,Ibaraki","status":"1","group":"a","lat":"36.117441","lng":"139.965688"},
		{"id":"5a","name":"County Road No. 24","code":"299,Mukoishige,Joso-shi,Ibaraki","status":"0","group":"a","lat":"36.117441","lng":"139.965688"},
		{"id":"5aa","name":"County Road No. 24","code":"299,Mukoishige,Joso-shi,Ibaraki","status":"0","group":"a","lat":"36.117441","lng":"139.965688"},
		{"id":"9","name":"Joso City Hall","code":"576-2,Shin'ishige,Joso-shi,Ibaraki","status":"1","group":"a","lat":"36.115708","lng":"139.973477"},
		{"id":"9a","name":"Joso City Hall","code":"576-2,Shin'ishige,Joso-shi,Ibaraki","status":"0","group":"a","lat":"36.115708","lng":"139.973477"},
		{"id":"3","name":"Jokoji","code":"1053,Wakamiyado,Joso-shi,Ibaraki","status":"1","group":"b","lat":"36.14387","lng":"139.958393"},
		{"id":"3a","name":"Jokoji","code":"1053,Wakamiyado,Joso-shi,Ibaraki","status":"0","group":"b","lat":"36.14387","lng":"139.958393"},
		{"id":"4","name":"Joso City Hall","code":"3222-3,Mitukaido Suwamachi,Joso-shi,Ibaraki","status":"1","group":"c","lat":"36.02354","lng":"139.993905"},
		{"id":"4a","name":"Joso City Hall","code":"3222-3,Mitukaido Suwamachi,Joso-shi,Ibaraki","status":"0","group":"c","lat":"36.02354","lng":"139.993905"},
		{"id":"6","name":"West junior high school Ishige","code":"910-1,Sugiyama,Joso-shi,Ibaraki","status":"1","group":"d","lat":"36.117441","lng":"139.946291"},
		{"id":"7","name":"West junior high school Ishige","code":"910-1,Sugiyama,Joso-shi,Ibaraki","status":"1","group":"d","lat":"36.117441","lng":"139.946291"},
		{"id":"8","name":"West junior high school Ishige","code":"910-1,Sugiyama,Joso-shi,Ibaraki","status":"1","group":"d","lat":"36.117441","lng":"139.946291"},
		{"id":"8a","name":"West junior high school Ishige","code":"910-1,Sugiyama,Joso-shi,Ibaraki","status":"0","group":"d","lat":"36.117441","lng":"139.946291"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"kasama":{
		"spots": [
		{"id":"1","name":"Kasama City Hall","code":"717,Ishii,Kasama-shi,Ibaraki","status":"1","group":"a","lat":"36.393099","lng":"140.237732"},
		{"id":"6","name":"Kasama K's Denki store","code":"2090,Ishii,Kasama-shi,Ibaraki","status":"1","group":"a","lat":"36.416586","lng":"140.247688"},
		{"id":"3","name":"Kasama library","code":"2023-1,Ishii,Kasama-shi,Ibaraki","status":"1","group":"a","lat":"36.395862","lng":"140.248375"},
		{"id":"10","name":"Kasama library","code":"2023-1,Ishii,Kasama-shi,Ibaraki","status":"0","group":"a","lat":"36.395862","lng":"140.248375"},
		{"id":"2","name":"Kasama City Hall","code":"3-2-1,Chuo,Kasama-shi,Ibaraki","status":"1","group":"b","lat":"36.395862","lng":"140.248375"},
		{"id":"11","name":"Kasama City Hall","code":"3-2-1,Chuo,Kasama-shi,Ibaraki","status":"0","group":"b","lat":"36.34631","lng":"140.304208"},
		{"id":"4","name":"Junior high school second Tomobe","code":"510-1,Asahicho,Ksama-shi,Ibaraki","status":"1","group":"c","lat":"36.326985","lng":"140.330558"},
		{"id":"5","name":"Hill crafts","code":"2388-1,Kasama,Kasama-shi,Ibaraki","status":"1","group":"d","lat":"36.390335","lng":"140.262451"},
		{"id":"7","name":"Ground school Kasama","code":"2688,Kasama,Kasama-shi,Ibaraki","status":"1","group":"d","lat":"36.390335","lng":"140.262451"}
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
		{"id":"1","name":"Buildings Chiyoda","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a","lat":"36.150351","lng":"140.243912"},
		{"id":"2","name":"Hall Azisai","code":"3719-1,Fukaya,Kasumigaura-shi,Ibaraki","status":"1","group":"b","lat":"36.087014","lng":"140.313027"},
		{"id":"9","name":"Hall Azisai","code":"3719-1,Fukaya,Kasumigaura-shi,Ibaraki","status":"0","group":"b","lat":"36.087050","lng":"140.313040"},
		{"id":"3","name":"Kasumigaura City Hall","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a","lat":"36.151893","lng":"140.262451"},
		{"id":"4","name":"Kasumigaura City Hall","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a","lat":"36.151683","lng":"140.237265"},
		{"id":"5","name":"Kasumigaura City Hall","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a","lat":"36.151862","lng":"140.236976"},
		{"id":"6","name":"Kasumigaura City Hall","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a","lat":"36.152105","lng":"140.237045"},
		{"id":"7","name":"Kasumigaura City Hall","code":"461,Kamituchida,Kasumigaura-shi,Ibaraki","status":"1","group":"a","lat":"36.151564","lng":"140.236911"},
		{"id":"8","name":"Kasumigaura embankment","code":"Kasumigaura-shi,Ibaraki","status":"1","group":"c","lat":"36.040771,","lng":"140.238333"}
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
		{"id":"1","name":"Kitaibaraki City Hall","code":"1630,isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.801867","lng":"140.751048"},
		{"id":"2","name":"Kitaibaraki City Hall","code":"1630,isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.801867","lng":"140.751048"},
		{"id":"3","name":"Along the coast","code":"Hirakatacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"4","name":"Otsu fishing cooperative","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"5","name":"Line","code":"Hirakatacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"6","name":"Community Center Disaster","code":"198-1,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.795634","lng":"140.75617"},
		{"id":"7","name":"Line","code":"Hirakatacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"8","name":"Along the coast","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.858291","lng":"140.793945"},
		{"id":"9","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.858291","lng":"140.793945"},
		{"id":"10","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"11","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"12","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"13","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"14","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"15","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"16","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"17","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"18","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"19","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"20","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"21","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"22","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"23","name":"Fishing port","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.53561","lng":"140.737174"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"mito":{
		"spots": [
		{"id":"1","name":"Road No. 51","code":"1,Higashidai,Mito-shi,Ibaraki","status":"1","group":"a","lat":"36.366254","lng":"140.494309"},
		{"id":"8","name":"Road No. 51","code":"1,Higashidai,Mito-shi,Ibaraki","status":"0","group":"a","lat":"36.366233","lng":"140.494288"},
		{"id":"16","name":"Watanabe orthopedic","code":"1-6-1,Higashidai,Mito-shi,Ibaraki","status":"0","group":"a","lat":"36.367298","lng":"140.494052"},
		{"id":"2","name":"Toshogu","code":"2-5-13,Miyamachi,Mito-shi,Ibaraki","status":"1","group":"b","lat":"36.372636","lng":"140.473407"},
		{"id":"3","name":"Toshogu","code":"2-5-13,Miyamachi,Mito-shi,Ibaraki","status":"1","group":"b","lat":"36.372621","lng":"140.473377"},
		{"id":"6","name":"Mito Station North Exit","code":"1,Miyamachi,Mito-shi,Ibaraki","status":"1","group":"b","lat":"36.371375","lng":"140.476105"},
		{"id":"4","name":"Mito City Hall","code":"1-4-1,Chuo,Mito-shi,Ibaraki","status":"1","group":"c","lat":"36.365844","lng":"140.471124"},
		{"id":"5","name":"Mito City Hall","code":"1-4-1,Chuo,Mito-shi,Ibaraki","status":"1","group":"c","lat":"36.365771","lng":"140.471264"},
		{"id":"9","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d","lat":"36.366842","lng":"140.496973"},
		{"id":"10","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d","lat":"36.366816","lng":"140.496994"},
		{"id":"11","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d","lat":"36.366917","lng":"140.49697"},
		{"id":"12","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d","lat":"36.366792","lng":"140.497024"},
		{"id":"13","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d","lat":"36.366753","lng":"140.497037"},
		{"id":"14","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d","lat":"36.365978","lng":"140.497407"},
		{"id":"15","name":"3-chome Hamada","code":"3,Hmada,Mito-shi,Ibaraki","status":"0","group":"d","lat":"36.365928","lng":"140.497426"},
		{"id":"17","name":"Yamada Denki Co., Ltd.","code":"209,Kasaharacho,Mito-shi,Ibaraki","status":"1","group":"e","lat":"36.347701","lng":"140.494288"},
		{"id":"18","name":"Yamada Denki Co., Ltd.","code":"209,Kasaharacho,Mito-shi,Ibaraki","status":"1","group":"e","lat":"36.347781,","lng":"140.458786"},
		{"id":"22","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"f","lat":"36.347984","lng":"140.468077"},
		{"id":"25","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"f","lat":"36.34801","lng":"140.468016"},
		{"id":"26","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"f","lat":"36.348017","lng":"140.467965"},
		{"id":"28","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"f","lat":"36.347935","lng":"140.468402"},
		{"id":"29","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g","lat":"36.348877","lng":"140.467171"},
		{"id":"30","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g","lat":"36.34889","lng":"140.467206"},
		{"id":"31","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g","lat":"36.34884","lng":"140.46764"},
		{"id":"36","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g","lat":"36.348859","lng":"140.467471"},
		{"id":"43","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g","lat":"36.348892","lng":"140.467332"},
		{"id":"45","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g","lat":"36.348829","lng":"140.467452"},
		{"id":"50","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g","lat":"36.348792","lng":"140.467605"},
		{"id":"52","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g","lat":"36.348827","lng":"140.467688"},
		{"id":"60","name":"Mito Technical High School","code":"1101,Motoyoshidacho,Mito-shi,Ibaraki","status":"1","group":"g","lat":"36.348848","lng":"140.467192"},
		{"id":"61","name":"Sannomaru elementary school","code":"1-6-51,San'nomaru,Mito-shi,Ibaraki","status":"1","group":"h","lat":"36.374777","lng":"140.476998"},
		{"id":"62","name":"Sannomaru elementary school","code":"1-6-51,San'nomaru,Mito-shi,Ibaraki","status":"1","group":"h","lat":"36.374785","lng":"140.476094"},
		{"id":"63","name":"Sannomaru elementary school","code":"1-6-51,San'nomaru,Mito-shi,Ibaraki","status":"1","group":"h","lat":"36.374923","lng":"140.476272"},
		{"id":"64","name":"Sannomaru elementary school","code":"1-6-51,San'nomaru,Mito-shi,Ibaraki","status":"1","group":"h","lat":"36.374736","lng":"140.47643"},
		{"id":"71","name":"Second high school Mito","code":"2-2-14,Omachi,Mito-shi,Ibaraki","status":"1","group":"h","lat":"36.378217","lng":"140.472136"},
		{"id":"72","name":"Second high school Mito","code":"2-2-14,Omachi,Mito-shi,Ibaraki","status":"1","group":"h","lat":"36.378428","lng":"140.47172"},
		{"id":"74","name":"Second high school Mito","code":"2-2-14,Omachi,Mito-shi,Ibaraki","status":"1","group":"h","lat":"36.378195","lng":"140.4725"},
		{"id":"76","name":"Second high school Mito","code":"2-2-14,Omachi,Mito-shi,Ibaraki","status":"1","group":"h","lat":"36.378502","lng":"140.472414"},
		{"id":"77","name":"Second high school Mito","code":"2-2-14,Omachi,Mito-shi,Ibaraki","status":"1","group":"h","lat":"36.37842","lng":"140.472892"},
		{"id":"65","name":"Center for Lifelong Learning","code":"4-1,Atagocho,Mito-shi,Ibaraki","status":"1","group":"i","lat":"36.394601","lng":"140.453162"},
		{"id":"66","name":"Center for Lifelong Learning","code":"4-1,Atagocho,Mito-shi,Ibaraki","status":"1","group":"i","lat":"36.394647","lng":"140.453414"},
		{"id":"67","name":"Center for Lifelong Learning","code":"4-1,Atagocho,Mito-shi,Ibaraki","status":"1","group":"i","lat":"36.394813","lng":"140.453835"},
		{"id":"69","name":"Center for Lifelong Learning","code":"4-1,Atagocho,Mito-shi,Ibaraki","status":"1","group":"i","lat":"36.394839","lng":"140.454028"}
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
		{"id":"005","name":"District road Shimoakutsu","code":"Shimoskutu,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"a","lat":"36.494824","lng":"140.380157"},
		{"id":"009","name":"District road Shimoakutsu","code":"Shimoskutu,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"a","lat":"36.494824","lng":"140.380157"},
		{"id":"006","name":"Awa mountain","code":"2277,Awayama,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"b","lat":"36.51384","lng":"140.363836"},
		{"id":"010","name":"Awa mountain","code":"2277,Awayama,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"b","lat":"36.51384","lng":"140.363836"},
		{"id":"007","name":"Wooden bridge district road","code":"Wooden bridge district road","status":"1","group":"c","lat":"36.51625","lng":"140.257172"},
		{"id":"011","name":"Wooden bridge district road","code":"Wooden bridge district road","status":"0","group":"c","lat":"36.51625","lng":"140.257172"},
		{"id":"008","name":"Dam","code":"Shimofuruuchi,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"d","lat":"36.435543","lng":"140.35415"},
		{"id":"012","name":"Dam","code":"Shimofuruuchi,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"0","group":"d","lat":"36.435543","lng":"140.35415"},
		{"id":"013","name":"Community center","code":"Ishituka,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"003","name":"Town hall","code":"Ishituka,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"002","name":"Town hall","code":"Ishituka,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"004","name":"Town hall","code":"Ishituka,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"000","name":"Town hall","code":"Ishituka,Shirosato-machi Higashiibaraki-gun,Ibaraki","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
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
		{"id":"1","name":"Buildings Sendaigawa","code":"230,Kinu,Shimotuma-shi,Ibaraki","status":"0","group":"a","lat":"36.156536","lng":"139.963822"},
		{"id":"1a","name":"Buildings Sendaigawa","code":"230,Kinu,Shimotuma-shi,Ibaraki","status":"1","group":"a","lat":"36.156536","lng":"139.963822"},
		{"id":"2","name":"Kamaniwa road","code":"139-2,Kamaniwa,Shimotuma-shi,Ibaraki","status":"0","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"2a","name":"Kamaniwa road","code":"139-2,Kamaniwa,Shimotuma-shi,Ibaraki","status":"1","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"3","name":"Aqua station","code":"933-1,Makaizashi,Shimotuma-shi,Ibaraki","status":"0","group":"a","lat":"36.162548","lng":"139.956526"},
		{"id":"3a","name":"Aqua station","code":"933-1,Makaizashi,Shimotuma-shi,Ibaraki","status":"1","group":"a","lat":"36.162548","lng":"139.956526"},
		{"id":"7","name":"Kamaniwa road","code":"933-1,Makaizashi,Shimotuma-shi,Ibaraki","status":"0","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"7a","name":"Kamaniwa road","code":"933-1,Makaizashi,Shimotuma-shi,Ibaraki","status":"1","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"4","name":"Roadside station","code":"140,Kazusu,Shimotuma-shi,Ibaraki","status":"0","group":"b","lat":"36.217549","lng":"139.986180"},
		{"id":"4a","name":"Roadside station","code":"140,Kazusu,Shimotuma-shi,Ibaraki","status":"1","group":"b","lat":"36.217549","lng":"139.986180"},
		{"id":"5","name":"Friendship Park","code":"1650-1,Horigome,Shimotuma-shi,Ibaraki","status":"0","group":"c","lat":"36.192547","lng":"139.993154"},
		{"id":"5a","name":"Friendship Park","code":"1650-1,Horigome,Shimotuma-shi,Ibaraki","status":"1","group":"c","lat":"36.192547","lng":"139.993154"},
		{"id":"6","name":"Iwai Buildings","code":"724-1,Han'ya,Shimotuma-shi,Ibaraki","status":"0","group":"d","lat":"36.19911","lng":"139.948479"},
		{"id":"6a","name":"Iwai Buildings","code":"724-1,Han'ya,Shimotuma-shi,Ibaraki","status":"1","group":"d","lat":"36.19911","lng":"139.948479"},
		{"id":"8","name":"Yamajiri road","code":"47,Yamajiri,Shimotuma-shi,Ibaraki","status":"0","group":"e","lat":"36.179263","lng":"139.994249"},
		{"id":"8a","name":"Yamajiri road","code":"47,Yamajiri,Shimotuma-shi,Ibaraki","status":"1","group":"e","lat":"36.179263","lng":"139.994249"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	"takahagi":{
		"spots": [
		{"id":"1","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"2","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"3","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"4","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"5","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"6","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"7","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"8","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"9","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"10","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"11","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"12","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"13","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"14","name":"Otsuminato","code":"Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"15","name":"Isohara","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796182","lng":"140.755588"},
		{"id":"16","name":"Isohara","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796182","lng":"140.755588"},
		{"id":"17","name":"Isohara","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796182","lng":"140.755588"},
		{"id":"18","name":"Yu Tsukihama","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"19","name":"Yu Tsukihama","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"20","name":"Yu Tsukihama","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"21","name":"Yu Tsukihama","code":"200-3,Isoharacho Isohara,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"22","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"23","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"24","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"25","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"26","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"27","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"28","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"29","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"30","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"31","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"32","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"33","name":"Yu Tsukihama","code":"Isoharacho,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"34","name":"Nakago station","code":"Nakagocho,Kitaibaraki,Ibaraki","status":"1","group":"a","lat":"36.753146","lng":"140.729112"},
		{"id":"35","name":"Feng before beauty","code":"375,Nakagocho Ashiarai,Kitaibaraki-shi,Ibaraki","status":"1","group":"a","lat":"36.759675","lng":"140.736107"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"tikusei":{
		"spots": [
		{"id":"1","name":"Bill","code":"965,Otsu,Chikusei-shi,Ibaraki","status":"1","group":"a","lat":"36.301586","lng":"139.978348"},
		{"id":"1a","name":"Bill","code":"965,Otsu,Chikusei-shi,Ibaraki","status":"0","group":"a","lat":"36.301586","lng":"139.978348"},
		{"id":"2","name":"No. 357","code":"Kajiuchi,Chikusei-shi,Ibaraki","status":"1","group":"b","lat":"36.236312","lng":"139.976794"},
		{"id":"2a","name":"No. 357","code":"Kajiuchi,Chikusei-shi,Ibaraki","status":"0","group":"b","lat":"36.236312","lng":"139.976794"},
		{"id":"3","name":"Branch Sekijo","code":"1943-1,Sekimotoshimo,Chikusei-shi,Ibaraki","status":"1","group":"c","lat":"36.25187","lng":"139.926657"},
		{"id":"3a","name":"Branch Sekijo","code":"1943-1,Sekimotoshimo,Chikusei-shi,Ibaraki","status":"0","group":"c","lat":"36.25187","lng":"139.926657"},
		{"id":"5","name":"Civilian hospital","code":"1658,Tamado,Chikusei-shi,Ibaraki","status":"1","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"5a","name":"Civilian hospital","code":"1658,Tamado,Chikusei-shi,Ibaraki","status":"0","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"6","name":"Civilian hospital","code":"1658,Tamado,Chikusei-shi,Ibaraki","status":"1","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"7","name":"Civilian hospital","code":"1658,Tamado,Chikusei-shi,Ibaraki","status":"1","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"8","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"1","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"8a","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"0","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"9","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"1","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"9a","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"0","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"10","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"1","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"10a","name":"Akeno library","code":"2120-7,Ebigashima,Chikusei-sji,Ibaraki","status":"0","group":"e","lat":"36.249171","lng":"140.028903"}
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
		{"id":"3","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"a","lat":"36.084679","lng":"140.198553"},
		{"id":"7","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"a","lat":"36.084679","lng":"140.198553"},
		{"id":"11","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"b","lat":"36.084679","lng":"140.198553"},
		{"id":"1","name":"First Municipal Junior High School Tsuchiura, Tsuchiura","code":"3-8,Bunkyocho,Tsuchiura-shi,Ibaraki","status":"1","group":"a","lat":"36.084584","lng":"140.194"},
		{"id":"2","name":"Husband swamp park","code":"2,Ottominami,Tsuchiura-shi,Ibaraki","status":"1","group":"a","lat":"36.031438","lng":"140.147539"},
		{"id":"4","name":"National Highway No. 125","code":"1,Sakuramachi,Tsuchiura-shi,Ibaraki","status":"1","group":"a","lat":"36.07719","lng":"140.203308"},
		{"id":"5","name":"Kashima Shrine","code":"4-3-6,Manabe,Tsuchiurashi,Ibaraki","status":"1","group":"a","lat":"36.096992","lng":"140.203052"},
		{"id":"6","name":"Suigo gymnasium","code":"1651,Oiwata,Tsuchiura-shi,Ibaraki","status":"1","group":"a","lat":"36.054942","lng":"140.208895"},
		{"id":"8","name":"Tsuchiurasen","code":"Fujisawa,Tsuchiura-shi,Ibaraki","status":"1","group":"a","lat":"36.125981","lng":"140.153576"},
		{"id":"9","name":"Kashima Shrine","code":"4-3-6,Manabe,Tsuchiurashi,Ibaraki","status":"1","group":"b","lat":"36.096992","lng":"140.203052"},
		{"id":"10","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"12","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"13","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"14","name":"Kameshiro park","code":"1-13-48,Chuo,Tsuchiura-shi,Ibaraki","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"15","name":"Tsuchiurasen","code":"Fujisawa,Tsuchiura-shi,Ibaraki","status":"1","group":"b","lat":"36.125981","lng":"140.153576"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	
	
	"sakuragawa":{
		"spots": [
		{"id":"008","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"1","group":"a","lat":"36.277221","lng":"140.099141"},
		{"id":"017","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"0","group":"a","lat":"36.277221","lng":"140.099141"},
		{"id":"013","name":"Building","code":"232,Mkabe,Sakuragawa-shi,Ibaraki","status":"1","group":"a","lat":"36.278049","lng":"140.097841"},
		{"id":"016","name":"Building","code":"232,Mkabe,Sakuragawa-shi,Ibaraki","status":"0","group":"a","lat":"36.278049","lng":"140.097841"},
		{"id":"015","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"1","group":"a","lat":"36.277142","lng":"140.099092"},
		{"id":"020","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"0","group":"a","lat":"36.277142","lng":"140.099092"},
		{"id":"009","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"1","group":"a","lat":"36.276721","lng":"140.100301"},
		{"id":"019","name":"Historic building","code":"213-1,Mkabe,Sakuragawa-shi,Ibaraki","status":"0","group":"a","lat":"36.276721","lng":"140.100301"},
		{"id":"011","name":"City road","code":"Tkamori,Sakuragawa-shi,Ibaraki","status":"1","group":"a","lat":"36.298","lng":"140.073655"},
		{"id":"000","name":"City road","code":"Tkamori,Sakuragawa-shi,Ibaraki","status":"0","group":"a","lat":"36.298","lng":"140.073655"},
		{"id":"007","name":"Yamato Station","code":"Tkamori,Sakuragawa-shi,Ibaraki","status":"1","group":"b","lat":"36.345476","lng":"140.073385"},
		{"id":"001","name":"Yamato Station","code":"Tkamori,Sakuragawa-shi,Ibaraki","status":"0","group":"b","lat":"36.345476","lng":"140.073385"},
		{"id":"014","name":"Takamori district","code":"717,Tkamori,SakuraGawa-shi,Ibaraki","status":"1","group":"b","lat":"36.343547","lng":"140.074486"},
		{"id":"002","name":"Takamori district","code":"717,Tkamori,SakuraGawa-shi,Ibaraki","status":"0","group":"b","lat":"36.343547","lng":"140.074486"},
		{"id":"012","name":"Sakuragawa Park","code":"667,Isobe,Sakuragawa-shi,Ibaraki","status":"1","group":"c","lat":"36.366191","lng":"140.137907"},
		{"id":"003","name":"Sakuragawa Park","code":"667,Isobe,Sakuragawa-shi,Ibaraki","status":"0","group":"c","lat":"36.366191","lng":"140.137907"},
		{"id":"006","name":"Residential district Nishikobanawa","code":"683,Nishikobanawa,Sakuragawa-shi,Ibaraki","status":"1","group":"d","lat":"36.359172","lng":"140.153317"},
		{"id":"004","name":"Residential district Nishikobanawa","code":"683,Nishikobanawa,Sakuragawa-shi,Ibaraki","status":"0","group":"d","lat":"36.359172","lng":"140.153317"},
		{"id":"005","name":"Residential district Nishikobanawa","code":"683,Nishikobanawa,Sakuragawa-shi,Ibaraki","status":"1","group":"d","lat":"36.359172","lng":"140.153317"},
		{"id":"010","name":"Residential district Nishikobanawa","code":"683,Nishikobanawa,Sakuragawa-shi,Ibaraki","status":"0","group":"d","lat":"36.359172","lng":"140.153317"}
		],	
		"data":[
			{"donor":"Individual shooting"},
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"disney":{
		"spots": [
		{"id":"3","name":"Walt Disney exhibition 3","code":"","status":"0","group":"a"},
		{"id":"4","name":"Walt Disney exhibition 4","code":"","status":"0","group":"a"},
		{"id":"5","name":"Walt Disney exhibition 5","code":"","status":"0","group":"a"},
		{"id":"6","name":"Walt Disney exhibition 6","code":"","status":"0","group":"a"},
		{"id":"7","name":"Walt Disney exhibition 7","code":"","status":"0","group":"a"},
		{"id":"8","name":"Walt Disney exhibition 8","code":"","status":"0","group":"a"},
		{"id":"9","name":"Walt Disney exhibition 9","code":"","status":"0","group":"a"},
		{"id":"10","name":"Walt Disney exhibition 10","code":"","status":"0","group":"a"},
		{"id":"11","name":"Walt Disney exhibition 11","code":"","status":"0","group":"a"},
		{"id":"12","name":"Walt Disney exhibition 12","code":"","status":"0","group":"a"},
		{"id":"13","name":"Walt Disney exhibition 13","code":"","status":"0","group":"a"},
		{"id":"14","name":"Walt Disney exhibition 14","code":"","status":"0","group":"a"},
		{"id":"15","name":"Walt Disney exhibition 15","code":"","status":"0","group":"a"},
		{"id":"16","name":"Walt Disney exhibition 16","code":"","status":"0","group":"a"},
		{"id":"17","name":"Walt Disney exhibition 17","code":"","status":"0","group":"a"},
		{"id":"18","name":"Walt Disney exhibition 18","code":"","status":"0","group":"a"},
		{"id":"19","name":"Walt Disney exhibition 19","code":"","status":"0","group":"a"},
		{"id":"20","name":"Walt Disney exhibition 20","code":"","status":"0","group":"a"},
		{"id":"21","name":"Walt Disney exhibition 21","code":"","status":"0","group":"a"},
		{"id":"22","name":"Walt Disney exhibition 22","code":"","status":"0","group":"a"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"minamisanriku":{
		"spots": [
		{"id":"1","name":"minamisanriku1","code":"minamisanriku1","status":"1","group":"a"},
		{"id":"2","name":"minamisanriku2","code":"minamisanriku2","status":"1","group":"a"},
		{"id":"3","name":"minamisanriku3","code":"minamisanriku3","status":"1","group":"a"},
		{"id":"4","name":"minamisanriku4","code":"minamisanriku4","status":"1","group":"a"},
		{"id":"5","name":"minamisanriku5","code":"minamisanriku5","status":"1","group":"a"},
		{"id":"6","name":"minamisanriku6","code":"minamisanriku6","status":"1","group":"a"},
		{"id":"7","name":"minamisanriku7","code":"minamisanriku7","status":"1","group":"a"},
		{"id":"8","name":"minamisanriku8","code":"minamisanriku8","status":"1","group":"a"},
		{"id":"9","name":"minamisanriku9","code":"minamisanriku9","status":"1","group":"a"},
		{"id":"10","name":"minamisanriku10","code":"minamisanriku10","status":"1","group":"a"},
		{"id":"11","name":"minamisanriku11","code":"minamisanriku11","status":"1","group":"a"},
		{"id":"12","name":"minamisanriku12","code":"minamisanriku12","status":"1","group":"a"},
		{"id":"13","name":"minamisanriku13","code":"minamisanriku13","status":"1","group":"a"},
		{"id":"14","name":"minamisanriku14","code":"minamisanriku14","status":"1","group":"a"},
		{"id":"15","name":"minamisanriku11","code":"minamisanriku11","status":"1","group":"a"},
		{"id":"16","name":"minamisanriku12","code":"minamisanriku12","status":"1","group":"a"},
		{"id":"17","name":"minamisanriku13","code":"minamisanriku13","status":"1","group":"a"},
		{"id":"18","name":"minamisanriku14","code":"minamisanriku14","status":"1","group":"a"},
		{"id":"19","name":"minamisanriku11","code":"minamisanriku11","status":"1","group":"a"},
		{"id":"20","name":"minamisanriku12","code":"minamisanriku12","status":"1","group":"a"},
		{"id":"21","name":"minamisanriku13","code":"minamisanriku13","status":"1","group":"a"},
		{"id":"22","name":"minamisanriku14","code":"minamisanriku14","status":"1","group":"a"},
		{"id":"23","name":"minamisanriku10","code":"minamisanriku10","status":"1","group":"a"},
		{"id":"24","name":"minamisanriku11","code":"minamisanriku11","status":"1","group":"a"},
		{"id":"25","name":"minamisanriku12","code":"minamisanriku12","status":"1","group":"a"},
		{"id":"26","name":"minamisanriku13","code":"minamisanriku13","status":"1","group":"a"},
		{"id":"27","name":"minamisanriku14","code":"minamisanriku14","status":"1","group":"a"},
		{"id":"28","name":"minamisanriku11","code":"minamisanriku11","status":"1","group":"a"},
		{"id":"29","name":"minamisanriku12","code":"minamisanriku12","status":"1","group":"a"},
		{"id":"30","name":"minamisanriku13","code":"minamisanriku13","status":"1","group":"a"},
		{"id":"31","name":"minamisanriku14","code":"minamisanriku14","status":"1","group":"a"},
		{"id":"32","name":"minamisanriku11","code":"minamisanriku11","status":"1","group":"a"},
		{"id":"33","name":"minamisanriku12","code":"minamisanriku12","status":"1","group":"a"},
		{"id":"34","name":"minamisanriku13","code":"minamisanriku13","status":"1","group":"a"},
		{"id":"35","name":"minamisanriku14","code":"minamisanriku14","status":"1","group":"a"},
		{"id":"36","name":"minamisanriku10","code":"minamisanriku10","status":"1","group":"a"},
		{"id":"37","name":"minamisanriku11","code":"minamisanriku11","status":"1","group":"a"},
		{"id":"38","name":"minamisanriku12","code":"minamisanriku12","status":"1","group":"a"},
		{"id":"39","name":"minamisanriku13","code":"minamisanriku13","status":"1","group":"a"},
		{"id":"40","name":"minamisanriku14","code":"minamisanriku14","status":"1","group":"a"},
		{"id":"41","name":"minamisanriku11","code":"minamisanriku11","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"Yokoyama Electric Works"}
		],
		"comment":"ここにテキスト"
	},
	
	"sendai":{
		"spots": [
		{"id":"1","name":"sendai1","code":"sendai1","status":"1","group":"b"},
		{"id":"2","name":"sendai2","code":"sendai2","status":"1","group":"b"},
		{"id":"3","name":"sendai3","code":"sendai3","status":"1","group":"b"},
		{"id":"4","name":"sendai4","code":"sendai4","status":"1","group":"b"},
		{"id":"5","name":"sendai5","code":"sendai5","status":"1","group":"b"},
		{"id":"6","name":"sendai6","code":"sendai6","status":"1","group":"b"},
		{"id":"7","name":"sendai7","code":"sendai7","status":"1","group":"b"},
		{"id":"8","name":"sendai8","code":"sendai8","status":"1","group":"b"},
		{"id":"9","name":"sendai9","code":"sendai9","status":"1","group":"b"},
		{"id":"10","name":"sendai10","code":"sendai10","status":"1","group":"b"},
		{"id":"11","name":"sendai11","code":"sendai11","status":"1","group":"b"},
		{"id":"12","name":"sendai12","code":"sendai12","status":"1","group":"b"},
		{"id":"13","name":"sendai13","code":"sendai13","status":"1","group":"b"},
		{"id":"14","name":"sendai14","code":"sendai14","status":"1","group":"b"},
		{"id":"15","name":"sendai11","code":"sendai11","status":"1","group":"b"},
		{"id":"16","name":"sendai12","code":"sendai12","status":"1","group":"b"},
		{"id":"17","name":"sendai13","code":"sendai13","status":"1","group":"b"},
		{"id":"18","name":"sendai14","code":"sendai14","status":"1","group":"b"},
		{"id":"19","name":"sendai11","code":"sendai11","status":"1","group":"b"},
		{"id":"20","name":"sendai12","code":"sendai12","status":"1","group":"b"},
		{"id":"21","name":"sendai13","code":"sendai13","status":"1","group":"b"},
		{"id":"22","name":"sendai14","code":"sendai14","status":"1","group":"b"},
		{"id":"23","name":"sendai10","code":"sendai10","status":"1","group":"b"},
		{"id":"24","name":"sendai11","code":"sendai11","status":"1","group":"b"},
		{"id":"25","name":"sendai12","code":"sendai12","status":"1","group":"b"},
		{"id":"26","name":"sendai13","code":"sendai13","status":"1","group":"b"}
		],	
		"data":[
			{"donor":"Yokoyama Electric Works"}
		],
		"comment":"ここにテキスト"
	},
	
	"kesennuma":{
		"spots": [
		{"id":"1","name":"kesennuma1","code":"kesennuma1","status":"1","group":"c"},
		{"id":"2","name":"kesennuma2","code":"kesennuma2","status":"1","group":"c"},
		{"id":"3","name":"kesennuma3","code":"kesennuma3","status":"1","group":"c"},
		{"id":"4","name":"kesennuma4","code":"kesennuma4","status":"1","group":"c"},
		{"id":"5","name":"kesennuma5","code":"kesennuma5","status":"1","group":"c"},
		{"id":"6","name":"kesennuma6","code":"kesennuma6","status":"1","group":"c"},
		{"id":"7","name":"kesennuma7","code":"kesennuma7","status":"1","group":"c"},
		{"id":"8","name":"kesennuma8","code":"kesennuma8","status":"1","group":"c"},
		{"id":"9","name":"kesennuma9","code":"kesennuma9","status":"1","group":"c"},
		{"id":"10","name":"kesennuma10","code":"kesennuma10","status":"1","group":"c"},
		{"id":"11","name":"kesennuma11","code":"kesennuma11","status":"1","group":"c"},
		{"id":"12","name":"kesennuma12","code":"kesennuma12","status":"1","group":"c"},
		{"id":"13","name":"kesennuma13","code":"kesennuma13","status":"1","group":"c"},
		{"id":"14","name":"kesennuma14","code":"kesennuma14","status":"1","group":"c"},
		{"id":"15","name":"kesennuma10","code":"kesennuma10","status":"1","group":"c"},
		{"id":"16","name":"kesennuma11","code":"kesennuma11","status":"1","group":"c"},
		{"id":"17","name":"kesennuma12","code":"kesennuma12","status":"1","group":"c"},
		{"id":"18","name":"kesennuma13","code":"kesennuma13","status":"1","group":"c"},
		{"id":"19","name":"kesennuma14","code":"kesennuma14","status":"1","group":"c"},
		{"id":"20","name":"kesennuma10","code":"kesennuma10","status":"1","group":"c"},
		{"id":"21","name":"kesennuma11","code":"kesennuma11","status":"1","group":"c"}
		],	
		"data":[
			{"donor":"Yokoyama Electric Works"}
		],
		"comment":"ここにテキスト"
	}
	
};

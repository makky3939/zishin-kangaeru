/*----------------------------------------------------------------------------

		Photo.js	
	
	Copyright (C) 2012 抧恔偵偮偄偰峫偊傞僒僀僩 All Rights Reserved.	by Makky
------------------------------------------------------------------------------*/


function GetFileName(file_url){

	file_url = file_url.substring(file_url.lastIndexOf("/")+1,file_url.length);
	file_url = file_url.substring(0,file_url.indexOf("."));
	
	if(file_url.search("en_") != -1){file_url = file_url.slice(3);}
	if(file_url.search("photo_") != -1){file_url = file_url.slice(6);}
	return file_url;
}

/*
search:key傪尦偵json.list忋偱偺斣抧傪専嶕
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
writehead:Header忣曬傪弌椡
---------------------------------------*/

function writehead(){
	/*document.write('<h1>'+json.list[keyNumber].jname+'</h1>');
	document.write('<div class="left">夋憸採嫙丗寁'+eval("json."+key+".spots.length")+'枃<br>');
	for(var i=0; i<eval("json."+key+".data.length");i++){
		document.write('<li>'+eval("json."+key+".data[i].donor")+'</li>');
	}
	if( json.list[keyNumber].by != 'none'){
	document.write('<br><div class="face">庢嵽幰偺姶憐丗('+json.list[keyNumber].byj+')<table><tr>');
	document.write('<td><img src="img/face/'+json.list[keyNumber].by+'.jpg" width="120" height="170" ></td><td>');
	document.write('<p>'+eval("json."+key+".comment")+'</p>');
	document.write('</td></tr></table></div>');
	}else{
	document.write('<br><br><br><p>偙偺抧嬫偺恔嵭忬嫷偱偡偑丄抧尦偺曽乆偵摉帪偺帠側偳暦偒傑偟偨偑丆傗偼傝丄奨偺恖乆偼嬃偔傎偳嬯楯<br>偝傟偨傛偆偱偡丅偙偺抧嬫傕丆巹払偑峫偊偰偄偨埲忋偵抧恔偺旐奞偼戝偒偔丆嵞敪偟偨偲偒偵椻惷偵峴摦偱偒傞傛<br>偆怱妡偗傞傋偒偩偲巚偄傑偟偨丅</p>');
	}
	document.write('</div><div class="right"><img src="img/photo/'+json.list[keyNumber].name+'/'+json.list[keyNumber].name+'.jpg"/></div>');
	document.write('<br><br>');
	$("title").text(json.list[keyNumber].jname + "-Photo:恔嵭偵偮偄偰峫偊傞僒僀僩");*/
	
	document.write('<h2>'+json.list[keyNumber].jname+'</h2>');
	document.write('<div class="left">夋憸採嫙丗寁'+eval("json."+key+".spots.length")+'枃<br>');
	for(var i=0; i<eval("json."+key+".data.length");i++){
		document.write('<li>'+eval("json."+key+".data[i].donor")+'</li>');
	}
	if( json.list[keyNumber].by != 'none'){
	document.write('<br><div class="face">庢嵽幰偺姶憐丗('+json.list[keyNumber].byj+')<table><tr>');
	document.write('<td width="200" height="200"><img class="face" src="img/face/'+json.list[keyNumber].by+'.jpg" width="200" height="200" ></td>');
	document.write('<td><p>'+eval("json."+key+".comment")+'</p>');
	document.write('</td></tr></table></div>');
	}else{
	document.write('<br><br><br><p>偙偺抧嬫偺恔嵭忬嫷偱偡偑丄抧尦偺曽乆偵摉帪偺帠側偳暦偒傑偟偨偑丆傗偼傝丄奨偺恖乆偼嬃偔傎偳嬯楯<br>偝傟偨傛偆偱偡丅偙偺抧嬫傕丆巹払偑峫偊偰偄偨埲忋偵抧恔偺旐奞偼戝偒偔丆嵞敪偟偨偲偒偵椻惷偵峴摦偱偒傞傛<br>偆怱妡偗傞傋偒偩偲巚偄傑偟偨丅</p>');
	}
	//document.write('<div class="right"><img src="img/photo/'+json.list[keyNumber].name+'/'+json.list[keyNumber].name+'.jpg"/></div>');

		
		document.write('</div>');
	$("title").text(json.list[keyNumber].jname + "-偺旐奞忬嫷 | 抧恔偵偮偄偰峫偊傞僒僀僩");
}

/*
writeImggrid:夋憸Grid傪弌椡
---------------------------------------*/

function writeImggrid(){
	var status;
	/*for(var j=1; j<=eval("json."+key+".spots.length"); j++){
		var spot = eval("json."+key+".spots[j-1]");
			if(spot.status == 1){
				status = '恔嵭摉帪';
			}else{
				status = '尰嵼';
			}
	document.write('<a class="fancy" data-fancybox-type="image" data-fancybox-group="'+spot.group+'" href="img/photo/'+json.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'丂'+spot.name+' '+status+'偺條巕">');
	document.write('<div class="photgrid">');
	document.write('<div class="cap">');
	document.write('<img src="img/photo/'+json.list[keyNumber].name+'/' + spot.id + '.jpg" width="239" height="210"/>');
	document.write('<span class="status'+spot.status+'">'+status+'</span>');
	document.write('</div><p>'+spot.name+'</p>');
	document.write('</div></a>');
	}*/
	document.write('<div class="point">\
		<table>\
			<tr><td><img src="img/marker/blue-dot.png">or丂<span class="status0">尰嵼</span></td><td>偙偺売強偼丄尰嵼(2012擭7寧-11寧傑偱偵嶣塭)偺夋憸偑宖嵹偝傟偰偄傑偡丅</td></tr>\
			<tr><td><img src="img/marker/red-dot.png">or丂<span class="status1">恔嵭摉帪</span></td><td>偙偺売強偼丄恔嵭捈屻偺夋憸偑宖嵹偝傟偰偄傑偡丅</td></tr>\
		</table>\
	</div>');
	for(var j=1; j<=eval("json."+key+".spots.length"); j++){
		var spot = eval("json."+key+".spots[j-1]");
			if(spot.status == 1){
				status = '恔嵭摉帪';
			}else{
				status = '尰嵼';
			}
	document.write('<a class="fancy" data-fancybox-type="image" data-fancybox-group="'+spot.group+'" href="img/photo/'+json.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'丂'+spot.name+' '+status+'偺條巕">');
	document.write('<div class="four columns photocolumns ">');
	document.write('<div class=" cap">');
	document.write('<img src="img/photo/'+json.list[keyNumber].name+'/' + spot.id + '.jpg" height="90%"/>');
	//document.write('');
	document.write('<span class="status'+spot.status+'">'+status+'</span><p>'+spot.name+'</p></div>');
	document.write('</div></a>');
	}
}

/*
writelist:巗挰懞儕僗僩傪弌椡
---------------------------------------*/

function writelist(){
	var count_img = 0;
	for(var i=4; i<json.list.length; i++){
		if(json.list[i].name == 'ami'){
		document.write('</div><div class="twelve columns panel row">偦偺懠偺夋憸<br>');
		}
		document.write('<a href="photo_'+json.list[i].name+'.html"><div class="four columns photo">');
		document.write('<h3  id="'+json.list[i].name+'">'+json.list[i].jname+'</h3><div>丂');
		if(i <  24 ){
		document.write('庢嵽幰丗'+json.list[i].byj+'丂');
		}
		document.write('夋憸丗'+eval("json."+json.list[i].name+".spots.length")+'枃</div>');
		document.write('</div>');
		document.write('</a>');
		count_img = count_img + eval("json."+json.list[i].name+".spots.length");
	}
	document.getElementById('imgcounter').innerHTML= '夋憸憤悢丗'+count_img+'枃';
	document.getElementById('imgcontent').innerHTML= '庢嵽抧堟丗'+json.list.length+'売強';
}

/*
		document.write('<a href="photo_'+json.list[i].name+'.html"><div class="listgrid"><div class="cap">');
		document.write('<img src="img/photo/'+json.list[i].name+'/'+eval("json."+json.list[i].name+".spots[0].id")+'.jpg" width="490" height="380" class="imgcap"><br>');	
		document.write('<h1>'+json.list[i].jname+'</h1><br>');
		document.write('<div>庢嵽幰丗'+json.list[i].byj+'丂');
		document.write('夋憸丗'+eval("json."+json.list[i].name+".spots.length")+'枃</div><br>');
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
	var ContentStr = '偙偙偼<a href="photo_'+json.list[num].name+'.html">'+json.list[num].jname+'</a>偱偡';
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
	
	var ContentStr = '<a class="fancy" href="img/photo/'+json.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'丂'+spot.name+' '+status+'偺條巕"  data-fancybox-type="image" data-fancybox-group="1">'+spot.name+'</a>';
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


/*--------------------夋憸帒椏DataBase---------------------------------------------
var json = 
{
	"list":
		[
		{"jname":"巗挰懞柤","name":"巗挰懞柤","by":"扴摉幰柤","byj":"扴摉幰柤"},
		{"jname":"巗挰懞柤","name":"巗挰懞柤","by":"扴摉幰柤","byj":"扴摉幰柤"}
		],
	"巗挰懞柤":{
		"spots": [
			{"id":"1","name":"柤慜","code":"廧強","status":"1","group":"a"},
			{"id":"2","name":"柤慜","code":"廧強","status":"0","group":"b"}
		],	
		"data":[
			{"donor":"採嫙幰"},
			{"donor":"採嫙幰"}
		],
		"comment":"僥僉僗僩"
	}
};
--------------------------------------------------------------------------------*/


var json = 
{
	"list":
		[
		{"jname":"僂僅儖僩僨傿僯乕揥","name":"disney","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"撿嶰棨挰","name":"minamisanriku","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"婥愬徖巗","name":"kesennuma","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"愬戜巗","name":"sendai","by":"3_kobayashi","byj":"Masaki.K."},
		
		{"jname":"堫晘巗","name":"inasiki","by":"1_kamihara","byj":"Takumi.K.","lat":"35.956568","lng":"140.323918"},
		{"jname":"堬忛挰","name":"ibarakimati","by":"2_suzuki","byj":"Yumi.S.","lat":"36.287456","lng":"140.424585"},
		{"jname":"戝愻挰","name":"oarai","by":"3_kobayashi","byj":"Masaki.K.","lat":"36.313186","lng":"140.575021"},
		{"jname":"妢娫巗","name":"kasama","by":"2_suzuki","byj":"Yumi.S.","lat":"36.354398","lng":"140.30365"},
		{"jname":"偐偡傒偑偆傜巗","name":"kasumigaura","by":"2_suzuki","byj":"Yumi.S.","lat":"36.158944","lng":"140.237045"},
		{"jname":"杒堬忛巗","name":"kitaibaraki","by":"1_minami","byj":"Kaori.M.","lat":"36.801867","lng":"140.751048"},
		{"jname":"嶗愳巗","name":"sakuragawa","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.327296","lng":"140.090397"},
		{"jname":"壓嵢巗","name":"simotuma","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.191646","lng":"139.967485"},
		{"jname":"忢憤巗","name":"jyoso","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.032998","lng":"139.99799"},
		{"jname":"忛棦挰","name":"shirosato","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.479293","lng":"140.376195"},
		{"jname":"崅攱巗","name":"takahagi","by":"1_minami","byj":"Kaori.M.","lat":"36.713747","lng":"140.709546"},
		{"jname":"拀惣巗","name":"tikusei","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.320658","lng":"139.98151"},
		{"jname":"搚塝巗","name":"tutiura","by":"1_kamihara","byj":"Takumi.K.","lat":"36.071827","lng":"140.195968"},
		{"jname":"嶁搶巗","name":"bandou","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.057981","lng":"139.886753"},
		{"jname":"擔棫巗","name":"hitati","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.598992","lng":"140.65226"},
		{"jname":"忢棨懢揷巗","name":"hitachioota","by":"1_minami","byj":"Kaori.M.","lat":"36.538295","lng":"140.530951"},
		{"jname":"忢棨戝媨巗","name":"hitatioomiya","by":"1_minami","byj":"Kaori.M.","lat":"36.542555","lng":"140.410968"},
		{"jname":"傂偨偪側偐巗","name":"hitachinaka","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.396553","lng":"140.534607"},
		{"jname":"杇揷巗","name":"hokota","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.158606","lng":"140.516547"},
		{"jname":"悈屗巗","name":"mito","by":"2_suzuki","byj":"Yumi.S.","lat":"36.365837","lng":"140.471191"},

		{"jname":"垻尒挰","name":"ami","by":"none","byj":"none","lat":"36.037995","lng":"140.214334"},
		{"jname":"幁搱巗","name":"kasima","by":"none","byj":"none","lat":"35.979117","lng":"140.644123"},
		{"jname":"壨撪挰","name":"kawauti","by":"none","byj":"none","lat":"35.896281","lng":"140.243809"},
		{"jname":"偮偔偽傒傜偄巗","name":"tukubamirai","by":"none","byj":"none","lat":"35.967448","lng":"140.035463"},
		{"jname":"峴曽巗","name":"namegata","by":"none","byj":"none","lat":"35.994119","lng":"140.491001"},
		{"jname":"庣扟巗","name":"moriya","by":"none","byj":"none","lat":"35.951052","lng":"139.975725"}
		],


	"oarai":{
		"spots": [
			{"id":"9","name":"戝愻挰 峲嬻幨恀","code":"戝愻挰 峲嬻幨恀","status":"1","group":"0","lat":"36.305753","lng":"140.574311"},
			{"id":"5","name":"僼僃儕乕僞乕儈僫儖晅嬤","code":"堬忛導搶堬忛孲戝愻挰峘拞墰2","status":"1","group":"0","lat":"36.309558","lng":"140.574439"},
			{"id":"6","name":"戝愻儅儕儞僞儚乕","code":"堬忛導搶堬忛孲戝愻挰峘拞墰10斣抧","status":"1","group":"a","lat":"36.310284","lng":"140.572551"},
			{"id":"3","name":"戝愻儅儕儞僞儚乕","code":"堬忛導搶堬忛孲戝愻挰峘拞墰10斣抧","status":"1","group":"a","lat":"36.303194","lng":"140.567315"},
			{"id":"38","name":"戝愻儅儕儞僞儚乕","code":"堬忛導搶堬忛孲戝愻挰峘拞墰10斣抧","status":"0","group":"a","lat":"36.310491","lng":"140.570191"},
			{"id":"29","name":"奀栧嫶","code":"丂傂偨偪側偐巗奀栧挰-戝愻挰堥昹挰丂楬慄丂導摴108崋","status":"0","group":"b","lat":"36.335041","lng":"140.59152"},
			{"id":"30","name":"奀栧嫶","code":"丂傂偨偪側偐巗奀栧挰-戝愻挰堥昹挰丂楬慄丂導摴108崋","status":"0","group":"b","lat":"36.335248","lng":"140.591734"},
			{"id":"31","name":"奀栧嫶","code":"丂傂偨偪側偐巗奀栧挰-戝愻挰堥昹挰丂楬慄丂導摴108崋","status":"0","group":"b","lat":"36.335283","lng":"140.592077"},
			{"id":"32","name":"奀栧嫶","code":"丂傂偨偪側偐巗奀栧挰-戝愻挰堥昹挰丂楬慄丂導摴108崋","status":"0","group":"b","lat":"36.334937","lng":"140.592243"},
			{"id":"33","name":"奀栧嫶","code":"丂傂偨偪側偐巗奀栧挰-戝愻挰堥昹挰丂楬慄丂導摴108崋","status":"0","group":"b","lat":"36.334755","lng":"140.592748"},
			{"id":"34","name":"奀栧嫶","code":"丂傂偨偪側偐巗奀栧挰-戝愻挰堥昹挰丂楬慄丂導摴108崋","status":"0","group":"b","lat":"36.334712","lng":"140.591589"},
			
			{"id":"4","name":"戝愻挰栶応","code":"堬忛導搶堬忛孲戝愻挰堥昹挰 6881-275","status":"1","group":"c","lat":"36.313353","lng":"140.575178"},
			{"id":"7","name":"戝愻挰栶応","code":"堬忛導搶堬忛孲戝愻挰堥昹挰 6881-275","status":"1","group":"c","lat":"36.313292","lng":"140.57481"},
			
			{"id":"8","name":"戝愻挰栶応","code":"堬忛導搶堬忛孲戝愻挰堥昹挰 6881-275","status":"1","group":"c","lat":"36.313282","lng":"140.575105"},
			{"id":"35","name":"戝愻挰栶応","code":"堬忛導搶堬忛孲戝愻挰堥昹挰 6881-275","status":"0","group":"c","lat":"36.313416","lng":"140.57525"},
			
			{"id":"36","name":"戝愻挰栶応","code":"堬忛導搶堬忛孲戝愻挰堥昹挰 6881-275","status":"0","group":"c","lat":"36.31329","lng":"140.575263"},
			{"id":"37","name":"戝愻挰栶応","code":"堬忛導搶堬忛孲戝愻挰堥昹挰 6881-275","status":"0","group":"c","lat":"36.313264","lng":"140.575242"},
			
			{"id":"2","name":"暥壔僙儞僞乕","code":"戝愻挰堥昹挰6881-88","status":"1","group":"d","lat":"36.312776","lng":"140.575076"},
			{"id":"10","name":"嫏峘偺條巕","code":"戝愻挰嫏峘","status":"1","group":"e","lat":"36.309886","lng":"140.581075"},
			
			{"id":"11","name":"嫏峘偺條巕","code":"戝愻挰嫏峘","status":"1","group":"e","lat":"36.310336","lng":"140.581064"},
			{"id":"12","name":"嫏峘偺條巕","code":"戝愻挰嫏峘","status":"1","group":"e","lat":"36.310906","lng":"140.581268"},
			
			{"id":"13","name":"嫏峘偺條巕","code":"戝愻挰嫏峘","status":"1","group":"e","lat":"36.310967","lng":"140.580431"},
			{"id":"20","name":"嫏峘偺條巕","code":"戝愻挰嫏峘","status":"0","group":"e","lat":"36.309272","lng":"140.584744"},
			
			{"id":"21","name":"嫏峘偺條巕","code":"戝愻挰嫏峘","status":"0","group":"e","lat":"36.309359","lng":"140.584905"},
			{"id":"22","name":"嫏峘偺條巕","code":"戝愻挰嫏峘","status":"0","group":"e","lat":"36.309549","lng":"140.584722"},
			
			{"id":"23","name":"嫏峘偺條巕","code":"戝愻挰嫏峘","status":"0","group":"e","lat":"36.309143","lng":"140.584175"},
			{"id":"24","name":"嫏峘偺條巕","code":"戝愻挰嫏峘","status":"0","group":"e","lat":"36.31012","lng":"140.584701"},
			{"id":"18","name":"嫏峘偺條巕","code":"戝愻挰嫏峘","status":"0","group":"e","lat":"36.310733","lng":"140.582995"},
			
			{"id":"40","name":"戝愻傢偔傢偔壢妛娰 ","code":"堬忛導搶堬忛孲戝愻挰峘拞墰侾俀斣抧","status":"0","group":"f","lat":"36.309558","lng":"140.574439"},
			{"id":"41","name":"戝愻傢偔傢偔壢妛娰 ","code":"堬忛導搶堬忛孲戝愻挰峘拞墰侾俀斣抧","status":"0","group":"f","lat":"36.309558","lng":"140.574439"},
			
			{"id":"16","name":"嫑巗応","code":"戝愻挰嫑巗応撪","status":"1","group":"g","lat":"36.310863","lng":"140.581997"},
			{"id":"19","name":"嫑巗応","code":"戝愻挰嫑巗応撪","status":"0","group":"g","lat":"36.310768","lng":"140.581836"},
			
			{"id":"14","name":"戝愻儕僝乕僩傾僂僩儗僢僩","code":"堬忛導搶堬忛孲戝愻挰峘拞墰侾侾-俀","status":"1","group":"h","lat":"36.310612","lng":"140.569498"},
			{"id":"15","name":"戝愻儕僝乕僩傾僂僩儗僢僩","code":"堬忛導搶堬忛孲戝愻挰峘拞墰侾侾-俀","status":"1","group":"h","lat":"36.30935","lng":"140.56879"},
			{"id":"17","name":"戝愻儕僝乕僩傾僂僩儗僢僩","code":"堬忛導搶堬忛孲戝愻挰峘拞墰侾侾-俀","status":"1","group":"h","lat":"36.308304","lng":"140.567406"},
			
			{"id":"27","name":"僙僽儞僀儗僽儞戝愻奀娸揦","code":"堬忛導搶堬忛孲戝愻挰堥昹挰俉俀俆俁-俁俋","status":"0","group":"i","lat":"36.311529","lng":"140.584776"},
			{"id":"44","name":"僙僽儞僀儗僽儞戝愻奀娸揦","code":"堬忛導搶堬忛孲戝愻挰堥昹挰俉俀俆俁-俁俋","status":"1","group":"i","lat":"36.311511","lng":"140.584604"},
			
			{"id":"1","name":"導摴2崋慄増偄偺條巕","code":"導摴2崋慄増偄","status":"1","group":"j","lat":"36.311805","lng":"140.585559"},
			{"id":"25","name":"導摴2崋慄増偄偺條巕","code":"導摴2崋慄増偄","status":"0","group":"j","lat":"36.312566","lng":"140.586257"},
			{"id":"26","name":"導摴2崋慄増偄偺條巕","code":"導摴2崋慄増偄","status":"0","group":"j","lat":"36.311926","lng":"140.586299"},
			{"id":"28","name":"導摴2崋慄増偄偺條巕","code":"導摴2崋慄増偄","status":"0","group":"j","lat":"36.329682","lng":"140.593883"},
			
			{"id":"39","name":"戝愻僒儞價乕僠","code":"偵愝抲偝傟偨旔擄昗幆","status":"0","group":"k","lat":"36.30392","lng":"140.566033"},
			{"id":"42","name":"暯懢榊昹","code":"奀娸惔憒偺條巕","status":"0","group":"l","lat":"36.317234","lng":"140.590194"},
			{"id":"43","name":"暯懢榊昹","code":"奀娸惔憒偺條巕","status":"0","group":"l","lat":"36.312877","lng":"140.587211"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"},
			{"donor":"戝愻挰栶応"}
		],
		"comment":"庢嵽傪峴偆偵偁偨傝丄嶣塭偺嫋壜傗恔嵭捈屻偺夋憸帒椏偺採嫙偟偰捀偒姶幱偟偰偄傑偡丅戝愻挰偼懢暯梞偵柺偟偰偄傞偺偱捗攇偵傛傞旐奞丄傑偨丄崅懍憹怋楩偑懚嵼偡傞偙偲傕偁傝丄傛傝偁傜備傞忬嫷偵偍偄偰椻惷側懳墳偑媮傔傜傟傞挰偱偁傞偲巚偄傑偡丅恔嵭捈屻丄姠釯側偳偑廤傔傜傟偰偄偨奀娸晅嬤偼惍旛偝傟丄捗攇偑敪惗偟偨嵺偵旔擄宱楬傊桿摫偡傞偨傔偺娕斅偑愝抲偝傟傑偟偨丅傑偨丄曵傟偨寶暔傗摴楬側偳偺暅媽傕媫懍偵峴傢傟偰偄傑偡丅"
	},

	"ami":{
		"spots": [
		{"id":"1","name":"垻尒挰1","code":"垻尒挰1","status":"1","group":"a"},
		{"id":"2","name":"垻尒挰2","code":"垻尒挰2","status":"1","group":"a"},
		{"id":"3","name":"垻尒挰3","code":"垻尒挰3","status":"1","group":"a"},
		{"id":"4","name":"垻尒挰4","code":"垻尒挰4","status":"1","group":"a"},
		{"id":"5","name":"垻尒挰5","code":"垻尒挰5","status":"1","group":"a"},
		{"id":"6","name":"垻尒挰6","code":"垻尒挰6","status":"1","group":"a"},
		{"id":"7","name":"垻尒挰7","code":"垻尒挰7","status":"1","group":"a"},
		{"id":"8","name":"垻尒挰8","code":"垻尒挰8","status":"1","group":"a"},
		{"id":"9","name":"垻尒挰9","code":"垻尒挰9","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"偙偙偵僥僉僗僩"
	},
	
	
	"bandou":{
		"spots": [
		{"id":"1","name":"嶁搶巗栴嶌摴楬増偄","code":"堬忛導嶁搶巗栴嶌3004-177晅嬤","status":"1","group":"a","lat":"35.99674","lng":"139.897539"},

		{"id":"1a","name":"嶁搶巗栴嶌摴楬増偄","code":"堬忛導嶁搶巗栴嶌3004-177晅嬤","status":"0","group":"a","lat":"35.99674","lng":"139.897539"},

		{"id":"2","name":"娾堜7崋嫶","code":"堬忛導嶁搶巗庁廻1056-1晅嬤","status":"1","group":"b","lat":"36.091245","lng":"139.863547"},

		{"id":"2a","name":"娾堜7崋嫶","code":"堬忛導嶁搶巗庁廻1056-1晅嬤","status":"0","group":"b","lat":"36.091245","lng":"139.863547"},

		{"id":"3","name":"娾堜8崋嫶","code":"堬忛導嶁搶巗庁廻1001晅嬤","status":"1","group":"b","lat":"36.091349","lng":"139.863326"},

		{"id":"3a","name":"娾堜8崋嫶","code":"堬忛導嶁搶巗庁廻1001晅嬤","status":"0","group":"b","lat":"36.091349","lng":"139.863326"},

		{"id":"4","name":"嶁搶巗栶強娾堜挕幧","code":"堬忛導嶁搶巗娾堜4365","status":"1","group":"c","lat":"36.048752","lng":"139.888741"},

		{"id":"4a","name":"嶁搶巗栶強娾堜挕幧","code":"堬忛導嶁搶巗娾堜4365","status":"0","group":"c","lat":"36.048752","lng":"139.888741"},

		{"id":"5","name":"嶁搶巗栶強娾堜挕幧","code":"堬忛導嶁搶巗娾堜4365","status":"1","group":"c","lat":"36.048752","lng":"139.888741"},

		{"id":"5a","name":"嶁搶巗栶強娾堜挕幧","code":"堬忛導嶁搶巗娾堜4365","status":"0","group":"c","lat":"36.048752","lng":"139.888741"},
		{"id":"6","name":"嶁搶巗栶強娾堜挕幧","code":"堬忛導嶁搶巗娾堜4365","status":"1","group":"c","lat":"36.048752","lng":"139.888741"},
		{"id":"7","name":"嶁搶徚杊彁","code":"堬忛導嶁搶巗曈揷644-2","status":"1","group":"c","lat":"36.036902","lng":"139.89417"},
		{"id":"7a","name":"嶁搶徚杊彁","code":"堬忛導嶁搶巗曈揷644-2","status":"0","group":"c","lat":"36.036902","lng":"139.89417"},
		{"id":"8","name":"惣恗楢愳増","code":"堬忛導嶁搶巗惗巕怴揷1183晅嬤","status":"1","group":"d","lat":"36.118325","lng":"139.872411"},
		{"id":"8a","name":"惣恗楢愳増","code":"堬忛導嶁搶巗惗巕怴揷1183晅嬤","status":"0","group":"d","lat":"36.118325","lng":"139.872411"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"巹偼丆8寧19擔偵嶁搶巗偵峴偭偰庢嵽傪偟偰偒傑偟偨丅嶁搶巗偼摿偵恔嵭偺旐奞偑戝偒偐偭偨傛偆偱丆恔嵭慜偲堘偆寶暔偑寶偰傜傟偰偄傞偲偙傠傕偁傝丆揚嫀偟偰偄傞強偑懡偄側偲偄偆報徾傪庴偗傑偟偨丅恔嵭偱旐奞傪庴偗偨摴楬偼鉟楉偵曑憰偝傟丄暅嫽偼恑傫偱偄傞傛偆偵姶偠傑偟偨丅"
	},
	
	
"hitachinaka":{
		"spots": [
		{"id":"01","name":"抧曽壍攧巗応晅嬤","code":"榓揷挰3挌栚11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"02","name":"抧曽壍攧巗応晅嬤","code":"榓揷挰3挌栚11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"03","name":"抧曽壍攧巗応晅嬤","code":"榓揷挰3挌栚11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"001","name":"抧曽壍攧巗応晅嬤","code":"榓揷挰3挌栚11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"000","name":"抧曽壍攧巗応晅嬤","code":"榓揷挰3挌栚11-11","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"003","name":"抧曽壍攧巗応晅嬤","code":"榓揷挰3挌栚11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"002","name":"抧曽壍攧巗応晅嬤","code":"榓揷挰3挌栚11-11","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"005","name":"抧曽壍攧巗応晅嬤","code":"榓揷挰3挌栚11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"006","name":"抧曽壍攧巗応晅嬤","code":"榓揷挰3挌栚11-11","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"007","name":"抧曽壍攧巗応晅嬤","code":"榓揷挰3挌栚11-11","status":"1","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"017","name":"抧曽壍攧巗応晅嬤","code":"榓揷挰3挌栚11-11","status":"0","group":"a","lat":"36.339522","lng":"140.597957"},
		{"id":"04","name":"偝偐偊怘摪","code":"柀杮挰22-3","status":"1","group":"b","lat":"36.341836","lng":"140.595962"},
		{"id":"05","name":"偝偐偊怘摪","code":"柀杮挰22-3","status":"1","group":"b","lat":"36.341836","lng":"140.595962"},
		{"id":"06","name":"榓揷挰柉壠","code":"榓揷挰1挌栚1-5","status":"1","group":"c","lat":"36.34262","lng":"140.596297"},
		{"id":"07","name":"榓揷挰柉壠","code":"榓揷挰1挌栚1-5","status":"1","group":"c","lat":"36.34262","lng":"140.596297"},
		{"id":"014","name":"揳嶳挰摴楬","code":"揳嶳挰1挌栚1-1","status":"1","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"015","name":"揳嶳挰摴楬","code":"揳嶳挰1挌栚1-1","status":"1","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"0001","name":"揳嶳挰摴楬","code":"揳嶳挰1挌栚1-1","status":"0","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"0002","name":"揳嶳挰摴楬","code":"揳嶳挰1挌栚1-1","status":"0","group":"d","lat":"36.345528","lng":"140.604958"},
		{"id":"0003","name":"嫏嫤憅屔","code":"媿媣曐1挌栚11-34","status":"1","group":"e","lat":"36.344759","lng":"140.604357"},
		{"id":"013","name":"嫏嫤憅屔","code":"媿媣曐1挌栚11-34","status":"0","group":"e","lat":"36.344759","lng":"140.604357"},
		{"id":"0004","name":"奀栧挰傆傟偁偄岞墍晅嬤","code":"奀栧挰1挌栚16-16","status":"1","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"010","name":"奀栧挰傆傟偁偄岞墍晅嬤","code":"奀栧挰1挌栚16-16","status":"0","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"0005","name":"奀栧挰傆傟偁偄岞墍晅嬤","code":"奀栧挰1挌栚16-16","status":"1","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"011","name":"奀栧挰傆傟偁偄岞墍晅嬤","code":"奀栧挰1挌栚16-16","status":"0","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"0006","name":"奀栧挰傆傟偁偄岞墍晅嬤","code":"奀栧挰1挌栚16-16","status":"1","group":"f","lat":"36.3374","lng":"140.593993"},
		{"id":"012","name":"奀栧挰傆傟偁偄岞墍晅嬤","code":"奀栧挰1挌栚16-16","status":"0","group":"f","lat":"36.3374","lng":"140.593993"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"}
		],
		"comment":"傂偨偪側偐巗偱偼捗攇偺旐奞傕尒傜傟丄奀増偄偱偼戝偒側旐奞偑偁偭偨傛偆偱偡丅抧恔偑敪惗偟偨嵺丄奀偺晅嬤偵廧傫偱偄傞恖偼捗攇偺忣曬傪偡偖攃埇偡傞昁梫偑偁傞偲姶偠傑偟偨丅傑偨丄旔擄宱楬傪擔崰妋擣偡傞傋偒偩偲姶偠傑偟偨丅"
	},
	
	
	"hitachioota":{
		"spots": [
		{"id":"1","name":"曯嶳拞妛峑","code":"堬忛導忢棨懢揷巗堥晹挰1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"2","name":"曯嶳拞妛峑","code":"堬忛導忢棨懢揷巗堥晹挰1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"3","name":"惣嶳尋廋強","code":"堬堬忛導忢棨懢揷巗堫栘挰1699-僀","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"4","name":"惣嶳尋廋強","code":"堬堬忛導忢棨懢揷巗堫栘挰1699-僀","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"5","name":"曯嶳拞妛峑","code":"堬忛導忢棨懢揷巗堥晹挰1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"6","name":"摴楬偺條巕","code":"堬忛導忢棨懢揷巗彫戲挰","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"7","name":"摴楬偺條巕","code":"堬忛導忢棨懢揷巗彫戲挰","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"8","name":"曯嶳拞妛峑","code":"堬忛導忢棨懢揷巗堥晹挰1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"9","name":"曯嶳拞妛峑","code":"堬忛導忢棨懢揷巗堥晹挰1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"10","name":"摴楬偺條巕","code":"堬忛導忢棨懢揷巗彫戲挰","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"11","name":"摴楬偺條巕","code":"堬忛導忢棨懢揷巗彫戲挰","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"12","name":"摴楬偺條巕","code":"堬忛導忢棨懢揷巗彫戲挰","status":"0","group":"a","lat":"36.528666","lng":"140.540958"},
		{"id":"13","name":"曯嶳拞妛峑","code":"堬忛導忢棨懢揷巗堥晹挰1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"14","name":"曯嶳拞妛峑","code":"堬忛導忢棨懢揷巗堥晹挰1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"15","name":"曯嶳拞妛峑","code":"堬忛導忢棨懢揷巗堥晹挰1620","status":"1","group":"a","lat":"36.516263","lng":"140.536621"},
		{"id":"16","name":"惣嶳尋廋強","code":"堬忛導忢棨懢揷巗堫栘挰1699-僀","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"17","name":"惣嶳尋廋強","code":"堬忛導忢棨懢揷巗堫栘挰1699-僀","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"18","name":"惣嶳尋廋強","code":"堬忛導忢棨懢揷巗堫栘挰1699-僀","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"19","name":"惣嶳尋廋強","code":"堬忛導忢棨懢揷巗堫栘挰1699-僀","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"20","name":"惣嶳尋廋強","code":"堬忛導忢棨懢揷巗堫栘挰1699-僀","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"21","name":"惣嶳尋廋強","code":"堬忛導忢棨懢揷巗堫栘挰1699-僀","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"22","name":"惣嶳尋廋強","code":"堬忛導忢棨懢揷巗堫栘挰1699-僀","status":"1","group":"a","lat":"36.53561","lng":"140.516244"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"忢棨懢揷巗棫曯嶳拞妛峑"}
		],
		"comment":"恔嵭摉弶偼塼忬壔偟偰偄傞抧堟偑懡偐偭偨偺偱偡偑丄尰嵼偼暅媽偟偰偍傝丄傏偙傏偙偵側偭偰偄偨摴楬傕崱偼尦偺忬懺偵栠偭偰偄傑偡丅抧恔偑偁偭偨擔偼傒傫側丄壗偑婲偙偭偨偐暘偐傜偢丄崿棎偟偰偄傑偟偨丅旔擄偡傞偲偒偵偼椻惷偵側偭偰棊偪拝偄偰旔擄偡傞偙偲偑戝愗偩偲巚偄傑偟偨丅"
	},
	
	
	
	"hitati":{
		"spots": [
		{"id":"1","name":"堬忛導擔棫巗壨尨巕挰3挌栚28","code":"堬忛導擔棫巗壨尨巕挰3挌栚28","status":"1","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"1a","name":"堬忛導擔棫巗壨尨巕挰3挌栚28","code":"堬忛導擔棫巗壨尨巕挰3挌栚28","status":"0","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"2","name":"堬忛導擔棫巗壨尨巕挰3挌栚28","code":"堬忛導擔棫巗壨尨巕挰3挌栚28","status":"1","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"2a","name":"堬忛導擔棫巗壨尨巕挰3挌栚28","code":"堬忛導擔棫巗壨尨巕挰3挌栚28","status":"0","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"3","name":"堬忛導擔棫巗壨尨巕挰3挌栚28","code":"堬忛導擔棫巗壨尨巕挰3挌栚28","status":"1","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"3a","name":"堬忛導擔棫巗壨尨巕挰3挌栚28","code":"堬忛導擔棫巗壨尨巕挰3挌栚28","status":"0","group":"a","lat":"36.541312","lng":"140.640725"},
		{"id":"4","name":"堬忛導擔棫巗恴朘挰1挌栚2","code":"堬忛導擔棫巗恴朘挰1挌栚2","status":"1","group":"b","lat":"36.565668","lng":"140.63598"},
		{"id":"4a","name":"堬忛導擔棫巗恴朘挰1挌栚2","code":"堬忛導擔棫巗恴朘挰1挌栚2","status":"0","group":"b","lat":"36.565668","lng":"140.63598"},
		{"id":"5","name":"堬忛導擔棫巗恴朘挰1挌栚12","code":"堬忛導擔棫巗恴朘挰1挌栚12","status":"1","group":"b","lat":"36.563841","lng":"140.634692"},
		{"id":"5aa","name":"堬忛導擔棫巗恴朘挰1挌栚12","code":"堬忛導擔棫巗恴朘挰1挌栚12","status":"0","group":"b","lat":"36.563841","lng":"140.634692"},
		{"id":"6","name":"堬忛導擔棫巗夛悾挰1挌栚11","code":"堬忛導擔棫巗夛悾挰1挌栚11","status":"1","group":"b","lat":"36.577283","lng":"140.653704"},
		{"id":"6aa","name":"堬忛導擔棫巗夛悾挰1挌栚11","code":"堬忛導擔棫巗夛悾挰1挌栚11","status":"0","group":"b","lat":"36.577283","lng":"140.653704"},
		{"id":"21","name":"崙暘婡婍僄儞僕僯傾儕儞僌","code":"堬忛導擔棫巗崙暘挰1","status":"1","group":"b","lat":"36.56522","lng":"140.646101"},
		{"id":"21a","name":"崙暘婡婍僄儞僕僯傾儕儞僌","code":"堬忛導擔棫巗崙暘挰1","status":"0","group":"b","lat":"36.56522","lng":"140.646101"},
		{"id":"7","name":"堬忛導擔棫巗愳怟奀悈梺応","code":"堬忛導擔棫巗愳怟奀悈梺応","status":"1","group":"c","lat":"36.651619","lng":"140.699495"},
		{"id":"7a","name":"堬忛導擔棫巗愳怟奀悈梺応","code":"堬忛導擔棫巗愳怟奀悈梺応","status":"0","group":"c","lat":"36.651619","lng":"140.699495"},
		{"id":"14","name":"朄榟堾","code":"堬忛導擔棫巗廫墹挰桭晹1990朄榟堾","status":"1","group":"c","lat":"36.677609","lng":"140.680784"},
		{"id":"14a","name":"朄榟堾","code":"堬忛導擔棫巗廫墹挰桭晹1990朄榟堾","status":"0","group":"c","lat":"36.677609","lng":"140.680784"},
		{"id":"15","name":"偍偝偐側据腊擖傝岥晅嬤","code":"堬忛導擔棫巗媣帨挰偍偝偐側据腊擖傝岥晅嬤","status":"1","group":"d","lat":"36.677609","lng":"140.680784"},
		{"id":"15a","name":"偍偝偐側据腊擖傝岥晅嬤","code":"堬忛導擔棫巗媣帨挰偍偝偐側据腊擖傝岥晅嬤","status":"0","group":"d","lat":"36.677609","lng":"140.680784"},
		{"id":"16","name":"媣帨嫏峘","code":"堬忛導擔棫巗媣帨挰嫏峘","status":"1","group":"d","lat":"36.484383","lng":"140.612334"},
		{"id":"16a","name":"媣帨嫏峘","code":"堬忛導擔棫巗媣帨挰嫏峘","status":"0","group":"d","lat":"36.484383","lng":"140.612334"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"6寧17擔偵朘傟傑偟偨丅捗攇偺塭嬁偱媥嬈傪偟偰偄偨偍揦側偳偼尦捠傝偺塩嬈傪偟偰偄傑偟偨丅偟偐偟丄壠傗堦晹偺偍揦偼偩傟傕廧傫偱偄側偐偭偨傝揚嫀偝傟偰偄偨傝偟偨偲偙傠傕懡偔丄抧恔傗捗攇偺旐奞偼戝偒偐偭偨偺偩偲巚偄傑偟偨丅傎偲傫偳偺摴楬偑尦捠傝偵側偭偰偄傑偟偨丅"
	},
	
	
	
	"hitatioomiya":{
		"spots": [
		{"id":"1","name":"屼慜嶳彫妛峑","code":"堬忛導忢棨戝媨巗栰岥3217","status":"1","group":"a","lat":"36.563753","lng":"140.313807"},
		{"id":"2","name":"峛恄幮","code":"堬忛導忢棨戝媨巗壓挰219","status":"1","group":"a","lat":"36.551347","lng":"140.417701"},
		{"id":"3","name":"儘僛儂乕儖","code":"堬忛導忢棨戝媨巗拞晉挰3135-6","status":"1","group":"a","lat":"36.543549","lng":"140.411281"},
		{"id":"4","name":"儘僛儂乕儖","code":"堬忛導忢棨戝媨巗拞晉挰3135-6","status":"1","group":"a","lat":"36.543549","lng":"140.411281"},
		{"id":"5","name":"徚杊杮晹","code":"堬忛導忢棨戝媨巗塛夑挰621","status":"1","group":"a","lat":"36.562915","lng":"140.405206"},
		{"id":"6","name":"摴楬偺條巕","code":"堬忛導忢棨戝媨巗彫栰抧撪","status":"1","group":"a","lat":"36.54026","lng":"140.36562"},
		{"id":"7","name":"摴楬偺條巕","code":"堬忛導忢棨戝媨巗彫応抧撪","status":"1","group":"a","lat":"36.512878","lng":"140.392828"},
		{"id":"8","name":"摴楬偺條巕","code":"堬忛導忢棨戝媨巗壓娾悾抧撪","status":"1","group":"a","lat":"36.520406","lng":"140.452357"},
		{"id":"9","name":"摴楬偺條巕","code":"堬忛導忢棨戝媨巗壓娾悾撪","status":"1","group":"a","lat":"36.520406","lng":"140.452357"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"忢棨戝媨巗偵偼8寧21擔偵朘傟傑偟偨偑丄偐側傝暅媽偟偰偄傞條巕偱偟偨丅巗栶強偺曽偐傜採嫙偟偰傕傜偭偨夋憸偵偼寶暔偺旐奞偑懡偔栚棫偪傑偟偨丅"
	},
	
	"hokota":{
		"spots": [
		{"id":"014","name":"憤崌岞墍懱堢娰","code":"摉娫2331","status":"1","group":"a","lat":"36.15933","lng":"140.491098"},
		{"id":"001","name":"憤崌岞墍懱堢娰","code":"摉娫2331","status":"0","group":"a","lat":"36.15933","lng":"140.491098"},
		{"id":"015","name":"埉杒彫妛峑","code":"揷嶈3852","status":"1","group":"b","lat":"36.254085","lng":"140.521573"},
		{"id":"007","name":"埉杒彫妛峑","code":"揷嶈3852","status":"0","group":"b","lat":"36.254085","lng":"140.521573"},
		{"id":"016","name":"巗棫恾彂娰","code":"杇揷1444-1","status":"1","group":"c","lat":"36.159455","lng":"140.516037"},
		{"id":"004","name":"巗棫恾彂娰","code":"杇揷1444-1","status":"0","group":"c","lat":"36.159455","lng":"140.516037"},
		{"id":"012","name":"巗棫戞擇曐堢強","code":"杇揷148","status":"1","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"017","name":"巗棫戞擇曐堢強","code":"杇揷148","status":"1","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"006","name":"巗棫戞擇曐堢強","code":"杇揷148","status":"0","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"005","name":"巗棫戞擇曐堢強","code":"杇揷148","status":"0","group":"c","lat":"36.160144","lng":"140.512374"},
		{"id":"018","name":"晉巑嫶廃曈","code":"杇揷2299","status":"1","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"013","name":"晉巑嫶廃曈","code":"杇揷2299","status":"1","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"002","name":"晉巑嫶廃曈","code":"杇揷2299","status":"0","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"003","name":"晉巑嫶廃曈","code":"杇揷2299","status":"0","group":"c","lat":"36.157576","lng":"140.511067"},
		{"id":"019","name":"幁峴戝嫶廃曈","code":"嶥抧嬫","status":"1","group":"d","lat":"36.085735","lng":"140.542945"},
		{"id":"010","name":"幁峴戝嫶廃曈","code":"嶥抧嬫","status":"0","group":"d","lat":"36.085735","lng":"140.542945"},
		{"id":"000","name":"棆恄幮","code":"攼孎689","status":"1","group":"e","lat":"36.177226","lng":"140.571007"},
		{"id":"008","name":"棆恄幮","code":"攼孎689","status":"0","group":"e","lat":"36.177226","lng":"140.571007"},
		{"id":"011","name":"戝榓揷彫妛峑","code":"戝榓揷1018-3","status":"1","group":"f","lat":"36.206512","lng":"140.440882"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"},
			{"donor":"杇揷巗栶強"}
		],
		"comment":"杇揷巗偱偼抧妱傟側偳旐奞偺戝偒偄応強傕懡偔尒傜傟傑偟偨偑丄岞嫟偺巤愝偼杦偳偺応強偱廋暅偑姰椆偟偰偄傑偟偨丅懱堢娰側偳偱偼揤堜斅偑棊偪傞旐奞偑偁傝丄抧恔偑婲偙偭偨帪偵偼摢晹傪偡偖偵曐岇偡傞傋偒偩偲姶偠傑偟偨丅"
	},
	
	"ibarakimati":{
		"spots": [
		{"id":"1","name":"崅嫶","code":"導摴18崋晅嬤","status":"1","group":"a","lat":"36.290111","lng":"140.423039"},
		{"id":"12","name":"崅嫶","code":"導摴18崋晅嬤","status":"0","group":"a","lat":"36.290000","lng":"140.422939"},
		{"id":"4","name":"憤崌暉巸僙儞僞乕備偆備偆娰","code":"堬忛導搶堬忛孲堬忛挰彫掔1037?1","status":"1","group":"a","lat":"36.278762","lng":"140.425600"},
		{"id":"11","name":"憤崌暉巸僙儞僞乕備偆備偆娰","code":"堬忛導搶堬忛孲堬忛挰彫掔1037?1","status":"0","group":"a","lat":"36.288762","lng":"140.425615"},
		{"id":"6","name":"堬忛挰徚杊杮晹","code":"堬忛導搶堬忛孲堬忛挰戝帤彫掔1037-1","status":"1","group":"a","lat":"36.288961","lng":"140.42568"},
		{"id":"8","name":"熆徖帺慠岞墍","code":"堬忛導搶堬忛孲堬忛挰拞愇嶈2263","status":"1","group":"b","lat":"36.294098","lng":"140.504494"},
		{"id":"2","name":"熆徖帺慠岞墍","code":"堬忛導搶堬忛孲堬忛挰拞愇嶈2263","status":"1","group":"b","lat":"36.294000","lng":"140.504400"},
		{"id":"7","name":"慜扟岞柉娰晅嬤","code":"堬忛導搶堬忛孲堬忛挰壓愇嶈","status":"1","group":"b","lat":"36.295807","lng":"140.523367"},
		{"id":"9","name":"峀塝岞墍挀幵応","code":"堬忛導搶堬忛孲堬忛挰壓愇嶈1651","status":"1","group":"b","lat":"36.28884","lng":"140.521145"},
		{"id":"5","name":"嶗媢拞妛峑丂懱堢娰","code":"堬忛導搶堬忛孲堬忛挰墱扟862","status":"1","group":"c","lat":"36.287802","lng":"140.415316"},
		{"id":"3","name":"挿壀棫懱","code":"堬忛導悈屗巗彫悂挰","status":"1","group":"c","lat":"36.308849","lng":"140.429971"},
		{"id":"13","name":"挿壀棫懱","code":"堬忛導悈屗巗彫悂挰","status":"0","group":"c","lat":"36.308849","lng":"140.429971"},
		{"id":"10","name":"僒僀僋儕儞僌儘乕僪","code":"堬忛導搶堬忛孲堬忛挰挿壀","status":"1","group":"c","lat":"36.299424","lng":"140.430121"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"8寧壓弡偵朘栤偟傑偟偨偑丄摴楬傗嫶側偳丄恖乆偺惗妶娐嫬偼杦偳暅媽嵪傒偱偟偨丅庢嵽傪偡傞帪偵傕堏摦偵崲傞偙偲偼偁傝傑偣傫偱偟偨丅"
	},
	
	"inasiki":{
		"spots": [
		{"id":"01","name":"嶳怴挀幵応","code":"堫晘巗惣戙1403斣抧 晅嬤","status":"0","group":"a","lat":"35.924953","lng":"140.484794"},
		{"id":"1","name":"嶳怴挀幵応","code":"堫晘巗惣戙1403斣抧 晅嬤","status":"1","group":"a","lat":"35.924953","lng":"140.484794"},
		{"id":"02","name":"幁搰恄幮","code":"堫晘巗杮怴309斣抧 晅嬤","status":"0","group":"b","lat":"35.938882","lng":"140.470503"},
		{"id":"2","name":"幁搰恄幮","code":"堫晘巗杮怴309斣抧 晅嬤","status":"1","group":"b","lat":"35.938882","lng":"140.470503"},
		{"id":"04","name":"悈嫿戝嫶嵺","code":"堫晘巗惣戙1661斣抧1 晅嬤","status":"0","group":"c","lat":"35.924953","lng":"140.484794"},
		{"id":"4","name":"悈嫿戝嫶嵺","code":"堫晘巗惣戙1661斣抧1 晅嬤","status":"1","group":"c","lat":"35.924953","lng":"140.484794"},
		{"id":"06","name":"怴棙崻愳壨岥 塃娸","code":"堫晘巗杮怴52斣抧8 晅嬤","status":"0","group":"d","lat":"35.938882","lng":"140.470503"},
		{"id":"6","name":"怴棙崻愳壨岥 塃娸","code":"堫晘巗杮怴52斣抧8 晅嬤","status":"1","group":"d","lat":"35.938882","lng":"140.470503"},
		{"id":"08","name":"怴棙崻愳壨岥 嵍娸","code":"堫晘巗晜搰8322斣抧 晅嬤","status":"0","group":"e","lat":"35.970005","lng":"140.43097"},
		{"id":"12","name":"怴棙崻愳壨岥 嵍娸","code":"堫晘巗晜搰8322斣抧 晅嬤","status":"1","group":"e","lat":"35.970005","lng":"140.43097"},
		{"id":"9","name":"怴棙崻愳壨岥 塃娸","code":"堫晘巗杮怴52斣抧10 晅嬤","status":"1","group":"f","lat":"35.938882","lng":"140.470503"},
		{"id":"09","name":"怴棙崻愳壨岥 塃娸","code":"堫晘巗杮怴52斣抧10 晅嬤","status":"0","group":"f","lat":"35.938882","lng":"140.470503"},
		{"id":"10","name":"怴棙崻愳壨岥 塃娸","code":"堫晘巗杮怴52斣抧10 晅嬤","status":"0","group":"f","lat":"35.938882","lng":"140.470503"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"偙偺抧嬫偺恔嵭忬嫷偱偡偑丄抧尦偺曽乆偵摉帪偺帠側偳暦偒傑偟偨偑丆傗偼傝丄奨偺恖乆偼嬃偔傎偳嬯楯偝傟偨傛偆偱偡丅偙偺抧嬫傕丆杔偑峫偊偰偄偨埲忋偵抧恔偺旐奞偼戝偒偔丆嵞敪偟偨偲偒偵椻惷偵峴摦偱偒傞傛偆怱妡偗傞傋偒偩偲巚偄傑偟偨丅"
	},
	
	
	"jyoso":{
		"spots": [
		{"id":"1","name":"憤崌暉巸僙儞僞乕","code":"堬忛導忢憤巗怴愇壓4365","status":"1","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"1a","name":"憤崌暉巸僙儞僞乕","code":"堬忛導忢憤巗怴愇壓4365","status":"0","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"2","name":"憤崌暉巸僙儞僞乕","code":"堬忛導忢憤巗怴愇壓4365","status":"1","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"2a","name":"憤崌暉巸僙儞僞乕","code":"堬忛導忢憤巗怴愇壓4365","status":"0","group":"a","lat":"36.114113","lng":"139.981159"},
		{"id":"5","name":"導摴24崋慄増偄","code":"堬忛導忢憤巗岦愇壓299","status":"1","group":"a","lat":"36.117441","lng":"139.965688"},
		{"id":"5a","name":"導摴24崋慄増偄","code":"堬忛導忢憤巗岦愇壓299","status":"0","group":"a","lat":"36.117441","lng":"139.965688"},
		{"id":"5aa","name":"導摴24崋慄増偄","code":"堬忛導忢憤巗岦愇壓299","status":"0","group":"a","lat":"36.117441","lng":"139.965688"},
		{"id":"9","name":"忢憤巗栶強愇壓挕幧乮媽栶応乯","code":"堬忛導怴愇壓576-2","status":"1","group":"a","lat":"36.115708","lng":"139.973477"},
		{"id":"9a","name":"忢憤巗栶強愇壓挕幧乮媽栶応乯","code":"堬忛導怴愇壓576-2","status":"0","group":"a","lat":"36.115708","lng":"139.973477"},
		{"id":"3","name":"忢岝帥","code":"堬忛導忢憤巗庒媨屗1053","status":"1","group":"b","lat":"36.14387","lng":"139.958393"},
		{"id":"3a","name":"忢岝帥","code":"堬忛導忢憤巗庒媨屗1053","status":"0","group":"b","lat":"36.14387","lng":"139.958393"},
		{"id":"4","name":"忢憤巗栶強","code":"堬忛導忢憤巗悈奀摴恴朘挰3222-3","status":"1","group":"c","lat":"36.02354","lng":"139.993905"},
		{"id":"4a","name":"忢憤巗栶強","code":"堬忛導忢憤巗悈奀摴恴朘挰3222-3","status":"0","group":"c","lat":"36.02354","lng":"139.993905"},
		{"id":"6","name":"巗棫愇壓惣拞妛峑","code":"堬忛導忢憤巗悪嶳910-1","status":"1","group":"d","lat":"36.117441","lng":"139.946291"},
		{"id":"7","name":"巗棫愇壓惣拞妛峑","code":"堬忛導忢憤巗悪嶳910-1","status":"1","group":"d","lat":"36.117441","lng":"139.946291"},
		{"id":"8","name":"巗棫愇壓惣拞妛峑","code":"堬忛導忢憤巗悪嶳910-1","status":"1","group":"d","lat":"36.117441","lng":"139.946291"},
		{"id":"8a","name":"巗棫愇壓惣拞妛峑","code":"堬忛導忢憤巗悪嶳910-1","status":"0","group":"d","lat":"36.117441","lng":"139.946291"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"巹偼丆8寧19擔偵忢憤巗偵峴偭偰庢嵽傪偟偰偒傑偟偨丅忢憤巗偺拞妛峑偼峑幧偑偡傋偰揚嫀偝傟棫偰捈偝傟偰偄傑偟偨丅夡傟偰偟傑偭偨嫶傕揚嫀偝傟怴偟偄嫶偵側偭偰偍傝丄尦偺挰暲傒偲偼戝偒偔曄傢傞偲偙傠偑懡偄偲姶偠傑偟偨丅傑偩拞妛峑側偳偼姰惉偟偰偄側偔姰慡偵偼暅嫽偟偰偄側偄條巕偱偟偨丅奀増偄偩偗偱偼側偔恔嵭偐傜斾妑揑墦偄応強偱傕恔嵭偺旐奞偼媦傫偱偄傞尰幚傪抦傝傑偟偨丅"
	},
	
	
	"kasama":{
		"spots": [
		{"id":"1","name":"妢娫巗栶強丂妢娫巗強","code":"堬忛導妢娫巗愇堜717","status":"1","group":"a","lat":"36.393099","lng":"140.237732"},
		{"id":"6","name":"働乕僘僨儞僉妢娫揦晅嬤","code":"堬忛導妢娫巗愇堜2090","status":"1","group":"a","lat":"36.416586","lng":"140.247688"},
		{"id":"3","name":"妢娫恾彂娰","code":"堬忛導妢娫巗愇堜2023?1","status":"1","group":"a","lat":"36.395862","lng":"140.248375"},
		{"id":"10","name":"妢娫恾彂娰","code":"堬忛導妢娫巗愇堜2023?1","status":"0","group":"a","lat":"36.395862","lng":"140.248375"},
		{"id":"2","name":"妢娫巗栶強丂杮強擇奒","code":"堬忛導妢娫巗拞墰3挌栚2-1","status":"1","group":"b","lat":"36.33531","lng":"140.304108"},
		{"id":"11","name":"妢娫巗栶強 杮強擇奒","code":"堬忛導妢娫巗拞墰3挌栚2-1","status":"0","group":"b","lat":"36.34631","lng":"140.304208"},
		{"id":"4","name":"桭晹擇拞","code":"堬忛導妢娫巗埉挰510?1","status":"1","group":"c","lat":"36.326985","lng":"140.330558"},
		{"id":"5","name":"岺寍偺媢","code":"堬忛導妢娫巗妢娫2388?1","status":"1","group":"d","lat":"36.390335","lng":"140.262451"},
		{"id":"7","name":"妢娫彫僌儔僂儞僪","code":"堬忛導妢娫巗妢娫2688","status":"1","group":"d","lat":"36.401389","lng":"140.257645"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"偍杶婜娫偵丄夋憸傪庢傝偵朘栤偟傑偟偨丅妢娫巗栶強丒妢娫巗強偼摿偵寶暔偺懝彎偑傂偳偔丄庢傝夡偟偰峏抧偵側偭偰偄傑偟偨丅杮強偺曽偱傕岺帠拞偺売強偑偁傝丄尰嵼丄巗栶強偺曽偑嬑柋傪偟偰偄傞寶暔偺揤堜傕攝娗傓偒弌偟偺忬懺偱偟偨丅墂晅嬤偼斾妑揑暅媽偟偰偄傞傕偺偺丄岺帠拞偺摴楬傗丄庢傝夡偟丒搢夡側偳偱寶暔偑側偔側偭偨屻偺峏抧側偳傕尒庴偗傜傟丄傑偩傑偩暅嫽搑拞偱偁傞報徾傪庴偗傑偟偨丅"
	},
	
	
	
	"kasima":{
		"spots": [
		{"id":"1","name":"奀娸増偄偺廧嫃撪","code":"奀娸増偄偺廧嫃撪","status":"1","group":"a"},
		{"id":"2","name":"幁搱巗彫媨嶌抧嬫","code":"幁搱巗彫媨嶌抧嬫","status":"1","group":"a"},
		{"id":"3","name":"幁搱巗挿惒抧嬫","code":"幁搱巗挿惒抧嬫","status":"1","group":"a"},
		{"id":"4","name":"幁搱巗崙枛抧嬫","code":"幁搱巗崙枛抧嬫","status":"1","group":"a"},
		{"id":"5","name":"擾摴偺忬嫷","code":"擾摴偺忬嫷","status":"1","group":"a"},
		{"id":"6","name":"壓捗奀悈梺応晅嬤","code":"壓捗奀悈梺応晅嬤","status":"1","group":"a"},
		{"id":"7","name":"奀増偄偺廧嫃偺忬懺","code":"奀増偄偺廧嫃偺忬懺","status":"1","group":"a"},
		{"id":"8","name":"暯堜奀娸晅嬤","code":"暯堜奀娸晅嬤","status":"1","group":"a"},
		{"id":"9","name":"幁搱巗彫媨嶌抧嬫","code":"幁搱巗彫媨嶌抧嬫","status":"1","group":"a"},
		{"id":"10","name":"幁搱巗敨宍戜偐傜偺晽宨","code":"幁搱巗敨宍戜偐傜偺晽宨","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"偙偙偵僥僉僗僩"
	},
	
	"kasumigaura":{
		"spots": [
		{"id":"1","name":"愮戙揷挕幧晅嬤","code":"愮戙揷挕幧晅嬤","status":"1","group":"a","lat":"36.150351","lng":"140.243912"},
		{"id":"2","name":"偁偠偝偄娰","code":"堬忛導偐偡傒偑偆傜巗怺扟3719-1","status":"1","group":"b","lat":"36.087014","lng":"140.313027"},
		{"id":"9","name":"偁偠偝偄娰","code":"堬忛導偐偡傒偑偆傜巗怺扟3719-1","status":"0","group":"b","lat":"36.087050","lng":"140.313040"},
		{"id":"3","name":"偐偡傒偑偆傜巗栶強丂愮戙揷挕幧","code":"堬忛導偐偡傒偑偆傜巗忋搚揷461","status":"1","group":"a","lat":"36.151893","lng":"140.262451"},
		{"id":"4","name":"偐偡傒偑偆傜巗栶強丂愮戙揷挕幧","code":"堬忛導偐偡傒偑偆傜巗忋搚揷461","status":"1","group":"a","lat":"36.151683","lng":"140.237265"},
		{"id":"5","name":"偐偡傒偑偆傜巗栶強丂愮戙揷挕幧","code":"堬忛導偐偡傒偑偆傜巗忋搚揷461","status":"1","group":"a","lat":"36.151862","lng":"140.236976"},
		{"id":"6","name":"偐偡傒偑偆傜巗栶強丂愮戙揷挕幧","code":"堬忛導偐偡傒偑偆傜巗忋搚揷461","status":"1","group":"a","lat":"36.152105","lng":"140.237045"},
		{"id":"7","name":"偐偡傒偑偆傜巗栶強丂愮戙揷挕幧","code":"堬忛導偐偡傒偑偆傜巗忋搚揷461","status":"1","group":"a","lat":"36.151564","lng":"140.236911"},
		{"id":"8","name":"夃儢塝丂掔杊","code":"夃儢塝丂掔杊","status":"1","group":"c","lat":"36.040771,","lng":"140.238333"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"偍杶婜娫偵丄夋憸傪庢傝偵朘栤偟傑偟偨丅巗栶強偺愮戙揷挕幧偼岺帠拞偱杦偳婡擻偟偰偄側偄忬嫷偱偟偨丅懡偔偺嬈柋偼岞柉娰偱峴偭偰偄傞偲偄偆偙偲偱摉帪偺恔嵭偺捾嵀偑傒傜傟傑偟偨丅戝偒側摴楬側偳偼晛捠偵捠峴偱偒傑偟偨偑丄嵶偄曕摴側偳偼姰慡偵捈傝偒偭偰偄側偄偲偙傠傕尒庴偗傜傟丄摉帪偺旐奞偺戝偒偝傪暔岅偭偰偄傑偟偨丅"
	},
	
	"kawauti":{
		"spots": [
		{"id":"1","name":"壨撪挰1","code":"壨撪挰1","status":"1","group":"a"},
		{"id":"2","name":"壨撪挰2","code":"壨撪挰2","status":"1","group":"a"},
		{"id":"3","name":"壨撪挰3","code":"壨撪挰3","status":"1","group":"a"},
		{"id":"4","name":"壨撪挰4","code":"壨撪挰4","status":"1","group":"a"},
		{"id":"5","name":"壨撪挰5","code":"壨撪挰5","status":"1","group":"a"},
		{"id":"6","name":"壨撪挰6","code":"壨撪挰6","status":"1","group":"a"},
		{"id":"7","name":"壨撪挰7","code":"壨撪挰7","status":"1","group":"a"},
		{"id":"8","name":"壨撪挰8","code":"壨撪挰8","status":"1","group":"a"},
		{"id":"9","name":"壨撪挰9","code":"壨撪挰9","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"偙偙偵僥僉僗僩"
	},
	
	"kitaibaraki":{
		"spots": [
		{"id":"1","name":"杒堬忛巗栶強","code":"堬忛導杒堬忛巗堥尨挰堥尨1630","status":"1","group":"a","lat":"36.801867","lng":"140.751048"},
		{"id":"2","name":"杒堬忛巗栶強","code":"堬忛導杒堬忛巗堥尨挰堥尨1630","status":"1","group":"a","lat":"36.801867","lng":"140.751048"},
		{"id":"3","name":"奀娸増偄偺條巕","code":"堬忛導杒堬忛巗暯妰挰","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"4","name":"戝捗嫏嬈嫤摨慻崌","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"5","name":"慄楬偺條巕","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.53561","lng":"140.516244"},
		{"id":"6","name":"杒堬忛巗杊嵭僐儈儏僯僥傿僙儞僞乕","code":"堬忛導杒堬忛巗堥尨挰堥尨","status":"1","group":"a","lat":"36.795634","lng":"140.75617"},
		{"id":"7","name":"慄楬偺條巕","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.53561","lng":"140.737174"},
		{"id":"8","name":"奀娸偺條巕","code":"堬忛導杒堬忛巗暯妰挰","status":"1","group":"a","lat":"36.858291","lng":"140.793945"},
		{"id":"9","name":"嫏峘偺條巕","code":"堬忛導杒堬忛巗暯妰挰","status":"1","group":"a","lat":"36.858291","lng":"140.793945"},
		{"id":"10","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"11","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"12","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"13","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"14","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"15","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"16","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"17","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"18","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"19","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"20","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"21","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"22","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"},
		{"id":"23","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.828455","lng":"140.788377"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"杒堬忛巗偵偼8寧20擔偵朘傟傑偟偨偑丆恔嵭摉弶傛傝偐側傝暅媽偟偰偄傑偟偨丅偟偐偟丆偦偺捾嵀偼帄傞強偵偁傝傑偟偨丅巗栶強偺棤偺曽偱偼丆摴楬偺暅媽岺帠偵嶌嬈堳偺曽偑堦惗寽柦摥偄偰偄傑偟偨丅巗栶強偺扴摉幰偵恔嵭摉帪偺幨恀傪尒偣偰傕傜偄傑偟偨偑丄捗攇偺旐奞偑崜偔丄摨偠偙偲偑婲偒偨傜堦崗傕憗偔旔擄偡傞偙偲偵怱偑偗傞昁梫偑偁傞偲巚偄傑偟偨丅"
	},
	
	
	"mito":{
		"spots": [
		{"id":"1","name":"搶戜丒崙摴51崋慄晅嬤","code":"搶戜1挌栚","status":"1","group":"a","lat":"36.366254","lng":"140.494309"},
		{"id":"8","name":"搶戜丒崙摴51崋晅嬤","code":"搶戜1挌栚","status":"0","group":"a","lat":"36.366233","lng":"140.494288"},
		{"id":"16","name":"搉曈惍宍奜壢(暵堾)","code":"堬忛導悈屗巗搶戜1挌栚6-1","status":"0","group":"a","lat":"36.367298","lng":"140.494052"},
		{"id":"2","name":"搶徠媨","code":"堬忛導悈屗巗媨挰2挌栚5-13 ","status":"1","group":"b","lat":"36.372636","lng":"140.473407"},
		{"id":"3","name":"搶徠媨","code":"堬忛導悈屗巗媨挰2挌栚5-13","status":"1","group":"b","lat":"36.372621","lng":"140.473377"},
		{"id":"6","name":"悈屗墂杒岥 僶僗忔傝応","code":"悈屗墂","status":"1","group":"b","lat":"36.371375","lng":"140.476105"},
		{"id":"4","name":"悈屗巗栶強","code":"堬忛導悈屗巗拞墰1挌栚4-1 ","status":"1","group":"c","lat":"36.365844","lng":"140.471124"},
		{"id":"5","name":"悈屗巗栶強","code":"堬忛導悈屗巗拞墰1挌栚4-1","status":"1","group":"c","lat":"36.365771","lng":"140.471264"},
		{"id":"9","name":"昹揷3挌栚","code":"昹揷3挌栚","status":"0","group":"d","lat":"36.366842","lng":"140.496973"},
		{"id":"10","name":"昹揷3挌栚","code":"昹揷3挌栚","status":"0","group":"d","lat":"36.366816","lng":"140.496994"},
		{"id":"11","name":"昹揷3挌栚","code":"昹揷3挌栚","status":"0","group":"d","lat":"36.366917","lng":"140.49697"},
		{"id":"12","name":"昹揷3挌栚","code":"昹揷3挌栚","status":"0","group":"d","lat":"36.366792","lng":"140.497024"},
		{"id":"13","name":"昹揷3挌栚","code":"昹揷3挌栚","status":"0","group":"d","lat":"36.366753","lng":"140.497037"},
		{"id":"14","name":"昹揷3挌栚","code":"昹揷3挌栚","status":"0","group":"d","lat":"36.365978","lng":"140.497407"},
		{"id":"15","name":"昹揷3挌栚","code":"昹揷3挌栚","status":"0","group":"d","lat":"36.365928","lng":"140.497426"},
		{"id":"17","name":"悈屗巗50崋儎儅僟揹婡","code":"悈屗巗妢尨挰209","status":"1","group":"e","lat":"36.347701","lng":"140.494288"},
		{"id":"18","name":"悈屗巗50崋儎儅僟揹婡","code":"悈屗巗妢尨挰209","status":"1","group":"e","lat":"36.347781,","lng":"140.458786"},
		{"id":"22","name":"悈屗岺嬈崅峑A搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"f","lat":"36.347984","lng":"140.468077"},
		{"id":"25","name":"悈屗岺嬈崅峑A搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"f","lat":"36.34801","lng":"140.468016"},
		{"id":"26","name":"悈屗岺嬈崅峑A搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"f","lat":"36.348017","lng":"140.467965"},
		{"id":"28","name":"悈屗岺嬈崅峑A搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"f","lat":"36.347935","lng":"140.468402"},
		{"id":"29","name":"悈屗岺嬈崅峑E搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"g","lat":"36.348877","lng":"140.467171"},
		{"id":"30","name":"悈屗岺嬈崅峑E搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"g","lat":"36.34889","lng":"140.467206"},
		{"id":"31","name":"悈屗岺嬈崅峑E搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"g","lat":"36.34884","lng":"140.46764"},
		{"id":"36","name":"悈屗岺嬈崅峑E搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"g","lat":"36.348859","lng":"140.467471"},
		{"id":"43","name":"悈屗岺嬈崅峑E搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"g","lat":"36.348892","lng":"140.467332"},
		{"id":"45","name":"悈屗岺嬈崅峑E搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"g","lat":"36.348829","lng":"140.467452"},
		{"id":"50","name":"悈屗岺嬈崅峑E搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"g","lat":"36.348792","lng":"140.467605"},
		{"id":"52","name":"悈屗岺嬈崅峑E搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"g","lat":"36.348827","lng":"140.467688"},
		{"id":"60","name":"悈屗岺嬈崅峑E搹","code":"悈屗巗尦媑揷挰1101","status":"1","group":"g","lat":"36.348848","lng":"140.467192"},
		{"id":"61","name":"悈屗巗棫嶰偺娵彫","code":"悈屗巗嶰偺娵1挌栚6-51","status":"1","group":"h","lat":"36.374777","lng":"140.476998"},
		{"id":"62","name":"悈屗巗棫嶰偺娵彫","code":"悈屗巗嶰偺娵1挌栚6-51","status":"1","group":"h","lat":"36.374785","lng":"140.476094"},
		{"id":"63","name":"悈屗巗棫嶰偺娵彫","code":"悈屗巗嶰偺娵1挌栚6-51","status":"1","group":"h","lat":"36.374923","lng":"140.476272"},
		{"id":"64","name":"悈屗巗棫嶰偺娵彫","code":"悈屗巗嶰偺娵1挌栚6-51","status":"1","group":"h","lat":"36.374736","lng":"140.47643"},
		{"id":"71","name":"悈屗擇崅","code":"悈屗巗戝挰2挌栚2-14","status":"1","group":"h","lat":"36.378217","lng":"140.472136"},
		{"id":"72","name":"悈屗擇崅","code":"悈屗巗戝挰2挌栚2-14","status":"1","group":"h","lat":"36.378428","lng":"140.47172"},
		{"id":"74","name":"悈屗擇崅","code":"悈屗巗戝挰2挌栚2-14","status":"1","group":"h","lat":"36.378195","lng":"140.4725"},
		{"id":"76","name":"悈屗擇崅","code":"悈屗巗戝挰2挌栚2-14","status":"1","group":"h","lat":"36.378502","lng":"140.472414"},
		{"id":"77","name":"悈屗擇崅","code":"悈屗巗戝挰2挌栚2-14","status":"1","group":"h","lat":"36.37842","lng":"140.472892"},
		{"id":"65","name":"悈屗惗奤妛廗僙儞僞乕","code":"悈屗巗垽搯挰4-1","status":"1","group":"i","lat":"36.394601","lng":"140.453162"},
		{"id":"66","name":"悈屗惗奤妛廗僙儞僞乕","code":"悈屗巗垽搯挰4-1","status":"1","group":"i","lat":"36.394647","lng":"140.453414"},
		{"id":"67","name":"悈屗惗奤妛廗僙儞僞乕","code":"悈屗巗垽搯挰4-1","status":"1","group":"i","lat":"36.394813","lng":"140.453835"},
		{"id":"69","name":"悈屗惗奤妛廗僙儞僞乕","code":"悈屗巗垽搯挰4-1","status":"1","group":"i","lat":"36.394839","lng":"140.454028"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導棫悈屗岺嬈崅摍妛峑 忣曬媄弍壢"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"摉帪偼墂偺悈摴娗偑攋楐偟丄峔撪偑悈怹偟偵側傞側偳偺旐奞偑偁傝傑偟偨偑憗乆偵暅媽偟丄壞媥傒偵偼恔嵭慜偲曄傢傝側偄塣峴傪偟偰偄傑偟偨丅柉壠偺壆崻傗僽儘僢僋暬丄廧戭奨偺嵶偄摴側偳偼捈偭偰偄側偄偲偙傠傕尒傜傟傑偟偨丅偟偐偟丄傎偲傫偳偺旐奞売強偱偼岺帠傗廋暅偺慬抲偑庢傜傟偰偄傑偡丅僽儘僢僋僞僀儖偺曑憰偑崟偄傾僗僼傽儖僩偺摴偵側偭偰偄傞偲偙傠傪尒傞偲丄恔嵭摉帪偺偙偲傪巚偄弌偟傑偡丅"
	},
	
	
	"moriya":{
		"spots": [
		{"id":"1","name":"庣扟巗1","code":"庣扟巗1","status":"1","group":"a"},
		{"id":"2","name":"庣扟巗2","code":"庣扟巗2","status":"1","group":"a"},
		{"id":"3","name":"庣扟巗3","code":"庣扟巗3","status":"1","group":"a"},
		{"id":"4","name":"庣扟巗4","code":"庣扟巗4","status":"1","group":"a"},
		{"id":"5","name":"庣扟巗5","code":"庣扟巗5","status":"1","group":"a"},
		{"id":"6","name":"庣扟巗6","code":"庣扟巗6","status":"1","group":"a"},
		{"id":"7","name":"庣扟巗7","code":"庣扟巗7","status":"1","group":"a"},
		{"id":"8","name":"庣扟巗8","code":"庣扟巗8","status":"1","group":"a"},
		{"id":"9","name":"庣扟巗9","code":"庣扟巗9","status":"1","group":"a"},
		{"id":"10","name":"庣扟巗10","code":"庣扟巗10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"偙偙偵僥僉僗僩"
	},
	
	"namegata":{
		"spots": [
		{"id":"1","name":"峴曽巗1","code":"峴曽巗1","status":"1","group":"a"},
		{"id":"2","name":"峴曽巗2","code":"峴曽巗2","status":"1","group":"a"},
		{"id":"3","name":"峴曽巗3","code":"峴曽巗3","status":"1","group":"a"},
		{"id":"4","name":"峴曽巗4","code":"峴曽巗4","status":"1","group":"a"},
		{"id":"5","name":"峴曽巗5","code":"峴曽巗5","status":"1","group":"a"},
		{"id":"6","name":"峴曽巗6","code":"峴曽巗6","status":"1","group":"a"},
		{"id":"7","name":"峴曽巗7","code":"峴曽巗7","status":"1","group":"a"},
		{"id":"8","name":"峴曽巗8","code":"峴曽巗8","status":"1","group":"a"},
		{"id":"9","name":"峴曽巗9","code":"峴曽巗9","status":"1","group":"a"},
		{"id":"10","name":"峴曽巗10","code":"峴曽巗10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"偙偙偵僥僉僗僩"
	},
	
	"shirosato":{
		"spots": [
		{"id":"005","name":"壓毃抧嬫摴楬","code":"壓毃抧嬫","status":"1","group":"a","lat":"36.494824","lng":"140.380157"},
		{"id":"009","name":"壓毃抧嬫摴楬","code":"壓毃抧嬫","status":"0","group":"a","lat":"36.494824","lng":"140.380157"},
		{"id":"006","name":"垻攇嶳抧嬫摴楬","code":"垻攇嶳2277","status":"1","group":"b","lat":"36.51384","lng":"140.363836"},
		{"id":"010","name":"垻攇嶳抧嬫摴楬","code":"垻攇嶳2277","status":"0","group":"b","lat":"36.51384","lng":"140.363836"},
		{"id":"007","name":"摴栘嫶抧嬫","code":"摴栘嫶抧嬫","status":"1","group":"c","lat":"36.51625","lng":"140.257172"},
		{"id":"011","name":"摴栘嫶抧嬫","code":"摴栘嫶抧嬫","status":"0","group":"c","lat":"36.51625","lng":"140.257172"},
		{"id":"008","name":"摗堜愳僟儉嫶","code":"忛棦挰壓屆撪182","status":"1","group":"d","lat":"36.435543","lng":"140.35415"},
		{"id":"012","name":"摗堜愳僟儉嫶","code":"忛棦挰壓屆撪182","status":"0","group":"d","lat":"36.435543","lng":"140.35415"},
		{"id":"013","name":"僐儈儏僯僥傿僙儞僞乕","code":"忛棦挰愇捤","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"003","name":"栶応朷極","code":"忛棦挰愇捤","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"002","name":"栶応朷極揚嫀嶌嬈","code":"忛棦挰愇捤","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"004","name":"栶応廃曈摴楬","code":"忛棦挰愇捤","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"000","name":"栶応挀幵応","code":"忛棦挰愇捤","status":"1","group":"e","lat":"36.479578","lng":"140.375307"},
		{"id":"001","name":"旔擄強宖帵斅","code":"旔擄強","status":"1","group":"f"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"忛棦挰栶応"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"忛棦挰偱偼挰栶応偑戝偒側旐奞傪庴偗丄8寧偵朘傟偨嵺偼壖偺巤愝偱怑柋傪峴側偭偰偄傑偟偨丅暅媽偼偐側傝恑傫偱偄傞偲姶偠傑偟偨丅栶応偺扴摉幰偺曽偼h嵭堄幆傪崅傔偰梸偟偄苽▊羵祩醾羵膫軅祩絹B"
	},
	
	"simotuma":{
		"spots": [

		{"id":"1","name":"愮戙愳挕幧","code":"堬忛導壓嵢巗婼搟230","status":"0","group":"a","lat":"36.156536","lng":"139.963822"},
		{"id":"1a","name":"愮戙愳挕幧","code":"堬忛導壓嵢巗婼搟230","status":"1","group":"a","lat":"36.156536","lng":"139.963822"},
		{"id":"2","name":"姍掚摴楬増偄","code":"堬忛導壓嵢巗姍掚139-2","status":"0","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"2a","name":"姍掚摴楬増偄","code":"堬忛導壓嵢巗姍掚139-2","status":"1","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"3","name":"偒偸傾僋傾僗僥乕僔儑儞慜","code":"堬忛導壓嵢巗拞嫃巜933-1","status":"0","group":"a","lat":"36.162548","lng":"139.956526"},
		{"id":"3a","name":"偒偸傾僋傾僗僥乕僔儑儞慜","code":"堬忛導壓嵢巗拞嫃巜933-1","status":"1","group":"a","lat":"36.162548","lng":"139.956526"},
		{"id":"7","name":"姍掚摴楬増偄","code":"堬忛導壓嵢巗姍掚139-2","status":"0","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"7a","name":"姍掚摴楬増偄","code":"堬忛導壓嵢巗姍掚139-2","status":"1","group":"a","lat":"36.160226","lng":"139.962212"},
		{"id":"4","name":"摴偺墂偟傕偮傑","code":"堬忛導壓嵢巗悢恵140","status":"0","group":"b","lat":"36.217549","lng":"139.986180"},
		{"id":"4a","name":"摴偺墂偟傕偮傑","code":"堬忛導壓嵢巗悢恵140","status":"1","group":"b","lat":"36.217549","lng":"139.986180"},
		{"id":"5","name":"彫奓愳傆傟偁偄岞墍嬤偔","code":"堬忛導壓嵢巗杧楿1650-1","status":"0","group":"c","lat":"36.192547","lng":"139.993154"},
		{"id":"5a","name":"彫奓愳傆傟偁偄岞墍嬤偔","code":"堬忛導壓嵢巗杧楿1650-1","status":"1","group":"c","lat":"36.192547","lng":"139.993154"},
		{"id":"6","name":"嶁搶巗栶強娾堜挕幧","code":"堬忛導壓嵢巗敿扟724-1","status":"0","group":"d","lat":"36.19911","lng":"139.948479"},
		{"id":"6a","name":"嶁搶巗栶強娾堜挕幧","code":"堬忛導壓嵢巗敿扟724-1","status":"1","group":"d","lat":"36.19911","lng":"139.948479"},
		{"id":"8","name":"嶳怟摴楬増偄","code":"堬忛導壓嵢巗嶳怟47","status":"0","group":"e","lat":"36.179263","lng":"139.994249"},
		{"id":"8a","name":"嶳怟摴楬増偄","code":"堬忛導壓嵢巗嶳怟47","status":"1","group":"e","lat":"36.179263","lng":"139.994249"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"巹偼丆8寧19擔偵壓嵢巗偵峴偭偰庢嵽傪偟偰偒傑偟偨丅壓嵢巗偺恔嵭帪偺幨恀傪尒偨偲偒摴楬側偳偺抧妱傟偺旐奞偑戝偒偄偲巚偄傑偟偨偑丆杦偳偺応強偑帯偭偰偍傝丆偳偙偑夡傟偰偄偨偺偐暘偐傜側偄偔傜偄尦捠傝偺鉟楉側忬懺偵側偭偰偄傑偟偨丅堦晹棫偪擖傝嬛巭偲側偭偰偄傞偲偙傠傕庒姳偁傝傑偟偨丅"
	},
	
	
	"takahagi":{
		"spots": [
		{"id":"1","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"2","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"3","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"4","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"5","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"6","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"7","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"8","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"9","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"10","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"11","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"12","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"13","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"14","name":"戝捗峘晅嬤","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.826909","lng":"140.786723"},
		{"id":"15","name":"媽堥尨晅嬤","code":"堬忛導杒堬忛巗","status":"1","group":"a","lat":"36.796182","lng":"140.755588"},
		{"id":"16","name":"媽堥尨晅嬤","code":"堬忛導杒堬忛巗","status":"1","group":"a","lat":"36.796182","lng":"140.755588"},
		{"id":"17","name":"媽堥尨晅嬤","code":"堬忛導杒堬忛巗","status":"1","group":"a","lat":"36.796182","lng":"140.755588"},
		{"id":"18","name":"寧昹偺搾慜","code":"堬忛導杒堬忛巗堥尨挰堥尨200-3","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"19","name":"寧昹偺搾慜","code":"堬忛導杒堬忛巗堥尨挰堥尨200-3","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"20","name":"寧昹偺搾慜","code":"堬忛導杒堬忛巗堥尨挰堥尨200-3","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"21","name":"寧昹偺搾慜","code":"堬忛導杒堬忛巗堥尨挰堥尨200-3","status":"1","group":"a","lat":"36.795974","lng":"140.755604"},
		{"id":"22","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"23","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"24","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"25","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"26","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"27","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"28","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"29","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"30","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"31","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"32","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"33","name":"寧昹偺搾榚楬抧偐傜懢暯梞傊偺摴","code":"堬忛導杒堬忛巗堥尨挰","status":"1","group":"a","lat":"36.796085","lng":"140.755741"},
		{"id":"34","name":"拞嫿墂晅嬤","code":"堬忛導杒堬忛巗拞嫿挰","status":"1","group":"a","lat":"36.753146","lng":"140.729112"},
		{"id":"35","name":"旤朠慜","code":"堬忛導杒堬忛巗拞嫿挰懌愻奀娸375","status":"1","group":"a","lat":"36.759675","lng":"140.736107"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"崅攱巗偵偼8寧20擔偵朘傟傑偟偨丅巗栶強偺寶暔偼抧恔偺塭嬁偱巊偊側偔側偭偰偍傝丄怑堳偺曽偼僾儗僴僽偺拞偱巇帠傪偟偰偄傑偟偨丅偦偺廃曈偼偐側傝暅媽偟偰偍傝丄憗偔廧柉偺曽乆偑埨怱偟偰惗妶偱偒傞娐嫬偵側傟偽偄偄側偲巚偄傑偟偨丅"
	},
	
	"tikusei":{
		"spots": [
		{"id":"1","name":"戞3岝怢價儖","code":"堬忛導拀惣巗壋965","status":"1","group":"a","lat":"36.301586","lng":"139.978348"},
		{"id":"1a","name":"戞3岝怢價儖","code":"堬忛導拀惣巗壋965","status":"0","group":"a","lat":"36.301586","lng":"139.978348"},
		{"id":"2","name":"357崋慄増偄","code":"堬忛導拀惣巗妬撪357崋慄増偄","status":"1","group":"b","lat":"36.236312","lng":"139.976794"},
		{"id":"2a","name":"357崋慄増偄","code":"堬忛導拀惣巗妬撪357崋慄増偄","status":"0","group":"b","lat":"36.236312","lng":"139.976794"},
		{"id":"3","name":"娭忛巟強撿","code":"堬忛導拀惣巗娭杮壓1943-1晅嬤摴楬","status":"1","group":"c","lat":"36.25187","lng":"139.926657"},
		{"id":"3a","name":"娭忛巟強撿","code":"堬忛導拀惣巗娭杮壓1943-1晅嬤摴楬","status":"0","group":"c","lat":"36.25187","lng":"139.926657"},
		{"id":"5","name":"拀惣巗柉昦堾","code":"堬忛導拀惣巗嬍屗1658","status":"1","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"5a","name":"拀惣巗柉昦堾","code":"堬忛導拀惣巗嬍屗1658","status":"0","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"6","name":"拀惣巗柉昦堾","code":"堬忛導拀惣巗嬍屗1658","status":"1","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"7","name":"拀惣巗柉昦堾","code":"堬忛導拀惣巗嬍屗1658","status":"1","group":"d","lat":"36.296553","lng":"139.938244"},
		{"id":"8","name":"拀惣巗棫柧栰恾彂娰","code":"堬忛導拀惣巗奀榁儢搰2120-7","status":"1","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"8a","name":"拀惣巗棫柧栰恾彂娰","code":"堬忛導拀惣巗奀榁儢搰2120-7","status":"0","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"9","name":"拀惣巗棫柧栰恾彂娰","code":"堬忛導拀惣巗奀榁儢搰2120-7","status":"1","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"9a","name":"拀惣巗棫柧栰恾彂娰","code":"堬忛導拀惣巗奀榁儢搰2120-7","status":"0","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"10","name":"拀惣巗棫柧栰恾彂娰","code":"堬忛導拀惣巗奀榁儢搰2120-7","status":"1","group":"e","lat":"36.249171","lng":"140.028903"},
		{"id":"10a","name":"拀惣巗棫柧栰恾彂娰","code":"堬忛導拀惣巗奀榁儢搰2120-7","status":"0","group":"e","lat":"36.249171","lng":"140.028903"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"巹偼丆8寧19擔偵拀惣巗偵峴偭偰庢嵽傪偟偰偒傑偟偨丅拀惣巗偱偼丆昦堾側偳偺寶暔偑旐奞偑戝偒偐偭偨傜偟偔丆摉帪5奒寶偰偩偭偨傕偺偑2奒寶偰偵側偭偰偄傑偟偨丅懠偵傕旐奞偑戝偒偐偭偨摴楬側偳偼鉟楉偵曑憰偝傟丄拀惣巗偱偼暅嫽傕傎傏姰椆偟偰尦捠傝偺惗妶傪憲偭偰偄傞傛偆偵姶偠傑偟偨丅"
	},
	
	
	"tukubamirai":{
		"spots": [
		{"id":"1","name":"偮偔偽傒傜偄巗1","code":"偮偔偽傒傜偄巗1","status":"1","group":"a"},
		{"id":"2","name":"偮偔偽傒傜偄巗2","code":"偮偔偽傒傜偄巗2","status":"1","group":"a"},
		{"id":"3","name":"偮偔偽傒傜偄巗3","code":"偮偔偽傒傜偄巗3","status":"1","group":"a"},
		{"id":"4","name":"偮偔偽傒傜偄巗4","code":"偮偔偽傒傜偄巗4","status":"1","group":"a"},
		{"id":"5","name":"偮偔偽傒傜偄巗5","code":"偮偔偽傒傜偄巗5","status":"1","group":"a"},
		{"id":"6","name":"偮偔偽傒傜偄巗6","code":"偮偔偽傒傜偄巗6","status":"1","group":"a"},
		{"id":"7","name":"偮偔偽傒傜偄巗7","code":"偮偔偽傒傜偄巗7","status":"1","group":"a"},
		{"id":"8","name":"偮偔偽傒傜偄巗8","code":"偮偔偽傒傜偄巗8","status":"1","group":"a"},
		{"id":"9","name":"偮偔偽傒傜偄巗9","code":"偮偔偽傒傜偄巗9","status":"1","group":"a"},
		{"id":"10","name":"偮偔偽傒傜偄巗10","code":"偮偔偽傒傜偄巗10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"偙偙偵僥僉僗僩"
	},
	
	"tutiura":{
		"spots": [
		{"id":"3","name":"婽忛岞墍","code":"堬忛導搚塝巗拞墰1挌栚13-48","status":"1","group":"a","lat":"36.084679","lng":"140.198553"},
		{"id":"7","name":"婽忛岞墍","code":"堬忛導搚塝巗拞墰1挌栚13-48","status":"1","group":"a","lat":"36.084679","lng":"140.198553"},
		{"id":"11","name":"婽忛岞墍","code":"堬忛導搚塝巗拞墰1挌栚13-48","status":"1","group":"b","lat":"36.084679","lng":"140.198553"},
		{"id":"1","name":"搚塝巗棫搚塝戞堦拞妛峑","code":"搚塝巗暥嫗挰3-8","status":"1","group":"a","lat":"36.084584","lng":"140.194"},
		{"id":"2","name":"壋屗徖岞墍","code":"搚塝巗壋屗撿俀挌栚","status":"1","group":"a","lat":"36.031438","lng":"140.147539"},
		{"id":"4","name":"崙摴125崋慄嶗愳嫶杒","code":"搚塝巗嶗挰1挌栚","status":"1","group":"a","lat":"36.07719","lng":"140.203308"},
		{"id":"5","name":"幁搰恄幮","code":"搚塝巗恀撶4挌栚3-6 ","status":"1","group":"a","lat":"36.096992","lng":"140.203052"},
		{"id":"6","name":"悈嫿懱堢娰","code":"搚塝巗戝娾揷1651","status":"1","group":"a","lat":"36.054942","lng":"140.208895"},
		{"id":"8","name":"導摴彫栰搚塝慄摗戲抍抧榚","code":"搚塝巗摗戲","status":"1","group":"a","lat":"36.125981","lng":"140.153576"},
		{"id":"9","name":"幁搰恄幮","code":"恀撶4挌栚3-6 幁搰恄幮","status":"1","group":"b","lat":"36.096992","lng":"140.203052"},
		{"id":"10","name":"婽忛岞墍晅嬤","code":"搚塝巗拞墰","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"12","name":"婽忛岞墍晅嬤","code":"搚塝巗拞墰","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"13","name":"婽忛岞墍晅嬤","code":"搚塝巗拞墰","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"14","name":"婽忛岞墍晅嬤","code":"搚塝巗拞墰1挌栚 拞忛捠傝","status":"1","group":"b","lat":"36.084584","lng":"140.194"},
		{"id":"15","name":"摗戲 導摴彫栰搚塝慄摗戲抍抧榚","code":"搚塝巗摗戲","status":"1","group":"b","lat":"36.125981","lng":"140.153576"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"偙偺抧嬫偺恔嵭忬嫷偱偡偑丄抧尦偺曽乆偵摉帪偺帠側偳暦偒傑偟偨偑丆傗偼傝丄奨偺恖乆偼嬃偔傎偳嬯楯偝傟偨傛偆偱偡丅偙偺抧嬫傕丆杔偑峫偊偰偄偨埲忋偵抧恔偺旐奞偼戝偒偔丆嵞敪偟偨偲偒偵椻惷偵峴摦偱偒傞傛偆怱妡偗傞傋偒偩偲巚偄傑偟偨丅"
	},
	
	"sakuragawa":{
		"spots": [
		{"id":"008","name":"恀暻偺楌巎揑寶憿暔","code":"恀暻213-1","status":"1","group":"a","lat":"36.277221","lng":"140.099141"},
		{"id":"017","name":"恀暻偺楌巎揑寶憿暔","code":"恀暻213-1","status":"0","group":"a","lat":"36.277221","lng":"140.099141"},
		{"id":"013","name":"恀暻偺寶憿暔","code":"恀暻232","status":"1","group":"a","lat":"36.278049","lng":"140.097841"},
		{"id":"016","name":"恀暻偺寶憿暔","code":"恀暻232","status":"0","group":"a","lat":"36.278049","lng":"140.097841"},
		{"id":"015","name":"恀暻偺楌巎揑寶憿暔","code":"恀暻189","status":"1","group":"a","lat":"36.277142","lng":"140.099092"},
		{"id":"020","name":"恀暻偺楌巎揑寶憿暔","code":"恀暻189","status":"0","group":"a","lat":"36.277142","lng":"140.099092"},
		{"id":"009","name":"恀暻偺楌巎揑寶憿暔","code":"恀暻200","status":"1","group":"a","lat":"36.276721","lng":"140.100301"},
		{"id":"019","name":"恀暻偺楌巎揑寶憿暔","code":"恀暻200","status":"0","group":"a","lat":"36.276721","lng":"140.100301"},
		{"id":"011","name":"巗摴","code":"搶栴奓318-3","status":"1","group":"a","lat":"36.298","lng":"140.073655"},
		{"id":"000","name":"巗摴","code":"搶栴奓318-3","status":"0","group":"a","lat":"36.298","lng":"140.073655"},
		{"id":"007","name":"戝榓墂","code":"崅怷抧嬫","status":"1","group":"b","lat":"36.345476","lng":"140.073385"},
		{"id":"001","name":"戝榓墂","code":"崅怷抧嬫","status":"0","group":"b","lat":"36.345476","lng":"140.073385"},
		{"id":"014","name":"崅怷抧嬫僽儘僢僋暬","code":"崅怷717","status":"1","group":"b","lat":"36.343547","lng":"140.074486"},
		{"id":"002","name":"崅怷抧嬫僽儘僢僋暬","code":"崅怷717","status":"0","group":"b","lat":"36.343547","lng":"140.074486"},
		{"id":"012","name":"嶗愳岞墍","code":"堥晹667","status":"1","group":"c","lat":"36.366191","lng":"140.137907"},
		{"id":"003","name":"嶗愳岞墍","code":"堥晹667","status":"0","group":"c","lat":"36.366191","lng":"140.137907"},
		{"id":"006","name":"惣彫敺抧嬫廧戭","code":"惣彫敺683","status":"1","group":"d","lat":"36.359172","lng":"140.153317"},
		{"id":"004","name":"惣彫敺抧嬫廧戭","code":"惣彫敺683","status":"0","group":"d","lat":"36.359172","lng":"140.153317"},
		{"id":"005","name":"惣彫敺抧嬫摴楬","code":"惣彫敺683","status":"1","group":"d","lat":"36.359172","lng":"140.153317"},
		{"id":"010","name":"惣彫敺抧嬫摴楬","code":"惣彫敺683","status":"0","group":"d","lat":"36.359172","lng":"140.153317"}
		],	
		"data":[
			{"donor":"屄恖嶣塭"},
			{"donor":"堬忛導嫵堢挕憤柋壽"}
		],
		"comment":"嶗愳巗偱偼楌巎揑側寶憿暔偑懡偔旐奞傪庴偗偨傛偆偱偡偑丄偦傟傜偼傑偩廋暅偑姰椆偟偰偄側偄傕偺偑杦偳偱偟偨丅寶暔偺僽儘僢僋側偳偺搢夡偑懡偔尒傜傟丄抧恔偑婲偙偭偨嵺偵偼搢夡偟偦偆側傕偺偐傜偡偖偵棧傟傞傋偒偩偲姶偠傑偟偨丅"
	},
	
	"disney":{
		"spots": [
		{"id":"3","name":"僂僅儖僩僨傿僘僯乕揥 3","code":"","status":"0","group":"a"},
		{"id":"4","name":"僂僅儖僩僨傿僘僯乕揥 4","code":"","status":"0","group":"a"},
		{"id":"5","name":"僂僅儖僩僨傿僘僯乕揥 5","code":"","status":"0","group":"a"},
		{"id":"6","name":"僂僅儖僩僨傿僘僯乕揥 6","code":"","status":"0","group":"a"},
		{"id":"7","name":"僂僅儖僩僨傿僘僯乕揥 7","code":"","status":"0","group":"a"},
		{"id":"8","name":"僂僅儖僩僨傿僘僯乕揥 8","code":"","status":"0","group":"a"},
		{"id":"9","name":"僂僅儖僩僨傿僘僯乕揥 9","code":"","status":"0","group":"a"},
		{"id":"10","name":"僂僅儖僩僨傿僘僯乕揥 10","code":"","status":"0","group":"a"},
		{"id":"11","name":"僂僅儖僩僨傿僘僯乕揥 11","code":"","status":"0","group":"a"},
		{"id":"12","name":"僂僅儖僩僨傿僘僯乕揥 12","code":"","status":"0","group":"a"},
		{"id":"13","name":"僂僅儖僩僨傿僘僯乕揥 13","code":"","status":"0","group":"a"},
		{"id":"14","name":"僂僅儖僩僨傿僘僯乕揥 14","code":"","status":"0","group":"a"},
		{"id":"15","name":"僂僅儖僩僨傿僘僯乕揥 15","code":"","status":"0","group":"a"},
		{"id":"16","name":"僂僅儖僩僨傿僘僯乕揥 16","code":"","status":"0","group":"a"},
		{"id":"17","name":"僂僅儖僩僨傿僘僯乕揥 17","code":"","status":"0","group":"a"},
		{"id":"18","name":"僂僅儖僩僨傿僘僯乕揥 18","code":"","status":"0","group":"a"},
		{"id":"19","name":"僂僅儖僩僨傿僘僯乕揥 19","code":"","status":"0","group":"a"},
		{"id":"20","name":"僂僅儖僩僨傿僘僯乕揥 20","code":"","status":"0","group":"a"},
		{"id":"21","name":"僂僅儖僩僨傿僘僯乕揥 21","code":"","status":"0","group":"a"},
		{"id":"22","name":"僂僅儖僩僨傿僘僯乕揥 22","code":"","status":"0","group":"a"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"minamisanriku":{
		"spots": [
		{"id":"1","name":"撿嶰棨挰1","code":"撿嶰棨挰1","status":"1","group":"a"},
		{"id":"2","name":"撿嶰棨挰2","code":"撿嶰棨挰2","status":"1","group":"a"},
		{"id":"3","name":"撿嶰棨挰3","code":"撿嶰棨挰3","status":"1","group":"a"},
		{"id":"4","name":"撿嶰棨挰4","code":"撿嶰棨挰4","status":"1","group":"a"},
		{"id":"5","name":"撿嶰棨挰5","code":"撿嶰棨挰5","status":"1","group":"a"},
		{"id":"6","name":"撿嶰棨挰6","code":"撿嶰棨挰6","status":"1","group":"a"},
		{"id":"7","name":"撿嶰棨挰7","code":"撿嶰棨挰7","status":"1","group":"a"},
		{"id":"8","name":"撿嶰棨挰8","code":"撿嶰棨挰8","status":"1","group":"a"},
		{"id":"9","name":"撿嶰棨挰9","code":"撿嶰棨挰9","status":"1","group":"a"},
		{"id":"10","name":"撿嶰棨挰10","code":"撿嶰棨挰10","status":"1","group":"a"},
		{"id":"11","name":"撿嶰棨挰11","code":"撿嶰棨挰11","status":"1","group":"a"},
		{"id":"12","name":"撿嶰棨挰12","code":"撿嶰棨挰12","status":"1","group":"a"},
		{"id":"13","name":"撿嶰棨挰13","code":"撿嶰棨挰13","status":"1","group":"a"},
		{"id":"14","name":"撿嶰棨挰14","code":"撿嶰棨挰14","status":"1","group":"a"},
		{"id":"15","name":"撿嶰棨挰11","code":"撿嶰棨挰11","status":"1","group":"a"},
		{"id":"16","name":"撿嶰棨挰12","code":"撿嶰棨挰12","status":"1","group":"a"},
		{"id":"17","name":"撿嶰棨挰13","code":"撿嶰棨挰13","status":"1","group":"a"},
		{"id":"18","name":"撿嶰棨挰14","code":"撿嶰棨挰14","status":"1","group":"a"},
		{"id":"19","name":"撿嶰棨挰11","code":"撿嶰棨挰11","status":"1","group":"a"},
		{"id":"20","name":"撿嶰棨挰12","code":"撿嶰棨挰12","status":"1","group":"a"},
		{"id":"21","name":"撿嶰棨挰13","code":"撿嶰棨挰13","status":"1","group":"a"},
		{"id":"22","name":"撿嶰棨挰14","code":"撿嶰棨挰14","status":"1","group":"a"},
		{"id":"23","name":"撿嶰棨挰10","code":"撿嶰棨挰10","status":"1","group":"a"},
		{"id":"24","name":"撿嶰棨挰11","code":"撿嶰棨挰11","status":"1","group":"a"},
		{"id":"25","name":"撿嶰棨挰12","code":"撿嶰棨挰12","status":"1","group":"a"},
		{"id":"26","name":"撿嶰棨挰13","code":"撿嶰棨挰13","status":"1","group":"a"},
		{"id":"27","name":"撿嶰棨挰14","code":"撿嶰棨挰14","status":"1","group":"a"},
		{"id":"28","name":"撿嶰棨挰11","code":"撿嶰棨挰11","status":"1","group":"a"},
		{"id":"29","name":"撿嶰棨挰12","code":"撿嶰棨挰12","status":"1","group":"a"},
		{"id":"30","name":"撿嶰棨挰13","code":"撿嶰棨挰13","status":"1","group":"a"},
		{"id":"31","name":"撿嶰棨挰14","code":"撿嶰棨挰14","status":"1","group":"a"},
		{"id":"32","name":"撿嶰棨挰11","code":"撿嶰棨挰11","status":"1","group":"a"},
		{"id":"33","name":"撿嶰棨挰12","code":"撿嶰棨挰12","status":"1","group":"a"},
		{"id":"34","name":"撿嶰棨挰13","code":"撿嶰棨挰13","status":"1","group":"a"},
		{"id":"35","name":"撿嶰棨挰14","code":"撿嶰棨挰14","status":"1","group":"a"},
		{"id":"36","name":"撿嶰棨挰10","code":"撿嶰棨挰10","status":"1","group":"a"},
		{"id":"37","name":"撿嶰棨挰11","code":"撿嶰棨挰11","status":"1","group":"a"},
		{"id":"38","name":"撿嶰棨挰12","code":"撿嶰棨挰12","status":"1","group":"a"},
		{"id":"39","name":"撿嶰棨挰13","code":"撿嶰棨挰13","status":"1","group":"a"},
		{"id":"40","name":"撿嶰棨挰14","code":"撿嶰棨挰14","status":"1","group":"a"},
		{"id":"41","name":"撿嶰棨挰11","code":"撿嶰棨挰11","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"墶嶳揹岺"}
		],
		"comment":"偙偙偵僥僉僗僩"
	},
	
	"sendai":{
		"spots": [
		{"id":"1","name":"愬戜巗1","code":"愬戜巗1","status":"1","group":"b"},
		{"id":"2","name":"愬戜巗2","code":"愬戜巗2","status":"1","group":"b"},
		{"id":"3","name":"愬戜巗3","code":"愬戜巗3","status":"1","group":"b"},
		{"id":"4","name":"愬戜巗4","code":"愬戜巗4","status":"1","group":"b"},
		{"id":"5","name":"愬戜巗5","code":"愬戜巗5","status":"1","group":"b"},
		{"id":"6","name":"愬戜巗6","code":"愬戜巗6","status":"1","group":"b"},
		{"id":"7","name":"愬戜巗7","code":"愬戜巗7","status":"1","group":"b"},
		{"id":"8","name":"愬戜巗8","code":"愬戜巗8","status":"1","group":"b"},
		{"id":"9","name":"愬戜巗9","code":"愬戜巗9","status":"1","group":"b"},
		{"id":"10","name":"愬戜巗10","code":"愬戜巗10","status":"1","group":"b"},
		{"id":"11","name":"愬戜巗11","code":"愬戜巗11","status":"1","group":"b"},
		{"id":"12","name":"愬戜巗12","code":"愬戜巗12","status":"1","group":"b"},
		{"id":"13","name":"愬戜巗13","code":"愬戜巗13","status":"1","group":"b"},
		{"id":"14","name":"愬戜巗14","code":"愬戜巗14","status":"1","group":"b"},
		{"id":"15","name":"愬戜巗11","code":"愬戜巗11","status":"1","group":"b"},
		{"id":"16","name":"愬戜巗12","code":"愬戜巗12","status":"1","group":"b"},
		{"id":"17","name":"愬戜巗13","code":"愬戜巗13","status":"1","group":"b"},
		{"id":"18","name":"愬戜巗14","code":"愬戜巗14","status":"1","group":"b"},
		{"id":"19","name":"愬戜巗11","code":"愬戜巗11","status":"1","group":"b"},
		{"id":"20","name":"愬戜巗12","code":"愬戜巗12","status":"1","group":"b"},
		{"id":"21","name":"愬戜巗13","code":"愬戜巗13","status":"1","group":"b"},
		{"id":"22","name":"愬戜巗14","code":"愬戜巗14","status":"1","group":"b"},
		{"id":"23","name":"愬戜巗10","code":"愬戜巗10","status":"1","group":"b"},
		{"id":"24","name":"愬戜巗11","code":"愬戜巗11","status":"1","group":"b"},
		{"id":"25","name":"愬戜巗12","code":"愬戜巗12","status":"1","group":"b"},
		{"id":"26","name":"愬戜巗13","code":"愬戜巗13","status":"1","group":"b"}
		],	
		"data":[
			{"donor":"墶嶳揹岺"}
		],
		"comment":"偙偙偵僥僉僗僩"
	},
	
	"kesennuma":{
		"spots": [
		{"id":"1","name":"婥愬徖巗1","code":"婥愬徖巗1","status":"1","group":"c"},
		{"id":"2","name":"婥愬徖巗2","code":"婥愬徖巗2","status":"1","group":"c"},
		{"id":"3","name":"婥愬徖巗3","code":"婥愬徖巗3","status":"1","group":"c"},
		{"id":"4","name":"婥愬徖巗4","code":"婥愬徖巗4","status":"1","group":"c"},
		{"id":"5","name":"婥愬徖巗5","code":"婥愬徖巗5","status":"1","group":"c"},
		{"id":"6","name":"婥愬徖巗6","code":"婥愬徖巗6","status":"1","group":"c"},
		{"id":"7","name":"婥愬徖巗7","code":"婥愬徖巗7","status":"1","group":"c"},
		{"id":"8","name":"婥愬徖巗8","code":"婥愬徖巗8","status":"1","group":"c"},
		{"id":"9","name":"婥愬徖巗9","code":"婥愬徖巗9","status":"1","group":"c"},
		{"id":"10","name":"婥愬徖巗10","code":"婥愬徖巗10","status":"1","group":"c"},
		{"id":"11","name":"婥愬徖巗11","code":"婥愬徖巗11","status":"1","group":"c"},
		{"id":"12","name":"婥愬徖巗12","code":"婥愬徖巗12","status":"1","group":"c"},
		{"id":"13","name":"婥愬徖巗13","code":"婥愬徖巗13","status":"1","group":"c"},
		{"id":"14","name":"婥愬徖巗14","code":"婥愬徖巗14","status":"1","group":"c"},
		{"id":"15","name":"婥愬徖巗10","code":"婥愬徖巗10","status":"1","group":"c"},
		{"id":"16","name":"婥愬徖巗11","code":"婥愬徖巗11","status":"1","group":"c"},
		{"id":"17","name":"婥愬徖巗12","code":"婥愬徖巗12","status":"1","group":"c"},
		{"id":"18","name":"婥愬徖巗13","code":"婥愬徖巗13","status":"1","group":"c"},
		{"id":"19","name":"婥愬徖巗14","code":"婥愬徖巗14","status":"1","group":"c"},
		{"id":"20","name":"婥愬徖巗10","code":"婥愬徖巗10","status":"1","group":"c"},
		{"id":"21","name":"婥愬徖巗11","code":"婥愬徖巗11","status":"1","group":"c"}
		],	
		"data":[
			{"donor":"墶嶳揹岺"}
		],
		"comment":"偙偙偵僥僉僗僩"
	}
	
	
};







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//				ver.engrish
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*
ensearch:key傪尦偵json.list忋偱偺斣抧傪専嶕
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
enwritehead:Header忣曬傪弌椡
---------------------------------------*/

function enwritehead(){

document.write('<h2>'+enjson.list[keyNumber].jname+'</h2>');
	document.write('<div class="left">Total Image courtesy 丗'+eval("enjson."+key+".spots.length")+'<br>');
	for(var i=0; i<eval("enjson."+key+".data.length");i++){
		document.write('<li>'+eval("enjson."+key+".data[i].donor")+'</li>');
	}
	if( enjson.list[keyNumber].by != 'none'){
	document.write('<br><div class="face">Impression of an interview丗('+enjson.list[keyNumber].byj+')<table><tr>');
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
enwriteImggrid:夋憸Grid傪弌椡
---------------------------------------*/

function enwriteImggrid(){
var status;

	document.write('<div class="point">\
		<table>\
			<tr><td><img src="img/marker/blue-dot.png">or丂<span class="status0">Current</span></td><td>This point, the image has been published (taken before July - November 2012) now.</td></tr>\
			<tr><td><img src="img/marker/red-dot.png">or丂<span class="status1">At the time the earthquake</span></td><td>This point, the image has been published immediately after the earthquake.</td></tr>\
		</table>\
	</div>');
	for(var j=1; j<=eval("enjson."+key+".spots.length"); j++){
		var spot = eval("enjson."+key+".spots[j-1]");
			if(spot.status == 1){
				
					status = 'At the time the earthquake';
			}else{
			status = 'Current';
			}
	document.write('<a class="fancy" data-fancybox-type="image" data-fancybox-group="'+spot.group+'" href="img/photo/'+enjson.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'丂'+spot.name+' '+status+'偺條巕">');
	document.write('<div class="four columns photocolumns ">');
	document.write('<div class=" cap">');
	document.write('<img src="img/photo/'+enjson.list[keyNumber].name+'/' + spot.id + '.jpg" height="90%"/>');
	//document.write('');
	document.write('<span class="status'+spot.status+'">'+status+'</span><p>'+spot.name+'</p></div>');
	document.write('</div></a>');}

}

/*
enwritelist:巗挰懞儕僗僩傪弌椡
---------------------------------------*/

function enwritelist(){

	var count_img = 0;
	for(var i=4; i<enjson.list.length; i++){
		if(enjson.list[i].name == 'ami'){
		document.write('</div><div class="twelve columns panel row">Other<br>');
		}
		document.write('<a href="en_photo_'+enjson.list[i].name+'.html"><div class="four columns photo">');
		document.write('<h3  id="'+enjson.list[i].name+'">'+enjson.list[i].jname+'</h3><div>丂');
		if(i <  24 ){
		document.write('Reporters丗'+enjson.list[i].byj+'丂');
		}
		document.write('Pictures 丗'+eval("enjson."+enjson.list[i].name+".spots.length")+'</div>');
		document.write('</div>');
		document.write('</a>');
		count_img = count_img + eval("enjson."+enjson.list[i].name+".spots.length");
	}
	count_img = count_img-6;
	document.getElementById('imgcounter').innerHTML= 'Total number of images 丗'+count_img+'';
	document.getElementById('imgcontent').innerHTML= 'Regions 丗'+enjson.list.length+'';



	
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
	
	var ContentStr = '<a class="fancy" href="img/photo/'+enjson.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'丂'+spot.name+' '+status+'"  data-fancybox-type="image" data-fancybox-group="1">'+spot.name+'</a>';
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
		{"jname":"僂僅儖僩僨傿僯乕揥","name":"disney","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"撿嶰棨挰","name":"minamisanriku","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"婥愬徖巗","name":"kesennuma","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"愬戜巗","name":"sendai","by":"3_kobayashi","byj":"Masaki.K."},
		
		{"jname":"Inashiki丂City","name":"inasiki","by":"1_kamihara","byj":"Takumi.K.","lat":"35.956568","lng":"140.323918"},
		{"jname":"Ibaraki丂Town","name":"ibarakimati","by":"2_suzuki","byj":"Yumi.S.","lat":"36.287456","lng":"140.424585"},
		{"jname":"Oarai丂Town","name":"oarai","by":"3_kobayashi","byj":"Masaki.K.","lat":"36.313186","lng":"140.575021"},
		{"jname":"Kasama丂丂City","name":"kasama","by":"2_suzuki","byj":"Yumi.S.","lat":"36.354398","lng":"140.30365"},
		{"jname":"Kasumigaura丂City","name":"kasumigaura","by":"2_suzuki","byj":"Yumi.S.","lat":"36.158944","lng":"140.237045"},
		{"jname":"Kitaibaraki丂丂City","name":"kitaibaraki","by":"1_minami","byj":"Kaori.M.","lat":"36.801867","lng":"140.751048"},
		{"jname":"Sakuragawa丂City","name":"sakuragawa","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.327296","lng":"140.090397"},
		{"jname":"Shimotsuma丂City","name":"simotuma","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.191646","lng":"139.967485"},
		{"jname":"Joso丂City","name":"jyoso","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.032998","lng":"139.99799"},
		{"jname":"Shirosato丂Town","name":"shirosato","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.479293","lng":"140.376195"},
		{"jname":"Takahagi丂City","name":"takahagi","by":"1_minami","byj":"Kaori.M.","lat":"36.713747","lng":"140.709546"},
		{"jname":"Chikusei丂City","name":"tikusei","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.320658","lng":"139.98151"},
		{"jname":"Tsuchiura丂City","name":"tutiura","by":"1_kamihara","byj":"Takumi.K.","lat":"36.071827","lng":"140.195968"},
		{"jname":"Bando丂City","name":"bandou","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.057981","lng":"139.886753"},
		{"jname":"Hitachi丂City","name":"hitati","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.598992","lng":"140.65226"},
		{"jname":"Hitachiota丂City","name":"hitachioota","by":"1_minami","byj":"Kaori.M.","lat":"36.538295","lng":"140.530951"},
		{"jname":"Hitachi Omiya丂City","name":"hitatioomiya","by":"1_minami","byj":"Kaori.M.","lat":"36.542555","lng":"140.410968"},
		{"jname":"Hitachinaka丂City","name":"hitachinaka","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.396553","lng":"140.534607"},
		{"jname":"Hokota丂City","name":"hokota","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.158606","lng":"140.516547"},
		{"jname":"Mito丂City","name":"mito","by":"2_suzuki","byj":"Yumi.S.","lat":"36.365837","lng":"140.471191"},
		
		{"jname":"Ami丂Town","name":"ami","by":"none","byj":"none","lat":"36.037995","lng":"140.214334"},
		{"jname":"Kashima丂City","name":"kasima","by":"none","byj":"none","lat":"35.979117","lng":"140.644123"},
		{"jname":"Kawauti丂Town","name":"kawauti","by":"none","byj":"none","lat":"35.896281","lng":"140.243809"},
		{"jname":"Tukubamirai丂City","name":"tukubamirai","by":"none","byj":"none","lat":"35.967448","lng":"140.035463"},
		{"jname":"Namegata丂City","name":"namegata","by":"none","byj":"none","lat":"35.994119","lng":"140.491001"},	
		{"jname":"Moriya丂City","name":"moriya","by":"none","byj":"none","lat":"35.951052","lng":"139.975725"}
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
		{"id":"1","name":"Ami丂Town丂1","code":"Ami丂Town丂1","status":"1","group":"a"},
		{"id":"2","name":"Ami丂Town丂2","code":"Ami丂Town丂2","status":"1","group":"a"},
		{"id":"3","name":"Ami丂Town丂3","code":"Ami丂Town丂3","status":"1","group":"a"},
		{"id":"4","name":"Ami丂Town丂4","code":"Ami丂Town丂4","status":"1","group":"a"},
		{"id":"5","name":"Ami丂Town丂5","code":"Ami丂Town丂5","status":"1","group":"a"},
		{"id":"6","name":"Ami丂Town丂6","code":"Ami丂Town丂6","status":"1","group":"a"},
		{"id":"7","name":"Ami丂Town丂7","code":"Ami丂Town丂7","status":"1","group":"a"},
		{"id":"8","name":"Ami丂Town丂8","code":"Ami丂Town丂8","status":"1","group":"a"},
		{"id":"9","name":"Ami丂Town丂9","code":"Ami丂Town丂9","status":"1","group":"a"}
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
		{"id":"1","name":"Kawachi丂1","code":"Kawachi丂1","status":"1","group":"a"},
		{"id":"2","name":"Kawachi丂2","code":"Kawachi丂2","status":"1","group":"a"},
		{"id":"3","name":"Kawachi丂3","code":"Kawachi丂3","status":"1","group":"a"},
		{"id":"4","name":"Kawachi丂4","code":"Kawachi丂4","status":"1","group":"a"},
		{"id":"5","name":"Kawachi丂5","code":"Kawachi丂5","status":"1","group":"a"},
		{"id":"6","name":"Kawachi丂6","code":"Kawachi丂6","status":"1","group":"a"},
		{"id":"7","name":"Kawachi丂7","code":"Kawachi丂7","status":"1","group":"a"},
		{"id":"8","name":"Kawachi丂8","code":"Kawachi丂8","status":"1","group":"a"},
		{"id":"9","name":"Kawachi丂9","code":"Kawachi丂9","status":"1","group":"a"}
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
		{"id":"1","name":"Moriya丂City丂1","code":"Moriya丂City丂1","status":"1","group":"a"},
		{"id":"2","name":"Moriya丂City丂2","code":"Moriya丂City丂2","status":"1","group":"a"},
		{"id":"3","name":"Moriya丂City丂3","code":"Moriya丂City丂3","status":"1","group":"a"},
		{"id":"4","name":"Moriya丂City丂4","code":"Moriya丂City丂4","status":"1","group":"a"},
		{"id":"5","name":"Moriya丂City丂5","code":"Moriya丂City丂5","status":"1","group":"a"},
		{"id":"6","name":"Moriya丂City丂6","code":"Moriya丂City丂6","status":"1","group":"a"},
		{"id":"7","name":"Moriya丂City丂7","code":"Moriya丂City丂7","status":"1","group":"a"},
		{"id":"8","name":"Moriya丂City丂8","code":"Moriya丂City丂8","status":"1","group":"a"},
		{"id":"9","name":"Moriya丂City丂9","code":"Moriya丂City丂9","status":"1","group":"a"},
		{"id":"10","name":"Moriya丂City丂10","code":"Moriya丂City丂10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"namegata":{
		"spots": [
		{"id":"1","name":"Namegata City丂1","code":"Namegata City 1","status":"1","group":"a"},
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
			{"donor":"Town hall丂Shirosato"},
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
		"comment":"偙偙偵僥僉僗僩"
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
		"comment":"偙偙偵僥僉僗僩"
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
		"comment":"偙偙偵僥僉僗僩"
	}
	
};

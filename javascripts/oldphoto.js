/*-------------------------------------------------------------------------
			Photo.js	
	
	Copyright (C) 2012 �k�Ђɂ��čl����T�C�g All Rights Reserved. by Makky
----------------------------------------------------------------------------*/



/*
search:key������json.list��ł̔Ԓn������
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
writehead:Header�����o��
---------------------------------------*/
function writehead(){
	/*document.write('<h1>'+json.list[keyNumber].jname+'</h1>');
	document.write('<div class="left">�摜�񋟁F�v'+eval("json."+key+".spots.length")+'��<br>');
	for(var i=0; i<eval("json."+key+".data.length");i++){
		document.write('<li>'+eval("json."+key+".data[i].donor")+'</li>');
	}
	if( json.list[keyNumber].by != 'none'){
	document.write('<br><div class="face">��ގ҂̊��z�F('+json.list[keyNumber].byj+')<table><tr>');
	document.write('<td><img src="img/face/'+json.list[keyNumber].by+'.jpg" width="120" height="170" ></td><td>');
	document.write('<p>'+eval("json."+key+".comment")+'</p>');
	document.write('</td></tr></table></div>');
	}else{
	document.write('<br><br><br><p>���̒n��̐k�Џ󋵂ł����A�n���̕��X�ɓ����̎��ȂǕ����܂������C��͂�A�X�̐l�X�͋����قǋ�J<br>���ꂽ�悤�ł��B���̒n����C���B���l���Ă����ȏ�ɒn�k�̔�Q�͑傫���C�Ĕ������Ƃ��ɗ�Âɍs���ł����<br>���S�|����ׂ����Ǝv���܂����B</p>');
	}
	document.write('</div><div class="right"><img src="img/photo/'+json.list[keyNumber].name+'/'+json.list[keyNumber].name+'.jpg"/></div>');
	document.write('<br><br>');
	$("title").text(json.list[keyNumber].jname + "-Photo:�k�Ђɂ��čl����T�C�g");*/
	
	document.write('<a href="photo.html">back</a><h1>'+json.list[keyNumber].jname+'</h1>');
	document.write('<div class="left">�摜�񋟁F�v'+eval("json."+key+".spots.length")+'��<br>');
	for(var i=0; i<eval("json."+key+".data.length");i++){
		document.write('<li>'+eval("json."+key+".data[i].donor")+'</li>');
	}
	if( json.list[keyNumber].by != 'none'){
	document.write('<br><div class="face">��ގ҂̊��z�F('+json.list[keyNumber].byj+')<table><tr>');
	//document.write('<td><img src="img/face/'+json.list[keyNumber].by+'.jpg" width="120" height="170" ></td>');
	document.write('<td><p>'+eval("json."+key+".comment")+'</p>');
	document.write('</td></tr></table></div>');
	}else{
	document.write('<br><br><br><p>���̒n��̐k�Џ󋵂ł����A�n���̕��X�ɓ����̎��ȂǕ����܂������C��͂�A�X�̐l�X�͋����قǋ�J<br>���ꂽ�悤�ł��B���̒n����C���B���l���Ă����ȏ�ɒn�k�̔�Q�͑傫���C�Ĕ������Ƃ��ɗ�Âɍs���ł����<br>���S�|����ׂ����Ǝv���܂����B</p>');
	}
	//document.write('</div><div class="right"><img src="img/photo/'+json.list[keyNumber].name+'/'+json.list[keyNumber].name+'.jpg"/></div>');
	document.write('<br><br>');
}

/*
writeImggrid:�摜Grid���o��
---------------------------------------*/
function writeImggrid(){
	var status;

	/*for(var j=1; j<=eval("json."+key+".spots.length"); j++){
		var spot = eval("json."+key+".spots[j-1]");
			if(spot.status == 1){
				status = '�k�Г���';
			}else{
				status = '����';
			}
	document.write('<a class="fancy" data-fancybox-type="image" data-fancybox-group="'+spot.group+'" href="img/photo/'+json.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'�@'+spot.name+' '+status+'�̗l�q">');
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
				status = '�k�Г���';
			}else{
				status = '����';
			}
	document.write('<a class="fancy" data-fancybox-type="image" data-fancybox-group="'+spot.group+'" href="img/photo/'+json.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'�@'+spot.name+' '+status+'�̗l�q">');
	document.write('<div class="photgrid">');
	document.write('<div class="cap">');
	document.write('<img src="img/photo/'+json.list[keyNumber].name+'/' + spot.id + '.jpg" width="239" height="210"/>');
	document.write('<span class="status'+spot.status+'">'+status+'</span>');
	document.write('</div><p>'+spot.name+'</p>');
	document.write('</div></a>');
	}
}

/*
writelist:�s�������X�g���o��
---------------------------------------*/
function writelist(){
	var count_img = 0;
	for(var i=0; i<json.list.length; i++){
	
		if(json.list[i].name == 'ami'){
		document.write('<br><div class="point">���̑��̉摜</div><br>');
		}
		document.write('<a href="photo_'+json.list[i].name+'.html"><div class="content_menu">');
		document.write('<h2>'+json.list[i].jname+'</h2><div>');
		//if(i <  20 ){
		//document.write('��ގҁF'+json.list[i].byj+'�@');
		//}
		document.write('�摜�F'+eval("json."+json.list[i].name+".spots.length")+'��</div>');
		document.write('</div>');
		document.write('</a><hr>');
		count_img = count_img + eval("json."+json.list[i].name+".spots.length");
	}
	document.getElementById('imgcounter').innerHTML= '�摜�����F'+count_img+'��';
	document.getElementById('imgcontent').innerHTML= '��ޒn��F'+json.list.length+'�ӏ�';
}

/*
		document.write('<a href="photo_'+json.list[i].name+'.html"><div class="listgrid"><div class="cap">');
		document.write('<img src="img/photo/'+json.list[i].name+'/'+eval("json."+json.list[i].name+".spots[0].id")+'.jpg" width="490" height="380" class="imgcap"><br>');	
		document.write('<h1>'+json.list[i].jname+'</h1><br>');
		document.write('<div>��ގҁF'+json.list[i].byj+'�@');
		document.write('�摜�F'+eval("json."+json.list[i].name+".spots.length")+'��</div><br>');
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
	infowindow.content = '������<a href="photo_'+spot.name+'.html">'+spot.jname+'</a>�ł�';
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
	//infowindow.content = '������<a href="photo_'+spot.name+'.html">'+spot.jname+'</a>�ł�';
	//});
	}
}






////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


/*--------------------�摜����DataBase---------------------------------------------
var json = 
{
	"list":
		[
		{"jname":"�s������","name":"�s������","by":"�S���Җ�","byj":"�S���Җ�"},
		{"jname":"�s������","name":"�s������","by":"�S���Җ�","byj":"�S���Җ�"}
		],
	"�s������":{
		"spots": [
			{"id":"1","name":"���O","code":"�Z��","status":"1","group":"a"},
			{"id":"2","name":"���O","code":"�Z��","status":"0","group":"b"}
		],	
		"data":[
			{"donor":"�񋟎�"},
			{"donor":"�񋟎�"}
		],
		"comment":"�e�L�X�g"
	}
};
--------------------------------------------------------------------------------*/


var json = 
{
	"list":
		[
		//{"jname":"��O����","name":"minamisanriku","by":"3_kobayashi","byj":"Masaki.K."},
		//{"jname":"�C����s","name":"kesennuma","by":"3_kobayashi","byj":"Masaki.K."},
		//{"jname":"���s","name":"sendai","by":"3_kobayashi","byj":"Masaki.K."},
		
		{"jname":"��~�s","name":"inasiki","by":"1_kamihara","byj":"Takumi.K.","lat":"35.956568","lng":"140.323918"},
		//{"jname":"��钬","name":"ibarakimati","by":"2_suzuki","byj":"Yumi.S."},
		{"jname":"�����","name":"oarai","by":"3_kobayashi","byj":"Masaki.K.","lat":"36.313186","lng":"140.575021"},
		{"jname":"�}�Ԏs","name":"kasama","by":"2_suzuki","byj":"Yumi.S.","lat":"36.348038","lng":"140.297419"},
		//{"jname":"�����݂�����s","name":"kasumigaura","by":"2_suzuki","byj":"Yumi.S."},
		{"jname":"�k���s","name":"kitaibaraki","by":"1_minami","byj":"Kaori.M.","lat":"36.801867","lng":"140.751048"},
		{"jname":"����s","name":"sakuragawa","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.327296","lng":"140.090397"},
		{"jname":"���Ȏs","name":"simotuma","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.191646","lng":"139.967485"},
		{"jname":"�푍�s","name":"jyoso","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.032998","lng":"139.99799"},
		{"jname":"�闢��","name":"shirosato","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.479293","lng":"140.376195"},
		{"jname":"�����s","name":"takahagi","by":"1_minami","byj":"Kaori.M.","lat":"36.713747","lng":"140.709546"},
		{"jname":"�}���s","name":"tikusei","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.320658","lng":"139.98151"},
		{"jname":"�y�Y�s","name":"tutiura","by":"1_kamihara","byj":"Takumi.K.","lat":"36.071827","lng":"140.195968"},
		{"jname":"�Ⓦ�s","name":"bandou","by":"1_suzuki","byj":"Kyouka.S.","lat":"36.057981","lng":"139.886753"},
		//{"jname":"�����s","name":"hitati","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"�헤���c�s","name":"hitachioota","by":"1_minami","byj":"Kaori.M.","lat":"36.538295","lng":"140.530951"},
		{"jname":"�헤��{�s","name":"hitatioomiya","by":"1_minami","byj":"Kaori.M.","lat":"36.542555","lng":"140.410968"},
		{"jname":"�Ђ����Ȃ��s","name":"hitachinaka","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.396553","lng":"140.534607"},
		{"jname":"�g�c�s","name":"hokota","by":"1_kobayashi","byj":"Masamune.K.","lat":"36.158606","lng":"140.516547"},
		{"jname":"���ˎs","name":"mito","by":"2_suzuki","byj":"Yumi.S.","lat":"36.365869","lng":"140.471203"}

		//{"jname":"������","name":"ami","by":"none","byj":"none"},
		//{"jname":"�����s","name":"kasima","by":"none","byj":"none"},
		//{"jname":"�͓���","name":"kawauti","by":"none","byj":"none"},
		//{"jname":"���΂݂炢�s","name":"tukubamirai","by":"none","byj":"none"},
		//{"jname":"�s���s","name":"namegata","by":"none","byj":"none"},	
		//{"jname":"��J�s","name":"moriya","by":"none","byj":"none"}
		],


	"oarai":{
		"spots": [
			{"id":"9","name":"����� �q��ʐ^","code":"����� �q��ʐ^","status":"1","group":"0","lat":"36.322041","lng":"140.578111"},
			{"id":"5","name":"�t�F���[�^�[�~�i���t��","code":"��錧�����S������`����2","status":"1","group":"0","lat":"36.332828","lng":"140.565236"},
			/*{"id":"6","name":"���}�����^���[","code":"��錧�����S������`����10�Ԓn","status":"1","group":"a"},
			{"id":"3","name":"���}�����^���[","code":"��錧�����S������`����10�Ԓn","status":"1","group":"a"},
			{"id":"38","name":"���}�����^���[","code":"��錧�����S������`����10�Ԓn","status":"0","group":"a"},
			{"id":"29","name":"�C�勴","code":"�@�Ђ����Ȃ��s�C�咬-�������l���@�H���@����108��","status":"0","group":"b"},
			{"id":"30","name":"�C�勴","code":"�@�Ђ����Ȃ��s�C�咬-�������l���@�H���@����108��","status":"0","group":"b"},
			{"id":"31","name":"�C�勴","code":"�@�Ђ����Ȃ��s�C�咬-�������l���@�H���@����108��","status":"0","group":"b"},
			{"id":"32","name":"�C�勴","code":"�@�Ђ����Ȃ��s�C�咬-�������l���@�H���@����108��","status":"0","group":"b"},
			{"id":"33","name":"�C�勴","code":"�@�Ђ����Ȃ��s�C�咬-�������l���@�H���@����108��","status":"0","group":"b"},
			{"id":"34","name":"�C�勴","code":"�@�Ђ����Ȃ��s�C�咬-�������l���@�H���@����108��","status":"0","group":"b"},
			{"id":"4","name":"���������","code":"��錧�����S�������l�� 6881-275","status":"1","group":"c"},
			{"id":"7","name":"���������","code":"��錧�����S�������l�� 6881-275","status":"1","group":"c"},
			{"id":"8","name":"���������","code":"��錧�����S�������l�� 6881-275","status":"1","group":"c"},
			{"id":"35","name":"���������","code":"��錧�����S�������l�� 6881-275","status":"0","group":"c"},
			{"id":"36","name":"���������","code":"��錧�����S�������l�� 6881-275","status":"0","group":"c"},
			{"id":"37","name":"���������","code":"��錧�����S�������l�� 6881-275","status":"0","group":"c"},
			{"id":"2","name":"�����Z���^�[","code":"�������l��6881-88","status":"1","group":"d"},
			{"id":"10","name":"���`�̗l�q","code":"��������`","status":"1","group":"e"},
			{"id":"11","name":"���`�̗l�q","code":"��������`","status":"1","group":"e"},
			{"id":"12","name":"���`�̗l�q","code":"��������`","status":"1","group":"e"},
			{"id":"13","name":"���`�̗l�q","code":"��������`","status":"1","group":"e"},
			{"id":"20","name":"���`�̗l�q","code":"��������`","status":"0","group":"e"},
			{"id":"21","name":"���`�̗l�q","code":"��������`","status":"0","group":"e"},
			{"id":"22","name":"���`�̗l�q","code":"��������`","status":"0","group":"e"},
			{"id":"23","name":"���`�̗l�q","code":"��������`","status":"0","group":"e"},
			{"id":"24","name":"���`�̗l�q","code":"��������`","status":"0","group":"e"},
			{"id":"18","name":"���`�̗l�q","code":"��������`","status":"0","group":"e"},
			{"id":"40","name":"���킭�킭�Ȋw�� ","code":"��錧�����S������`�����P�Q�Ԓn","status":"0","group":"f"},
			{"id":"41","name":"���킭�킭�Ȋw�� ","code":"��錧�����S������`�����P�Q�Ԓn","status":"0","group":"f"},
			{"id":"16","name":"���s��","code":"��������s���","status":"1","group":"g"},
			{"id":"19","name":"���s��","code":"��������s���","status":"0","group":"g"},
			{"id":"14","name":"��􃊃]�[�g�A�E�g���b�g","code":"��錧�����S������`�����P�P-�Q","status":"1","group":"h"},
			{"id":"15","name":"��􃊃]�[�g�A�E�g���b�g","code":"��錧�����S������`�����P�P-�Q","status":"1","group":"h"},
			{"id":"17","name":"��􃊃]�[�g�A�E�g���b�g","code":"��錧�����S������`�����P�P-�Q","status":"1","group":"h"},
			{"id":"27","name":"�Z�u���C���u�����C�ݓX","code":"��錧�����S�������l���W�Q�T�R-�R�X","status":"0","group":"i"},
			{"id":"44","name":"�Z�u���C���u�����C�ݓX","code":"��錧�����S�������l���W�Q�T�R-�R�X","status":"1","group":"i"},
			{"id":"1","name":"����2���������̗l�q","code":"����2��������","status":"1","group":"j"},
			{"id":"25","name":"����2���������̗l�q","code":"����2��������","status":"0","group":"j"},
			{"id":"26","name":"����2���������̗l�q","code":"����2��������","status":"0","group":"j"},
			{"id":"28","name":"����2���������̗l�q","code":"����2��������","status":"0","group":"j"},
			{"id":"39","name":"���T���r�[�`","code":"�ɐݒu���ꂽ���W��","status":"0","group":"k"},*/
			{"id":"42","name":"�����Y�l","code":"�C�ݐ��|�̗l�q","status":"0","group":"l","lat":"36.322871","lng":"140.546697"},
			{"id":"43","name":"�����Y�l","code":"�C�ݐ��|�̗l�q","status":"0","group":"l","lat":"36.303367","lng":"140.548242"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"},
			{"donor":"���������"}
		],
		"comment":"��ނ��s���ɂ�����A�B�e�̋���k�В���̉摜�����̒񋟂��Ē������ӂ��Ă��܂��B������͑����m�ɖʂ��Ă���̂ŒÔg�ɂ���Q�A�܂��A�������B�F�����݂��邱�Ƃ�����A��肠����󋵂ɂ����ė�ÂȑΉ������߂��钬�ł���Ǝv���܂��B�k�В���A���I�Ȃǂ��W�߂��Ă����C�ݕt�߂͐�������A�Ôg�����������ۂɔ��o�H�֗U�����邽�߂̊Ŕ��ݒu����܂����B�܂��A���ꂽ�����⓹�H�Ȃǂ̕������}���ɍs���Ă��܂��B"
	},

	"ami":{
		"spots": [
		{"id":"1","name":"������1","code":"������1","status":"1","group":"a"},
		{"id":"2","name":"������2","code":"������2","status":"1","group":"a"},
		{"id":"3","name":"������3","code":"������3","status":"1","group":"a"},
		{"id":"4","name":"������4","code":"������4","status":"1","group":"a"},
		{"id":"5","name":"������5","code":"������5","status":"1","group":"a"},
		{"id":"6","name":"������6","code":"������6","status":"1","group":"a"},
		{"id":"7","name":"������7","code":"������7","status":"1","group":"a"},
		{"id":"8","name":"������8","code":"������8","status":"1","group":"a"},
		{"id":"9","name":"������9","code":"������9","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"��錧���璡������"}
		],
		"comment":"�����Ƀe�L�X�g"
	},
	
	
	"bandou":{
		"spots": [
		{"id":"1","name":"�Ⓦ�s��쓹�H����","code":"��錧�Ⓦ�s���3004-177�t��","status":"1","group":"a"},
		{"id":"1a","name":"�Ⓦ�s��쓹�H����","code":"��錧�Ⓦ�s���3004-177�t��","status":"0","group":"a"},
		{"id":"2","name":"���7����","code":"��錧�Ⓦ�s�؏h1056-1�t��","status":"1","group":"b"},
		{"id":"2a","name":"���7����","code":"��錧�Ⓦ�s�؏h1056-1�t��","status":"0","group":"b"},
		{"id":"3","name":"���8����","code":"��錧�Ⓦ�s�؏h1001�t��","status":"1","group":"b"},
		{"id":"3a","name":"���8����","code":"��錧�Ⓦ�s�؏h1001�t��","status":"0","group":"b"},
		{"id":"4","name":"�Ⓦ�s������䒡��","code":"��錧�Ⓦ�s���4365","status":"1","group":"c"},
		{"id":"4a","name":"�Ⓦ�s������䒡��","code":"��錧�Ⓦ�s���4365","status":"0","group":"c"},
		{"id":"5","name":"�Ⓦ�s������䒡��","code":"��錧�Ⓦ�s���4365","status":"1","group":"c"},
		{"id":"5a","name":"�Ⓦ�s������䒡��","code":"��錧�Ⓦ�s���4365","status":"0","group":"c"},
		{"id":"6","name":"�Ⓦ�s������䒡��","code":"��錧�Ⓦ�s���4365","status":"1","group":"c"},
		{"id":"7","name":"�Ⓦ���h��","code":"��錧�Ⓦ�s�ӓc644-2","status":"1","group":"c"},
		{"id":"7a","name":"�Ⓦ���h��","code":"��錧�Ⓦ�s�ӓc644-2","status":"0","group":"c"},
		{"id":"8","name":"���m�A�쉈","code":"��錧�Ⓦ�s���q�V�c1183�t��","status":"1","group":"d"},
		{"id":"8a","name":"���m�A�쉈","code":"��錧�Ⓦ�s���q�V�c1183�t��","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"���́C8��19���ɍⓌ�s�ɍs���Ď�ނ����Ă��܂����B�Ⓦ�s�͓��ɐk�Ђ̔�Q���傫�������悤�ŁC�k�БO�ƈႤ���������Ă��Ă���Ƃ��������C�P�����Ă��鏊�������ȂƂ�����ۂ��󂯂܂����B�k�ЂŔ�Q���󂯂����H���Y��ɕܑ�����A�����͐i��ł���悤�Ɋ����܂����B"
	},
	
	
	"hitachinaka":{
		"spots": [
		{"id":"01","name":"�n�������s��t��","code":"�a�c��3����11-11","status":"1","group":"a"},
		{"id":"02","name":"�n�������s��t��","code":"�a�c��3����11-11","status":"1","group":"a"},
		{"id":"03","name":"�n�������s��t��","code":"�a�c��3����11-11","status":"1","group":"a"},
		{"id":"001","name":"�n�������s��t��","code":"�a�c��3����11-11","status":"1","group":"a"},
		{"id":"000","name":"�n�������s��t��","code":"�a�c��3����11-11","status":"0","group":"a"},
		{"id":"003","name":"�n�������s��t��","code":"�a�c��3����11-11","status":"1","group":"a"},
		{"id":"002","name":"�n�������s��t��","code":"�a�c��3����11-11","status":"0","group":"a"},
		{"id":"005","name":"�n�������s��t��","code":"�a�c��3����11-11","status":"1","group":"a"},
		{"id":"006","name":"�n�������s��t��","code":"�a�c��3����11-11","status":"0","group":"a"},
		{"id":"007","name":"�n�������s��t��","code":"�a�c��3����11-11","status":"1","group":"a"},
		{"id":"017","name":"�n�������s��t��","code":"�a�c��3����11-11","status":"0","group":"a"},
		{"id":"04","name":"�������H��","code":"���{��22-3","status":"1","group":"b"},
		{"id":"05","name":"�������H��","code":"���{��22-3","status":"1","group":"b"},
		{"id":"06","name":"�a�c������","code":"�a�c��1����1-5","status":"1","group":"c"},
		{"id":"07","name":"�a�c������","code":"�a�c��1����1-5","status":"1","group":"c"},
		{"id":"014","name":"�a�R�����H","code":"�a�R��1����1-1","status":"1","group":"d"},
		{"id":"015","name":"�a�R�����H","code":"�a�R��1����1-1","status":"1","group":"d"},
		{"id":"0001","name":"�a�R�����H","code":"�a�R��1����1-1","status":"0","group":"d"},
		{"id":"0002","name":"�a�R�����H","code":"�a�R��1����1-1","status":"0","group":"d"},
		{"id":"0003","name":"�����q��","code":"���v��1����11-34","status":"1","group":"e"},
		{"id":"013","name":"�����q��","code":"���v��1����11-34","status":"0","group":"e"},
		{"id":"0004","name":"�C�咬�ӂꂠ�������t��","code":"�C�咬1����16-16","status":"1","group":"f"},
		{"id":"010","name":"�C�咬�ӂꂠ�������t��","code":"�C�咬1����16-16","status":"0","group":"f"},
		{"id":"0005","name":"�C�咬�ӂꂠ�������t��","code":"�C�咬1����16-16","status":"1","group":"f"},
		{"id":"011","name":"�C�咬�ӂꂠ�������t��","code":"�C�咬1����16-16","status":"0","group":"f"},
		{"id":"0006","name":"�C�咬�ӂꂠ�������t��","code":"�C�咬1����16-16","status":"1","group":"f"},
		{"id":"012","name":"�C�咬�ӂꂠ�������t��","code":"�C�咬1����16-16","status":"0","group":"f"}
		],	
		"data":[
			{"donor":"�l�B�e"}
		],
		"comment":"�Ђ����Ȃ��s�ł͒Ôg�̔�Q�������A�C�����ł͑傫�Ȕ�Q���������悤�ł��B�n�k�����������ہA�C�̕t�߂ɏZ��ł���l�͒Ôg�̏��������c������K�v������Ɗ����܂����B�܂��A���o�H������m�F����ׂ����Ɗ����܂����B"
	},
	
	
	"hitachioota":{
		"spots": [
		{"id":"1","name":"��R���w�Z","code":"��錧�헤���c�s�镔��1620","status":"1","group":"a"},
		{"id":"2","name":"��R���w�Z","code":"��錧�헤���c�s�镔��1620","status":"1","group":"a"},
		{"id":"3","name":"���R���C��","code":"���錧�헤���c�s��ؒ�1699-�C","status":"1","group":"a"},
		{"id":"4","name":"���R���C��","code":"���錧�헤���c�s��ؒ�1699-�C","status":"1","group":"a"},
		{"id":"5","name":"��R���w�Z","code":"��錧�헤���c�s�镔��1620","status":"1","group":"a"},
		{"id":"6","name":"���H�̗l�q","code":"��錧�헤���c�s����","status":"0","group":"a"},
		{"id":"7","name":"���H�̗l�q","code":"��錧�헤���c�s����","status":"0","group":"a"},
		{"id":"8","name":"��R���w�Z","code":"��錧�헤���c�s�镔��1620","status":"1","group":"a"},
		{"id":"9","name":"��R���w�Z","code":"��錧�헤���c�s�镔��1620","status":"1","group":"a"},
		{"id":"10","name":"���H�̗l�q","code":"��錧�헤���c�s����","status":"0","group":"a"},
		{"id":"11","name":"���H�̗l�q","code":"��錧�헤���c�s����","status":"0","group":"a"},
		{"id":"12","name":"���H�̗l�q","code":"��錧�헤���c�s����","status":"0","group":"a"},
		{"id":"13","name":"��R���w�Z","code":"��錧�헤���c�s�镔��1620","status":"1","group":"a"},
		{"id":"14","name":"��R���w�Z","code":"��錧�헤���c�s�镔��1620","status":"1","group":"a"},
		{"id":"15","name":"��R���w�Z","code":"��錧�헤���c�s�镔��1620","status":"1","group":"a"},
		{"id":"16","name":"���R���C��","code":"��錧�헤���c�s��ؒ�1699-�C","status":"1","group":"a"},
		{"id":"17","name":"���R���C��","code":"��錧�헤���c�s��ؒ�1699-�C","status":"1","group":"a"},
		{"id":"18","name":"���R���C��","code":"��錧�헤���c�s��ؒ�1699-�C","status":"1","group":"a"},
		{"id":"19","name":"���R���C��","code":"��錧�헤���c�s��ؒ�1699-�C","status":"1","group":"a"},
		{"id":"20","name":"���R���C��","code":"��錧�헤���c�s��ؒ�1699-�C","status":"1","group":"a"},
		{"id":"21","name":"���R���C��","code":"��錧�헤���c�s��ؒ�1699-�C","status":"1","group":"a"},
		{"id":"22","name":"���R���C��","code":"��錧�헤���c�s��ؒ�1699-�C","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"�헤���c�s����R���w�Z"}
		],
		"comment":"�k�Г����͉t�󉻂��Ă���n�悪���������̂ł����A���݂͕������Ă���A�ڂ��ڂ��ɂȂ��Ă������H�����͌��̏�Ԃɖ߂��Ă��܂��B�n�k�����������݂͂�ȁA�����N�������������炸�A�������Ă��܂����B����Ƃ��ɂ͗�ÂɂȂ��ė��������Ĕ��邱�Ƃ���؂��Ǝv���܂����B"
	},
	
	
	
	"hitati":{
		"spots": [
		{"id":"1","name":"��錧�����s�͌��q��3����28","code":"��錧�����s�͌��q��3����28","status":"1","group":"a"},
		{"id":"1a","name":"��錧�����s�͌��q��3����28","code":"��錧�����s�͌��q��3����28","status":"0","group":"a"},
		{"id":"2","name":"��錧�����s�͌��q��3����28","code":"��錧�����s�͌��q��3����28","status":"1","group":"a"},
		{"id":"2a","name":"��錧�����s�͌��q��3����28","code":"��錧�����s�͌��q��3����28","status":"0","group":"a"},
		{"id":"3","name":"��錧�����s�͌��q��3����28","code":"��錧�����s�͌��q��3����28","status":"1","group":"a"},
		{"id":"3a","name":"��錧�����s�͌��q��3����28","code":"��錧�����s�͌��q��3����28","status":"0","group":"a"},
		{"id":"4","name":"��錧�����s�z�K��1����2","code":"��錧�����s�z�K��1����2","status":"1","group":"b"},
		{"id":"4a","name":"��錧�����s�z�K��1����2","code":"��錧�����s�z�K��1����2","status":"0","group":"b"},
		{"id":"5","name":"��錧�����s�z�K��1����12","code":"��錧�����s�z�K��1����12","status":"1","group":"b"},
		{"id":"5aa","name":"��錧�����s�z�K��1����12","code":"��錧�����s�z�K��1����12","status":"0","group":"b"},
		{"id":"6","name":"��錧�����s���1����11","code":"��錧�����s���1����11","status":"1","group":"b"},
		{"id":"6aa","name":"��錧�����s���1����11","code":"��錧�����s���1����11","status":"0","group":"b"},
		{"id":"21","name":"�����@��G���W�j�A�����O","code":"��錧�����s������1","status":"1","group":"b"},
		{"id":"21a","name":"�����@��G���W�j�A�����O","code":"��錧�����s������1","status":"0","group":"b"},
		{"id":"7","name":"��錧�����s��K�C������","code":"��錧�����s��K�C������","status":"1","group":"c"},
		{"id":"7a","name":"��錧�����s��K�C������","code":"��錧�����s��K�C������","status":"0","group":"c"},
		{"id":"14","name":"�@�h�@","code":"��錧�����s�\�����F��1990�@�h�@","status":"1","group":"c"},
		{"id":"14a","name":"�@�h�@","code":"��錧�����s�\�����F��1990�@�h�@","status":"0","group":"c"},
		{"id":"15","name":"�������Ⱦ���������t��","code":"��錧�����s�v�����������Ⱦ���������t��","status":"1","group":"d"},
		{"id":"15a","name":"�������Ⱦ���������t��","code":"��錧�����s�v�����������Ⱦ���������t��","status":"0","group":"d"},
		{"id":"16","name":"�v�����`","code":"��錧�����s�v�������`","status":"1","group":"d"},
		{"id":"16a","name":"�v�����`","code":"��錧�����s�v�������`","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"6��17���ɖK��܂����B�Ôg�̉e���ŋx�Ƃ����Ă������X�Ȃǂ͌��ʂ�̉c�Ƃ����Ă��܂����B�������A�Ƃ�ꕔ�̂��X�͂�����Z��ł��Ȃ�������P������Ă����肵���Ƃ���������A�n�k��Ôg�̔�Q�͑傫�������̂��Ǝv���܂����B�قƂ�ǂ̓��H�����ʂ�ɂȂ��Ă��܂����B"
	},
	
	
	
	"hitatioomiya":{
		"spots": [
		{"id":"1","name":"��O�R���w�Z","code":"��錧�헤��{�s���3217","status":"1","group":"a"},
		{"id":"2","name":"�b�_��","code":"��錧�헤��{�s����219","status":"1","group":"a"},
		{"id":"3","name":"���[�z�[��","code":"��錧�헤��{�s���x��3135-6","status":"1","group":"a"},
		{"id":"4","name":"���[�z�[��","code":"��錧�헤��{�s���x��3135-6","status":"1","group":"a"},
		{"id":"5","name":"���h�{��","code":"��錧�헤��{�s�W�꒬621","status":"1","group":"a"},
		{"id":"6","name":"���H�̗l�q","code":"��錧�헤��{�s����n��","status":"1","group":"a"},
		{"id":"7","name":"���H�̗l�q","code":"��錧�헤��{�s����n��","status":"1","group":"a"},
		{"id":"8","name":"���H�̗l�q","code":"��錧�헤��{�s���␣�n��","status":"1","group":"a"},
		{"id":"9","name":"���H�̗l�q","code":"��錧�헤��{�s���␣��","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"�헤��{�s�ɂ�8��21���ɖK��܂������A���Ȃ蕜�����Ă���l�q�ł����B�s�����̕�����񋟂��Ă�������摜�ɂ͌����̔�Q�������ڗ����܂����B"
	},
	
	"hokota":{
		"spots": [
		{"id":"014","name":"���������̈��","code":"����2331","status":"1","group":"a"},
		{"id":"001","name":"���������̈��","code":"����2331","status":"0","group":"a"},
		{"id":"015","name":"���k���w�Z","code":"�c��3852","status":"1","group":"b"},
		{"id":"007","name":"���k���w�Z","code":"�c��3852","status":"0","group":"b"},
		{"id":"016","name":"�s���}����","code":"�g�c1444-1","status":"1","group":"c"},
		{"id":"004","name":"�s���}����","code":"�g�c1444-1","status":"0","group":"c"},
		{"id":"012","name":"�s�����ۈ珊","code":"�g�c148","status":"1","group":"c"},
		{"id":"017","name":"�s�����ۈ珊","code":"�g�c148","status":"1","group":"c"},
		{"id":"006","name":"�s�����ۈ珊","code":"�g�c148","status":"0","group":"c"},
		{"id":"005","name":"�s�����ۈ珊","code":"�g�c148","status":"0","group":"c"},
		{"id":"018","name":"�x�m������","code":"�g�c2299","status":"1","group":"c"},
		{"id":"013","name":"�x�m������","code":"�g�c2299","status":"1","group":"c"},
		{"id":"002","name":"�x�m������","code":"�g�c2299","status":"0","group":"c"},
		{"id":"003","name":"�x�m������","code":"�g�c2299","status":"0","group":"c"},
		{"id":"019","name":"���s�勴����","code":"�D�n��","status":"1","group":"d"},
		{"id":"010","name":"���s�勴����","code":"�D�n��","status":"0","group":"d"},
		{"id":"000","name":"���_��","code":"���F689","status":"1","group":"e"},
		{"id":"008","name":"���_��","code":"���F689","status":"0","group":"e"},
		{"id":"011","name":"��a�c���w�Z","code":"��a�c1018-3","status":"1","group":"f"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"},
			{"donor":"�g�c�s����"}
		],
		"comment":"�g�c�s�ł͒n����Ȃǔ�Q�̑傫���ꏊ�����������܂������A�����̎{�݂͖w�ǂ̏ꏊ�ŏC�����������Ă��܂����B�̈�قȂǂł͓V����������Q������A�n�k���N���������ɂ͓����������ɕی삷��ׂ����Ɗ����܂����B"
	},
	
	"ibarakimati":{
		"spots": [
		{"id":"1","name":"����","code":"����18���t��","status":"1","group":"a"},
		{"id":"12","name":"����","code":"����18���t��","status":"0","group":"a"},
		{"id":"4","name":"���������Z���^�[�䂤�䂤��","code":"��錧�����S��钬����1037?1","status":"1","group":"a"},
		{"id":"11","name":"���������Z���^�[�䂤�䂤��","code":"��錧�����S��钬����1037?1","status":"0","group":"a"},
		{"id":"6","name":"��钬���h�{��","code":"��錧�����S��钬�厚����1037-1","status":"1","group":"a"},
		{"id":"8","name":"�������R����","code":"��錧�����S��钬���΍�2263","status":"1","group":"b"},
		{"id":"2","name":"�������R����","code":"��錧�����S��钬���΍�2263","status":"1","group":"b"},
		{"id":"7","name":"�O�J�����ٕt��","code":"��錧�����S��钬���΍�","status":"1","group":"b"},
		{"id":"9","name":"�L�Y�������ԏ�","code":"��錧�����S��钬���΍�1651","status":"1","group":"b"},
		{"id":"5","name":"���u���w�Z�@�̈��","code":"��錧�����S��钬���J862","status":"1","group":"c"},
		{"id":"3","name":"��������","code":"��錧���ˎs������","status":"1","group":"c"},
		{"id":"13","name":"��������","code":"��錧���ˎs������","status":"0","group":"c"},
		{"id":"10","name":"�T�C�N�����O���[�h","code":"��錧�����S��钬����","status":"1","group":"c"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"8�����{�ɖK�₵�܂������A���H�⋴�ȂǁA�l�X�̐������͖w�Ǖ����ς݂ł����B��ނ����鎞�ɂ��ړ��ɍ��邱�Ƃ͂���܂���ł����B"
	},
	
	"inasiki":{
		"spots": [
		{"id":"01","name":"�R�V���ԏ�","code":"��~�s����1403�Ԓn �t��","status":"0","group":"a"},
		{"id":"1","name":"�R�V���ԏ�","code":"��~�s����1403�Ԓn �t��","status":"1","group":"a"},
		{"id":"02","name":"�����_��","code":"��~�s�{�V309�Ԓn �t��","status":"0","group":"b"},
		{"id":"2","name":"�����_��","code":"��~�s�{�V309�Ԓn �t��","status":"1","group":"b"},
		{"id":"04","name":"�����勴��","code":"��~�s����1661�Ԓn1 �t��","status":"0","group":"c"},
		{"id":"4","name":"�����勴��","code":"��~�s����1661�Ԓn1 �t��","status":"1","group":"c"},
		{"id":"06","name":"�V������͌� �E��","code":"��~�s�{�V52�Ԓn8 �t��","status":"0","group":"d"},
		{"id":"6","name":"�V������͌� �E��","code":"��~�s�{�V52�Ԓn8 �t��","status":"1","group":"d"},
		{"id":"08","name":"�V������͌� ����","code":"��~�s����8322�Ԓn �t��","status":"0","group":"e"},
		{"id":"12","name":"�V������͌� ����","code":"��~�s����8322�Ԓn �t��","status":"1","group":"e"},
		{"id":"9","name":"�V������͌� �E��","code":"��~�s�{�V52�Ԓn10 �t��","status":"1","group":"f"},
		{"id":"09","name":"�V������͌� �E��","code":"��~�s�{�V52�Ԓn10 �t��","status":"0","group":"f"},
		{"id":"10","name":"�V������͌� �E��","code":"��~�s�{�V52�Ԓn10 �t��","status":"0","group":"f"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"���̒n��̐k�Џ󋵂ł����A�n���̕��X�ɓ����̎��ȂǕ����܂������C��͂�A�X�̐l�X�͋����قǋ�J���ꂽ�悤�ł��B���̒n����C�l���l���Ă����ȏ�ɒn�k�̔�Q�͑傫���C�Ĕ������Ƃ��ɗ�Âɍs���ł���悤�S�|����ׂ����Ǝv���܂����B"
	},
	
	
	"jyoso":{
		"spots": [
		{"id":"1","name":"���������Z���^�[","code":"��錧�푍�s�V�Ή�4365","status":"1","group":"a"},
		{"id":"1a","name":"���������Z���^�[","code":"��錧�푍�s�V�Ή�4365","status":"0","group":"a"},
		{"id":"2","name":"���������Z���^�[","code":"��錧�푍�s�V�Ή�4365","status":"1","group":"a"},
		{"id":"2a","name":"���������Z���^�[","code":"��錧�푍�s�V�Ή�4365","status":"0","group":"a"},
		{"id":"5","name":"����24��������","code":"��錧�푍�s���Ή�299","status":"1","group":"a"},
		{"id":"5a","name":"����24��������","code":"��錧�푍�s���Ή�299","status":"0","group":"a"},
		{"id":"5aa","name":"����24��������","code":"��錧�푍�s���Ή�299","status":"0","group":"a"},
		{"id":"9","name":"�푍�s�����Ή����Ɂi������j","code":"��錧�V�Ή�576-2","status":"1","group":"a"},
		{"id":"9a","name":"�푍�s�����Ή����Ɂi������j","code":"��錧�V�Ή�576-2","status":"0","group":"a"},
		{"id":"3","name":"�����","code":"��錧�푍�s��{��1053","status":"1","group":"b"},
		{"id":"3a","name":"�����","code":"��錧�푍�s��{��1053","status":"0","group":"b"},
		{"id":"4","name":"�푍�s����","code":"��錧�푍�s���C���z�K��3222-3","status":"1","group":"c"},
		{"id":"4a","name":"�푍�s����","code":"��錧�푍�s���C���z�K��3222-3","status":"0","group":"c"},
		{"id":"6","name":"�s���Ή������w�Z","code":"��錧�푍�s���R910-1","status":"1","group":"d"},
		{"id":"7","name":"�s���Ή������w�Z","code":"��錧�푍�s���R910-1","status":"1","group":"d"},
		{"id":"8","name":"�s���Ή������w�Z","code":"��錧�푍�s���R910-1","status":"1","group":"d"},
		{"id":"8a","name":"�s���Ή������w�Z","code":"��錧�푍�s���R910-1","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"���́C8��19���ɏ푍�s�ɍs���Ď�ނ����Ă��܂����B�푍�s�̒��w�Z�͍Z�ɂ����ׂēP�����ꗧ�Ē�����Ă��܂����B���Ă��܂��������P������V�������ɂȂ��Ă���A���̒����݂Ƃ͑傫���ς��Ƃ��낪�����Ɗ����܂����B�܂����w�Z�Ȃǂ͊������Ă��Ȃ����S�ɂ͕������Ă��Ȃ��l�q�ł����B�C���������ł͂Ȃ��k�Ђ����r�I�����ꏊ�ł��k�Ђ̔�Q�͋y��ł��錻����m��܂����B"
	},
	
	
	"kasama":{
		"spots": [
		/*{"id":"1","name":"�}�Ԏs�����@�}�Ԏs��","code":"��錧�}�Ԏs�Έ�717","status":"1","group":"a"},
		{"id":"6","name":"�P�[�Y�f���L�}�ԓX�t��","code":"��錧�}�Ԏs�Έ�2090","status":"1","group":"a"},
		{"id":"3","name":"�}�Ԑ}����","code":"��錧�}�Ԏs�Έ�2023?1","status":"1","group":"a"},
		{"id":"10","name":"�}�Ԑ}����","code":"��錧�}�Ԏs�Έ�2023?1","status":"0","group":"a"},
		{"id":"2","name":"�}�Ԏs�����@�{����K","code":"��錧�}�Ԏs����3����2-1","status":"1","group":"b"},
		{"id":"11","name":"�}�Ԏs���� �{����K","code":"��錧�}�Ԏs����3����2-1","status":"0","group":"b"},*/
		{"id":"4","name":"�F����","code":"��錧�}�Ԏs����510?1","status":"1","group":"c","lat":"36.376791","lng":"140.286776"},
		{"id":"5","name":"�H�|�̋u","code":"��錧�}�Ԏs�}��2388?1","status":"1","group":"d","lat":"36.348315","lng":"140.334497"},
		{"id":"7","name":"�}�ԏ��O���E���h","code":"��錧�}�Ԏs�}��2688","status":"1","group":"d","lat":"36.359928","lng":"140.252443"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"���~���ԂɁA�摜�����ɖK�₵�܂����B�}�Ԏs�����E�}�Ԏs���͓��Ɍ����̑������Ђǂ��A���󂵂čX�n�ɂȂ��Ă��܂����B�{���̕��ł��H�����̉ӏ�������A���݁A�s�����̕����Ζ������Ă��錚���̓V����z�ǂނ��o���̏�Ԃł����B�w�t�߂͔�r�I�������Ă�����̂́A�H�����̓��H��A���󂵁E�|��ȂǂŌ������Ȃ��Ȃ�����̍X�n�Ȃǂ����󂯂��A�܂��܂������r���ł����ۂ��󂯂܂����B"
	},
	
	
	"kasima":{
		"spots": [
		{"id":"1","name":"�C�݉����̏Z����","code":"�C�݉����̏Z����","status":"1","group":"a"},
		{"id":"2","name":"�����s���{��n��","code":"�����s���{��n��","status":"1","group":"a"},
		{"id":"3","name":"�����s�����n��","code":"�����s�����n��","status":"1","group":"a"},
		{"id":"4","name":"�����s�����n��","code":"�����s�����n��","status":"1","group":"a"},
		{"id":"5","name":"�_���̏�","code":"�_���̏�","status":"1","group":"a"},
		{"id":"6","name":"���ÊC������t��","code":"���ÊC������t��","status":"1","group":"a"},
		{"id":"7","name":"�C�����̏Z���̏��","code":"�C�����̏Z���̏��","status":"1","group":"a"},
		{"id":"8","name":"����C�ݕt��","code":"����C�ݕt��","status":"1","group":"a"},
		{"id":"9","name":"�����s���{��n��","code":"�����s���{��n��","status":"1","group":"a"},
		{"id":"10","name":"�����s���`�䂩��̕��i","code":"�����s���`�䂩��̕��i","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"��錧���璡������"}
		],
		"comment":"�����Ƀe�L�X�g"
	},
	
	"kasumigaura":{
		"spots": [
		{"id":"1","name":"���c���ɕt��","code":"���c���ɕt��","status":"1","group":"a"},
		{"id":"2","name":"����������","code":"��錧�����݂�����s�[�J3719-1","status":"1","group":"b"},
		{"id":"9","name":"����������","code":"��錧�����݂�����s�[�J3719-1","status":"0","group":"b"},
		{"id":"3","name":"�����݂�����s�����@���c����","code":"��錧�����݂�����s��y�c461","status":"1","group":"a"},
		{"id":"4","name":"�����݂�����s�����@���c����","code":"��錧�����݂�����s��y�c461","status":"1","group":"a"},
		{"id":"5","name":"�����݂�����s�����@���c����","code":"��錧�����݂�����s��y�c461","status":"1","group":"a"},
		{"id":"6","name":"�����݂�����s�����@���c����","code":"��錧�����݂�����s��y�c461","status":"1","group":"a"},
		{"id":"7","name":"�����݂�����s�����@���c����","code":"��錧�����݂�����s��y�c461","status":"1","group":"a"},
		{"id":"8","name":"�����Y�@��h","code":"�����Y�@��h","status":"1","group":"c"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"���~���ԂɁA�摜�����ɖK�₵�܂����B�s�����̐��c���ɂ͍H�����Ŗw�ǋ@�\���Ă��Ȃ��󋵂ł����B�����̋Ɩ��͌����قōs���Ă���Ƃ������Ƃœ����̐k�Ђ̒܍����݂��܂����B�傫�ȓ��H�Ȃǂ͕��ʂɒʍs�ł��܂������A�ׂ������Ȃǂ͊��S�ɒ��肫���Ă��Ȃ��Ƃ�������󂯂��A�����̔�Q�̑傫���𕨌���Ă��܂����B"
	},
	
	"kawauti":{
		"spots": [
		{"id":"1","name":"�͓���1","code":"�͓���1","status":"1","group":"a"},
		{"id":"2","name":"�͓���2","code":"�͓���2","status":"1","group":"a"},
		{"id":"3","name":"�͓���3","code":"�͓���3","status":"1","group":"a"},
		{"id":"4","name":"�͓���4","code":"�͓���4","status":"1","group":"a"},
		{"id":"5","name":"�͓���5","code":"�͓���5","status":"1","group":"a"},
		{"id":"6","name":"�͓���6","code":"�͓���6","status":"1","group":"a"},
		{"id":"7","name":"�͓���7","code":"�͓���7","status":"1","group":"a"},
		{"id":"8","name":"�͓���8","code":"�͓���8","status":"1","group":"a"},
		{"id":"9","name":"�͓���9","code":"�͓���9","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"��錧���璡������"}
		],
		"comment":"�����Ƀe�L�X�g"
	},
	
	"kitaibaraki":{
		"spots": [
		{"id":"1","name":"�k���s����","code":"��錧�k���s�錴���錴1630","status":"1","group":"a"},
		{"id":"2","name":"�k���s����","code":"��錧�k���s�錴���錴1630","status":"1","group":"a"},
		{"id":"3","name":"�C�݉����̗l�q","code":"��錧�k���s������","status":"1","group":"a"},
		{"id":"4","name":"��Ë��Ƌ����g��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"5","name":"���H�̗l�q","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"6","name":"�k���s�h�ЃR�~���j�e�B�Z���^�[","code":"��錧�k���s�錴���錴","status":"1","group":"a"},
		{"id":"7","name":"���H�̗l�q","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"8","name":"�C�݂̗l�q","code":"��錧�k���s������","status":"1","group":"a"},
		{"id":"9","name":"���`�̗l�q","code":"��錧�k���s������","status":"1","group":"a"},
		{"id":"10","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"11","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"12","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"13","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"14","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"15","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"16","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"17","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"18","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"19","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"20","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"21","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"22","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"23","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"�k���s�ɂ�8��20���ɖK��܂������C�k�Г�����肩�Ȃ蕜�����Ă��܂����B�������C���̒܍��͎��鏊�ɂ���܂����B�s�����̗��̕��ł́C���H�̕����H���ɍ�ƈ��̕����ꐶ���������Ă��܂����B�s�����̒S���҂ɐk�Г����̎ʐ^�������Ă��炢�܂������A�Ôg�̔�Q�������A�������Ƃ��N������ꍏ���������邱�ƂɐS������K�v������Ǝv���܂����B"
	},
	
	
	"mito":{
		"spots": [
		{"id":"1","name":"����E����51�����t��","code":"����1����","status":"1","group":"a"},
		{"id":"8","name":"����E����51���t��","code":"����1����","status":"0","group":"a"},
		{"id":"16","name":"�n�Ӑ��`�O��(�@)","code":"��錧���ˎs����1����6-1","status":"0","group":"a"},
		{"id":"2","name":"���Ƌ{","code":"��錧���ˎs�{��2����5-13 ","status":"1","group":"b"},
		{"id":"3","name":"���Ƌ{","code":"��錧���ˎs�{��2����5-13","status":"1","group":"b"},
		{"id":"6","name":"���ˉw�k�� �o�X����","code":"���ˉw","status":"1","group":"b"},
		{"id":"7","name":"���ˉw�k�� �o�X����","code":"���ˉw","status":"0","group":"b"},
		{"id":"4","name":"���ˎs����","code":"��錧���ˎs����1����4-1 ","status":"1","group":"c"},
		{"id":"5","name":"���ˎs����","code":"��錧���ˎs����1����4-1","status":"1","group":"c"},
		{"id":"9","name":"�l�c3����","code":"�l�c3����","status":"0","group":"d"},
		{"id":"10","name":"�l�c3����","code":"�l�c3����","status":"0","group":"d"},
		{"id":"11","name":"�l�c3����","code":"�l�c3����","status":"0","group":"d"},
		{"id":"12","name":"�l�c3����","code":"�l�c3����","status":"0","group":"d"},
		{"id":"13","name":"�l�c3����","code":"�l�c3����","status":"0","group":"d"},
		{"id":"14","name":"�l�c3����","code":"�l�c3����","status":"0","group":"d"},
		{"id":"15","name":"�l�c3����","code":"�l�c3����","status":"0","group":"d"},
		{"id":"17","name":"���ˎs50�����}�_�d�@","code":"���ˎs�}����209","status":"1","group":"e"},
		{"id":"18","name":"���ˎs50�����}�_�d�@","code":"���ˎs�}����209","status":"1","group":"e"},
		{"id":"22","name":"���ˍH�ƍ��ZA��","code":"���ˎs���g�c��1101","status":"1","group":"f"},
		{"id":"25","name":"���ˍH�ƍ��ZA��","code":"���ˎs���g�c��1101","status":"1","group":"f"},
		{"id":"26","name":"���ˍH�ƍ��ZA��","code":"���ˎs���g�c��1101","status":"1","group":"f"},
		{"id":"28","name":"���ˍH�ƍ��ZA��","code":"���ˎs���g�c��1101","status":"1","group":"f"},
		{"id":"29","name":"���ˍH�ƍ��ZE��","code":"���ˎs���g�c��1101","status":"1","group":"g"},
		{"id":"30","name":"���ˍH�ƍ��ZE��","code":"���ˎs���g�c��1101","status":"1","group":"g"},
		{"id":"31","name":"���ˍH�ƍ��ZE��","code":"���ˎs���g�c��1101","status":"1","group":"g"},
		{"id":"36","name":"���ˍH�ƍ��ZE��","code":"���ˎs���g�c��1101","status":"1","group":"g"},
		{"id":"43","name":"���ˍH�ƍ��ZE��","code":"���ˎs���g�c��1101","status":"1","group":"g"},
		{"id":"45","name":"���ˍH�ƍ��ZE��","code":"���ˎs���g�c��1101","status":"1","group":"g"},
		{"id":"50","name":"���ˍH�ƍ��ZE��","code":"���ˎs���g�c��1101","status":"1","group":"g"},
		{"id":"52","name":"���ˍH�ƍ��ZE��","code":"���ˎs���g�c��1101","status":"1","group":"g"},
		{"id":"60","name":"���ˍH�ƍ��ZE��","code":"���ˎs���g�c��1101","status":"1","group":"g"},
		{"id":"61","name":"���ˎs���O�̊ۏ�","code":"���ˎs�O�̊�1����6-51","status":"1","group":"h"},
		{"id":"62","name":"���ˎs���O�̊ۏ�","code":"���ˎs�O�̊�1����6-51","status":"1","group":"h"},
		{"id":"63","name":"���ˎs���O�̊ۏ�","code":"���ˎs�O�̊�1����6-51","status":"1","group":"h"},
		{"id":"64","name":"���ˎs���O�̊ۏ�","code":"���ˎs�O�̊�1����6-51","status":"1","group":"h"},
		{"id":"71","name":"���˓�","code":"���ˎs�咬2����2-14","status":"1","group":"h"},
		{"id":"72","name":"���˓�","code":"���ˎs�咬2����2-14","status":"1","group":"h"},
		{"id":"74","name":"���˓�","code":"���ˎs�咬2����2-14","status":"1","group":"h"},
		{"id":"76","name":"���˓�","code":"���ˎs�咬2����2-14","status":"1","group":"h"},
		{"id":"77","name":"���˓�","code":"���ˎs�咬2����2-14","status":"1","group":"h"},
		{"id":"65","name":"���ː��U�w�K�Z���^�[","code":"���ˎs������4-1","status":"1","group":"i"},
		{"id":"66","name":"���ː��U�w�K�Z���^�[","code":"���ˎs������4-1","status":"1","group":"i"},
		{"id":"67","name":"���ː��U�w�K�Z���^�[","code":"���ˎs������4-1","status":"1","group":"i"},
		{"id":"69","name":"���ː��U�w�K�Z���^�[","code":"���ˎs������4-1","status":"1","group":"i"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧�����ˍH�ƍ����w�Z ���Z�p��"},
			{"donor":"��錧���璡������"}
		],
		"comment":"�����͉w�̐����ǂ��j�􂵁A�\�������Z���ɂȂ�Ȃǂ̔�Q������܂��������X�ɕ������A�ċx�݂ɂ͐k�БO�ƕς��Ȃ��^�s�����Ă��܂����B���Ƃ̉�����u���b�N���A�Z��X�ׂ̍����Ȃǂ͒����Ă��Ȃ��Ƃ���������܂����B�������A�قƂ�ǂ̔�Q�ӏ��ł͍H����C���̑[�u������Ă��܂��B�u���b�N�^�C���ܑ̕��������A�X�t�@���g�̓��ɂȂ��Ă���Ƃ��������ƁA�k�Г����̂��Ƃ��v���o���܂��B"
	},
	
	
	"moriya":{
		"spots": [
		{"id":"1","name":"��J�s1","code":"��J�s1","status":"1","group":"a"},
		{"id":"2","name":"��J�s2","code":"��J�s2","status":"1","group":"a"},
		{"id":"3","name":"��J�s3","code":"��J�s3","status":"1","group":"a"},
		{"id":"4","name":"��J�s4","code":"��J�s4","status":"1","group":"a"},
		{"id":"5","name":"��J�s5","code":"��J�s5","status":"1","group":"a"},
		{"id":"6","name":"��J�s6","code":"��J�s6","status":"1","group":"a"},
		{"id":"7","name":"��J�s7","code":"��J�s7","status":"1","group":"a"},
		{"id":"8","name":"��J�s8","code":"��J�s8","status":"1","group":"a"},
		{"id":"9","name":"��J�s9","code":"��J�s9","status":"1","group":"a"},
		{"id":"10","name":"��J�s10","code":"��J�s10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"��錧���璡������"}
		],
		"comment":"�����Ƀe�L�X�g"
	},
	
	"namegata":{
		"spots": [
		{"id":"1","name":"�s���s1","code":"�s���s1","status":"1","group":"a"},
		{"id":"2","name":"�s���s2","code":"�s���s2","status":"1","group":"a"},
		{"id":"3","name":"�s���s3","code":"�s���s3","status":"1","group":"a"},
		{"id":"4","name":"�s���s4","code":"�s���s4","status":"1","group":"a"},
		{"id":"5","name":"�s���s5","code":"�s���s5","status":"1","group":"a"},
		{"id":"6","name":"�s���s6","code":"�s���s6","status":"1","group":"a"},
		{"id":"7","name":"�s���s7","code":"�s���s7","status":"1","group":"a"},
		{"id":"8","name":"�s���s8","code":"�s���s8","status":"1","group":"a"},
		{"id":"9","name":"�s���s9","code":"�s���s9","status":"1","group":"a"},
		{"id":"10","name":"�s���s10","code":"�s���s10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"��錧���璡������"}
		],
		"comment":"�����Ƀe�L�X�g"
	},
	
	"shirosato":{
		"spots": [
		{"id":"005","name":"�����n�擹�H","code":"�����n��","status":"1","group":"a"},
		{"id":"009","name":"�����n�擹�H","code":"�����n��","status":"0","group":"a"},
		{"id":"006","name":"���g�R�n�擹�H","code":"���g�R2277","status":"1","group":"b"},
		{"id":"010","name":"���g�R�n�擹�H","code":"���g�R2277","status":"0","group":"b"},
		{"id":"007","name":"���؋��n��","code":"���؋��n��","status":"1","group":"c"},
		{"id":"011","name":"���؋��n��","code":"���؋��n��","status":"0","group":"c"},
		{"id":"008","name":"�����_����","code":"�闢�����Ó�182","status":"1","group":"d"},
		{"id":"012","name":"�����_����","code":"�闢�����Ó�182","status":"0","group":"d"},
		{"id":"013","name":"�R�~���j�e�B�Z���^�[","code":"�闢���Β�","status":"1","group":"e"},
		{"id":"003","name":"����]�O","code":"�闢���Β�","status":"1","group":"e"},
		{"id":"002","name":"����]�O�P�����","code":"�闢���Β�","status":"1","group":"e"},
		{"id":"004","name":"������ӓ��H","code":"�闢���Β�","status":"1","group":"e"},
		{"id":"000","name":"���꒓�ԏ�","code":"�闢���Β�","status":"1","group":"e"},
		{"id":"001","name":"���f����","code":"��","status":"1","group":"f"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"�闢������"},
			{"donor":"��錧���璡������"}
		],
		"comment":"�闢���ł͒����ꂪ�傫�Ȕ�Q���󂯁A8���ɖK�ꂽ�ۂ͉��̎{�݂ŐE�����s�Ȃ��Ă��܂����B�����͂��Ȃ�i��ł���Ɗ����܂����B����̒S���҂̕��͢�h�Јӎ������߂ė~������Ƃ���������Ă��܂����B"
	},
	
	"simotuma":{
		"spots": [
		{"id":"1","name":"���쒡��","code":"��錧���Ȏs�S�{230","status":"0","group":"a"},
		{"id":"1a","name":"���쒡��","code":"��錧���Ȏs�S�{230","status":"1","group":"a"},
		{"id":"2","name":"���듹�H����","code":"��錧���Ȏs����139-2","status":"0","group":"a"},
		{"id":"2a","name":"���듹�H����","code":"��錧���Ȏs����139-2","status":"1","group":"a"},
		{"id":"3","name":"���ʃA�N�A�X�e�[�V�����O","code":"��錧���Ȏs�����w933-1","status":"0","group":"a"},
		{"id":"3a","name":"���ʃA�N�A�X�e�[�V�����O","code":"��錧���Ȏs�����w933-1","status":"1","group":"a"},
		{"id":"7","name":"���듹�H����","code":"��錧���Ȏs����139-2","status":"0","group":"a"},
		{"id":"7a","name":"���듹�H����","code":"��錧���Ȏs����139-2","status":"1","group":"a"},
		{"id":"4","name":"���̉w������","code":"��錧���Ȏs���{140","status":"0","group":"b"},
		{"id":"4a","name":"���̉w������","code":"��錧���Ȏs���{140","status":"1","group":"b"},
		{"id":"5","name":"���L��ӂꂠ�������߂�","code":"��錧���Ȏs�x�U1650-1","status":"0","group":"c"},
		{"id":"5a","name":"���L��ӂꂠ�������߂�","code":"��錧���Ȏs�x�U1650-1","status":"1","group":"c"},
		{"id":"6","name":"�Ⓦ�s������䒡��","code":"��錧���Ȏs���J724-1","status":"0","group":"d"},
		{"id":"6a","name":"�Ⓦ�s������䒡��","code":"��錧���Ȏs���J724-1","status":"1","group":"d"},
		{"id":"8","name":"�R�K���H����","code":"��錧���Ȏs�R�K47","status":"0","group":"e"},
		{"id":"8a","name":"�R�K���H����","code":"��錧���Ȏs�R�K47","status":"1","group":"e"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"���́C8��19���ɉ��Ȏs�ɍs���Ď�ނ����Ă��܂����B���Ȏs�̐k�Ў��̎ʐ^�������Ƃ����H�Ȃǂ̒n����̔�Q���傫���Ǝv���܂������C�w�ǂ̏ꏊ�������Ă���C�ǂ������Ă����̂�������Ȃ����炢���ʂ���Y��ȏ�ԂɂȂ��Ă��܂����B�ꕔ��������֎~�ƂȂ��Ă���Ƃ�����኱����܂����B"
	},
	
	
	"takahagi":{
		"spots": [
		{"id":"1","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"2","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"3","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"4","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"5","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"6","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"7","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"8","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"9","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"10","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"11","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"12","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"13","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"14","name":"��Í`�t��","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"15","name":"���錴�t��","code":"��錧�k���s","status":"1","group":"a"},
		{"id":"16","name":"���錴�t��","code":"��錧�k���s","status":"1","group":"a"},
		{"id":"17","name":"���錴�t��","code":"��錧�k���s","status":"1","group":"a"},
		{"id":"18","name":"���l�̓��O","code":"��錧�k���s�錴���錴200-3","status":"1","group":"a"},
		{"id":"19","name":"���l�̓��O","code":"��錧�k���s�錴���錴200-3","status":"1","group":"a"},
		{"id":"20","name":"���l�̓��O","code":"��錧�k���s�錴���錴200-3","status":"1","group":"a"},
		{"id":"21","name":"���l�̓��O","code":"��錧�k���s�錴���錴200-3","status":"1","group":"a"},
		{"id":"22","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"23","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"24","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"25","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"26","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"27","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"28","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"29","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"30","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"31","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"32","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"33","name":"���l�̓��e�H�n���瑾���m�ւ̓�","code":"��錧�k���s�錴��","status":"1","group":"a"},
		{"id":"34","name":"�����w�t��","code":"��錧�k���s������","status":"1","group":"a"},
		{"id":"35","name":"���P�O","code":"��錧�k���s����������C��375","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"�����s�ɂ�8��20���ɖK��܂����B�s�����̌����͒n�k�̉e���Ŏg���Ȃ��Ȃ��Ă���A�E���̕��̓v���n�u�̒��Ŏd�������Ă��܂����B���̎��ӂ͂��Ȃ蕜�����Ă���A�����Z���̕��X�����S���Đ����ł�����ɂȂ�΂����ȂƎv���܂����B"
	},
	
	"tikusei":{
		"spots": [
		{"id":"1","name":"��3���L�r��","code":"��錧�}���s��965","status":"1","group":"a"},
		{"id":"1a","name":"��3���L�r��","code":"��錧�}���s��965","status":"0","group":"a"},
		{"id":"2","name":"357��������","code":"��錧�}���s����357��������","status":"1","group":"b"},
		{"id":"2a","name":"357��������","code":"��錧�}���s����357��������","status":"0","group":"b"},
		{"id":"3","name":"�֏�x����","code":"��錧�}���s�֖{��1943-1�t�ߓ��H","status":"1","group":"c"},
		{"id":"3a","name":"�֏�x����","code":"��錧�}���s�֖{��1943-1�t�ߓ��H","status":"0","group":"c"},
		{"id":"5","name":"�}���s���a�@","code":"��錧�}���s�ʌ�1658","status":"1","group":"d"},
		{"id":"5a","name":"�}���s���a�@","code":"��錧�}���s�ʌ�1658","status":"0","group":"d"},
		{"id":"6","name":"�}���s���a�@","code":"��錧�}���s�ʌ�1658","status":"1","group":"d"},
		{"id":"7","name":"�}���s���a�@","code":"��錧�}���s�ʌ�1658","status":"1","group":"d"},
		{"id":"8","name":"�}���s������}����","code":"��錧�}���s�C�V����2120-7","status":"1","group":"e"},
		{"id":"8a","name":"�}���s������}����","code":"��錧�}���s�C�V����2120-7","status":"0","group":"e"},
		{"id":"9","name":"�}���s������}����","code":"��錧�}���s�C�V����2120-7","status":"1","group":"e"},
		{"id":"9a","name":"�}���s������}����","code":"��錧�}���s�C�V����2120-7","status":"0","group":"e"},
		{"id":"10","name":"�}���s������}����","code":"��錧�}���s�C�V����2120-7","status":"1","group":"e"},
		{"id":"10a","name":"�}���s������}����","code":"��錧�}���s�C�V����2120-7","status":"0","group":"e"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"���́C8��19���ɒ}���s�ɍs���Ď�ނ����Ă��܂����B�}���s�ł́C�a�@�Ȃǂ̌�������Q���傫�������炵���C����5�K���Ă��������̂�2�K���ĂɂȂ��Ă��܂����B���ɂ���Q���傫���������H�Ȃǂ��Y��ɕܑ�����A�}���s�ł͕������قڊ������Č��ʂ�̐����𑗂��Ă���悤�Ɋ����܂����B"
	},
	
	
	"tukubamirai":{
		"spots": [
		{"id":"1","name":"���΂݂炢�s1","code":"���΂݂炢�s1","status":"1","group":"a"},
		{"id":"2","name":"���΂݂炢�s2","code":"���΂݂炢�s2","status":"1","group":"a"},
		{"id":"3","name":"���΂݂炢�s3","code":"���΂݂炢�s3","status":"1","group":"a"},
		{"id":"4","name":"���΂݂炢�s4","code":"���΂݂炢�s4","status":"1","group":"a"},
		{"id":"5","name":"���΂݂炢�s5","code":"���΂݂炢�s5","status":"1","group":"a"},
		{"id":"6","name":"���΂݂炢�s6","code":"���΂݂炢�s6","status":"1","group":"a"},
		{"id":"7","name":"���΂݂炢�s7","code":"���΂݂炢�s7","status":"1","group":"a"},
		{"id":"8","name":"���΂݂炢�s8","code":"���΂݂炢�s8","status":"1","group":"a"},
		{"id":"9","name":"���΂݂炢�s9","code":"���΂݂炢�s9","status":"1","group":"a"},
		{"id":"10","name":"���΂݂炢�s10","code":"���΂݂炢�s10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"��錧���璡������"}
		],
		"comment":"�����Ƀe�L�X�g"
	},
	
	"tutiura":{
		"spots": [
		{"id":"3","name":"�T�����","code":"��錧�y�Y�s�����P���ڂP�R�|�S�W","status":"1","group":"a"},
		{"id":"7","name":"�T�����","code":"��錧�y�Y�s�����P���ڂP�R�|�S�W","status":"1","group":"a"},
		{"id":"11","name":"�T�����","code":"��錧�y�Y�s�����P���ڂP�R�|�S�W","status":"1","group":"b"},
		{"id":"1","name":"�y�Y�s���y�Y��ꒆ�w�Z","code":"�y�Y�s������3-8","status":"1","group":"a"},
		{"id":"2","name":"���ˏ�����","code":"�y�Y�s���˓�Q����","status":"1","group":"a"},
		{"id":"4","name":"����125�������싴�k","code":"�y�Y�s�����P����","status":"1","group":"a"},
		{"id":"5","name":"�����_��","code":"�^��4����3-6 ","status":"1","group":"a"},
		{"id":"6","name":"�����̈��","code":"�y�Y�s���c1651","status":"1","group":"a"},
		{"id":"8","name":"��������y�Y������c�n�e","code":"�y�Y�s����","status":"1","group":"a"},
		{"id":"9","name":"�����_��","code":"�^��4����3-6 �����_��","status":"1","group":"b"},
		{"id":"10","name":"�T������t��","code":"��錧�y�Y�s����","status":"1","group":"b"},
		{"id":"12","name":"�T������t��","code":"��錧�y�Y�s����","status":"1","group":"b"},
		{"id":"13","name":"�T������t��","code":"��錧�y�Y�s����","status":"1","group":"b"},
		{"id":"14","name":"�T������t��","code":"�����P���� ����ʂ�","status":"1","group":"b"},
		{"id":"15","name":"���� ��������y�Y������c�n�e","code":"�y�Y�s����","status":"1","group":"b"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"���̒n��̐k�Џ󋵂ł����A�n���̕��X�ɓ����̎��ȂǕ����܂������C��͂�A�X�̐l�X�͋����قǋ�J���ꂽ�悤�ł��B���̒n����C�l���l���Ă����ȏ�ɒn�k�̔�Q�͑傫���C�Ĕ������Ƃ��ɗ�Âɍs���ł���悤�S�|����ׂ����Ǝv���܂����B"
	},
	
	"sakuragawa":{
		"spots": [
		{"id":"008","name":"�^�ǂ̗��j�I������","code":"�^��213-1","status":"1","group":"a"},
		{"id":"017","name":"�^�ǂ̗��j�I������","code":"�^��213-1","status":"0","group":"a"},
		{"id":"013","name":"�^�ǂ̌�����","code":"�^��232","status":"1","group":"a"},
		{"id":"016","name":"�^�ǂ̌�����","code":"�^��232","status":"0","group":"a"},
		{"id":"015","name":"�^�ǂ̗��j�I������","code":"�^��189","status":"1","group":"a"},
		{"id":"020","name":"�^�ǂ̗��j�I������","code":"�^��189","status":"0","group":"a"},
		{"id":"009","name":"�^�ǂ̗��j�I������","code":"�^��200","status":"1","group":"a"},
		{"id":"019","name":"�^�ǂ̗��j�I������","code":"�^��200","status":"0","group":"a"},
		{"id":"011","name":"�s��","code":"����L318-3","status":"1","group":"a"},
		{"id":"000","name":"�s��","code":"����L318-3","status":"0","group":"a"},
		{"id":"007","name":"��a�w","code":"���X�n��","status":"1","group":"b"},
		{"id":"001","name":"��a�w","code":"���X�n��","status":"0","group":"b"},
		{"id":"014","name":"���X�n��u���b�N��","code":"���X717","status":"1","group":"b"},
		{"id":"002","name":"���X�n��u���b�N��","code":"���X717","status":"0","group":"b"},
		{"id":"012","name":"�������","code":"�镔667","status":"1","group":"c"},
		{"id":"003","name":"�������","code":"�镔667","status":"0","group":"c"},
		{"id":"006","name":"�������n��Z��","code":"������683","status":"1","group":"d"},
		{"id":"004","name":"�������n��Z��","code":"������683","status":"0","group":"d"},
		{"id":"005","name":"�������n�擹�H","code":"������683","status":"1","group":"d"},
		{"id":"010","name":"�������n�擹�H","code":"������683","status":"0","group":"d"}
		],	
		"data":[
			{"donor":"�l�B�e"},
			{"donor":"��錧���璡������"}
		],
		"comment":"����s�ł͗��j�I�Ȍ�������������Q���󂯂��悤�ł����A�����͂܂��C�����������Ă��Ȃ����̂��w�ǂł����B�����̃u���b�N�Ȃǂ̓|�󂪑��������A�n�k���N�������ۂɂ͓|�󂵂����Ȃ��̂��炷���ɗ����ׂ����Ɗ����܂����B"
	},
	
	"minamisanriku":{
		"spots": [
		{"id":"1","name":"��O����1","code":"��O����1","status":"1","group":"a"},
		{"id":"2","name":"��O����2","code":"��O����2","status":"1","group":"a"},
		{"id":"3","name":"��O����3","code":"��O����3","status":"1","group":"a"},
		{"id":"4","name":"��O����4","code":"��O����4","status":"1","group":"a"},
		{"id":"5","name":"��O����5","code":"��O����5","status":"1","group":"a"},
		{"id":"6","name":"��O����6","code":"��O����6","status":"1","group":"a"},
		{"id":"7","name":"��O����7","code":"��O����7","status":"1","group":"a"},
		{"id":"8","name":"��O����8","code":"��O����8","status":"1","group":"a"},
		{"id":"9","name":"��O����9","code":"��O����9","status":"1","group":"a"},
		{"id":"10","name":"��O����10","code":"��O����10","status":"1","group":"a"},
		{"id":"11","name":"��O����11","code":"��O����11","status":"1","group":"a"},
		{"id":"12","name":"��O����12","code":"��O����12","status":"1","group":"a"},
		{"id":"13","name":"��O����13","code":"��O����13","status":"1","group":"a"},
		{"id":"14","name":"��O����14","code":"��O����14","status":"1","group":"a"},
		{"id":"15","name":"��O����11","code":"��O����11","status":"1","group":"a"},
		{"id":"16","name":"��O����12","code":"��O����12","status":"1","group":"a"},
		{"id":"17","name":"��O����13","code":"��O����13","status":"1","group":"a"},
		{"id":"18","name":"��O����14","code":"��O����14","status":"1","group":"a"},
		{"id":"19","name":"��O����11","code":"��O����11","status":"1","group":"a"},
		{"id":"20","name":"��O����12","code":"��O����12","status":"1","group":"a"},
		{"id":"21","name":"��O����13","code":"��O����13","status":"1","group":"a"},
		{"id":"22","name":"��O����14","code":"��O����14","status":"1","group":"a"},
		{"id":"23","name":"��O����10","code":"��O����10","status":"1","group":"a"},
		{"id":"24","name":"��O����11","code":"��O����11","status":"1","group":"a"},
		{"id":"25","name":"��O����12","code":"��O����12","status":"1","group":"a"},
		{"id":"26","name":"��O����13","code":"��O����13","status":"1","group":"a"},
		{"id":"27","name":"��O����14","code":"��O����14","status":"1","group":"a"},
		{"id":"28","name":"��O����11","code":"��O����11","status":"1","group":"a"},
		{"id":"29","name":"��O����12","code":"��O����12","status":"1","group":"a"},
		{"id":"30","name":"��O����13","code":"��O����13","status":"1","group":"a"},
		{"id":"31","name":"��O����14","code":"��O����14","status":"1","group":"a"},
		{"id":"32","name":"��O����11","code":"��O����11","status":"1","group":"a"},
		{"id":"33","name":"��O����12","code":"��O����12","status":"1","group":"a"},
		{"id":"34","name":"��O����13","code":"��O����13","status":"1","group":"a"},
		{"id":"35","name":"��O����14","code":"��O����14","status":"1","group":"a"},
		{"id":"36","name":"��O����10","code":"��O����10","status":"1","group":"a"},
		{"id":"37","name":"��O����11","code":"��O����11","status":"1","group":"a"},
		{"id":"38","name":"��O����12","code":"��O����12","status":"1","group":"a"},
		{"id":"39","name":"��O����13","code":"��O����13","status":"1","group":"a"},
		{"id":"40","name":"��O����14","code":"��O����14","status":"1","group":"a"},
		{"id":"41","name":"��O����11","code":"��O����11","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"���R�d�H"}
		],
		"comment":"�����Ƀe�L�X�g"
	},
	
	"sendai":{
		"spots": [
		{"id":"1","name":"���s1","code":"���s1","status":"1","group":"b"},
		{"id":"2","name":"���s2","code":"���s2","status":"1","group":"b"},
		{"id":"3","name":"���s3","code":"���s3","status":"1","group":"b"},
		{"id":"4","name":"���s4","code":"���s4","status":"1","group":"b"},
		{"id":"5","name":"���s5","code":"���s5","status":"1","group":"b"},
		{"id":"6","name":"���s6","code":"���s6","status":"1","group":"b"},
		{"id":"7","name":"���s7","code":"���s7","status":"1","group":"b"},
		{"id":"8","name":"���s8","code":"���s8","status":"1","group":"b"},
		{"id":"9","name":"���s9","code":"���s9","status":"1","group":"b"},
		{"id":"10","name":"���s10","code":"���s10","status":"1","group":"b"},
		{"id":"11","name":"���s11","code":"���s11","status":"1","group":"b"},
		{"id":"12","name":"���s12","code":"���s12","status":"1","group":"b"},
		{"id":"13","name":"���s13","code":"���s13","status":"1","group":"b"},
		{"id":"14","name":"���s14","code":"���s14","status":"1","group":"b"},
		{"id":"15","name":"���s11","code":"���s11","status":"1","group":"b"},
		{"id":"16","name":"���s12","code":"���s12","status":"1","group":"b"},
		{"id":"17","name":"���s13","code":"���s13","status":"1","group":"b"},
		{"id":"18","name":"���s14","code":"���s14","status":"1","group":"b"},
		{"id":"19","name":"���s11","code":"���s11","status":"1","group":"b"},
		{"id":"20","name":"���s12","code":"���s12","status":"1","group":"b"},
		{"id":"21","name":"���s13","code":"���s13","status":"1","group":"b"},
		{"id":"22","name":"���s14","code":"���s14","status":"1","group":"b"},
		{"id":"23","name":"���s10","code":"���s10","status":"1","group":"b"},
		{"id":"24","name":"���s11","code":"���s11","status":"1","group":"b"},
		{"id":"25","name":"���s12","code":"���s12","status":"1","group":"b"},
		{"id":"26","name":"���s13","code":"���s13","status":"1","group":"b"}
		],	
		"data":[
			{"donor":"���R�d�H"}
		],
		"comment":"�����Ƀe�L�X�g"
	},
	
	"kesennuma":{
		"spots": [
		{"id":"1","name":"�C����s1","code":"�C����s1","status":"1","group":"c"},
		{"id":"2","name":"�C����s2","code":"�C����s2","status":"1","group":"c"},
		{"id":"3","name":"�C����s3","code":"�C����s3","status":"1","group":"c"},
		{"id":"4","name":"�C����s4","code":"�C����s4","status":"1","group":"c"},
		{"id":"5","name":"�C����s5","code":"�C����s5","status":"1","group":"c"},
		{"id":"6","name":"�C����s6","code":"�C����s6","status":"1","group":"c"},
		{"id":"7","name":"�C����s7","code":"�C����s7","status":"1","group":"c"},
		{"id":"8","name":"�C����s8","code":"�C����s8","status":"1","group":"c"},
		{"id":"9","name":"�C����s9","code":"�C����s9","status":"1","group":"c"},
		{"id":"10","name":"�C����s10","code":"�C����s10","status":"1","group":"c"},
		{"id":"11","name":"�C����s11","code":"�C����s11","status":"1","group":"c"},
		{"id":"12","name":"�C����s12","code":"�C����s12","status":"1","group":"c"},
		{"id":"13","name":"�C����s13","code":"�C����s13","status":"1","group":"c"},
		{"id":"14","name":"�C����s14","code":"�C����s14","status":"1","group":"c"},
		{"id":"15","name":"�C����s10","code":"�C����s10","status":"1","group":"c"},
		{"id":"16","name":"�C����s11","code":"�C����s11","status":"1","group":"c"},
		{"id":"17","name":"�C����s12","code":"�C����s12","status":"1","group":"c"},
		{"id":"18","name":"�C����s13","code":"�C����s13","status":"1","group":"c"},
		{"id":"19","name":"�C����s14","code":"�C����s14","status":"1","group":"c"},
		{"id":"20","name":"�C����s10","code":"�C����s10","status":"1","group":"c"},
		{"id":"21","name":"�C����s11","code":"�C����s11","status":"1","group":"c"}
		],	
		"data":[
			{"donor":"���R�d�H"}
		],
		"comment":"�����Ƀe�L�X�g"
	}
	
};












////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//				ver.engrish
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/*
enwritehead:Header�����o��
---------------------------------------*/
function enwritehead(){
keyNumber=keyNumber-3;
	document.write('<h1>'+enjson.list[keyNumber].jname+'</h1><br>');
	document.write('<div class="left">');
	if( enjson.list[keyNumber].by != 'none'){
	document.write('<br><div class="face">Reporter�F('+enjson.list[keyNumber].byj+')<table><tr>');
	document.write('<td><img src="img/face/'+enjson.list[keyNumber].by+'.jpg" width="120" height="170" ></td><td>');
		document.write('Image courtesy of�FQuantity '+eval("enjson."+key+".spots.length")+'<br>');
	for(var i=0; i<eval("enjson."+key+".data.length");i++){
		document.write('<li>'+eval("enjson."+key+".data[i].donor")+'</li>');
	}
	document.write('</td></tr></table></div>');}
	document.write('</div><div class="right"><img src="img/photo/'+enjson.list[keyNumber].name+'/'+enjson.list[keyNumber].name+'.jpg"/></div>');
	$("title").text(enjson.list[keyNumber].jname + "-Photo:Think about the Earthquake Disaster");
}

/*
enwriteImggrid:�摜Grid���o��
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
	document.write('<a class="fancy" data-fancybox-type="image" data-fancybox-group="'+spot.group+'" href="img/photo/'+enjson.list[keyNumber].name+'/'+spot.id+'.jpg" title="'+spot.code+'�@'+spot.name+' '+status+'">');
	document.write('<div class="photgrid">');
	document.write('<div class="cap">');
	document.write('<img src="img/photo/'+enjson.list[keyNumber].name+'/' + spot.id + '.jpg" width="239" height="210"/>');
	document.write('<span class="status'+spot.status+'">'+status+'</span>');
	document.write('</div><p>'+spot.name+'</p>');
	document.write('</div></a>');
	}

}

/*
enwritelist:�s�������X�g���o��
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
		document.write('Reporters�F'+enjson.list[i].byj+'�@');
		}
		document.write('Pictures �F'+eval("enjson."+enjson.list[i].name+".spots.length")+'</div>');
		document.write('</div>');
		document.write('</a><hr>');
		count_img = count_img + eval("enjson."+enjson.list[i].name+".spots.length");
	}
	document.getElementById('imgcounter').innerHTML= 'Total number of images �F'+count_img;
	document.getElementById('imgcontent').innerHTML= 'Regions �F'+json.list.length;
}




var enjson = 
{
	"list":
		[
		
		{"jname":"Inashiki�@City","name":"inasiki","by":"1_kamihara","byj":"Takumi.K."},
		{"jname":"Ibaraki�@Town","name":"ibarakimati","by":"2_suzuki","byj":"Yumi.S."},
		{"jname":"Oarai�@Town","name":"oarai","by":"3_kobayashi","byj":"Masaki.K."},
		{"jname":"Kasama�@�@City","name":"kasama","by":"2_suzuki","byj":"Yumi.S."},
		{"jname":"Kasumigaura�@City","name":"kasumigaura","by":"2_suzuki","byj":"Yumi.S."},
		{"jname":"Kitaibaraki�@�@City","name":"kitaibaraki","by":"1_minami","byj":"Kaori.M."},
		{"jname":"Sakuragawa�@City","name":"sakuragawa","by":"1_kobayashi","byj":"Masamune.K."},
		{"jname":"Shimotsuma�@City","name":"simotuma","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"Joso�@City","name":"jyoso","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"Shirosato�@Town","name":"shirosato","by":"1_kobayashi","byj":"Masamune.K."},
		{"jname":"Takahagi�@City","name":"takahagi","by":"1_minami","byj":"Kaori.M."},
		{"jname":"Chikusei�@City","name":"tikusei","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"Tsuchiura�@City","name":"tutiura","by":"1_kamihara","byj":"Takumi.K."},
		{"jname":"Bando�@City","name":"bandou","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"Hitachi�@City","name":"hitati","by":"1_suzuki","byj":"Kyouka.S."},
		{"jname":"Hitachiota�@City","name":"hitachioota","by":"1_minami","byj":"Kaori.M."},
		{"jname":"Hitachi Omiya�@City","name":"hitatioomiya","by":"1_minami","byj":"Kaori.M."},
		{"jname":"Hitachinaka�@City","name":"hitachinaka","by":"1_kobayashi","byj":"Masamune.K."},
		{"jname":"Hokota�@City","name":"hokota","by":"1_kobayashi","byj":"Masamune.K."},
		{"jname":"Mito�@City","name":"mito","by":"2_suzuki","byj":"Yumi.S."},
		
		{"jname":"Ami�@Town","name":"ami","by":"none","byj":"none"},
		{"jname":"Kashima�@City","name":"kasima","by":"none","byj":"none"},
		{"jname":"Kawauti�@Town","name":"kawauti","by":"none","byj":"none"},
		{"jname":"Tukubamirai�@City","name":"tukubamirai","by":"none","byj":"none"},
		{"jname":"Namegata�@City","name":"namegata","by":"none","byj":"none"},	
		{"jname":"Moriya�@City","name":"moriya","by":"none","byj":"none"}
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
		{"id":"1","name":"Ami�@Town�@1","code":"Ami�@Town�@1","status":"1","group":"a"},
		{"id":"2","name":"Ami�@Town�@2","code":"Ami�@Town�@2","status":"1","group":"a"},
		{"id":"3","name":"Ami�@Town�@3","code":"Ami�@Town�@3","status":"1","group":"a"},
		{"id":"4","name":"Ami�@Town�@4","code":"Ami�@Town�@4","status":"1","group":"a"},
		{"id":"5","name":"Ami�@Town�@5","code":"Ami�@Town�@5","status":"1","group":"a"},
		{"id":"6","name":"Ami�@Town�@6","code":"Ami�@Town�@6","status":"1","group":"a"},
		{"id":"7","name":"Ami�@Town�@7","code":"Ami�@Town�@7","status":"1","group":"a"},
		{"id":"8","name":"Ami�@Town�@8","code":"Ami�@Town�@8","status":"1","group":"a"},
		{"id":"9","name":"Ami�@Town�@9","code":"Ami�@Town�@9","status":"1","group":"a"}
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
		{"id":"1","name":"Kawachi�@1","code":"Kawachi�@1","status":"1","group":"a"},
		{"id":"2","name":"Kawachi�@2","code":"Kawachi�@2","status":"1","group":"a"},
		{"id":"3","name":"Kawachi�@3","code":"Kawachi�@3","status":"1","group":"a"},
		{"id":"4","name":"Kawachi�@4","code":"Kawachi�@4","status":"1","group":"a"},
		{"id":"5","name":"Kawachi�@5","code":"Kawachi�@5","status":"1","group":"a"},
		{"id":"6","name":"Kawachi�@6","code":"Kawachi�@6","status":"1","group":"a"},
		{"id":"7","name":"Kawachi�@7","code":"Kawachi�@7","status":"1","group":"a"},
		{"id":"8","name":"Kawachi�@8","code":"Kawachi�@8","status":"1","group":"a"},
		{"id":"9","name":"Kawachi�@9","code":"Kawachi�@9","status":"1","group":"a"}
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
		{"id":"1","name":"Moriya�@City�@1","code":"Moriya�@City�@1","status":"1","group":"a"},
		{"id":"2","name":"Moriya�@City�@2","code":"Moriya�@City�@2","status":"1","group":"a"},
		{"id":"3","name":"Moriya�@City�@3","code":"Moriya�@City�@3","status":"1","group":"a"},
		{"id":"4","name":"Moriya�@City�@4","code":"Moriya�@City�@4","status":"1","group":"a"},
		{"id":"5","name":"Moriya�@City�@5","code":"Moriya�@City�@5","status":"1","group":"a"},
		{"id":"6","name":"Moriya�@City�@6","code":"Moriya�@City�@6","status":"1","group":"a"},
		{"id":"7","name":"Moriya�@City�@7","code":"Moriya�@City�@7","status":"1","group":"a"},
		{"id":"8","name":"Moriya�@City�@8","code":"Moriya�@City�@8","status":"1","group":"a"},
		{"id":"9","name":"Moriya�@City�@9","code":"Moriya�@City�@9","status":"1","group":"a"},
		{"id":"10","name":"Moriya�@City�@10","code":"Moriya�@City�@10","status":"1","group":"a"}
		],	
		"data":[
			{"donor":"General Affairs Division Office of Education, Ibaraki"}
		]
	},
	
	"namegata":{
		"spots": [
		{"id":"1","name":"Namegata City�@1","code":"Namegata City 1","status":"1","group":"a"},
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
			{"donor":"Town hall�@Shirosato"},
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

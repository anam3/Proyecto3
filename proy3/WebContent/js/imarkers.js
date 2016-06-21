/**
 * Icon in markers
 */
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
google.maps.event.addDomListener(window, 'load', 
function(){
	var directionsRerenderOptions = {
			markerOptions:{
			icon: new google.maps.MarkerImage("img/Oil-Barrel-icon.png")
	
			}};
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setOptions(directionsRerenderOptions);
	map=new google.maps.Map(document.getElementById('div_map'),{
		zoom:5,
		center: new google.maps.LatLng(24, -102),
		mapTypeId:google.maps.MapTypeId.ROADMAP
	});
	directionsDisplay.setMap(map);


	//Ciudad de Mexico
	var infoWindow = new google.maps.InfoWindow;
		    var onMarkerMouseOver = function() {
		      var latLng = this.getPosition();
		      infoWindow.setContent('<h3>Mexico City</h3><img src="img/ciudadMexico.png"/><br/><br/>Latitude= ' +
		          latLng.lat() + '<br>Longitude= ' + latLng.lng()+'<br><br>'+
		          "<a href='http://cdmx.gob.mx/'>Link of site Ciudad de Mexico</a>");
		      infoWindow.open(map, this);
		    };
		    google.maps.event.addListener(map, 'mouseout', function() {
		      infoWindow.close();
		    });



	var mkr1 = new google.maps.Marker({
					draggable: true,
					icon : "img/mexico.jpg",
					
					position:{lat: 19.4978, lng: -99.1269},
					map: map,
					title: 'Ciudad de Mexico'
					
				});
		    google.maps.event.addListener(mkr1, 'mouseover', onMarkerMouseOver);



	//Monterrey	
	var info1=new google.maps.InfoWindow;
	var clickMarker1= function(){
		var marker= this;
		var latLng= marker.getPosition();
		info1.setContent('<h3>Monterrey </h3><img src="img/gas2.PNG"/>'
				+"<br /><br />"+"Latitude "+latLng.lat()+"<br />Latitude "+latLng.lng()+"<br />"+
				"<a href='http://monterrey.gob.mx/'>Link of site Monterrey</a>");
		info1.open(map, marker);
	};
	
	google.maps.event.addListener(map, 'mouseout',function(){
			info1.close();
	});

	var marker1=new google.maps.Marker({
		map:map,//elemento
		position:{lat: 25.6667, lng: -100.3167},//coordenadas 
	//	icon:iconMarker
	});
	google.maps.event.addListener(marker1,'mouseover',clickMarker1);

	//Tampico
	var infoWindow2 = new google.maps.InfoWindow;
		    var onMarkerMouseOver = function() {
		      var latLng = this.getPosition();
		      infoWindow2.setContent('<h3>Tampico </h3><img src="img/Tamaulipas.jpg"/><br/><br/>Latitude= ' +
		          latLng.lat() + '<br>Longitude= ' + latLng.lng()+"<br/><br/>"+"<a href='http://tampico.gob.mx/'</a>Link of site Tampico");
		      infoWindow2.open(map, this);
		    };
		    google.maps.event.addListener(map, 'mouseout', function() {
		      infoWindow2.close();
		    });
			

		   var mkr = new google.maps.Marker({
					draggable: true,
					icon : "img/pozo.gif",
					
					position:{lat: 22.233104, lng: -97.861099},
					map: map,
					title: 'Tampico'
					
				});
		    google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);



	
	//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
		
	

	
/* VERACRUZ*/
var info2=new google.maps.InfoWindow;
var clickMarker2= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info2.setContent('<h3>Veracruz </h3><img src="img/gas2.PNG"/><img src="img/OilWell1.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br><br>"+
			"<a href='http://veracruz.gob.mx/'>Link of site Veracruz</a>");
	info2.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info2.close();
});

//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
	
var marker2=new google.maps.Marker({
	map:map,
	position:new google.maps.LatLng(19.1738,  -96.1342),
	//icon:iconMarker
});
google.maps.event.addListener(marker2,'mouseover',clickMarker2);


var infoWindow3 = new google.maps.InfoWindow;
		    var onMarkerMouseOver = function() {
		      var latLng = this.getPosition();
		      infoWindow3.setContent('<h3>Campeche </h3><img src="img/Campeche.jpg"/>'+"<br /><br />"+'Latitude= ' +
		          latLng.lat() + '<br>Longitude= ' + latLng.lng()+"<br><br>"+"<a href='http://campeche.gob.mx/'</a>Link of site Campeche");
		      infoWindow3.open(map, this);
		    };
		    google.maps.event.addListener(map, 'mouseout', function() {
		      infoWindow3.close();
		    });
			

		   var mkr = new google.maps.Marker({
					draggable: true,
					icon : "img/pozo.gif", 
					
					position:{lat: 18.6513, lng: -91.7910},
					map: map,
										
				});
		    google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);


//Durango 
var info4=new google.maps.InfoWindow;
var clickMarker4= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info4.setContent('<h3>Durango</h3><img src="img/OilWell3.png"/><img src="img/gas2.PNG"/>'+"<br /><br />"
			+'Latitude= ' +
		          latLng.lat() + '<br>Longitude= ' + latLng.lng()+"<br /><br />"+
			"<a href='http://durango.gob.mx//'>Link of site Durango</a>");
	info4.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info4.close();
});

var marker4 = new google.maps.Marker({
	map:map,//elemento
	position:{lat: 24.0277 , lng: -104.6532},
	
});
google.maps.event.addListener(marker4,'mouseover',clickMarker4);


//hermosillo
var infoWindow5 = new google.maps.InfoWindow;
		    var onMarkerMouseOver = function() {
		      var latLng = this.getPosition();
		      infoWindow5.setContent('<h3>Hermosillo </h3><img src="img/gas2.PNG"/>'+"<br /><br />"+'Latitude= ' +
		          latLng.lat() + '<br>Longitude= ' + latLng.lng()+"<br><br>"+"<a href='http://hermosillo.gob.mx/'</a>Link of site Hermosillo");
		      infoWindow5.open(map, this);
		    };
		    google.maps.event.addListener(map, 'mouseout', function() {
		      infoWindow5.close();
		    });
			

		   var mkr = new google.maps.Marker({
					draggable: true,
					icon : "img/gas2.PNG", 
					
					position:{lat: 29.0730 , lng: -110.9559 },
					map: map,
										
				});
		    google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);


/*TAMPICO*/

/*var info3=new google.maps.InfoWindow;
var clickMarker3= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info3.setContent('<h3>Tampico </h3><img src="img/gas2.PNG"/><img src="img/OilWell1.png"/>'+"<br /><br />"
			+"latitude "+latLng+
			"<a href='http://tampico.gob.mx/'>Link of site Tampico</a>");
	info3.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info3.close();
});

//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
	
var marker3=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(22.1667, -97.6333),
	//icon:iconMarker
});
google.maps.event.addListener(marker3,'mouseover',clickMarker3);*/

/*San Luis Potosi*/
var info6=new google.maps.InfoWindow;
var clickMarker6= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info6.setContent('<h3>San Luis Potosì</h3><img src="img/OilWell1.png"/><img src="img/gas2.PNG"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://sanluispotosi.gob.mx//'>Link of site San Luis Potosi</a>");
	info6.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info6.close();
});

var marker6=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(22.2021, -101.0542),
	
});
google.maps.event.addListener(marker6,'mouseover',clickMarker6);

/*Aguascalientes*/
var info7=new google.maps.InfoWindow;
var clickMarker7= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info7.setContent('<h3>Aguascalientes</h3><img src="img/OilWell1.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://aguascalientes.gob.mx//'>Link of site Aguascalientes</a>");
	info7.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info7.close();
});

var marker7=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(21.8833,  -102.283),
	
});
google.maps.event.addListener(marker7,'mouseover',clickMarker7);


/*Zacatecas*/

var info8=new google.maps.InfoWindow;
var clickMarker8= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info8.setContent('<h3>Zacatecas</h3><img src="img/OilWell1.png"/><img src="img/gas2.PNG"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://zacatecas.gob.mx//'>Link of site Zacatecas</a>");
	info8.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info8.close();
});

var marker8=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(22.7709, -102.5833),
	
});
google.maps.event.addListener(marker8,'mouseover',clickMarker8);


//ciudad victoria
var info9=new google.maps.InfoWindow;
	var clickMarker9= function(){
		var marker= this;
		var latLng= marker.getPosition();
		info9.setContent('<h3>Ciudad Victoria </h3><img src="img/gas2.PNG"/><img src="img/OilWell1.png"/>'
				+"<br /><br />"+"Latitude "+latLng.lat()+"<br />Latitude "+latLng.lng()+"<br /><br />"+
				"<a href='http://ciudadVictoria.gob.mx/'>Link of site Ciudad Victoria</a>");
		info9.open(map, marker);
	};
	
	google.maps.event.addListener(map, 'mouseout',function(){
			info9.close();
	});

	var marker9=new google.maps.Marker({
		map:map,//elemento
		position:{lat: 23.7369, lng: -99.141},//coordenadas 
	//	icon:iconMarker
	});
	google.maps.event.addListener(marker9,'mouseover',clickMarker9);

	//Matamros
  var info10=new google.maps.InfoWindow;
	var clickMarker10= function(){
		var marker= this;
		var latLng= marker.getPosition();
		info10.setContent('<h3>Matarmoros </h3><img src="img/gas2.PNG"/><img src="img/OilWell1.png"/>'
				+"<br /><br />"+"Latitude "+latLng.lat()+"<br />Latitude "+latLng.lng()+"<br /><br />"+
				"<a href='http://monterrey.gob.mx/'>Link of site Matamoros</a>");
		info10.open(map, marker);
	};
	
	google.maps.event.addListener(map, 'mouseout',function(){
			info10.close();
	});

	var marker10=new google.maps.Marker({
		map:map,//elemento
		position:{lat: 25.8690, lng: -97.5027},//coordenadas 
	//	icon:iconMarker
	});
	google.maps.event.addListener(marker10,'mouseover',clickMarker10);



	//Acapulco
	var info11=new google.maps.InfoWindow;
	var clickMarker11= function(){
		var marker= this;
		var latLng= marker.getPosition();
		info11.setContent('<h3>Acapulco </h3><img src="img/gas2.PNG"/><img src="img/OilWell1.png"/>'
				+"<br /><br />"+"Latitude "+latLng.lat()+"<br />Latitude "+latLng.lng()+"<br /><br />"+
				"<a href='http://acapulco.gob.mx/'>Link of site Acapulco</a>");
		info11.open(map, marker);
	};
	
	google.maps.event.addListener(map, 'mouseout',function(){
			info11.close();
	});

	var marker11=new google.maps.Marker({
		map:map,//elemento
		position:{lat: 16.8636 , lng: -99.8825},//coordenadas 
	//	icon:iconMarker
	});
	google.maps.event.addListener(marker11,'mouseover',clickMarker11);


	//Guadalajara
	var infoWindow12 = new google.maps.InfoWindow;
		    var onMarkerMouseOver = function() {
		      var latLng = this.getPosition();
		      infoWindow12.setContent('<h3>Guadalajara </h3><img src="img/Guadalajara.jpg"/><br/><br/>Latitude= ' +
		          latLng.lat() + '<br>Longitude= ' + latLng.lng()+"<br/><br/>"+"<a href='http://guadalajara.gob.mx/'</a>Link of site Guadalajara");
		      infoWindow12.open(map, this);
		    };
		    google.maps.event.addListener(map, 'mouseout', function() {
		      infoWindow12.close();
		    });
			

		   var mkr = new google.maps.Marker({
					draggable: true,
					icon : "img/pozo.gif",
					
					position:{lat: 20.6597, lng: -103.3496},
					map: map,
					title: 'Tampico'
					
				});
		    google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);


		    //Cancun
		    var info13=new google.maps.InfoWindow;
	var clickMarker13= function(){
		var marker= this;
		var latLng= marker.getPosition();
		info13.setContent('<h3>Cancú </h3><img src="img/gas2.PNG"/><img src="img/OilWell1.png"/>'
				+"<br /><br />"+"Latitude "+latLng.lat()+"<br />Latitude "+latLng.lng()+"<br /><br />"+
				"<a href='http://cancun.gob.mx/'>Link of site Cancún</a>");
		info13.open(map, marker);
	};
	
	google.maps.event.addListener(map, 'mouseout',function(){
			info13.close();
	});

	var marker13=new google.maps.Marker({
		map:map,//elemento
		position:{lat: 21.1619, lng: -86.8515},//coordenadas 
	//	icon:iconMarker
	});
	google.maps.event.addListener(marker13,'mouseover',clickMarker13);


});/*Aqui se termina los marcadores*/

var rob;
  
  function handleDirectionsResponse(start, half, directionsResult){
	directionsDisplay.setDirections(directionsResult);
	var routes = directionsResult.routes;
	for(var i=0; i<routes.length; i++){
		var totalDistance = 0;
		var legs = routes[i].legs;
		for(j=0; j<legs.length; j++){
			totalDistance += legs[j].distance.value;
		}
		document.getElementById("distance").innerHTML= Math.round(totalDistance/1000);
		var mon=((totalDistance/1000)/730)/0.1;


		//Robots necesarios 
		if ((totalDistance/1000) <=403.2 ){
			rob = 1;
					
		}if ((totalDistance/1000) >403.2 && (totalDistance/1000)<=806.4){
			rob = 2; 
					
		}if ((totalDistance/1000) >806.4 && (totalDistance/1000)<=1209.6){
			rob = 3;
			
		}if ((totalDistance/1000) >1209.6 && (totalDistance/1000)<=1612.8){
			rob = 4;
			
		}if ((totalDistance/1000) >1612.8 && (totalDistance/1000)<=2016){
			rob = 5;
			
		}
		
		document.getElementById("rob").innerHTML= rob;
		document.getElementById("distance").innerHTML=Math.round(totalDistance/1000);
		document.getElementById("meses").innerHTML= mon.toFixed(2)/rob;
		
		
	}
  }

  function calcRoute(){
	var start = document.getElementById("start").value;
	/*var half = document.getElementById("half").value;*/
	var half = document.getElementById("half").value;

	var request = { origin: start, /*destination: half, origin: half,*/ destination: half,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(directionsResult, status){
		if(status==google.maps.DirectionsStatus.OK){
			handleDirectionsResponse(
					start, /*half,*/ half,  directionsResult);
		}
	});
	
  }


//Segunda distancia
var rob;
  
 function handleDirectionsResponsefirst(half, end, directionsResult){
	directionsDisplay.setDirections(directionsResult);
	var routes = directionsResult.routes;
	for(var i=0; i<routes.length; i++){
		var totalDistance = 0;
		var legs = routes[i].legs;
		for(j=0; j<legs.length; j++){
			totalDistance += legs[j].distance.value;
		}
		document.getElementById("distance2").innerHTML= Math.round(totalDistance/1000);
		var mon=((totalDistance/1000)/730)/0.1;


		if ((totalDistance/1000) <=403.2 ){
			rob = 1;
					
		}if ((totalDistance/1000) >403.2 && (totalDistance/1000)<=806.4){
			rob = 2; 
					
		}if ((totalDistance/1000) >806.4 && (totalDistance/1000)<=1209.6){
			rob = 3;
			
		}if ((totalDistance/1000) >1209.6 && (totalDistance/1000)<=1612.8){
			rob = 4;
			
		}if ((totalDistance/1000) >1612.8 && (totalDistance/1000)<=2016){
			rob = 5;
			
		}
				
		document.getElementById("rob1").innerHTML= rob;
		document.getElementById("distance2").innerHTML=Math.round(totalDistance/1000);
		document.getElementById("meses1").innerHTML= mon.toFixed(2)/rob;
		
	}
  }
//segundo

function calcRoute1(){
	var half = document.getElementById("half").value;
	/*var half = document.getElementById("half").value;*/
	var end = document.getElementById("end").value;

	var request = { origin: half, /*destination: half, origin: half,*/ destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(directionsResult, status){
		if(status==google.maps.DirectionsStatus.OK){
			handleDirectionsResponsefirst(
					half, /*half,*/ end,  directionsResult);
		}
	});
	
  }




 

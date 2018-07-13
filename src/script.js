/**
 * Author: Miguel Vázquez González [Bonaval Multimedia SL]
 * Web: www.bonaval.com
 * Date: 13/07/2018
 */
function ejecutar() {
	var img = $("#imageFloating");
	var div = $("#miTop");
	posicion_miDiv = $("#miTop").position();
	posicion_miDiv.top;
	posicion_miDiv.left;
	inicio_top = /*posicion_miDiv.top +*/
		(Math.random() * (div.height() - img.height() - 1));
	inicio_left = /*posicion_miDiv.left +*/
		(Math.random() * (div.width() - img.width() - 1));
	//alert(inicio_left_previo + " - " + inicio_left);
	if (inicio_left_previo > inicio_left) {
		img.attr("src", "images/pez-R2L.png");
	} else {
		img.attr("src", "images/pez-L2R.png");
	}
	inicio_left_previo = inicio_left;
	var elemento = $("#imageFloating");
	//.animate( properties [, duration ] [, easing ] [, complete ] )
	$("#imageFloating").animate({
		'top': inicio_top + 'px',
		'left': inicio_left + 'px'
	}, velocidad, "swing", function() {
		ejecutar();
	});
}

$(document).ready(function() {
	posicion = $("#imageFloating").position();
	inicio_top = posicion.top;
	inicio_left = posicion.left;
	inicio_left_previo = inicio_left;
	inicio_top_previo = inicio_top;
	velocidad = 4000;
	ejecutar();

	$("#imageFloating").click(function(event) {
		//window.location.href = "URL";
    });

	/* Change TEXT BG color on every load page */
	var hue = 'rgba(' + (Math.floor((256-199)*Math.random()) + 200) + ','
     + (Math.floor((256-199)*Math.random()) + 200) + ','
     + (Math.floor((256-199)*Math.random()) + 200) + ', 0.4)';
    $("#miDiv").css("background-color", hue); 
    /**/
});

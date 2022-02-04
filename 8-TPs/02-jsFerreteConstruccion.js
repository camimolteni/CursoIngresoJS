/*2.- Camila Molteni DIV I
    TP FERRETE CONSTRUCCION
	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var ancho;
	var largo;
	var perimetro;
	var alambre;
	var mensaje;

	ancho = txtIdAncho.value;
	largo = txtIdLargo.value;

	ancho = parseInt(ancho);
	largo = parseInt(largo);
	perimetro = parseInt(perimetro);

	perimetro = (ancho + largo) * 2;

	alambre = perimetro * 3;

	mensaje = "Usted necesita comprar " + alambre + " metros de alambre";

	alert(mensaje);


}
function Circulo () 
{

	var radio;
	var alambre;
	var perimetro;
	var mensaje;

	radio = txtIdRadio.value;
	radio = parseInt(radio);

	perimetro = radio * 2 * Math.PI;

	alambre = perimetro * 3;

	mensaje = "Usted necesita comprar " + alambre.toFixed(2) + " de alambre";

	alert(mensaje);


	
}
function Materiales () 
{

	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;
	var mensaje;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	area = largo * ancho;
	cemento = area * 2;
	cal = area * 3;

	mensaje = "Usted necesita comprar " + cemento; 
	mensaje += " bolsas de cemento y " + cal + " bolsas de cal.";

	alert(mensaje);


	
	
}
//txtIdLargo
//txtIdAncho
//txtIdRadio
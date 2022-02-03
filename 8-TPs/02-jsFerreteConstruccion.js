/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);
	alambre = parseInt(alambre);

	perimetro = (ancho + largo) * 2;
	alambre = perimetro * 3;


	alert(alambre);

}
function Circulo () 
{

	var radio;
	var diametro;
	var alambre;

	radio = txtIdRadio.value;

	radio = parseInt(radio);
	diametro = parseInt(diametro);
	alambre = parseInt(alambre);

	radio = diametro / 2;
	alambre = radio * 3;


	alert(alambre);
	
}
function Materiales () 
{
	
}
//txtIdLargo
//txtIdAncho
//txtIdRadio
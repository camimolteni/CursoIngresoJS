/*Bienvenidos.
Realizar el algoritmo que pida el ancho y
el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/
function mostrar()
{
	var ancho;
	var largo;
	var perímetro;

	ancho = prompt("Indicar el ancho de un rectángulo");
	largo = prompt("Indicar el largo de un rectángulo");
	perimetro = parseInt(perímetro);

	perimetro = (ancho + largo) * 2;

	mensaje = "El perimetro del rectángulo es "

	alert(mensaje + perimetro);
}

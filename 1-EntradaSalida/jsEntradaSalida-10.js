/*
Camila Molteni DIV I
E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var importeConDescuento;
	var porcentaje;
	var resultado;

	importe = txtIdImporte.value;
	importe = parseInt(importe);
	resultado = parseInt(resultado);
	console.log(importe)

	porcentaje = importe * 0.25;
	importeConDescuento = importe - porcentaje;

	resultado = txtIdResultado.value;
	txtIdResultado.value = importeConDescuento

}


//txtIdImporte
//txtIdResultado
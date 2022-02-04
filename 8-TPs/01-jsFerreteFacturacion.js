/*Camila Molteni DIV I
TP FERRETE 1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	suma = precioUno + precioDos + precioTres;

	alert(suma);
	
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	suma = precioUno + precioDos + precioTres;
	promedio = suma / 3;

	alert(promedio);
	
}
function PrecioFinal () 
{

	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var porcentaje;
	var PrecioFinal;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	
	suma = precioUno + precioDos + precioTres;
	porcentaje = suma * 0.21; 
	PrecioFinal = suma + porcentaje;

	alert(PrecioFinal);
}
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres 
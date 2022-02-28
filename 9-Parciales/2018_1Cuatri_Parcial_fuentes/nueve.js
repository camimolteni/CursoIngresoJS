/*Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por
document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

HECHO EL 27/02 Y ESTA BIEN*/

function mostrar()
{
	var marcaProducto;
	var peso;
	var temperatura;
	var respuesta;
	var cantidadTempPar;
	var producto;
	var marcaMasPesado;
	var productoMasPesado;
	var contadorProductosMenor0;
	var pesoMax;
	var pesoMin;
	var contadorPeso;
	var acumuladorPeso;

	respuesta = true;
	cantidadTempPar = 0;
	contadorProductosMenor0 = 0;
	contadorPeso = 0;
	acumuladorPeso = 0;


	while(respuesta)
	{
		marcaProducto = prompt("Ingrese la marca del producto:");

		while(!marcaProducto)
		{
			marcaProducto = prompt("Ingrese la marca del producto:")
		}

		peso = prompt("Ingrese un peso entre 1 y 100kg");
		peso = parseInt(peso);

		while(isNaN(peso) || peso < 1 || peso > 100)
		{
			peso = prompt("Error, ingrese un peso entre 1 y 100kg");
			peso = parseInt(peso);
		}

		temperatura = prompt("Ingrese la temperatura de almacenamiento: Entre -30 y 30");
		temperatura = parseInt(temperatura);

		while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt("Error, reingrese la temperatura de almacenamiento: Entre -30 y 30");
			temperatura = parseInt(temperatura);
		}


		respuesta = confirm("Desea ingresar mas datos?");


		//a) La cantidad de temperaturas pares.
		if (temperatura % 2 == 0)
		{
			cantidadTempPar++;
		}

		//b) La marca del producto más pesado
		if (!marcaMasPesado || marcaProducto > marcaMasPesado)
		{
			marcaMasPesado = marcaProducto;
		}

		//c) La cantidad de productos que se conservan a menos de 0 grados.
		if (temperatura < 0)
		{
			contadorProductosMenor0++;
		}

		//f) El peso máximo y el mínimo.
		if (!pesoMax || peso > pesoMax)
		{
			pesoMax = peso;
		}
		if (!pesoMin || peso < pesoMin)
		{
			pesoMin = peso;
		}

		//d) El promedio del peso de todos los productos.
		contadorPeso++;
		acumuladorPeso += peso;

	} // fin while general

	document.write("La cantidad de temperaturas pares es: " + cantidadTempPar + "<br>");
	document.write("La marca del producto mas pesado es: " + marcaMasPesado + "<br>");
	document.write("La cantidad de productos conservados a menos de 0 grados: " + contadorProductosMenor0 + "<br>");
	document.write("El promedio del peso de todos los productos es: " + acumuladorPeso / contadorPeso + "<br>");
	document.write("El peso minimo es: " + pesoMin + "<br>");
	document.write("El peso maximo es: " + pesoMax + "<br>");
}

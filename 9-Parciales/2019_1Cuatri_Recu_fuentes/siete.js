/*3.Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “América”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas en total
b- El total sin descuentos a pagar por los gastos de los viajes
c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento, de cuanto fue y el importe final con
Descuento.

NO FUNCIONA*/

function mostrar()
{
	var respuesta;
	var origenVacunas;
	var cantidadVacunas;
	var costoDelVuelo;
	var	acumuladorAsia;
	var acumuladorEuropa;
	var acumuladorAmerica;
	var acumuladorGastosViaje;
	var acumuladorVacunas;
	var descuento;
	var precioConDescuento;

	respuesta = true;
	acumuladorAmerica = 0;
	acumuladorEuropa = 0;
	acumuladorAsia = 0;
	acumuladorGastosViaje = 0;
	acumuladorVacunas = 0;
	descuento = 0;

	while(respuesta = true)
	{
		origenVacunas = prompt("Ingrese el origen del vuelo: Asia, Europa, America").toLowerCase();
		
			while (origenVacunas != "asia" && origenVacunas != "europa" && origenVacunas != "america")
			{
				origenVacunas = prompt("Error, ingrese el origen del vuelo: Asia, Europa, America").toLowerCase();
			}

		cantidadVacunas = prompt("Ingrese la cantidad de vacunas: Entre 500000 y 2500000");
		cantidadVacunas = parseInt(cantidadVacunas);

			while (cantidadVacunas < 500000 || cantidadVacunas > 2500000)
			{
				cantidadVacunas = prompt("Error, ingrese la cantidad de vacunas: Entre 500000 y 2500000");
				cantidadVacunas = parseInt(cantidadVacunas);
			}

		costoDelVuelo = prompt("Ingrese el costo del vuelo: Entre 1 millón y 5 millones de pesos")
		costoDelVuelo = parseInt(costoDelVuelo);

			while (costoDelVuelo == " " || costoDelVuelo <1000000 || costoDelVuelo > 5000000)
			{
				costoDelVuelo = prompt("Error, ingrese el costo del vuelo: Entre 1 millón y 5 millones de pesos")
				costoDelVuelo = parseInt(costoDelVuelo);
			}

	//a- El origen que envió menor cantidad de vacunas en total

		switch (origenVacunas)
		{
			case "asia":
			acumuladorAsia += cantidadVacunas;
			break;

			case "europa":
			acumuladorEuropa += cantidadVacunas;
			break;

			case "america":
			acumuladorAmerica += cantidadVacunas;
			break;
		}

		if (acumuladorAsia < acumuladorEuropa && acumuladorAsia < acumuladorAmerica)
		{
			document.write("El origen que envio menor cantidad de vacunas es Asia <br>");
		}
		else
			if (acumuladorEuropa < acumuladorAmerica)
			{
				document.write("El origen que envio menor cantidad de vacunas es Europa <br>");
			}
			else
			{
				document.write("El origen que envio menor cantidad de vacunas es America <br>");
			}

	//b- El total sin descuentos a pagar por los gastos de los viajes
	acumuladorGastosViaje += costoDelVuelo;

	//c- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%
	acumuladorVacunas += cantidadVacunas;

	if (acumuladorVacunas > 10000000)
	{
		descuento = 0.25;
		document.write("El total a pagar con el 25% de descuento es: " + precioConDescuento + "<br>");
	}
	else
		if (acumuladorVacunas > 5000000 && acumuladorVacunas < 10000000)
		{
			descuento = 0.15;
			document.write("El total a pagar con el 15% de descuento es: " + precioConDescuento + "<br>");
		}
	else
	{
		descuento = 0;
	}
	
	//Si se recibieron entre 5 y 10 millones el descuento es del 15% con menor cantidad no hay descuento.
	//Informar si hubo descuento, de cuanto fue y el importe final con descuento.

	respuesta = confirm ("Desea ingresar mas datos?");
	} //fin del while

	precioConDescuento = acumuladorGastosViaje - (acumuladorGastosViaje * descuento)

	document.write("El total a pagar por los gastos del viaje sin descuento es: " + acumuladorGastosViaje + "<br>");
	document.write("El origen que envio menor cantidad de vacunas es America <br>");

}

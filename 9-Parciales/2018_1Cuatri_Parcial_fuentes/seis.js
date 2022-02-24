/*
Ejercicio 2 HECHO EN DISCORD
24/02

La empresa de cosmetica AVON necesita establecer un sistema 
de premios para las sucursales de  
distintas zonas de Bs As. Para ello, en base a distintas planillas
 que se cargan 
(pueden ser varias planillas para la misma sucursal),
 se ingresan los siguientes datos:
  •	Sucursal (SUR, CABA, COSTA)
  •	Importe de la venta (número positivo NO menor que 5000)

Al terminar de cargar las planillas, se debe calcular el total
de ventas de cada sucursal. 
Si la sucursal logro superar los $2.500.000 en ventas tendra un
premio del 10% que se repartira entre los empleados de la sucursal,
en caso contrario no tendran premio.

Mostrar:

A. Para cada sucursal, el importe total de las ventas,
 cantidad de ventas y premio
 (si corresponde)
B. La sucursal que obtuvo el mayor premio.
*/



function mostrar()
{
	//validacion
	var sucursal;
	var importe;
	var respuesta;

	var acumuladorSur;
	var acumuladorCaba;
	var acumuladorCosta;

	var premio;
	var objetivoVenta;

	var contadorSur;
	var contadorCaba;
	var contadorCosta;

	var premioSur;
	var premioCaba;
	var premioCosta;

	var mayorPremio;

	respuesta = true;

	acumuladorSur = 0;
	acumuladorCaba = 0;
	acumuladorCosta = 0;

	contadorSur = 0;
	contadorCaba = 0;
	contadorCosta = 0;

	premio = 10;

	objetivoVenta = 2500000;

	while(respuesta == true)
	{
		sucursal = prompt("Ingrese la sucursal: SUR , CABA o COSTA");
		
		while(sucursal != "SUR" && sucursal != "CABA" && sucursal != "COSTA")
		{
			sucursal = prompt("Reingrese la sucursal: SUR , CABA o COSTA");
		}

		importe = prompt("Ingrese el importe");
		importe = parseFloat(importe);
		
		while(isNaN(importe) || importe < 5000)
		{
			importe = prompt("Reingrese el importe");
			importe = parseFloat(importe);

		}

		switch(sucursal)
		{
			case "SUR":
				acumuladorSur += importe;
				contadorSur++;
				break;
			case "CABA":
				acumuladorCaba += importe;
				contadorCaba++;
				break;
			default:
				acumuladorCosta += importe;
				contadorCosta++;		
		}
		
		respuesta = confirm("¿Desea ingresar otra sucursal?");

	}
	
	//premio sucursal Sur
	if(acumuladorSur > objetivoVenta)
	{
		premioSur =  acumuladorSur * premio / 100;
	}
	else
	{
		document.write("La sucursal del Sur No cumplio con los objetivos");
	}

	//Premio sucursal CABA
	if(acumuladorCaba > objetivoVenta)
	{
		premioCaba =  acumuladorCaba * premio / 100;
	}
	else
	{
		document.write("La sucursal de Caba No cumplio con los objetivos");
	}

	//Premio Sucursal Costa
	if(acumuladorCosta > objetivoVenta)
	{
		premioCosta =  acumuladorCosta * premio / 100;
	}
	else
	{
		document.write("La sucursal de la Costa No cumplio con los objetivos");
	}

	if(premioSur > premioCaba && premioSur > premioCosta)
	{
		mayorPremio = "La sucusal del Sur gano el premio"; 
	}
	else
	{
		if(premioCaba > premioCosta)
		{
			mayorPremio = "La sucusal de Caba gano el premio"; 
		}
		else
		{
			mayorPremio = "La sucusal de la Costa gano el premio"; 
		}
	}

	document.write("La sucursal del SUR: importe total de ventas: " + acumuladorSur + "<br>");
	document.write("Cantidad de ventas" + contadorSur + "<br>");

}
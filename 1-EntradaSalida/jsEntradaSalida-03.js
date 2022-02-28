/*Camila Molteni DIV I
2.	La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA. 

Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas 
hay):

*Nombre de vendedor (Juan, Pedro o Maria)
*Importe de la venta (numero positivo NO mayor que 10000)

Al terminar de cargar las planillas se debe calcular el total de la comision por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendra una 
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comision sera del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones

*/

function mostrar()
{
	var nombreVendedor;
	var importeVenta;
	var respuesta;
	var contadorVentasJuan;
	var contadorVentasPedro;
	var contadorVentasMaria;
	var comision;
	var acumuladorVentasJuan;
	var acumuladorVentasPedro;
	var acumuladorVentasMaria;
	var comisionJuan;
	var comisionPedro;
	var comisionMaria;
	var vendedorMasComision;


	contadorVentasJuan = 0;
	contadorVentasMaria = 0;
	contadorVentasPedro = 0;
	acumuladorVentasMaria = 0;
	acumuladorVentasPedro = 0;
	acumuladorVentasJuan = 0;
	comision = 0;


	respuesta = true;

	while (respuesta == true)
	{
		nombreVendedor = prompt("Ingrese el nombre del vendedor: Juan, Pedro, Maria");

		while (nombreVendedor != "juan" && nombreVendedor != "pedro" && nombreVendedor != "maria")
			{
				nombreVendedor = prompt("Error, ingrese un nombre valido: Juan, Pedro, Maria");
			}

		importeVenta = prompt("Ingrese el importe de la venta: ");

		while (importeVenta < 0 || importeVenta > 10000)
		{
			importeVenta = prompt("Error, ingrese un importe valido");
		}

	switch(importeVenta) //a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
	{
		case "juan":
		contadorVentasJuan++;
		acumuladorVentasJuan += importeVenta;
		break;

		case "pedro":
		contadorVentasPedro++;
		acumuladorVentasPedro += importeVenta;
		break;

		case "maria":
		contadorVentasMaria++;
		acumuladorVentasMaria += importeVenta;
		break;
	}

	respuesta = confirm("Desea seguir ingresando datos?");

	} // fin while general

	/*Al terminar de cargar las planillas se debe calcular el total de la comision por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendra una 
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comision sera del 5%.*/

	if(acumuladorVentasMaria >= 500000)
	{
		comision = 10
		comisionMaria = acumuladorVentasMaria * comision/100;
	}
	else
	{
		comision = 5
		comisionMaria = acumuladorVentasMaria * comision/100;
	}

	if(acumuladorVentasPedro >= 500000)
	{
		comision = 10;
		comisionPedro = acumuladorVentasPedro * comision/100;
	}
	else
	{
		comision = 5;
		comisionPedro = acumuladorVentasPedro * comision/100;
	}

	if (acumuladorVentasJuan >= 500000)
	{
		comision = 10;
		comisionJuan = acumuladorVentasJuan * comisionJuan/100;
	}
	else
	{
		comision = 5;
		comisionJuan = acumuladorVentasJuan * comisionJuan/100;
	}

	//b. El nombre del vendedor que mas dinero recaudo en comisiones

	if (comisionJuan > comisionPedro && comisionJuan > comisionMaria)
	{
		vendedorMasComision = "Juan";
	}
	else
		if (comisionPedro > comisionMaria)
		{
			vendedorMasComision = "Pedro";
		}
		else
		{
			vendedorMasComision = "Maria";
		}


	document.write("Maria: El importe total de ventas: $" + acumuladorVentasMaria + ", la cantidad: " + contadorVentasMaria + ", y su comision:" + comisionMaria + "<br>");
	document.write("Juan: El importe total de ventas: $" + acumuladorVentasJuan + ", la cantidad: " + contadorVentasJuan + ", y su comision:" + comisionJuan + "<br>");
	document.write("Pedro: El importe total de ventas: $" + acumuladorVentasPedro + ", la cantidad: " + contadorVentasPedro + ", y su comision:" + comisionPedro + "<br>");
	document.write("El vendedor que mas dinero recaudo: " + vendedorMasComision + "<br>");


}

/*
Molteni Camila DIV I
E/S 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
function mostrar()
{
	var nombreIngresado;
	
	nombreDelEmpleado = document.getElementById('txtIdNombre').value;

alert(nombreDelEmpleado);
}
//txtIdNombre*/


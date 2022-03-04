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

ABAJO ESTA EL DE JULI Y COMPAÑERO*/

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

/*LIZZIO JULIETA DIV I
EJERCICIO 2
2.  La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA. 

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

/*function mostrar()
{
  var respuesta;
    var nombre;
    var importe;
    var contadorJuan;
    var contadorPedro;
    var contadorMaria;
    var acumuladorImporteJuan;
    var acumuladorImportePedro;
    var acumuladorImporteMaria;
    var comision; 
    var importeMayor;
    var comisionJuan;
    var comisionPedro;
    var comisionMaria;
    var vendedorConMasDineroEnComisiones;

   
   contadorJuan = 0;
   contadorPedro = 0;
   contadorMaria = 0;
   acumuladorImporteJuan = 0;
   acumuladorImportePedro = 0;
   acumuladorImporteMaria = 0;
   importeMayor = 500000;
   comision = 0;


    respuesta= true;
    while(respuesta == true)
    {
         
        nombre = prompt("Ingrese el nombre del vendedor ");

        while(nombre != "Juan" && nombre != "Pedro" && nombre != "Maria")
        {
          nombre  = prompt("Error.. reingrese el nombre");
        }

      importe = prompt("Ingrese el importe de la venta ");
    importe = parseInt(importe);

        while(isNaN(importe) || importe < 0 || importe > 10000 )
        {
            importe= prompt("Error.. ingrese un importe valido");
            importe= parseInt(importe);
        }

        switch(nombre)
        {
            case "Juan":
            acumuladorImporteJuan += importe;
            contadorJuan++;
            break;
            case "Pedro":
            acumuladorImportePedro += importe;
            contadorPedro++;
            break;
            case "Maria":
            acumuladorImporteMaria += importe;
            contadorMaria++;
            break;
                 
       }//FIN DEL SWITCH 

        respuesta = confirm("Desea continuar?");
    }//FIN DEL WHILE
    
    if (acumuladorImporteJuan > importeMayor )
    {
        comision = 10
        comisionJuan = acumuladorImporteJuan * comision/100;
    }
    else
    {
      comision = 5
      comisionJuan = acumuladorImporteJuan * comision/100;
    } 
       
    if ( acumuladorImportePedro > importeMayor ) 
    {
        comision  = 10 
        comisionPedro = acumuladorImportePedro * comision/100; 
    }
    else
    {
        comision = 5
        comisionPedro = acumuladorImportePedro * comision/100;
    }
    if(acumuladorImporteMaria > importeMayor)
    {
      comision = 10
      comisionMaria = acumuladorImporteMaria * comision/100;

    }
    else
    {
      contador = 5 
      comisionMaria = acumuladorImporteMaria * comision/100;
    }

    if ( comisionJuan > comisionPedro   && comisionJuan  > comisionMaria)
    {
        vendedorConMasDineroEnComisiones = "Juan recuado mas dinero en comisiones"
    }
    else
    {
        if (comisionPedro > comisionMaria ) 
        {
           vendedorConMasDineroEnComisiones = "Pedro racuado mas dinero en comisiones";
        }
        else
        {
            vendedorConMasDineroEnComisiones = "Maria recaudo mas dunero en comisiones";
        }
    }

    

    document.write("Juan: total de ventas: " +acumuladorImporteJuan  + ". Cantidad de ventas: " + contadorJuan + ". comisión: " + comisionJuan + "<br>");
    document.write("Pedro: total de ventas: " +acumuladorImportePedro  + ". Cantidad de ventas: " + contadorPedro + ". comisión: " + comisionPedro + "<br>");
    document.write("Maria: total de ventas: " +acumuladorImporteMaria  + ". Cantidad de ventas: " + contadorMaria + ". comisión: " + comisionMaria + "<br>");
    document.write(vendedorConMasDineroEnComisiones + "<br>");

}//FIN DE LA FUNCION

GONZALO FABIAN MONTERO ARGUIBAY
function mostrar()
{
  var vendedor;
  var importe;
  var respuesta;

  var ventasJuan;
  var contadorJuan;
  var comisionJuan;
  var porcentajeJuan;

  var ventasPedro;
  var contadorPedro;
  var comisionPedro;
  var porcentajePedro;

  var ventasMaria;
  var contadorMaria;
  var comisionMaria;
  var porcentajeMaria;

  importe = 0;
  respuesta = true;
  ventasJuan = 0;
  contadorJuan = 0;
  comisionJuan = 0;
  porcentajeJuan = 0;
  ventasPedro = 0;
  contadorPedro = 0;
  comisionPedro = 0;
  porcentajePedro = 0;
  ventasMaria = 0;
  contadorMaria = 0;
  comisionMaria = 0;
  porcentajeMaria = 0;


  while (respuesta == true) {

    vendedor = prompt ("Ingrese el vendedor: Juan, Pedro o Maria.");
      while(vendedor != "Juan" && vendedor != "Pedro" && vendedor != "Maria") {
                vendedor = prompt("Error... Los vendedores válidos son Juan, Pedro o Maria.");
            }

    importe = prompt ("Ingrese el importe de la venta.");
    importe = parseInt(importe);
      while(isNaN(importe) || importe < 1 || importe > 10000)
        {
                importe = prompt ("Error... reingrese un importe válido entre $1 y $10000.");
                importe = parseInt(importe);
              } 
              
    switch (vendedor) {
    case "Juan":
      contadorJuan++;
      ventasJuan = ventasJuan + importe;
    break;

    case "Pedro":
      contadorPedro++;
      ventasPedro = ventasPedro + importe;
    break;

    case "Maria":
      contadorMaria++;
      ventasMaria = ventasMaria + importe;
    break; 
    }

    respuesta = confirm("¿Desea ingresar otra venta?");
  } //fin del while respuesta


  
  if (ventasJuan >= 500000) {
    porcentajeJuan = 10;
  } else {
    porcentajeJuan = 5;
  }

  if (ventasPedro >= 500000) {
    porcentajePedro = 10;
  } else {
    porcentajePedro = 5;
  }

  if (ventasMaria >= 500000) {
    porcentajeMaria = 10;
  } else {
    porcentajeMaria = 5;
  }
  

  comisionJuan = ventasJuan * porcentajeJuan / 100;
  comisionPedro = ventasPedro * porcentajePedro / 100;
  comisionMaria = ventasMaria * porcentajeMaria / 100;

  
  if (comisionJuan > comisionPedro && comisionJuan > comisionMaria) {
    maximaComision = "Juan";
  } else {
      if (comisionPedro > comisionJuan && comisionPedro > comisionMaria) {
        maximaComision = "Pedro";
      } else {
        maximaComision = "Maria";
      }
  }

  document.write("Juan vendió un total de: $" + ventasJuan + ", realizó un total de " + contadorJuan + " ventas y recibió por comisión un total de: $" + comisionJuan + " .<br>");
  document.write("Pedro vendió un total de: $" + ventasPedro + ", realizó un total de " + contadorPedro + " ventas y recibió por comisión un total de: $" + comisionPedro + " .<br>");
  document.write("Maria vendió un total de: $" + ventasMaria + ", realizó un total de " + contadorMaria + " ventas y recibió por comisión un total de: $" + comisionMaria + " .<br>");
  if (maximaComision == "Maria") {
  document.write("La vendedora con mayor comisión es "+ maximaComision + ".<br>");
  } else {
  document.write("El vendedor con mayor comisión es "+ maximaComision + ".<br>");
  }
  
}//

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


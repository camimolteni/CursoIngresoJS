/* HISOPADO
 El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-Nacionalidad ("argentina", "extranjero")
-Resultado ("positivo", "negativo")
-Edad (entre 18 y 65)
-Cepa("Delta", "Alfa", "Beta", "Ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a-Porcentaje de positivos 
b-Porcentaje de negativos
c-Cuál es la cepa menos encontrada
d-Edad del menor argentino contagiado
e-Cantidad de personas extranjeras contagiadas con la delta

HECHO AYER, DA BIEN*/

function mostrar()
{
	var control;
	var nacionalidad;
	var resultado;
	var edad;
	var cepa;
	var contadorPositivos;
	var contadorNegativos;
	var porcentajePositivos;
	var porcentajeNegativos;
	var contadorDelta;
	var contadorAlfa;
	var contadorBeta;
	var contadorNinguna;
	var cepaMenosEncontrada;
	var banderaCepaMenosEncontrada;
	var edadMinimaArgentino;
	var banderaEdadMinimaArg;
	var contadorArgentina;
	var contadorExtranjeroDelta;
	var contadorCepas;


	control = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorDelta = 0;
	contadorAlfa = 0;
	contadorBeta = 0;
	contadorNinguna = 0; 
	banderaCepaMenosEncontrada = false;
	banderaEdadMinimaArg = 0;
	contadorArgentina = 0;
	contadorExtranjeroDelta = 0;

	while(control <3)
	{
		nacionalidad = prompt("Ingrese la nacionalidad: argentina o extranjero").toLowerCase();

		while(nacionalidad != "argentina" && nacionalidad != "extranjero")
		{
			nacionalidad = prompt("Reingrese la nacionalidad: argentina o extranjero").toLowerCase();
		}

		resultado = prompt("Ingrese el resultado: positivo o negativo").toLowerCase();

		while(resultado != "positivo" && resultado != "negativo")
		{
			resultado = prompt("Reingrese el resultado: positivo o negativo").toLowerCase();
		}

		if(resultado == "negativo")
		{
			cepa = "ninguna";
		}

		edad = prompt("Ingrese la edad: Entre 18 y 65 años");
		edad = parseInt(edad);

		while(edad < 18 || edad > 65)
		{
			edad = prompt("Reingrese la edad: Entre 18 y 65 años");
			edad = parseInt(edad);
		}

		cepa = prompt("Ingrese la cepa: Delta, Alfa, Beta").toLowerCase();

		while(cepa != "delta" && cepa != "alfa" && cepa != "beta")
		{
			cepa = prompt("Ingrese la cepa: Delta, Alfa, Beta").toLowerCase();
		}

		//a-Porcentaje de positivos 
		if (resultado == "positivo")
		{
			contadorPositivos++;
			//d-Edad del menor argentino contagiado
			if (nacionalidad == "argentina")
			{
				if (edad < edadMinimaArgentino || banderaCepaMenosEncontrada == false)
				{	
					edadMinimaArgentino = edad;
					banderaCepaMenosEncontrada = true;
				}
			}

		}

		//b-Porcentaje de negativos
		else 
		{
			contadorNegativos++;
		}

		switch(cepa)
		{
			case "delta":
			contadorDelta++;
			//e-Cantidad de personas extranjeras contagiadas con la delta
			if(nacionalidad == "extranjero" && resultado == "positivo")
			{
				contadorExtranjeroDelta++;
			}
			break;

			case "alfa":
			contadorAlfa++;
			break;

			case "beta":
			contadorBeta++;
			break;

			default:
			contadorNinguna++;
			break;
		}
		//c-Cuál es la cepa menos encontrada
		if (contadorBeta < contadorAlfa && contadorBeta < contadorDelta)
		{
			cepaMenosEncontrada = "Beta";
			else
			{
				if (contadorAlfa < contadorDelta)
				{
					cepaMenosEncontrada = "Alfa";
				}
			}
			else
			{
				cepaMenosEncontrada = "Delta";
			}
		}


		
		control++;
	}//fin while general


	porcentajePositivos = (contadorPositivos * 100) / control;
	porcentajeNegativos = (contadorNegativos * 100) / control;


	document.write("El porcentaje de positivos es: " + porcentajePositivos + "<br>");
	document.write("El porcentaje de negativos es: " + porcentajeNegativos + "<br>");
	document.write("La cepa menos encontrada es: " + cepaMenosEncontrada + "<br>");
	document.write("La edad del menor Argentino contagiado es: " + edadMinimaArgentino + "<br>");
	document.write("La cantidad de personas extranjeras contagiadas con la delta es: " + contadorExtranjeroDelta + "<br>");



}



/*Realizar el algoritmo que permita ingresar los datos de una compra de productos
    alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
    Tipo: (validar "Yerba", "Azúcar", "Café").
    Cantidad de bolsas. (más de cero).
    Precio por bolsa (más de cero).
    Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a
    pagar.
    Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
    Se pide mostrar por pantalla:
    a) El importe total a pagar bruto, sin descuento.
    b) El importe total a pagar con descuento (solo si corresponde)
    c) Informar el tipo con más cantidad de bolsas.
    d) El tipo de la compra más barata. (sobre el Bruto sin descuento)

    HECHO EN CLASE REPASO

function mostrar()
{
	var respuesta;
	var tipo;
	var cantidadDeBolsas;
	var precioPorBolsas;
	var acumuladorImporteTotal;
	var porcentaje;
	var acumuladorYerba;
	var acumuladorAzucar;
	var acumuladorCafe;
	var mayorCantidadDeBolsas;
	var importeFinalConDescuento;
	var minimaCompra;
	var banderaMinimaCompra;
	var tipoMinimo;
	var acumuladorCantidadTotal;

 
	respuesta = true;
	acumuladorImporteTotal=0;
	porcentaje=0;
	acumuladorYerba=0;
	acumuladorAzucar=0;
	acumuladorCafe=0;
	banderaMinimaCompra=false;


	while(respuesta == true)
	{
		tipo = prompt("Ingresar tipo de producto: yerba, azucar, cafe");
		while(tipo != "yerba" && tipo != "azucar" && tipo != "cafe")
		{
			tipo = prompt("reingresar tipo de producto: yerba, azucar, cafe");
		}

		cantidadDeBolsas = prompt("Ingresar cantidad de bolsas");
		cantidadDeBolsas = parseInt(cantidadDeBolsas);
		while(cantidadDeBolsas < 1)
		{
			cantidadDeBolsas = prompt("reingresar cantidad de bolsas");
			cantidadDeBolsas = parseInt(cantidadDeBolsas);
		}

		precioPorBolsas = prompt("Ingresar precio por bolsas");
		precioPorBolsas = parseInt(precioPorBolsas);
		while(precioPorBolsas < 1)
		{
			precioPorBolsas = prompt("reingresar precio por bolsas");
			precioPorBolsas = parseInt(precioPorBolsas);
		}

		//a) El importe total a pagar bruto, sin descuento.
		acumuladorImporteTotal += precioPorBolsas * cantidadDeBolsas;

		//c) Informar el tipo con más cantidad de bolsas.
		switch(tipo)
		{
			case "yerba":
				acumuladorYerba+=cantidadDeBolsas;
				break;
			case "azucar":
				acumuladorAzucar+=cantidadDeBolsas;
				break;
			default:
				acumuladorCafe+=cantidadDeBolsas;
				break;
		}

		//d) El tipo de la compra más barata. (sobre el Bruto sin descuento)
		if(acumuladorImporteTotal < minimaCompra || banderaMinimaCompra == false)
		{
			minimaCompra = acumuladorImporteTotal;
			tipoMinimo = tipo;
			banderaMinimaCompra = true;
		}


		respuesta = confirm("¿Desea seguir comprando?");

	}//fin while general

	acumuladorCantidadTotal = acumuladorCafe + acumuladorAzucar + acumuladorYerba;

	//b) El importe total a pagar con descuento (solo si corresponde)
		if(acumuladorCantidadTotal > 10)
		{
			porcentaje = 15;
		}
		else
		{
			if(acumuladorCantidadTotal > 5)
			{
				porcentaje = 10;
			}
		}

		importeFinalConDescuento = acumuladorImporteTotal - acumuladorImporteTotal * porcentaje / 100;

		//c) Informar el tipo con más cantidad de bolsas.
		if(acumuladorYerba > acumuladorAzucar && acumuladorYerba > acumuladorCafe)
		{
			mayorCantidadDeBolsas = "yerba";
		}
		else
		{
			if(acumuladorAzucar > acumuladorCafe)
			{
				mayorCantidadDeBolsas = "azucar";
			}
			else
			{
				mayorCantidadDeBolsas = "cafe";
			}
		}

		document.write("El importe total a pagar bruto, sin descuento: "+acumuladorImporteTotal+ "<br>");

		if(porcentaje > 0)
		{
			document.write("El importe total a pagar con descuento: "+importeFinalConDescuento+ "<br>");
		}

		document.write("el tipo con más cantidad de bolsas: "+mayorCantidadDeBolsas+ "<br>");
		document.write("El tipo de la compra más barata: "+tipoMinimo+" <br>");

}*/



/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos,
 de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.

FUNCIONA, ESTA BIEN HECHO!*/

/*function mostrar()
{

  var control;
  var tipo;
  var precio;
  var cantidadUnidades;
  var marca;
  var capacidad;
  var banderaMinimoSsd;
  var cantidadMinimaSsd;
  var precioMinimoSsd;
  var marcaMinimaSsd;
  var banderaMaximoHdd;
  var capacidadMaximaHdd;
  var precioMaximoHdd;
  var cantidadMaximaHdd;
  var acumuladorHdd;



  control = 0;
  banderaMinimoSsd = false;
  acumuladorHdd = 0;


  while(control<5)
  {
    tipo = prompt("Ingrese el tipo de disco rigido: HDD, SSD, SSDM2").toLowerCase();

    while(tipo != "hdd" && tipo != "ssd" && tipo != "ssdm2")
    {
      tipo = prompt("Reingrese el tipo de disco rigido: hdd, ssd, ssdm2").toLowerCase();
    }

    precio = prompt("Ingrese el precio: Entre $5000 y $18000");
    precio = parseInt(precio);

    while(precio < 5000 || precio > 18000)
    {
      precio = prompt("Reingrese el precio: Entre $5000 y $18000");
      precio = parseInt(precio);
    }

    cantidadUnidades = prompt("Ingrese la cantidad de unidades, hasta 50:");
    cantidadUnidades = parseInt(cantidadUnidades);

    while(cantidadUnidades <1 || cantidadUnidades >50)
    { 
      cantidadUnidades = prompt("Reingrese la cantidad de unidades, hasta 50:");
      cantidadUnidades = parseInt(cantidadUnidades);
    }

    marca = prompt("Ingrese la marca: Seagate, Western Digital, Kingston").toLowerCase();

    while(marca != "seagate" && marca != "western digital" && marca != "kingston")
    {
      marca = prompt("Ingrese la marca: “Seagate”, “Western Digital”, “Kingston").toLowerCase();
    }

    capacidad = prompt("Ingrese la capacidad: 250Gb, 500Gb, 1Tb, 2Tb").toLowerCase();

    while(capacidad != "250gb" && capacidad != "500gb" && capacidad != "1tb" && capacidad != "2tb")
    {
      capacidad = prompt("Reingrese la capacidad: 250Gb, 500Gb, 1Tb, 2Tb").toLowerCase();
    }


    switch(tipo)
    {
    	case "ssd":
    		if (precio < precioMinimoSsd || banderaMinimoSsd == false)
    		{
      			cantidadMinimaSsd = cantidadUnidades;
      			precioMinimoSsd = precio;
      			marcaMinimaSsd = marca;
      			banderaMinimoSsd = true;
      		}
    	break;

    	case "hdd":
    		if (precio > precioMaximoHdd || banderaMaximoHdd == false)
    		{
     			capacidadMaximaHdd = capacidad;
     			precioMaximoHdd = precio;
      			cantidadMaximaHdd = cantidadUnidades;
      			banderaMaximoHdd = true;
      			acumuladorHdd += cantidadUnidades;
    	    }
    	break;
    }


    control++;
  }//fin while
  

  document.write("De los discos SSD mas barato se compraron " + cantidadMinimaSsd + " unidades. Y su marca es " + marcaMinimaSsd + "<br>");
  document.write("De los discos HDD mas caro se compraron" + cantidadMaximaHdd + " unidades. Y su capacidad de almacenamiento es " + capacidadMaximaHdd + "<br>");
  document.write("El total de unidades de los discos HDD es de:" + acumuladorHdd + "<br>");
 

  
}*/